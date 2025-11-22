import { convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { messages, agent }: { messages: UIMessage[]; agent: string } = body

    const systemPrompts: Record<string, string> = {
      general:
        "You are ProtonAI, a helpful, intelligent AI assistant. Provide clear, concise, and accurate responses. Be friendly and professional.",
      coding:
        "You are an expert coding assistant. Help with programming problems, debug code, explain concepts, and suggest best practices. Provide code examples when appropriate.",
      analysis:
        "You are a data analysis expert. Help users understand data, create visualizations, perform statistical analysis, and provide insights from datasets.",
      creative:
        "You are a creative writing assistant. Help with storytelling, character development, plot ideas, and various writing styles. Be imaginative and inspiring.",
    }

    const systemPrompt = systemPrompts[agent] || systemPrompts.general

    const result = streamText({
      model: "openai/gpt-4-mini",
      system: systemPrompt,
      messages: convertToModelMessages(messages),
      maxTokens: 2000,
      temperature: 0.7,
    })

    return result.toUIMessageStreamResponse()
  } catch (error) {
    console.error("Chat error:", error)
    return new Response("Chat failed", { status: 500 })
  }
}
