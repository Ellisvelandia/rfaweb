"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="es">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl font-bold mb-4">Algo salió mal</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Lo sentimos, ha ocurrido un error inesperado. Nuestro equipo ha sido notificado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={reset} variant="default">
              Intentar de nuevo
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Volver al inicio</Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}

