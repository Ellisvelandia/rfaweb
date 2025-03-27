import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Heart } from "lucide-react"

export default function AcercaDeNosotrosPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Acerca de Nosotros</h1>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Conoce más sobre RFA, nuestro equipo y nuestra misión de ayudar a las personas a recuperar y mejorar su
            condición física.
          </p>
        </div>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
              <p className="text-muted-foreground mb-4">
                RFA (Recuperación Física y Acondicionamiento) nació en 2010 con la visión de ofrecer servicios
                integrales de rehabilitación y acondicionamiento físico personalizados para cada paciente.
              </p>
              <p className="text-muted-foreground mb-4">
                Lo que comenzó como un pequeño centro con un equipo de tres profesionales, ha crecido hasta convertirse
                en una referencia en el campo de la rehabilitación física y el acondicionamiento, manteniendo siempre
                nuestro compromiso con la excelencia y el trato personalizado.
              </p>
              <p className="text-muted-foreground">
                Hoy contamos con un equipo multidisciplinario de profesionales altamente capacitados y las instalaciones
                más modernas para ofrecer el mejor servicio a nuestros pacientes.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1576858574144-9ae1ebcfccb6?q=80&w=2070&auto=format&fit=crop"
                alt="Historia de RFA"
                width={500}
                height={300}
                className="rounded-lg w-full h-auto object-cover aspect-[5/3]"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Atención Personalizada</h3>
                <p className="text-muted-foreground">
                  Cada paciente es único, por eso diseñamos planes de tratamiento adaptados a las necesidades
                  específicas de cada persona.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Excelencia Profesional</h3>
                <p className="text-muted-foreground">
                  Nuestro equipo está formado por profesionales altamente cualificados y en constante formación para
                  ofrecer los mejores tratamientos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Compromiso</h3>
                <p className="text-muted-foreground">
                  Nos comprometemos con la recuperación y bienestar de nuestros pacientes, acompañándolos en todo el
                  proceso.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Innovación</h3>
                <p className="text-muted-foreground">
                  Incorporamos constantemente las últimas técnicas y tecnologías para ofrecer los tratamientos más
                  efectivos.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Carlos Rodríguez",
                role: "Fisioterapeuta",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
              },
              {
                name: "Dra. Ana Martínez",
                role: "Nutricionista",
                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2687&auto=format&fit=crop"
              },
              {
                name: "Luis García",
                role: "Entrenador Personal",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop"
              },
              {
                name: "María González",
                role: "Fisioterapeuta",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
              },
              {
                name: "Dr. Javier Torres",
                role: "Médico Deportivo",
                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
              },
              {
                name: "Laura Sánchez",
                role: "Psicóloga Deportiva",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
              }
            ].map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full overflow-hidden w-32 h-32">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-medium text-lg">{person.name}</h3>
                <p className="text-primary mb-2">{person.role}</p>
                <p className="text-muted-foreground text-sm">
                  Profesional con amplia experiencia en el área de {person.role.toLowerCase()}, especializado en rehabilitación y tratamiento personalizado.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Nuestras Instalaciones</h2>
              <p className="text-muted-foreground mb-4">
                Contamos con instalaciones modernas y equipadas con la última tecnología para ofrecer los mejores
                tratamientos de rehabilitación y acondicionamiento físico.
              </p>
              <p className="text-muted-foreground mb-4">
                Nuestros espacios están diseñados para proporcionar un ambiente cómodo y acogedor, donde nuestros
                pacientes puedan realizar sus terapias en las mejores condiciones.
              </p>
              <p className="text-muted-foreground">
                Disponemos de áreas especializadas para cada tipo de tratamiento, desde salas de terapia individual
                hasta gimnasios equipados para ejercicios de rehabilitación y acondicionamiento.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1570174006382-285d0494242f?q=80&w=2070&auto=format&fit=crop"
                alt="Instalaciones de RFA"
                width={500}
                height={300}
                className="rounded-lg w-full h-auto object-cover aspect-[5/3]"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h2>
            <p className="text-muted-foreground mb-6 max-w-[700px] mx-auto">
              Nuestro equipo está listo para ayudarte a recuperar tu movilidad, mejorar tu condición física y mantener
              un estilo de vida saludable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contacto">Contactar ahora</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/servicios">Ver servicios</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

