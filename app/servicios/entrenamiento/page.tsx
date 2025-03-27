import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, ArrowLeft, ArrowRight } from "lucide-react"

export default function EntrenamientoPage() {
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
              <Dumbbell className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Entrenamiento</h1>
          </div>

          <p className="text-muted-foreground mb-8 text-lg">
            Ofrecemos diferentes servicios de entrenamiento, según la necesidad y la condición física del paciente.
            Nuestros entrenadores personalizados te guiarán en cada paso del camino.
          </p>
        </div>

        <div className="mb-12">
          <Image
            src="/placeholder.svg?height=400&width=800&text=Entrenamiento Personalizado"
            alt="Entrenamiento"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <h2>Entrenamiento Personalizado para Resultados Óptimos</h2>
            <p>
              En RFA creemos que el entrenamiento debe ser tan único como tú. Nuestros servicios de entrenamiento están
              diseñados para adaptarse a tus necesidades específicas, nivel de condición física y objetivos personales.
              Trabajamos contigo para desarrollar un plan de entrenamiento que te ayude a alcanzar tus metas de forma
              segura y efectiva.
            </p>

            <h2>Nuestros Servicios de Entrenamiento</h2>
            <p>
              Ofrecemos una amplia gama de servicios de entrenamiento para satisfacer diferentes necesidades y
              objetivos:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Entrenamiento Funcional"
                alt="Entrenamiento Funcional"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Entrenamiento Funcional</h3>
              <p className="text-muted-foreground mb-4">
                Ejercicios que mejoran la capacidad del cuerpo para realizar actividades cotidianas con mayor facilidad
                y menor riesgo de lesiones.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Mejora de la coordinación y equilibrio</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Fortalecimiento de músculos estabilizadores</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Incremento de la movilidad general</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Entrenamiento de Fuerza"
                alt="Entrenamiento de Fuerza"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Entrenamiento de Fuerza</h3>
              <p className="text-muted-foreground mb-4">
                Programas diseñados para aumentar la fuerza muscular, mejorar la composición corporal y potenciar el
                metabolismo.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Desarrollo de masa muscular</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Aumento de la densidad ósea</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Mejora de la postura y alineación corporal</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Entrenamiento Cardiovascular"
                alt="Entrenamiento Cardiovascular"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Entrenamiento Cardiovascular</h3>
              <p className="text-muted-foreground mb-4">
                Actividades que mejoran la salud del corazón, aumentan la resistencia y ayudan en el control del peso.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Mejora de la capacidad pulmonar</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Reducción del riesgo de enfermedades cardiovasculares</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Optimización del metabolismo</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Entrenamiento Específico"
                alt="Entrenamiento Específico para Deportes"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Entrenamiento Específico para Deportes</h3>
              <p className="text-muted-foreground mb-4">
                Planes adaptados a las demandas específicas de diferentes deportes, mejorando el rendimiento y
                previniendo lesiones.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Desarrollo de habilidades específicas</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Mejora del rendimiento deportivo</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Prevención de lesiones comunes en el deporte</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Beneficios de Nuestro Entrenamiento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Personalización</h3>
              <p className="text-muted-foreground">
                Cada plan de entrenamiento se adapta a tus necesidades, objetivos y nivel de condición física.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Supervisión Profesional</h3>
              <p className="text-muted-foreground">
                Entrenadores cualificados que garantizan la correcta ejecución de los ejercicios y maximizan resultados.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Progresión Adecuada</h3>
              <p className="text-muted-foreground">
                Avance gradual que permite adaptaciones seguras y efectivas, evitando lesiones por sobreentrenamiento.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Comienza tu entrenamiento personalizado</h2>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo de entrenadores profesionales está listo para ayudarte a alcanzar tus objetivos de forma
                segura y efectiva. Contacta con nosotros hoy mismo para programar tu primera sesión.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contacto">Agendar sesión</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/historia-clinica">Historia Clínica</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="p-4 bg-white rounded-full">
                <Dumbbell className="h-16 w-16 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between">
          <Button asChild variant="ghost" className="flex items-center gap-2">
            <Link href="/servicios/programas">
              <ArrowLeft className="h-4 w-4" />
              Programas
            </Link>
          </Button>
          <Button asChild variant="ghost" className="flex items-center gap-2">
            <Link href="/servicios/nutricion">
              Nutrición
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

