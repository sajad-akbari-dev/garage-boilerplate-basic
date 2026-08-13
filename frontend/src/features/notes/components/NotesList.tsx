'use client'

import { where } from 'firebase/firestore'
import { useCollection } from '@/hooks/useFirestore'
import { useAuth } from '@/hooks/useAuth'
import { getNotesCollection } from '@/lib/firebase/firestore'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import { EmptyState } from '@/components/shared/EmptyState'

export function NotesList() {
  const { user, loading: authLoading } = useAuth()
  const { data: notes, loading: notesLoading } = useCollection(
    getNotesCollection(),
    where('uid', '==', user?.uid ?? '__no_uid__')
  )

  if (authLoading || !user) return <LoadingSpinner />
  if (notesLoading) return <LoadingSpinner />
  if (notes.length === 0) return <EmptyState title="No notes yet" />

  return (
    <ul className="space-y-2">
      {notes.map((note) => (
        <li key={note.id} className="rounded-lg border border-mint-green bg-white p-4">
          <h3 className="font-medium text-near-black">{note.title}</h3>
          <p className="text-sm text-cool-grey">{note.body}</p>
        </li>
      ))}
    </ul>
  )
}