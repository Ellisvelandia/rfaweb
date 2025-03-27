import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">
                <span className="text-primary">[R]</span>FA
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-[400px]">
              Centro especializado en recuperación física, entrenamiento personalizado, nutrición y rehabilitación
              física para mejorar tu calidad de vida.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/acerca-de-nosotros" className="text-gray-400 hover:text-primary transition-colors">
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link href="/actualidad" className="text-gray-400 hover:text-primary transition-colors">
                  Contenido
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Cra. 24 #63c-58, Segundo piso, Barrios Unidos, Bogotá, Cundinamarca
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">+57 300 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">info@rfa.com.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} RFA - Recuperación Física y Acondicionamiento. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacidad" className="text-gray-400 hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-400 hover:text-primary transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

