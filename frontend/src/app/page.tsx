import type { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/shared/Card'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the app',
}

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pale-mint p-8">
      <Card>
        <div className="space-y-6">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl tracking-tight text-near-black font-space-grotesk font-bold wrap-break-word">
              {process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}
            </h1>
            <p className="text-lg text-cool-grey font-inter">
              Your app description goes here. Edit{' '}
              <code className="rounded bg-light-grey px-1 py-0.5 font-mono text-sm text-near-black">
                src/app/page.tsx
              </code>{' '}
              to get started.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href="/auth/signin"
              className="inline-flex items-center justify-center rounded-lg bg-forest-green px-6 py-2.5 text-lg text-white font-inter font-semibold hover:bg-dark-green transition-colors duration-200"
            >
              Sign in
            </Link>
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center rounded-lg border border-light-grey bg-white px-6 py-2.5 text-lg text-near-black font-inter font-semibold hover:bg-light-grey transition-colors duration-200"
            >
              Create account
            </Link>
          </div>
        </div>
      </Card>
    </main>
  )
}
