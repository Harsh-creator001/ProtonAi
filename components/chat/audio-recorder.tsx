"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mic, Square } from "lucide-react"

interface AudioRecorderProps {
  onAudioRecorded: (file: File) => void
}

export function AudioRecorder({ onAudioRecorded }: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      })

      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        })
        const audioFile = new File([audioBlob], `audio-${Date.now()}.webm`, { type: "audio/webm" })
        onAudioRecorded(audioFile)

        // Stop all tracks
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error("Error accessing microphone:", error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  return (
    <div className="flex gap-2">
      {!isRecording ? (
        <Button variant="outline" size="icon" onClick={startRecording} disabled={isProcessing} title="Start recording">
          <Mic className="w-4 h-4" />
        </Button>
      ) : (
        <Button variant="destructive" size="icon" onClick={stopRecording} title="Stop recording">
          <Square className="w-4 h-4" />
        </Button>
      )}
    </div>
  )
}
