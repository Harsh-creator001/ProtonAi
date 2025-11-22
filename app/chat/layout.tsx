import type React from "react"
import { ChatLayout } from "@/components/chat/chat-layout"

export default function ChatLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <ChatLayout>{children}</ChatLayout>
}
