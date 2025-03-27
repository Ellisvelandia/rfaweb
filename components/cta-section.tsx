import Link from "next/link"

export default function CTASection() {
  return (
    <div className="py-20 bg-primary">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Comienza Tu Camino Hacia una Vida Sin Dolor</h2>

        <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10">
          Únete a miles de personas que han transformado su salud física con nuestros programas personalizados. Recupera tu movilidad y bienestar con los mejores especialistas.
        </p>

        <Link
          href="/contacto"
          className="bg-white text-primary text-lg font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block"
        >
          Agenda tu Evaluación Personalizada
        </Link>
      </div>
    </div>
  )
}

