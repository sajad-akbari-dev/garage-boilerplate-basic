'use client'

import { useState } from 'react'
import Image from 'next/image'

interface TeamMemberPhotoProps {
  src: string
  name: string
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return (first + last).toUpperCase()
}

export function TeamMemberPhoto({ src, name }: TeamMemberPhotoProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-pale-mint">
      {failed ? (
        <div className="flex h-full w-full items-center justify-center text-[36px] font-bold text-forest-green">
          {getInitials(name)}
        </div>
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
