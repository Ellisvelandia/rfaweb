import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import './globals.css'
import GroqChatbot from "@/components/groq-chatbot"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RFA - Recuperación Física y Acondicionamiento",
  description: "Centro especializado en recuperación física, entrenamiento, nutrición y rehabilitación física.",
  keywords: "recuperación física, entrenamiento, nutrición, rehabilitación, fisioterapia, deporte, salud",
  authors: [{ name: "RFA" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://rfa.com.co",
    title: "RFA - Recuperación Física y Acondicionamiento",
    description: "Centro especializado en recuperación física, entrenamiento, nutrición y rehabilitación física.",
    siteName: "RFA",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        <GroqChatbot />
        <WhatsAppButton />
      </body>
    </html>
  )
}




