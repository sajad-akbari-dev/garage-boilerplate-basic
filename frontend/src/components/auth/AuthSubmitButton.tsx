import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function AuthSubmitButton({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className={cn(
        'w-full rounded-lg bg-forest-green px-4 py-2.5 text-lg text-white font-inter font-semibold hover:bg-dark-green',
        'disabled:cursor-not-allowed disabled:bg-mint-green disabled:text-white transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
