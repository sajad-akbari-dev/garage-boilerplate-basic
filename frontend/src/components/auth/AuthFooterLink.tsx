import Link from 'next/link'

interface AuthFooterLinkProps {
  prompt: string
  linkText: string
  href: string
}

export function AuthFooterLink({ prompt, linkText, href }: AuthFooterLinkProps) {
  return (
    <p className="text-center text-cool-grey font-inter">
      {prompt}{' '}
      <Link
        href={href}
        className="font-medium font-inter text-forest-green hover:text-dark-green transition-colors duration-200"
      >
        {linkText}
      </Link>
    </p>
  )
}
