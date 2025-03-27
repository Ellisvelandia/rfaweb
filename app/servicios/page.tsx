import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dumbbell, Utensils, ListChecks, Stethoscope } from "lucide-react"

export default function ServiciosPage() {
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
                  src="/placeholder.svg?height=300&width=500&text=Programas"
                  alt="Programas"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto"
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
                  src="/placeholder.svg?height=300&width=500&text=Entrenamiento"
                  alt="Entrenamiento"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto"
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
                  src="/placeholder.svg?height=300&width=500&text=Nutrición"
                  alt="Nutrición"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto"
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
                  src="/placeholder.svg?height=300&width=500&text=Rehabilitación"
                  alt="Rehabilitación Física"
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto"
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

