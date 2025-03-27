"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function HistoriaClinicaPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Formulario enviado",
        description: "Tu historia clínica ha sido enviada correctamente.",
      })
    }, 2000)
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Historia Clínica</h1>
          <p className="text-muted-foreground">
            Complete el siguiente formulario con su información médica para que nuestros profesionales puedan brindarle
            una atención personalizada.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Información Personal y Médica</CardTitle>
            <CardDescription>Todos los campos marcados con * son obligatorios.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Datos Personales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input id="nombre" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="documento">Documento de identidad *</Label>
                    <Input id="documento" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fecha-nacimiento">Fecha de nacimiento *</Label>
                    <Input id="fecha-nacimiento" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input id="telefono" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="direccion">Dirección *</Label>
                    <Input id="direccion" required />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Antecedentes Médicos</h3>
                <div className="space-y-2">
                  <Label htmlFor="enfermedades">¿Padece alguna enfermedad crónica? *</Label>
                  <Textarea
                    id="enfermedades"
                    placeholder="Describa cualquier enfermedad crónica que padezca (diabetes, hipertensión, etc.)"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medicamentos">¿Toma algún medicamento actualmente? *</Label>
                  <Textarea id="medicamentos" placeholder="Liste los medicamentos que toma actualmente" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alergias">¿Tiene alguna alergia? *</Label>
                  <Textarea
                    id="alergias"
                    placeholder="Describa cualquier alergia que tenga (medicamentos, alimentos, etc.)"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Motivo de Consulta</h3>
                <div className="space-y-2">
                  <Label htmlFor="motivo">¿Cuál es el motivo de su consulta? *</Label>
                  <Textarea
                    id="motivo"
                    placeholder="Describa el motivo por el cual busca nuestros servicios"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lesiones">¿Ha sufrido alguna lesión recientemente? *</Label>
                  <Textarea id="lesiones" placeholder="Describa cualquier lesión reciente" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="actividad-fisica">¿Realiza actividad física regularmente? *</Label>
                  <Textarea
                    id="actividad-fisica"
                    placeholder="Describa qué tipo de actividad física realiza y con qué frecuencia"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline" type="reset">
                  Cancelar
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Enviar formulario"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              La información proporcionada será tratada con confidencialidad según nuestra{" "}
              <Link href="/privacidad" className="text-primary hover:underline">
                política de privacidad
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

