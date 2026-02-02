import { Firestore } from '@google-cloud/firestore'

// Firestore client singleton
let firestoreInstance: Firestore | null = null

export function getFirestore(): Firestore {
  if (!firestoreInstance) {
    firestoreInstance = new Firestore({
      projectId: process.env.GOOGLE_CLOUD_PROJECT || 'skilled-worker-jp',
    })
  }
  return firestoreInstance
}

// Collection names
export const COLLECTIONS = {
  REGISTRATIONS: 'registrations',
  CHAT_LOGS: 'chat_logs',
} as const
