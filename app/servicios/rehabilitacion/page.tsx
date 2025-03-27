import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, ArrowLeft, ArrowRight } from "lucide-react"

export default function RehabilitacionPage() {
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
              <Stethoscope className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Rehabilitación Física</h1>
          </div>

          <p className="text-muted-foreground mb-8 text-lg">
            Se busca el tratamiento o prevención de los agentes físicos o las enfermedades que se desarrollan en la
            actividad física o deportiva. Nuestro equipo de fisioterapeutas está altamente capacitado para ayudarte en
            tu recuperación.
          </p>
        </div>

        <div className="mb-12">
          <Image
            src="/placeholder.svg?height=400&width=800&text=Rehabilitación Física"
            alt="Rehabilitación Física"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <h2>Rehabilitación Física Especializada</h2>
            <p>
              En RFA ofrecemos servicios de rehabilitación física de alta calidad, diseñados para ayudarte a recuperar
              la funcionalidad, aliviar el dolor y prevenir futuras lesiones. Nuestro equipo de fisioterapeutas
              altamente capacitados utiliza técnicas avanzadas y equipamiento moderno para proporcionar tratamientos
              efectivos y personalizados.
            </p>

            <h2>Nuestros Servicios de Rehabilitación</h2>
            <p>
              Ofrecemos una amplia gama de servicios de rehabilitación física para abordar diferentes condiciones y
              necesidades:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Rehabilitación de Lesiones Deportivas"
                alt="Rehabilitación de Lesiones Deportivas"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Rehabilitación de Lesiones Deportivas</h3>
              <p className="text-muted-foreground mb-4">
                Tratamiento especializado para lesiones relacionadas con la práctica deportiva, enfocado en una
                recuperación rápida y segura para volver a la actividad.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Lesiones de ligamentos y tendones</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Lesiones musculares</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Recuperación post-competición</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Terapia Manual"
                alt="Terapia Manual"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Terapia Manual</h3>
              <p className="text-muted-foreground mb-4">
                Técnicas manuales especializadas para tratar disfunciones musculoesqueléticas, mejorar la movilidad
                articular y aliviar el dolor.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Movilización articular</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Liberación miofascial</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Técnicas de tejido blando</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Electroterapia"
                alt="Electroterapia"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Electroterapia</h3>
              <p className="text-muted-foreground mb-4">
                Uso de corrientes eléctricas terapéuticas para reducir el dolor, estimular la regeneración tisular y
                mejorar la función muscular.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>TENS (estimulación nerviosa eléctrica transcutánea)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Ultrasonido terapéutico</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Láser terapéutico</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Rehabilitación Neurológica"
                alt="Rehabilitación Neurológica"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Rehabilitación Neurológica</h3>
              <p className="text-muted-foreground mb-4">
                Tratamiento especializado para pacientes con trastornos neurológicos, enfocado en mejorar la función
                motora y la calidad de vida.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Reeducación de la marcha</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Entrenamiento del equilibrio</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Mejora de la coordinación</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nuestro Enfoque de Rehabilitación</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Evaluación Exhaustiva</h3>
              <p className="text-muted-foreground">
                Realizamos una evaluación completa para entender la causa raíz de tu problema y desarrollar un plan de
                tratamiento efectivo.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Tratamiento Integral</h3>
              <p className="text-muted-foreground">
                Combinamos diferentes técnicas terapéuticas para abordar todos los aspectos de tu lesión o condición.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Educación del Paciente</h3>
              <p className="text-muted-foreground">
                Te proporcionamos las herramientas y conocimientos necesarios para participar activamente en tu proceso
                de recuperación.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Comienza tu camino hacia la recuperación</h2>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo de fisioterapeutas está listo para ayudarte a recuperar tu movilidad, aliviar el dolor y
                volver a tus actividades cotidianas. Contacta con nosotros hoy mismo para programar tu evaluación
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
                <Stethoscope className="h-16 w-16 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between">
          <Button asChild variant="ghost" className="flex items-center gap-2">
            <Link href="/servicios/nutricion">
              <ArrowLeft className="h-4 w-4" />
              Nutrición
            </Link>
          </Button>
          <Button asChild variant="ghost" className="flex items-center gap-2">
            <Link href="/servicios">
              Todos los servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

