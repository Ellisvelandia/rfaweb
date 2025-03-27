import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    // Use the API key from environment variables
    const apiKey = process.env.GROQ_API_KEY
    
    if (!apiKey) {
      return NextResponse.json({ error: "API key is not configured" }, { status: 500 })
    }

    // Call the Groq API
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content:
              "Eres un asistente especializado para RFA (Recuperación Física y Acondicionamiento), un centro especializado en recuperación física, entrenamiento, nutrición y rehabilitación física. Proporciona información precisa, concisa y directa sobre estos temas en español. Debes ser experto en temas de rehabilitación física, entrenamiento deportivo, nutrición deportiva y acondicionamiento físico. Tus respuestas deben ser breves y al punto, evitando explicaciones innecesariamente largas. Si no sabes algo, sugiere contactar con un especialista de RFA.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Groq API error:", errorData)
      throw new Error("Error from Groq API")
    }

    const data = await response.json()

    return NextResponse.json({
      response: data.choices[0].message.content,
    })
  } catch (error) {
    console.error("Error in chat API route:", error)

    // Return a fallback response
    return NextResponse.json({
      response:
        "Lo siento, estoy teniendo problemas para procesar tu solicitud en este momento. Por favor, intenta de nuevo o contacta directamente con nuestros especialistas para obtener ayuda.",
    })
  }
}

