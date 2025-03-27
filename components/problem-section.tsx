import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function ProblemSection() {
  return (
    <div className="bg-secondary text-white py-20">
      <div className="container-custom">
        <h2 className="section-title mb-4">La Rehabilitación Física Tradicional Está Obsoleta</h2>
        <p className="section-subtitle text-gray-300">¿Estás cansado de...</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="bg-secondary border border-gray-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&h=300&auto=format&fit=crop"
                alt="Esperas largas"
                width={400}
                height={300}
                className="rounded-lg mb-6 w-full h-[200px] object-cover"
              />
              <h3 className="text-xl font-bold mb-3">Esperas Interminables</h3>
              <p className="text-gray-300">
                Semanas de espera para conseguir una cita con un fisioterapeuta cuando estás sufriendo dolor ahora.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary border border-gray-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image
                src="https://images.unsplash.com/photo-1560440021-33f9b867899d?q=80&w=400&h=300&auto=format&fit=crop"
                alt="Tratamientos genéricos"
                width={400}
                height={300}
                className="rounded-lg mb-6 w-full h-[200px] object-cover"
              />
              <h3 className="text-xl font-bold mb-3">Tratamientos Genéricos</h3>
              <p className="text-gray-300">
                Recibir los mismos ejercicios básicos que no están personalizados para tu condición específica.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary border border-gray-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image
                src="https://images.unsplash.com/photo-1518644961665-ed172691aaa1?q=80&w=400&h=300&auto=format&fit=crop"
                alt="Costos elevados"
                width={400}
                height={300}
                className="rounded-lg mb-6 w-full h-[200px] object-cover"
              />
              <h3 className="text-xl font-bold mb-3">Costos Elevados</h3>
              <p className="text-gray-300">
                Pagar cientos de pesos por sesiones que duran solo unos minutos y ofrecen resultados limitados.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

