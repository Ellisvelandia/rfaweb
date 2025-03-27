import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Utensils, ListChecks, Stethoscope } from "lucide-react"

export default function ServiceGrid() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="p-2 bg-primary/10 rounded-full mb-4">
                <ListChecks className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>PROGRAMAS</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&h=250&auto=format&fit=crop"
                alt="Programas de rehabilitación"
                width={400}
                height={250}
                className="rounded-md mb-4 w-full h-[150px] object-cover"
              />
              <CardDescription className="text-center">
                Los programas son actividades especiales o direccionadas según la necesidad y condición física del
                paciente.
              </CardDescription>
              <Link href="/contacto" className="text-primary hover:underline mt-4 inline-block">
                Contactar
              </Link>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="p-2 bg-primary/10 rounded-full mb-4">
                <Dumbbell className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>ENTRENAMIENTO</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&h=250&auto=format&fit=crop"
                alt="Entrenamiento personalizado"
                width={400}
                height={250}
                className="rounded-md mb-4 w-full h-[150px] object-cover"
              />
              <CardDescription className="text-center">
                Ofrecemos diferentes servicios de entrenamiento, según la necesidad y la condición física del paciente.
              </CardDescription>
              <Link href="/servicios/entrenamiento" className="text-primary hover:underline mt-4 inline-block">
                Más información
              </Link>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="p-2 bg-primary/10 rounded-full mb-4">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>NUTRICIÓN</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&h=250&auto=format&fit=crop"
                alt="Nutrición deportiva"
                width={400}
                height={250}
                className="rounded-md mb-4 w-full h-[150px] object-cover"
              />
              <CardDescription className="text-center">
                Te damos una serie de consejos que puedes tener en cuenta para llevar una dieta equilibrada.
              </CardDescription>
              <Link href="/servicios/nutricion" className="text-primary hover:underline mt-4 inline-block">
                Más información
              </Link>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="p-2 bg-primary/10 rounded-full mb-4">
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>REHABILITACIÓN FÍSICA</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&h=250&auto=format&fit=crop"
                alt="Rehabilitación física"
                width={400}
                height={250}
                className="rounded-md mb-4 w-full h-[150px] object-cover"
              />
              <CardDescription className="text-center">
                Se busca el tratamiento o prevención de los agentes físicos o las enfermedades que se desarrollan en la
                actividad física o deportiva.
              </CardDescription>
              <Link href="/servicios/rehabilitacion" className="text-primary hover:underline mt-4 inline-block">
                Más información
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-16">
          <div className="max-w-[600px] text-center">
            <Image
              src="/placeholder.svg?height=200&width=400&text=RFA Logo"
              alt="RFA Logo"
              width={400}
              height={200}
              className="mx-auto mb-8"
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Expertos en Recuperación Física y Acondicionamiento</h2>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo de profesionales está dedicado a ayudarte a recuperar tu movilidad, mejorar tu condición
              física y mantener un estilo de vida saludable.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

