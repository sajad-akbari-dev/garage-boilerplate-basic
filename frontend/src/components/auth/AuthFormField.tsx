import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface AuthFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const AuthFormField = forwardRef<HTMLInputElement, AuthFormFieldProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const errorId = error ? `${id}-error` : undefined

    return (
      <div className="space-y-1.5">
        <label htmlFor={id} className="text-2xl text-near-black font-semibold font-inter">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={cn(
            'w-full rounded-lg border border-light-grey bg-white px-3 py-2 text-lg font-medium font-inter shadow-sm placeholder:text-cool-grey',
            'focus:border-2 focus:border-forest-green focus:outline-none',
            'aria-invalid:border-error aria-invalid:border-2',
            'disabled:text-disabled-text disabled:border-light-grey disabled:bg-disabled',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-sm text-error font-inter" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)
AuthFormField.displayName = 'AuthFormField'
