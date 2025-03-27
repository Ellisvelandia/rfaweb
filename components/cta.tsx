import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">¿Listo para mejorar tu condición física?</h2>
          <p className="text-muted-foreground mb-8 md:text-lg">
            Nuestro equipo de profesionales está preparado para ayudarte a alcanzar tus objetivos de salud y bienestar.
            Agenda una consulta hoy mismo y comienza tu camino hacia una mejor calidad de vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contacto">Agendar Consulta</Link>
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

