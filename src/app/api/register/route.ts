import { NextRequest, NextResponse } from 'next/server'
import { getFirestore, COLLECTIONS } from '@/lib/firestore'

// Registration data type
type RegistrationData = {
  name: string
  birthDate: string
  gender: string
  nationality: string
  residenceStatus: string
  residenceExpiry: string
  yearsInJapan: string
  japaneseLevel: string
  desiredJob: string
  contact: string
  locale: string
}

export async function POST(request: NextRequest) {
  try {
    const data: RegistrationData = await request.json()

    // Validate required fields
    const requiredFields = ['name', 'birthDate', 'nationality', 'residenceStatus', 'japaneseLevel', 'desiredJob', 'contact']
    for (const field of requiredFields) {
      if (!data[field as keyof RegistrationData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Save to Firestore
    const db = getFirestore()
    const docRef = await db.collection(COLLECTIONS.REGISTRATIONS).add({
      ...data,
      createdAt: new Date().toISOString(),
      status: 'pending', // pending, contacted, hired, rejected
    })

    return NextResponse.json({
      success: true,
      id: docRef.id,
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Failed to save registration' },
      { status: 500 }
    )
  }
}
