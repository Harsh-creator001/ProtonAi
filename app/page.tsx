"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate a brief check and redirect to login
    const timer = setTimeout(() => {
      router.push("/auth/login")
    }, 500)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">ProtonAI</h1>
        <p className="text-xl text-gray-300 mb-8">Advanced AI Chat Platform</p>
        {isLoading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}
      </div>
    </div>
  )
}
