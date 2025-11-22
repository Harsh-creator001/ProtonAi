"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

interface PasswordInputProps {
  id: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  autoComplete?: string
}

export function PasswordInput({
  id,
  placeholder = "Enter password",
  value,
  onChange,
  autoComplete,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="auth-input-group">
      <input
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required
        className="auth-input pr-12"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="eye-toggle group"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <EyeOff className="w-5 h-5 group-hover:scale-110 transition-transform" />
        ) : (
          <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  )
}
