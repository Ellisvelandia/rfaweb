"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dumbbell, Utensils, ListChecks, Stethoscope, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

export default function ServiciosPage() {
  const [activeSection, setActiveSection] = useState("programas")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 100)
      
      // Determine active section based on scroll position
      const sections = ["programas", "entrenamiento", "nutricion", "rehabilitacion"]
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            En RFA ofrecemos una amplia gama de servicios especializados en recuperación física y acondicionamiento,
            adaptados a las necesidades específicas de cada paciente.
          </p>
        </div>

        {/* Sticky Service Navigation */}
        <div className={`sticky top-16 z-30 py-3 bg-background ${isScrolled ? 'shadow-md' : ''} mb-8 transition-all duration-200`}>
          <div className="flex justify-between items-center">
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <span className="capitalize">{activeSection}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onSelect={() => scrollToSection("programas")}>
                    Programas
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => scrollToSection("entrenamiento")}>
                    Entrenamiento
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => scrollToSection("nutricion")}>
                    Nutrición
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => scrollToSection("rehabilitacion")}>
                    Rehabilitación Física
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="hidden md:flex space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant={activeSection === "programas" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => scrollToSection("programas")}
                      className="flex items-center gap-2"
                    >
                      <ListChecks className="h-4 w-4" />
                      <span>Programas</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Programas personalizados</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant={activeSection === "entrenamiento" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => scrollToSection("entrenamiento")}
                      className="flex items-center gap-2"
                    >
                      <Dumbbell className="h-4 w-4" />
                      <span>Entrenamiento</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Entrenamiento personalizado</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant={activeSection === "nutricion" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => scrollToSection("nutricion")}
                      className="flex items-center gap-2"
                    >
                      <Utensils className="h-4 w-4" />
                      <span>Nutrición</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Asesoría nutricional</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant={activeSection === "rehabilitacion" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => scrollToSection("rehabilitacion")}
                      className="flex items-center gap-2"
                    >
                      <Stethoscope className="h-4 w-4" />
                      <span>Rehabilitación</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Rehabilitación física</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex-1 md:flex-none">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contacto">Solicitar información</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-12">
          <section id="programas" className="scroll-mt-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="p-2 bg-primary/10 rounded-full inline-flex mb-4">
                  <ListChecks className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">PROGRAMAS</h2>
                <p className="text-muted-foreground mb-4">
                  Los programas son actividades especiales o direccionadas según la necesidad y condición física del
                  paciente. Diseñamos planes personalizados que se adaptan a tus objetivos específicos.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Programas de rehabilitación post-quirúrgica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Programas para adultos mayores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Programas para deportistas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Programas de prevención de lesiones</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                  alt="Programas de rehabilitación"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto object-cover aspect-[5/3]"
                />
              </div>
            </div>
          </section>

          <section id="entrenamiento" className="scroll-mt-16">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <div className="p-2 bg-primary/10 rounded-full inline-flex mb-4">
                  <Dumbbell className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">ENTRENAMIENTO</h2>
                <p className="text-muted-foreground mb-4">
                  Ofrecemos diferentes servicios de entrenamiento, según la necesidad y la condición física del
                  paciente. Nuestros entrenadores personalizados te guiarán en cada paso del camino.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Entrenamiento funcional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Entrenamiento de fuerza</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Entrenamiento cardiovascular</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Entrenamiento específico para deportes</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2070&auto=format&fit=crop"
                  alt="Entrenamiento personalizado"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto object-cover aspect-[5/3]"
                />
              </div>
            </div>
          </section>

          <section id="nutricion" className="scroll-mt-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="p-2 bg-primary/10 rounded-full inline-flex mb-4">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">NUTRICIÓN</h2>
                <p className="text-muted-foreground mb-4">
                  Te damos una serie de consejos que puedes tener en cuenta para llevar una dieta equilibrada. Nuestros
                  especialistas en nutrición te ayudarán a optimizar tu alimentación.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Evaluación nutricional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Planes de alimentación personalizados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Nutrición deportiva</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Educación nutricional</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop"
                  alt="Nutrición deportiva"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto object-cover aspect-[5/3]"
                />
              </div>
            </div>
          </section>

          <section id="rehabilitacion" className="scroll-mt-16">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <div className="p-2 bg-primary/10 rounded-full inline-flex mb-4">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">REHABILITACIÓN FÍSICA</h2>
                <p className="text-muted-foreground mb-4">
                  Se busca el tratamiento o prevención de los agentes físicos o las enfermedades que se desarrollan en
                  la actividad física o deportiva. Nuestro equipo de fisioterapeutas está altamente capacitado para
                  ayudarte en tu recuperación.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Rehabilitación de lesiones deportivas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Terapia manual</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Electroterapia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Rehabilitación neurológica</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                  alt="Rehabilitación Física"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto object-cover aspect-[5/3]"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas más información?</h2>
          <p className="text-muted-foreground mb-6 max-w-[700px] mx-auto">
            Nuestro equipo está listo para responder todas tus preguntas y ayudarte a encontrar el servicio que mejor se
            adapte a tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contacto">Contactar ahora</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/historia-clinica">Historia Clínica</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

