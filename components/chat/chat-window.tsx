"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Paperclip, ImageIcon, Mic, Bot } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const AGENTS = [
  { id: "general", name: "General" },
  { id: "coding", name: "Coding Assistant" },
  { id: "analysis", name: "Data Analysis" },
  { id: "creative", name: "Creative Writing" },
]

export function ChatWindow() {
  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState("")
  const [selectedAgent, setSelectedAgent] = useState("general")
  const [isRecording, setIsRecording] = useState(false)

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      agent: selectedAgent,
    }

    setMessages([...messages, userMessage])
    setInput("")
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome to ProtonAI</h1>
            <p className="text-muted-foreground max-w-md">
              Start a conversation by selecting an agent and typing your message below.
            </p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-muted text-foreground rounded-bl-none"
                }`}
              >
                <p>{msg.content}</p>
              </div>
            </div>
          ))
        )}
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

          {/* Message Input */}
          <div className="flex gap-3">
            <div className="flex-1 flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
                className="flex-1"
              />
              <Button variant="ghost" size="icon" title="Attach file">
                <Paperclip className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" title="Upload image">
                <ImageIcon className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                title="Record audio"
                onClick={() => setIsRecording(!isRecording)}
                className={isRecording ? "bg-destructive/20" : ""}
              >
                <Mic className="w-5 h-5" />
              </Button>
            </div>
            <Button onClick={handleSendMessage} disabled={!input.trim()} className="gap-2">
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
