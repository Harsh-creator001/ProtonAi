"use client"

import { useEffect, useState } from "react"
import { useParams, redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { EnhancedChatWindow } from "@/components/chat/enhanced-chat-window"

export default function ConversationPage() {
  const params = useParams()
  const conversationId = params?.id as string
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        redirect("/auth/login")
        return
      }

      // Check if user owns this conversation
      const { data } = await supabase
        .from("conversations")
        .select("id")
        .eq("id", conversationId)
        .eq("user_id", user.id)
        .single()

      if (!data) {
        redirect("/chat")
        return
      }

      setIsAuthorized(true)
      setIsLoading(false)
    }

    checkAuth()
  }, [conversationId])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading conversation...</p>
        </div>
      </div>
    )
  }

  if (!isAuthorized) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-destructive">Unauthorized</p>
      </div>
    )
  }

  return <EnhancedChatWindow />
}
