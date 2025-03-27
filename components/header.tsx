"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { Icon } from "@iconify/react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <header className={`w-full sticky top-0 z-40 transition-all duration-200 bg-secondary text-white`}>
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle>Menú de navegación</SheetTitle>
              <SheetDescription>
                Navega a las diferentes secciones del sitio
              </SheetDescription>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium transition-colors hover:text-primary flex items-center gap-2">
                  <Icon icon="mdi:home" className="h-5 w-5" />
                  RFA
                </Link>
                <Link href="/servicios" className="text-lg font-medium transition-colors hover:text-primary">
                  Servicios
                </Link>
                <Link href="/acerca-de-nosotros" className="text-lg font-medium transition-colors hover:text-primary">
                  Acerca de
                </Link>
                <Link href="/actualidad" className="text-lg font-medium transition-colors hover:text-primary">
                  Contenido
                </Link>
                <Link href="/contacto" className="text-lg font-medium transition-colors hover:text-primary">
                  Contacto
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Icon icon="mdi:home" className="h-5 w-5 text-white" />
            <span className="text-xl font-bold">
              <span className="text-primary">[R]</span>FA
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/servicios"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/servicios") ? "text-primary" : ""}`}
          >
            Servicios
          </Link>
          <Link
            href="/acerca-de-nosotros"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/acerca-de-nosotros") ? "text-primary" : ""}`}
          >
            Acerca de
          </Link>
          <Link
            href="/actualidad"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/actualidad") ? "text-primary" : ""}`}
          >
            Contenido
          </Link>
        </nav>
        <div className="flex items-center">
          <Link 
            href="/contacto"
            className="text-sm font-medium bg-primary text-white px-4 py-1.5 rounded-full hover:bg-primary/90 transition-colors"
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  )
}

