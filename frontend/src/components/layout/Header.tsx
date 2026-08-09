import React from 'react'

// TODO: Add a user props function so when the user signs in, the header will display their name.
// This will require a user context to be created and passed down to the header component.
export function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-forest-green text-white p-4 z-10">
      <h1 className="text-xl font-bold font-space-grotesk">Garage Boilerplate</h1>
    </div>
  )
}

export default Header