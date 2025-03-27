"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X } from "lucide-react"

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "¡Hola! Soy el asistente virtual de RFA. ¿En qué puedo ayudarte hoy?", isUser: false },
  ])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { text: message, isUser: true }])

    // Simulate response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Gracias por tu mensaje. Un miembro de nuestro equipo se pondrá en contacto contigo pronto. Si necesitas ayuda inmediata, por favor llámanos al +123 456 7890.",
          isUser: false,
        },
      ])
    }, 1000)

    setMessage("")
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 rounded-full h-14 w-14 p-0 bg-primary text-white shadow-lg"
        aria-label="Abrir chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-6 left-6 z-50 w-[350px] sm:w-[400px] shadow-lg">
          <CardHeader className="bg-primary text-white py-4 flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Chat con RFA</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-primary/90"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 h-[300px] overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${msg.isUser ? "bg-primary text-white" : "bg-muted"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Escribe tu mensaje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!message.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

