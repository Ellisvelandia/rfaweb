import Link from "next/link"

export default function TopBanner() {
  return (
    <div className="bg-white py-2 text-center">
      <div className="container-custom flex justify-center items-center">
        <p className="text-sm md:text-base">
          Descubre <span className="font-bold text-primary">Rehabilitación por Especialistas</span>
        </p>
        <Link
          href="/contacto"
          className="ml-4 bg-primary text-white text-sm font-medium px-4 py-1 rounded-full hover:bg-primary/90 transition-colors uppercase"
        >
          Comenzar Hoy
        </Link>
      </div>
    </div>
  )
}

