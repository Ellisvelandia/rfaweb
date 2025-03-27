"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

// Mock data for articles
const articles = [
  {
    id: 1,
    title: "Beneficios de la rehabilitación temprana",
    excerpt: "Descubre por qué es importante comenzar la rehabilitación lo antes posible después de una lesión.",
    date: "15 Mar 2023",
    author: "Dr. Carlos Rodríguez",
    comments: 8,
    category: "rehabilitacion",
    slug: "beneficios-rehabilitacion-temprana",
  },
  {
    id: 2,
    title: "Nutrición para deportistas: lo que debes saber",
    excerpt: "Una guía completa sobre la alimentación adecuada para optimizar tu rendimiento deportivo.",
    date: "28 Feb 2023",
    author: "Lic. María González",
    comments: 12,
    category: "nutricion",
    slug: "nutricion-deportistas",
  },
  {
    id: 3,
    title: "Ejercicios para prevenir lesiones de rodilla",
    excerpt: "Rutina de ejercicios diseñada para fortalecer las rodillas y prevenir lesiones comunes.",
    date: "10 Feb 2023",
    author: "Ft. Juan Pérez",
    comments: 5,
    category: "entrenamiento",
    slug: "ejercicios-prevenir-lesiones-rodilla",
  },
  {
    id: 4,
    title: "Cómo recuperarse de una lesión deportiva",
    excerpt:
      "Pasos a seguir para una recuperación efectiva después de sufrir una lesión durante la práctica deportiva.",
    date: "5 Feb 2023",
    author: "Dr. Carlos Rodríguez",
    comments: 15,
    category: "rehabilitacion",
    slug: "recuperacion-lesion-deportiva",
  },
  {
    id: 5,
    title: "Alimentos que ayudan a reducir la inflamación",
    excerpt: "Conoce qué alimentos pueden ayudarte a combatir la inflamación y mejorar tu recuperación.",
    date: "20 Ene 2023",
    author: "Lic. María González",
    comments: 7,
    category: "nutricion",
    slug: "alimentos-reducir-inflamacion",
  },
  {
    id: 6,
    title: "Programas de entrenamiento para adultos mayores",
    excerpt: "Descubre cómo adaptar el ejercicio físico a las necesidades de las personas mayores.",
    date: "10 Ene 2023",
    author: "Ft. Juan Pérez",
    comments: 3,
    category: "programas",
    slug: "entrenamiento-adultos-mayores",
  },
]

export default function ActualidadPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("todos")

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeTab === "todos" || article.category === activeTab

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Actualidad</h1>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Mantente informado con los últimos artículos sobre salud, rehabilitación y bienestar físico.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
          <div className="relative w-full md:w-auto md:flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar artículos..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Tabs defaultValue="todos" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList>
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="rehabilitacion">Rehabilitación</TabsTrigger>
              <TabsTrigger value="nutricion">Nutrición</TabsTrigger>
              <TabsTrigger value="entrenamiento">Entrenamiento</TabsTrigger>
              <TabsTrigger value="programas">Programas</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id}>
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={`/placeholder.svg?height=200&width=300&text=${article.title}`}
                      alt={article.title}
                      width={300}
                      height={200}
                      className="w-full h-[200px] object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 pb-2">
                      <div className="text-sm text-muted-foreground mb-1">
                        {article.date} • Por {article.author}
                      </div>
                      <CardTitle className="mb-2">
                        <Link href={`/actualidad/${article.slug}`} className="hover:text-primary transition-colors">
                          {article.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pb-4">
                      <p className="text-muted-foreground">{article.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-0 flex justify-between items-center">
                      <Link href={`/actualidad/${article.slug}`} className="text-primary hover:underline">
                        Leer más
                      </Link>
                      <div className="text-sm text-muted-foreground">{article.comments} comentarios</div>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No se encontraron artículos</h3>
            <p className="text-muted-foreground mb-4">
              No hay artículos que coincidan con tu búsqueda. Intenta con otros términos.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setActiveTab("todos")
              }}
            >
              Ver todos los artículos
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

