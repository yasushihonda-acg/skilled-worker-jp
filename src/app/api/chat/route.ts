import { NextRequest, NextResponse } from 'next/server'
import { getVertexAI, SYSTEM_PROMPT } from '@/lib/vertexai'

type ChatRequest = {
  message: string
  locale: string
  history?: Array<{ role: 'user' | 'model'; content: string }>
}

export async function POST(request: NextRequest) {
  try {
    const { message, locale, history = [] }: ChatRequest = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const vertexAI = getVertexAI()
    const model = vertexAI.getGenerativeModel({
      model: 'gemini-2.0-flash-001',
    })

    // Build conversation history
    const contents = [
      ...history.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      })),
      {
        role: 'user' as const,
        parts: [{ text: message }],
      },
    ]

    // Generate response
    const result = await model.generateContent({
      contents,
      systemInstruction: {
        role: 'system',
        parts: [{ text: `${SYSTEM_PROMPT}\n\nユーザーの言語: ${locale}` }],
      },
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.7,
      },
    })

    const response = result.response
    const text = response.candidates?.[0]?.content?.parts?.[0]?.text || ''

    return NextResponse.json({
      success: true,
      message: text,
    })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}
