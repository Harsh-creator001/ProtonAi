"use client"

import { redirect } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { EnhancedChatWindow } from "@/components/chat/enhanced-chat-window"

export default function ChatPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const supabase = createClient()
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser()

        if (authError || !user) {
          redirect("/auth/login")
        }
        setIsLoading(false)
      } catch (err) {
        console.error("[v0] Auth check failed:", err)
        setError(err instanceof Error ? err.message : "Authentication failed")
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-6 bg-destructive/10 rounded-lg max-w-md">
          <p className="text-destructive font-semibold mb-2">Authentication Error</p>
          <p className="text-sm text-muted-foreground mb-4">{error}</p>
          <a href="/auth/login" className="text-primary hover:underline text-sm">
            Return to Login
          </a>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return <EnhancedChatWindow />
}
