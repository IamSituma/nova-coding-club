"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function ImagePopup() {
  const [isOpen, setIsOpen] = useState(false)

  // Open popup when page loads if not shown before
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup")
    if (!hasSeenPopup) {
      setIsOpen(true)
      localStorage.setItem("hasSeenPopup", "true")
    }
  }, [])

  // Close popup on Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative max-w-2xl w-full bg-white rounded-xl overflow-hidden shadow-lg animate-fade-in">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition"
        >
          <X size={24} />
        </button>

        {/* Image */}
        <img
          src="/coding.png"
          alt="Popup"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}
