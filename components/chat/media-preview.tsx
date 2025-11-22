"use client"

import { Button } from "@/components/ui/button"
import { X, Download } from "lucide-react"
import Image from "next/image"

interface MediaItem {
  url: string
  filename: string
  type: string
  size: number
}

interface MediaPreviewProps {
  items: MediaItem[]
  onRemove: (url: string) => void
}

export function MediaPreview({ items, onRemove }: MediaPreviewProps) {
  if (items.length === 0) return null

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 bg-muted rounded-lg">
      {items.map((item) => (
        <div key={item.url} className="relative group">
          {item.type.startsWith("image/") ? (
            <div className="relative w-full h-24 bg-muted rounded overflow-hidden">
              <Image
                src={item.url || "/placeholder.svg"}
                alt={item.filename}
                fill
                className="object-cover"
                sizes="100px"
              />
            </div>
          ) : (
            <div className="w-full h-24 bg-secondary rounded flex items-center justify-center text-xs text-center p-2 break-words">
              <span>{item.filename}</span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30 text-white">
                <Download className="w-4 h-4" />
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemove(item.url)}
              className="bg-white/20 hover:bg-white/30 text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
