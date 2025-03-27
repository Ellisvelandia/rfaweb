"use client"

import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

export default function WhatsAppButton() {
  const phoneNumber = "+5730000000" // Replace with actual WhatsApp number
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
      <Icon icon="mdi:whatsapp" width="28" height="28" />
    </Button>
  )
}

