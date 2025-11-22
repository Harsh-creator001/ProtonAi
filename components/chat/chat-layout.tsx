import type React from "react"
import { Sidebar } from "./sidebar"

interface ChatLayoutProps {
  children: React.ReactNode
}

export function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 lg:ml-64">{children}</main>
    </div>
  )
}
