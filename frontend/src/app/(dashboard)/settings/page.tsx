import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings',
}

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-cool-grey text-sm mt-1">Manage your application settings.</p>
      </div>

      <div className="rounded-lg border border-mint-green bg-white p-6 shadow-sm">
        <p className="text-sm text-cool-grey">Settings will appear here.</p>
      </div>
    </div>
  )
}
