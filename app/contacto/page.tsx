"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      })
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contacta con Nuestros Especialistas</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Estamos aquí para ayudarte en tu camino hacia la recuperación física y el bienestar. Completa el formulario y
          nos pondremos en contacto contigo a la brevedad.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Envíanos un mensaje</CardTitle>
            <CardDescription>
              Completa el formulario y uno de nuestros especialistas te contactará pronto.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" placeholder="Tu apellido" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="tu@correo.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" placeholder="+57 300 123 4567" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Servicio de interés</Label>
                <select
                  id="service"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="rehabilitacion">Rehabilitación Física</option>
                  <option value="entrenamiento">Entrenamiento Personal</option>
                  <option value="nutricion">Nutrición</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                  className="resize-none"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Dirección</h4>
                  <p className="text-muted-foreground">
                    Cra. 24 #63c-58, Segundo piso
                    <br />
                    Barrios Unidos, Bogotá, Cundinamarca
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Teléfono</h4>
                  <p className="text-muted-foreground">+57 300 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Correo electrónico</h4>
                  <p className="text-muted-foreground">info@rfa.com.co</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Horario de atención</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="font-medium">Lunes - Viernes</span>
                <span className="text-muted-foreground">7:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Sábado</span>
                <span className="text-muted-foreground">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Domingo</span>
                <span className="text-muted-foreground">Cerrado</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Ubicación</h3>
            <div className="h-[300px] bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6451944700895!2d-74.0688933!3d4.6510883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a413f0a5899%3A0x3e5f8218c0599559!2sCra.%2024%20%2363c-58%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1616482766458!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

