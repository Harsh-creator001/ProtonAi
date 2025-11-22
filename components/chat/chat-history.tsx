"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { MessageSquare, Trash2, Edit2, Check, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface Conversation {
  id: string
  title: string
  agent_type: string
  created_at: string
  updated_at: string
}

export function ChatHistory() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editTitle, setEditTitle] = useState("")
  const supabase = createClient()

  useEffect(() => {
    loadConversations()
  }, [])

  const loadConversations = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return

      const { data } = await supabase
        .from("conversations")
        .select("*")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false })

      setConversations(data || [])
    } catch (error) {
      console.error("Error loading conversations:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await supabase.from("conversations").delete().eq("id", id)
      setConversations(conversations.filter((c) => c.id !== id))
    } catch (error) {
      console.error("Error deleting conversation:", error)
    }
  }

  const handleRename = async (id: string, newTitle: string) => {
    if (!newTitle.trim()) return

    try {
      await supabase.from("conversations").update({ title: newTitle }).eq("id", id)

      setConversations(conversations.map((c) => (c.id === id ? { ...c, title: newTitle } : c)))
      setEditingId(null)
    } catch (error) {
      console.error("Error renaming conversation:", error)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

    if (diffInHours < 24) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    } else if (diffInHours < 168) {
      return `${Math.floor(diffInHours / 24)}d ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  if (isLoading) {
    return <div className="p-4 text-center text-muted-foreground">Loading...</div>
  }

  if (conversations.length === 0) {
    return <div className="p-4 text-center text-muted-foreground">No conversations yet</div>
  }

  return (
    <div className="space-y-3">
      {conversations.map((conv) => (
        <Card key={conv.id} className="p-3">
          {editingId === conv.id ? (
            <div className="flex gap-2">
              <Input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Enter new title"
                autoFocus
              />
              <Button size="sm" variant="ghost" onClick={() => handleRename(conv.id, editTitle)}>
                <Check className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              <Link href={`/chat/${conv.id}`}>
                <div className="flex items-start gap-3 cursor-pointer hover:opacity-70 transition-opacity">
                  <MessageSquare className="w-4 h-4 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{conv.title || "Untitled"}</p>
                    <p className="text-xs text-muted-foreground">
                      {conv.agent_type} • {formatDate(conv.updated_at)}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setEditingId(conv.id)
                    setEditTitle(conv.title)
                  }}
                  className="flex-1"
                >
                  <Edit2 className="w-3 h-3 mr-1" />
                  Rename
                </Button>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive flex-1">
                      <Trash2 className="w-3 h-3 mr-1" />
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Conversation?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. The conversation and all messages will be permanently deleted.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex gap-3">
                      <AlertDialogCancel className="flex-1">Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        className="flex-1 bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        onClick={() => handleDelete(conv.id)}
                      >
                        Delete
                      </AlertDialogAction>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}
