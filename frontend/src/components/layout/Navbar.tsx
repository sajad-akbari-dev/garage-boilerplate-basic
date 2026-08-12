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
    <header className="flex h-14 items-center justify-between bg-forest-green px-4">
      <div className="font-space-grotesk text-sm font-semibold text-white lg:hidden">
        {process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        {user && <span className="hidden font-inter text-sm text-white/80 sm:block">{user.email}</span>}
        <Link
          href="/profile"
          className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          aria-label="Profile"
        >
          <User className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Sign out"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
