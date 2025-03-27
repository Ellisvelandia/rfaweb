import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, ArrowLeft, ArrowRight } from "lucide-react"

export default function NutricionPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/servicios" className="flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Servicios
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Utensils className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Nutrición</h1>
          </div>

          <p className="text-muted-foreground mb-8 text-lg">
            Te damos una serie de consejos que puedes tener en cuenta para llevar una dieta equilibrada. Nuestros
            especialistas en nutrición te ayudarán a optimizar tu alimentación.
          </p>
        </div>

        <div className="mb-12">
          <Image
            src="/placeholder.svg?height=400&width=800&text=Nutrición Deportiva"
            alt="Nutrición"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <h2>Nutrición Personalizada para tu Bienestar</h2>
            <p>
              En RFA entendemos que la nutrición adecuada es un pilar fundamental para la salud y el rendimiento físico.
              Nuestro servicio de nutrición ofrece asesoramiento personalizado para ayudarte a alcanzar tus objetivos,
              ya sea mejorar tu rendimiento deportivo, recuperarte de una lesión, controlar tu peso o simplemente
              mantener un estilo de vida saludable.
            </p>

            <h2>Nuestros Servicios de Nutrición</h2>
            <p>Ofrecemos una variedad de servicios nutricionales adaptados a diferentes necesidades y objetivos:</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Evaluación Nutricional"
                alt="Evaluación Nutricional"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Evaluación Nutricional</h3>
              <p className="text-muted-foreground mb-4">
                Análisis completo de tus hábitos alimenticios, composición corporal y necesidades nutricionales para
                establecer un punto de partida claro.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Análisis de composición corporal</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Evaluación de hábitos alimenticios</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Identificación de necesidades específicas</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Planes de Alimentación"
                alt="Planes de Alimentación Personalizados"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Planes de Alimentación Personalizados</h3>
              <p className="text-muted-foreground mb-4">
                Desarrollo de planes alimenticios adaptados a tus objetivos, preferencias y estilo de vida, que sean
                sostenibles a largo plazo.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Menús adaptados a tus gustos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Consideración de alergias e intolerancias</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Ajustes según tu nivel de actividad</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Nutrición Deportiva"
                alt="Nutrición Deportiva"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Nutrición Deportiva</h3>
              <p className="text-muted-foreground mb-4">
                Asesoramiento especializado para deportistas que buscan optimizar su rendimiento, mejorar su
                recuperación y alcanzar sus objetivos deportivos.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Nutrición pre y post entrenamiento</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Hidratación y suplementación adecuada</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Periodización nutricional según calendario deportivo</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Educación Nutricional"
                alt="Educación Nutricional"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Educación Nutricional</h3>
              <p className="text-muted-foreground mb-4">
                Talleres y sesiones educativas para aprender a tomar mejores decisiones alimenticias y desarrollar
                hábitos saludables a largo plazo.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Lectura de etiquetas nutricionales</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Planificación de compras saludables</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Técnicas de preparación de alimentos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Consejos Nutricionales Generales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Hidratación Adecuada</h3>
              <p className="text-muted-foreground">
                Mantén una hidratación adecuada bebiendo al menos 2 litros de agua al día, aumentando esta cantidad si
                realizas actividad física intensa.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Alimentación Variada</h3>
              <p className="text-muted-foreground">
                Incluye alimentos de todos los grupos en tu dieta diaria para asegurar un aporte adecuado de nutrientes
                esenciales.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Proteínas de Calidad</h3>
              <p className="text-muted-foreground">
                Asegura un consumo adecuado de proteínas de alta calidad para favorecer la recuperación muscular y
                mantener la masa magra.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Control de Porciones</h3>
              <p className="text-muted-foreground">
                Aprende a reconocer las porciones adecuadas para mantener un balance energético acorde a tus necesidades
                y objetivos.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Mejora tu alimentación hoy mismo</h2>
              <p className="text-muted-foreground mb-6">
                Nuestros especialistas en nutrición están listos para ayudarte a optimizar tu alimentación y alcanzar
                tus objetivos de salud y rendimiento. Contacta con nosotros para programar tu evaluación nutricional
                inicial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contacto">Agendar consulta</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/historia-clinica">Historia Clínica</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="p-4 bg-white rounded-full">
                <Utensils className="h-16 w-16 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between">
          <Button asChild variant="ghost" className="flex items-center gap-2">
            <Link href="/servicios/entrenamiento">
              <ArrowLeft className="h-4 w-4" />
              Entrenamiento
            </Link>
          </Button>
          <Button asChild variant="ghost" className="flex items-center gap-2">
            <Link href="/servicios/rehabilitacion">
              Rehabilitación Física
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

