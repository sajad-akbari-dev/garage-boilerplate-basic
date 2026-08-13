import type { ReactNode } from 'react'
import { Card } from '@/components/shared/Card'

interface AuthCardProps {
  subheading: string
  children: ReactNode
}

export function AuthCard({ subheading, children }: AuthCardProps) {
  return (
    <Card>
      <div className="space-y-6">
        <div className="space-y-1 text-center">
          <h1 className="text-5xl tracking-tight text-near-black font-space-grotesk font-bold wrap-break-word">
            Garage Boilerplate
          </h1>
        </div>

        <div className="space-y-2">
          <div className="flex justify-center items-center">
            <p className="text-4xl text-forest-green font-bold font-space-grotesk">{subheading}</p>
          </div>
          <div className="w-full border-t-3 border-forest-green" />
        </div>

        {children}
      </div>
    </Card>
  )
}
