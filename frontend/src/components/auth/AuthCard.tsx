import type { ReactNode } from 'react'

interface AuthCardProps {
  subheading: string
  children: ReactNode
}

export function AuthCard({ subheading, children }: AuthCardProps) {
  return (
    <div className="p-6 bg-white rounded-2xl border-4 border-mint-green shadow-card max-w-[480px] w-full mx-auto">
      <div className="space-y-6">
        <div className="space-y-1 text-center">
          <h1 className="text-5xl tracking-tight text-near-black font-space-grotesk font-bold">
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
    </div>
  )
}
