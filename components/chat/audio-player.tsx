"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Download, X } from "lucide-react"

interface AudioPlayerProps {
  url: string
  filename: string
  onRemove?: () => void
}

export function AudioPlayer({ url, filename, onRemove }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateDuration = () => setDuration(audio.duration)
    const updateCurrentTime = () => setCurrentTime(audio.currentTime)

    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("timeupdate", updateCurrentTime)
    audio.addEventListener("ended", () => setIsPlaying(false))

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("timeupdate", updateCurrentTime)
      audio.removeEventListener("ended", () => setIsPlaying(false))
    }
  }, [])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    if (audioRef.current) {
      audioRef.current.currentTime = percent * duration
    }
  }

  return (
    <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
      <audio ref={audioRef} src={url} />

      <Button variant="ghost" size="icon" onClick={togglePlayPause} className="flex-shrink-0">
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>

      <div className="flex-1 space-y-1">
        <p className="text-xs font-medium truncate">{filename}</p>
        <div className="w-full h-1 bg-border rounded-full cursor-pointer" onClick={handleProgressClick}>
          <div
            className="h-full bg-primary rounded-full"
            style={{
              width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%",
            }}
          />
        </div>
      </div>

      <span className="text-xs text-muted-foreground flex-shrink-0">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>

      <a href={url} target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon" className="flex-shrink-0">
          <Download className="w-4 h-4" />
        </Button>
      </a>

      {onRemove && (
        <Button variant="ghost" size="icon" onClick={onRemove} className="flex-shrink-0">
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  )
}
