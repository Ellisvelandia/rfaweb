"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X } from "lucide-react"
import { Icon } from "@iconify/react"

type Message = {
  text: string
  isUser: boolean
  timestamp: Date
}

export default function GroqChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [showPrompt, setShowPrompt] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [hasShownInitialPrompt, setHasShownInitialPrompt] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "¡Hola! Soy el asistente virtual de RFA, especialista en recuperación física y acondicionamiento. ¿En qué puedo ayudarte hoy?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Initial popup that shows once per page load
  useEffect(() => {
    if (!isOpen && !hasShownInitialPrompt) {
      // Show popup after 3 seconds
      const showTimer = setTimeout(() => {
        setShowPrompt(true);
        setHasShownInitialPrompt(true);
      }, 3000);
      
      // Hide popup after 8 seconds (5 seconds of display time)
      const hideTimer = setTimeout(() => {
        setShowPrompt(false);
      }, 8000);
      
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      }
    } else if (isOpen) {
      // Always hide prompt when chat is open
      setShowPrompt(false);
    }
  }, [isOpen, hasShownInitialPrompt]);

  // Force hide popup if not hovering for 2 seconds
  useEffect(() => {
    let hideTimer: NodeJS.Timeout;
    
    if (!isHovering && showPrompt && !isOpen) {
      hideTimer = setTimeout(() => {
        setShowPrompt(false);
      }, 2000);
    }
    
    return () => {
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [isHovering, showPrompt, isOpen]);

  // Handle mouse hover on button to show prompt
  const handleMouseEnter = () => {
    setIsHovering(true);
    // Always show popup on hover regardless of previous state
    if (!isOpen) {
      setShowPrompt(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim() || isLoading) return

    // Add user message
    const userMessage = { text: message, isUser: true, timestamp: new Date() }
    setMessages((prev) => [...prev, userMessage])
    const userQuery = message
    setMessage("")
    setIsLoading(true)

    try {
      // Call our API route that interfaces with Groq
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userQuery }),
      })

      if (!response.ok) {
        throw new Error("API request failed")
      }

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        {
          text: data.response || "Lo siento, no pude procesar tu solicitud. Por favor, intenta de nuevo.",
          isUser: false,
          timestamp: new Date(),
        },
      ])
    } catch (error) {
      console.error("Error sending message to API:", error)

      // Fallback response if API fails
      setMessages((prev) => [
        ...prev,
        {
          text: "Lo siento, estoy teniendo problemas para conectarme. Por favor, intenta de nuevo más tarde o contacta directamente con nuestros especialistas.",
          isUser: false,
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {showPrompt && !isOpen && (
          <div 
            className="mb-3 bg-white rounded-lg shadow-lg p-4 max-w-[200px] animate-fade-in relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white transform rotate-45"></div>
            <p className="text-sm font-medium">¿Necesitas ayuda? ¡Pregúntame!</p>
          </div>
        )}
        <Button
          onClick={() => {
            setIsOpen(true);
            setShowPrompt(false);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="rounded-full h-14 w-14 p-0 bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Abrir chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] shadow-lg border border-gray-200" role="dialog" aria-modal="true" aria-labelledby="chat-title">
          <CardHeader className="bg-primary text-white py-4 flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2" id="chat-title">
              <Icon icon="mdi:robot" width="24" height="24" />
              Asistente RFA
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-primary/90"
              aria-label="Cerrar chat"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 h-[350px] overflow-y-auto bg-white">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${msg.isUser ? "bg-primary text-white" : "bg-muted"}`}>
                    <div className="mb-1">{msg.text}</div>
                    <div className={`text-xs ${msg.isUser ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {formatTime(msg.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "600ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 bg-white border-t">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Escribe tu mensaje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 border-gray-300 focus:border-primary"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className="bg-primary hover:bg-primary/90 text-white"
                disabled={!message.trim() || isLoading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

