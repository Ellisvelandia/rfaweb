"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactoPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Mensaje enviado",
        description: "Hemos recibido tu mensaje. Te contactaremos pronto.",
      })
    }, 2000)
  }

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Contacto</h1>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para programar una cita o para cualquier consulta
            que tengas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderemos a la brevedad.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input id="nombre" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico *</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input id="telefono" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="servicio">Servicio de interés *</Label>
                      <Select>
                        <SelectTrigger id="servicio">
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="programas">Programas</SelectItem>
                          <SelectItem value="entrenamiento">Entrenamiento</SelectItem>
                          <SelectItem value="nutricion">Nutrición</SelectItem>
                          <SelectItem value="rehabilitacion">Rehabilitación Física</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea id="mensaje" placeholder="¿En qué podemos ayudarte?" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm text-muted-foreground">* Campos obligatorios</p>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
                <CardDescription>Puedes contactarnos directamente a través de los siguientes medios.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-muted-foreground">Calle Principal 123, Ciudad, País</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-muted-foreground">+123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Correo electrónico</h3>
                    <p className="text-muted-foreground">info@rfa.com.co</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Horario de atención</h3>
                    <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground">Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preguntas frecuentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">¿Necesito cita previa?</h3>
                  <p className="text-muted-foreground">
                    Sí, recomendamos agendar una cita para garantizar una atención personalizada.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">¿Qué debo llevar a mi primera consulta?</h3>
                  <p className="text-muted-foreground">
                    Documentos de identidad, historial médico relevante y cualquier estudio o diagnóstico previo.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">¿Trabajan con seguros médicos?</h3>
                  <p className="text-muted-foreground">
                    Sí, trabajamos con las principales aseguradoras. Consulta por tu caso específico.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">¿Ofrecen servicios a domicilio?</h3>
                  <p className="text-muted-foreground">
                    En casos específicos, ofrecemos servicios a domicilio. Consulta disponibilidad y tarifas.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/acerca-de-nosotros">Más información sobre nosotros</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
            {/* This would be replaced with an actual Google Maps embed */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Mapa de ubicación</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

