"use client"

import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const phoneNumber = "+573001234567" // Replace with actual WhatsApp number
  const message = "Hola, me gustaría obtener más información sobre los servicios de RFA."

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 rounded-full h-14 w-14 p-0 bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
        <path d="M9 14a5 5 0 0 0 6 0" />
      </svg>
    </Button>
  )
}

