import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock data for articles
const articles = [
  {
    id: 1,
    title: "Beneficios de la rehabilitación temprana",
    excerpt: "Descubre por qué es importante comenzar la rehabilitación lo antes posible después de una lesión.",
    date: "15 Mar 2023",
    author: "Dr. Carlos Rodríguez",
    comments: 8,
    slug: "beneficios-rehabilitacion-temprana",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Nutrición para deportistas: lo que debes saber",
    excerpt: "Una guía completa sobre la alimentación adecuada para optimizar tu rendimiento deportivo.",
    date: "28 Feb 2023",
    author: "Lic. María González",
    comments: 12,
    slug: "nutricion-deportistas",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Ejercicios para prevenir lesiones de rodilla",
    excerpt: "Rutina de ejercicios diseñada para fortalecer las rodillas y prevenir lesiones comunes.",
    date: "10 Feb 2023",
    author: "Ft. Juan Pérez",
    comments: 5,
    slug: "ejercicios-prevenir-lesiones-rodilla",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=400&auto=format&fit=crop",
  },
]

export default function LatestArticles() {
  return (
    <div className="py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Artículos Recientes</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Mantente informado con los últimos artículos sobre salud, rehabilitación y bienestar físico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="flex flex-col h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <div className="text-sm text-muted-foreground mb-2">
                  {article.date} • Por {article.author}
                </div>
                <CardTitle className="mb-2">
                  <Link href={`/actualidad/${article.slug}`} className="hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </CardTitle>
                <p className="text-muted-foreground">{article.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 pt-0">
                <Link href={`/actualidad/${article.slug}`} className="text-primary hover:underline">
                  Leer más
                </Link>
                <div className="text-sm text-muted-foreground">{article.comments} comentarios</div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild>
            <Link href="/actualidad">Ver todos los artículos</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

