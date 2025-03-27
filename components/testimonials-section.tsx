import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Deportista amateur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop",
    content:
      "Después de meses lidiando con dolor de rodilla, el programa personalizado de RFA me permitió volver a correr sin molestias. ¡Increíble servicio!",
    rating: 5,
  },
  {
    name: "María González",
    role: "Profesional de oficina",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
    content:
      "El dolor de espalda por estar sentada todo el día desapareció gracias a los ejercicios recomendados. La app es súper fácil de usar y los videos son muy claros.",
    rating: 5,
  },
  {
    name: "Juan Pérez",
    role: "Adulto mayor activo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
    content:
      "A mis 68 años, pensé que el dolor articular era parte de envejecer. RFA me demostró lo contrario. Ahora tengo más movilidad y menos dolor que hace 10 años.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Lo Que Dicen Nuestros Usuarios</h2>
        <p className="section-subtitle">Miles de personas han mejorado su calidad de vida con nuestros programas</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

