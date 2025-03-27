"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MessageSquare, ThumbsUp, Share } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock article data
const article = {
  id: 1,
  title: "Beneficios de la rehabilitación temprana",
  content: `
    <p>La rehabilitación temprana es un enfoque terapéutico que busca iniciar el proceso de recuperación lo antes posible después de una lesión o cirugía. Este enfoque ha demostrado ser altamente efectivo para mejorar los resultados a largo plazo y reducir el tiempo total de recuperación.</p>
    
    <h2>¿Por qué es importante la rehabilitación temprana?</h2>
    
    <p>Cuando sufrimos una lesión, nuestro cuerpo inicia inmediatamente un proceso de curación natural. Sin embargo, este proceso puede llevar a la formación de tejido cicatricial excesivo, pérdida de movilidad y debilidad muscular si no se maneja adecuadamente. La rehabilitación temprana ayuda a guiar este proceso de curación de manera óptima.</p>
    
    <p>Algunos de los beneficios clave incluyen:</p>
    
    <ul>
      <li>Reducción del dolor y la inflamación</li>
      <li>Prevención de la atrofia muscular</li>
      <li>Mantenimiento del rango de movimiento</li>
      <li>Mejora de la circulación sanguínea</li>
      <li>Aceleración del proceso de curación</li>
      <li>Prevención de complicaciones secundarias</li>
    </ul>
    
    <h2>¿Cuándo debe comenzar la rehabilitación?</h2>
    
    <p>El momento exacto para iniciar la rehabilitación depende del tipo y gravedad de la lesión. En muchos casos, algunas formas de terapia pueden comenzar tan pronto como 24-48 horas después de la lesión o cirugía, con un enfoque inicial en controlar el dolor y la inflamación.</p>
    
    <p>Es importante destacar que la rehabilitación temprana debe ser siempre supervisada por profesionales cualificados que puedan adaptar el programa a las necesidades específicas de cada paciente.</p>
    
    <h2>Fases de la rehabilitación</h2>
    
    <p>Un programa de rehabilitación completo generalmente progresa a través de varias fases:</p>
    
    <ol>
      <li><strong>Fase aguda:</strong> Control del dolor e inflamación, protección de la lesión.</li>
      <li><strong>Fase de recuperación:</strong> Restauración del rango de movimiento y fuerza.</li>
      <li><strong>Fase funcional:</strong> Reentrenamiento de patrones de movimiento y habilidades específicas.</li>
      <li><strong>Fase de retorno a la actividad:</strong> Preparación para volver a las actividades normales o deportivas.</li>
    </ol>
    
    <h2>Conclusión</h2>
    
    <p>La evidencia científica respalda claramente los beneficios de la rehabilitación temprana. Los pacientes que participan activamente en programas de rehabilitación desde las primeras etapas de su lesión tienden a experimentar mejores resultados funcionales, menos dolor a largo plazo y un retorno más rápido a sus actividades normales.</p>
    
    <p>Si has sufrido una lesión recientemente, consulta con nuestros especialistas para desarrollar un plan de rehabilitación personalizado que maximice tu recuperación.</p>
  `,
  date: "15 Mar 2023",
  author: "Dr. Carlos Rodríguez",
  authorRole: "Fisioterapeuta especializado en rehabilitación deportiva",
  comments: [
    {
      id: 1,
      author: "María López",
      content:
        "Excelente artículo. Me hubiera gustado conocer esta información cuando tuve mi lesión de rodilla el año pasado.",
      date: "16 Mar 2023",
      likes: 5,
    },
    {
      id: 2,
      author: "Juan Gómez",
      content: "¿Esto aplica también para lesiones crónicas o solo para lesiones recientes?",
      date: "16 Mar 2023",
      likes: 2,
    },
    {
      id: 3,
      author: "Dr. Carlos Rodríguez",
      content:
        "Hola Juan, los principios de la rehabilitación pueden aplicarse tanto a lesiones agudas como crónicas, aunque el enfoque y las expectativas pueden variar. Para lesiones crónicas, es recomendable una evaluación personalizada.",
      date: "17 Mar 2023",
      likes: 3,
    },
  ],
  relatedArticles: [
    {
      id: 4,
      title: "Cómo recuperarse de una lesión deportiva",
      slug: "recuperacion-lesion-deportiva",
    },
    {
      id: 5,
      title: "Alimentos que ayudan a reducir la inflamación",
      slug: "alimentos-reducir-inflamacion",
    },
  ],
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate comment submission
    setTimeout(() => {
      setIsSubmitting(false)
      setComment("")
      toast({
        title: "Comentario enviado",
        description: "Tu comentario ha sido publicado correctamente.",
      })
    }, 1000)
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/actualidad" className="flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Actualidad
          </Link>

          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            <Avatar>
              <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${article.author.charAt(0)}`} />
              <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{article.author}</div>
              <div className="text-sm text-muted-foreground">{article.authorRole}</div>
            </div>
            <div className="text-sm text-muted-foreground ml-auto">Publicado el {article.date}</div>
          </div>

          <Image
            src={`/placeholder.svg?height=400&width=800&text=${article.title}`}
            alt={article.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

          <div className="flex items-center justify-between mt-8 pt-4 border-t">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>Me gusta</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>Comentar</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Share className="h-4 w-4" />
                <span>Compartir</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Comentarios ({article.comments.length})</h2>

          <form onSubmit={handleSubmitComment} className="mb-6">
            <Textarea
              placeholder="Escribe un comentario..."
              className="mb-2"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <Button type="submit" disabled={isSubmitting || !comment.trim()}>
              {isSubmitting ? "Enviando..." : "Publicar comentario"}
            </Button>
          </form>

          <div className="space-y-4">
            {article.comments.map((comment) => (
              <Card key={comment.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${comment.author.charAt(0)}`} />
                      <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium">{comment.author}</div>
                        <div className="text-xs text-muted-foreground">{comment.date}</div>
                      </div>
                      <p className="text-sm mb-2">{comment.content}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 text-muted-foreground hover:text-foreground"
                        >
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          <span>{comment.likes}</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 text-muted-foreground hover:text-foreground"
                        >
                          Responder
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-xl font-bold mb-4">Artículos relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {article.relatedArticles.map((relatedArticle) => (
              <Card key={relatedArticle.id}>
                <CardContent className="p-4">
                  <Link
                    href={`/actualidad/${relatedArticle.slug}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {relatedArticle.title}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

