import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function SolutionSection() {
  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Nuestra Solución</h2>
        <p className="section-subtitle">
          En RFA, revolucionamos la forma en que accedes a la rehabilitación física y el acondicionamiento
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?q=80&w=600&h=800&auto=format&fit=crop"
              alt="Aplicación móvil RFA"
              width={600}
              height={800}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Rehabilitación Física Personalizada en la Palma de tu Mano
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg">Acceso Inmediato</h4>
                  <p className="text-muted-foreground">
                    Comienza tu programa de rehabilitación hoy mismo, sin esperas ni citas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg">Programas Personalizados</h4>
                  <p className="text-muted-foreground">
                    Ejercicios y rutinas adaptadas específicamente a tu condición y objetivos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg">Seguimiento Profesional</h4>
                  <p className="text-muted-foreground">
                    Nuestro equipo de expertos monitorea tu progreso y ajusta tu programa según sea necesario.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg">Asequible y Conveniente</h4>
                  <p className="text-muted-foreground">
                    Fracción del costo de la terapia física tradicional, accesible desde cualquier lugar.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/registro" className="btn-primary inline-block text-center px-8 py-3">
              Comienza tu Prueba Gratuita de 7 Días
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

