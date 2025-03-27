import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop"
          alt="Rehabilitación física"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
          priority
        />
      </div>

      <div className="relative z-10 container-custom py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
          ¡Elimina el Dolor y Previene Lesiones!
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-10">
          Centro especializado en recuperación física con programas personalizados y entrenamientos que te empoderan
          para tomar control de tu salud.
        </p>

        <Link href="/registro" className="btn-primary text-base md:text-lg px-8 py-3">
          Comienza tu Prueba Gratuita de 7 Días
        </Link>
      </div>
    </div>
  )
}

