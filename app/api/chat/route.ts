import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Use the API key from environment variables
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key is not configured" },
        { status: 500 }
      );
    }

    // Call the Groq API
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
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
                "Eres un asistente especializado para RFA (Recuperación Física y Acondicionamiento). IMPORTANTE: Tus respuestas deben ser extremadamente concisas y directas, limitadas a 1-3 frases cortas cuando sea posible. Evita toda explicación innecesaria, preámbulos o conclusiones. Responde con información precisa sobre rehabilitación física, entrenamiento, nutrición y acondicionamiento, pero siempre de forma muy breve y directa. No uses más palabras de las absolutamente necesarias. Si no sabes algo, sugiere contactar a un especialista de RFA en una sola frase.",
            },
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.6,
          max_tokens: 150,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Groq API error:", errorData);
      throw new Error("Error from Groq API");
    }

    const data = await response.json();

    return NextResponse.json({
      response: data.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error in chat API route:", error);

    // Return a fallback response
    return NextResponse.json({
      response:
        "Lo siento, estoy teniendo problemas para procesar tu solicitud en este momento. Por favor, intenta de nuevo o contacta directamente con nuestros especialistas para obtener ayuda.",
    });
  }
}
