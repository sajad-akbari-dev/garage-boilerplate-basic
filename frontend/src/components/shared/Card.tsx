import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'p-8 bg-white rounded-2xl border-4 border-mint-green shadow-card max-w-[560px] w-full mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}
