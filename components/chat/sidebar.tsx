"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageSquare, Plus, LogOut, Menu, X, History } from "lucide-react"

interface Conversation {
  id: string
  title: string
  created_at: string
}

export function Sidebar() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
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
        .select("id, title, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(10)

      setConversations(data || [])
    } catch (error) {
      console.error("Error loading conversations:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = "/auth/login"
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 hover:bg-muted rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <Link href="/chat" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <span className="text-sidebar-primary-foreground text-sm">P</span>
            </div>
            <span>ProtonAI</span>
          </Link>
        </div>

        {/* New Chat Button */}
        <div className="p-4 border-b border-sidebar-border space-y-2">
          <Link href="/chat" className="w-full">
            <Button variant="outline" size="sm" className="w-full justify-start gap-2 bg-transparent">
              <Plus size={18} />
              New Chat
            </Button>
          </Link>
          <Link href="/chat/history" className="w-full">
            <Button
              variant={pathname === "/chat/history" ? "default" : "outline"}
              size="sm"
              className="w-full justify-start gap-2"
            >
              <History size={18} />
              History
            </Button>
          </Link>
        </div>

        {/* Conversations List */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {isLoading ? (
            <div className="text-sm text-sidebar-accent-foreground/60">Loading...</div>
          ) : conversations.length === 0 ? (
            <div className="text-sm text-sidebar-accent-foreground/60">No conversations yet</div>
          ) : (
            conversations.map((conv) => (
              <Link
                key={conv.id}
                href={`/chat/${conv.id}`}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  pathname === `/chat/${conv.id}`
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
              >
                <MessageSquare size={16} className="flex-shrink-0" />
                <span className="truncate">{conv.title || "Untitled"}</span>
              </Link>
            ))
          )}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <Button variant="ghost" size="sm" onClick={handleLogout} className="w-full justify-start gap-2">
            <LogOut size={18} />
            Sign Out
          </Button>
        </div>
      </aside>
    </>
  )
}
