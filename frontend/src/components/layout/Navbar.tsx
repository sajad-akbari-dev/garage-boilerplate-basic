'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogOut, User } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

export function Navbar() {
  const router = useRouter()
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    router.replace('/auth/signin')
    router.refresh()
  }

  return (
    <header className="flex h-14 items-center justify-between border-b border-mint-green bg-white px-4">
      <div className="font-space-grotesk text-sm font-semibold text-near-black lg:hidden">
        {process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        {user && <span className="hidden font-inter text-sm text-cool-grey sm:block">{user.email}</span>}
        <Link
          href="/profile"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-pale-mint text-forest-green transition-colors hover:bg-mint-green hover:text-white"
          aria-label="Profile"
        >
          <User className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          className="flex h-8 w-8 items-center justify-center rounded-full text-cool-grey transition-colors hover:bg-pale-mint hover:text-forest-green"
          aria-label="Sign out"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
