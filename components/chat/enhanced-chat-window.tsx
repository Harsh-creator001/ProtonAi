"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { createClient } from "@/lib/supabase/client"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot, Loader2, Copy } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileUpload } from "./file-upload"
import { MediaPreview } from "./media-preview"
import { AudioRecorder } from "./audio-recorder"
import { AudioPlayer } from "./audio-player"

const AGENTS = [
  { id: "general", name: "General" },
  { id: "coding", name: "Coding Assistant" },
  { id: "analysis", name: "Data Analysis" },
  { id: "creative", name: "Creative Writing" },
]

interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  files?: Array<{ url: string; filename: string; type: string; size: number }>
  images?: Array<{ url: string; filename: string; type: string; size: number }>
  audio?: { url: string; filename: string }
}

export function EnhancedChatWindow() {
  const [selectedAgent, setSelectedAgent] = useState("general")
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [attachedFiles, setAttachedFiles] = useState<any[]>([])
  const [attachedImages, setAttachedImages] = useState<any[]>([])
  const [attachedAudio, setAttachedAudio] = useState<any | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const supabase = createClient()

  const { messages, input, setInput, append, isLoading } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
      fetch: async (url, options) => {
        const agent = selectedAgent
        const body = JSON.parse(options?.body as string)
        return fetch(url, {
          ...options,
          body: JSON.stringify({ ...body, agent }),
        })
      },
    }),
  })

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Create conversation on mount
  useEffect(() => {
    const createConversation = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return

      const { data } = await supabase
        .from("conversations")
        .insert([
          {
            user_id: user.id,
            title: "New Chat",
            agent_type: selectedAgent,
          },
        ])
        .select()
        .single()

      if (data) {
        setConversationId(data.id)
      }
    }

    if (!conversationId) {
      createConversation()
    }
  }, [])

  // Save messages to database
  useEffect(() => {
    const saveMessages = async () => {
      if (!conversationId) return

      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return

      for (const msg of messages) {
        // Check if message already saved
        const { data: existing } = await supabase
          .from("messages")
          .select("id")
          .eq("conversation_id", conversationId)
          .eq("role", msg.role)
          .match({ created_at: msg.createdAt })
          .single()

        if (!existing) {
          await supabase.from("messages").insert([
            {
              conversation_id: conversationId,
              user_id: user.id,
              role: msg.role,
              content: msg.content,
              file_urls: attachedFiles.map((f) => f.url),
              image_urls: attachedImages.map((img) => img.url),
              audio_url: attachedAudio?.url,
            },
          ])
        }
      }
    }

    saveMessages()
  }, [messages, conversationId])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input?.trim?.() && attachedFiles.length === 0 && attachedImages.length === 0 && !attachedAudio) {
      return
    }

    let messageContent = input || ""
    if (attachedFiles.length > 0) {
      messageContent += `\n\nAttached files: ${attachedFiles.map((f) => f.filename).join(", ")}`
    }
    if (attachedImages.length > 0) {
      messageContent += `\n\nAttached images: ${attachedImages.map((img) => img.filename).join(", ")}`
    }
    if (attachedAudio) {
      messageContent += `\n\nAttached audio: ${attachedAudio.filename}`
    }

    await append({
      role: "user",
      content: messageContent,
    })

    // Clear attachments
    setAttachedFiles([])
    setAttachedImages([])
    setAttachedAudio(null)
    setAudioFile(null)
    setInput("")
  }

  const handleAudioRecorded = async (file: File) => {
    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("type", "audio")

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        setAttachedAudio(data)
      }
    } catch (error) {
      console.error("Audio upload failed:", error)
    } finally {
      setIsUploading(false)
    }
  }

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div className="flex flex-col h-full w-full">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome to ProtonAI</h1>
            <p className="text-muted-foreground max-w-md mb-8">
              Start a conversation by selecting an agent and typing your message, or upload files and images for
              analysis.
            </p>

            {/* Quick Start Buttons */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-md">
              {AGENTS.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent.id)}
                  className={`p-3 rounded-lg border transition-colors ${
                    selectedAgent === agent.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary hover:bg-muted"
                  }`}
                >
                  <span className="text-sm font-medium">{agent.name}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs md:max-w-md lg:max-w-lg space-y-2 ${msg.role === "user" ? "" : ""}`}>
                <div
                  className={`px-4 py-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm">{msg.content}</p>
                </div>

                {msg.role === "assistant" && (
                  <div className="flex gap-2 px-2">
                    <Button variant="ghost" size="sm" onClick={() => copyMessage(msg.content)} className="gap-2">
                      <Copy className="w-3 h-3" />
                      Copy
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted text-foreground px-4 py-3 rounded-lg rounded-bl-none flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">Thinking...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-background p-4 md:p-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Agent Selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Agent:</span>
            <Select value={selectedAgent} onValueChange={setSelectedAgent}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {AGENTS.map((agent) => (
                  <SelectItem key={agent.id} value={agent.id}>
                    {agent.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Media Attachments Preview */}
          {(attachedFiles.length > 0 || attachedImages.length > 0 || attachedAudio) && (
            <div className="space-y-3">
              {attachedImages.length > 0 && (
                <MediaPreview
                  items={attachedImages}
                  onRemove={(url) => setAttachedImages(attachedImages.filter((img) => img.url !== url))}
                />
              )}
              {attachedFiles.length > 0 && (
                <MediaPreview
                  items={attachedFiles}
                  onRemove={(url) => setAttachedFiles(attachedFiles.filter((f) => f.url !== url))}
                />
              )}
              {attachedAudio && (
                <AudioPlayer
                  url={attachedAudio.url}
                  filename={attachedAudio.filename}
                  onRemove={() => setAttachedAudio(null)}
                />
              )}
            </div>
          )}

          {/* Message Input Form */}
          <form onSubmit={handleSendMessage} className="flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading || isUploading}
                  className="flex-1"
                />

                {/* File Upload */}
                <div onClick={(e) => e.stopPropagation()}>
                  <FileUpload
                    type="file"
                    onUpload={(file) => setAttachedFiles([...attachedFiles, file])}
                    accept=".pdf,.doc,.docx,.txt,.csv"
                  />
                </div>

                {/* Image Upload */}
                <div onClick={(e) => e.stopPropagation()}>
                  <FileUpload
                    type="image"
                    onUpload={(file) => setAttachedImages([...attachedImages, file])}
                    accept="image/*"
                  />
                </div>

                {/* Audio Recorder */}
                <AudioRecorder onAudioRecorded={handleAudioRecorded} />
              </div>
              <Button
                type="submit"
                disabled={
                  (!input?.trim?.() && attachedFiles.length === 0 && attachedImages.length === 0 && !attachedAudio) ||
                  isLoading ||
                  isUploading
                }
                className="gap-2"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Send</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
