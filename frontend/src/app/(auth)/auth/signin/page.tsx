'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/useAuth'
import { loginSchema, type LoginInput } from '@/lib/validations/auth'
import { FullPageSpinner } from '@/components/shared/LoadingSpinner'
import Header from '@/components/layout/Header'

export default function SignInPage() {
  const router = useRouter()
  const { user, loading, signInWithEmail, signInWithGoogle } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    if (!loading && user) {
      router.replace('/dashboard')
    }
  }, [loading, user, router])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('verification') === 'sent') {
      toast.success('Verification email sent. Verify your email, then sign in.')
    }
  }, [])

  if (loading) return <FullPageSpinner />

  const onSubmit = async (data: LoginInput) => {
    try {
      await signInWithEmail(data.email, data.password)
      toast.success('Signed in successfully')
      router.replace('/dashboard')
      router.refresh()
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('email-not-verified')) {
        toast.error('Please verify your email before signing in.')
      } else {
        toast.error('Invalid email or password')
      }
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      router.replace('/dashboard')
    } catch {
      toast.error('Google sign-in failed. Please try again.')
    }
  }

  return (
    <>
      {/*Login Card*/}
      <div className="p-6 bg-white rounded-2xl border-4 border-mint-green shadow-card max-w-[480px] w-full mx-auto">
        <div className="space-y-6">
          <div className="space-y-1 text-center">
            <h1 className="text-5xl tracking-tight text-near-black font-space-grotesk font-bold">Garage Boilerplate</h1>
          </div>

          <div className="space-y-2">
            <div className="flex justify-center items-center">
              <p className="text-4xl text-forest-green font-bold font-space-grotesk">Login</p>
            </div>
            <div className="w-full border-t-3 border-forest-green"></div>

          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-2xl text-near-black font-semibold font-inter">
                Email
              </label>
              
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full rounded-lg border border-light-grey bg-white px-3 py-2 text-lg font-medium font-inter shadow-sm placeholder:text-cool-grey 
                            focus:border-2 focus:border-forest-green focus:outline-none 
                            aria-invalid:border-error aria-invalid:border-2
                            disabled:text-disabled-text disabled:border-light-grey disabled:bg-disabled"
                placeholder="you@example.com"
                {...register('email')}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-error font-inter" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-1">
                <label htmlFor="password" className="text-2xl text-near-black font-semibold font-inter">
                  Password
                </label>
                {/* {errors.password && (
                  <p id="password-error" className="text-sm text-error" role="alert">
                    <span className="text-sm text-error font-inter">* This field is required</span>
                  </p>
                )} */}
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? 'password-error' : undefined}
                className="w-full rounded-lg border border-light-grey bg-white px-3 py-2 text-lg font-medium font-inter shadow-sm placeholder:text-cool-grey 
                            focus:border-2 focus:border-forest-green focus:outline-none 
                            aria-invalid:border-error aria-invalid:border-2
                            disabled:text-disabled-text disabled:border-light-grey disabled:bg-disabled"

                placeholder="••••••••"
                {...register('password')}
              />
              {errors.password && (
                <p id="password-error" className="text-sm text-error font-inter" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-forest-green px-4 py-2.5 text-lg text-white font-inter font-semibold hover:bg-dark-green 
                          disabled:cursor-not-allowed disabled:mint-green disabled:text-white transition-colors duration-200"
            >
              {isSubmitting ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-zinc-50 px-2 text-zinc-400 font-inter">or</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-light-grey bg-white px-4 py-2.5 
                        text-lg text-near-black font-bold font-inter hover:bg-light-grey transition-colors duration-200"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-cool-grey font-inter">
            Don&apos;t have an account?{' '}
            <Link
              href="/auth/signup"
              className="font-medium font-inter text-forest-green hover:text-dark-green transition-colors duration-200"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>

    </>
  )
}
