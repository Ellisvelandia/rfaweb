import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Star } from "lucide-react"

export default function LocationMap() {
  return (
    <div className="py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Nuestra Ubicación</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Visítanos en nuestra sede principal en Bogotá o contáctanos para agendar una cita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6881119055424!2d-74.06699492426508!3d4.648842042332456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a5fa5a5b7ef%3A0x7edf0a3a5f071e27!2sCra.%2024%20%2363c-58%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1711516800000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de RFA"
                  className="w-full h-full"
                ></iframe>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>RFA. REHABILITACIÓN FÍSICA Y ACONDICIONAMIENTO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-muted-foreground">
                      Cra. 24 #63c-58, Segundo piso, Barrios Unidos, Bogotá, Cundinamarca
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-muted-foreground">+57 300 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Horario de atención</h3>
                    <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground">Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Calificación</h3>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="ml-2 text-muted-foreground">5.0 (3 reseñas)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

