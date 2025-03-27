import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ListChecks, ArrowLeft, ArrowRight } from "lucide-react"

export default function ProgramasPage() {
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
              <ListChecks className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Programas</h1>
          </div>

          <p className="text-muted-foreground mb-8 text-lg">
            Los programas son actividades especiales o direccionadas según la necesidad y condición física del paciente.
            Diseñamos planes personalizados que se adaptan a tus objetivos específicos.
          </p>
        </div>

        <div className="mb-12">
          <Image
            src="/placeholder.svg?height=400&width=800&text=Programas de Rehabilitación"
            alt="Programas"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <h2>Programas Personalizados para Cada Necesidad</h2>
            <p>
              En RFA entendemos que cada persona tiene necesidades únicas. Por eso, nuestros programas están diseñados
              para adaptarse específicamente a la condición física y objetivos de cada paciente. Nuestro equipo de
              profesionales evalúa cuidadosamente cada caso para desarrollar un plan personalizado que maximice los
              resultados.
            </p>

            <h2>Nuestros Programas Especializados</h2>
            <p>
              Ofrecemos una amplia variedad de programas especializados para abordar diferentes necesidades y objetivos:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Rehabilitación Post-Quirúrgica"
                alt="Rehabilitación Post-Quirúrgica"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Rehabilitación Post-Quirúrgica</h3>
              <p className="text-muted-foreground mb-4">
                Programas diseñados para pacientes que se recuperan de cirugías ortopédicas, ayudándoles a recuperar la
                movilidad y funcionalidad de forma segura y efectiva.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Recuperación progresiva y controlada</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Reducción del dolor y la inflamación</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Fortalecimiento muscular adaptado</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Programas para Adultos Mayores"
                alt="Programas para Adultos Mayores"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Programas para Adultos Mayores</h3>
              <p className="text-muted-foreground mb-4">
                Actividades adaptadas a las necesidades específicas de los adultos mayores, enfocadas en mejorar la
                movilidad, el equilibrio y la calidad de vida.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Ejercicios de bajo impacto</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Mejora del equilibrio y prevención de caídas</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Mantenimiento de la independencia funcional</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Programas para Deportistas"
                alt="Programas para Deportistas"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Programas para Deportistas</h3>
              <p className="text-muted-foreground mb-4">
                Planes específicos para deportistas que buscan mejorar su rendimiento, prevenir lesiones o recuperarse
                de ellas de manera óptima.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Entrenamiento específico por deporte</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Mejora del rendimiento deportivo</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Prevención y recuperación de lesiones</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Programas de Prevención"
                alt="Programas de Prevención"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Programas de Prevención</h3>
              <p className="text-muted-foreground mb-4">
                Actividades enfocadas en prevenir lesiones y problemas físicos, especialmente para personas con factores
                de riesgo o trabajos exigentes.
              </p>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Ergonomía y mecánica corporal</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Fortalecimiento preventivo</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Educación en hábitos saludables</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nuestro Enfoque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Evaluación Inicial</h3>
              <p className="text-muted-foreground">
                Realizamos una evaluación completa para entender tus necesidades específicas y establecer objetivos
                claros.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Plan Personalizado</h3>
              <p className="text-muted-foreground">
                Desarrollamos un programa a medida que se adapta a tu condición física y objetivos personales.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Seguimiento Continuo</h3>
              <p className="text-muted-foreground">
                Monitoreamos tu progreso y ajustamos el programa según sea necesario para garantizar resultados óptimos.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h2>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo de profesionales está listo para ayudarte a diseñar un programa personalizado que se
                adapte a tus necesidades específicas. Contacta con nosotros hoy mismo para programar una evaluación
                inicial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contacto">Contactar ahora</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/historia-clinica">Historia Clínica</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="p-4 bg-white rounded-full">
                <ListChecks className="h-16 w-16 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between">
          <Button asChild variant="ghost" className="flex items-center gap-2">
            <Link href="/servicios">
              <ArrowLeft className="h-4 w-4" />
              Todos los servicios
            </Link>
          </Button>
          <Button asChild variant="ghost" className="flex items-center gap-2">
            <Link href="/servicios/entrenamiento">
              Entrenamiento
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

