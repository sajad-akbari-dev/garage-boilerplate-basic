import { Header } from '@/components/layout/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-pale-mint flex justify-center items-center pt-24 pb-8">
        <div className="w-full max-w-[480px]">{children}</div>
      </div>
    </>
  )
}
