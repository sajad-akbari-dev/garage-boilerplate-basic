import type { Metadata } from 'next'
import { teamName, teamSubheading, teamMembers } from '@/data/team'
import { TeamGrid } from '@/components/team/TeamGrid'

export const metadata: Metadata = { title: 'Team' }

export default function TeamPage() {
  return (
    <div className="-m-6 min-h-screen bg-pale-mint px-[34px] py-8">
      <div className="mb-8 text-center">
        <h1 className="font-space-grotesk text-5xl font-bold text-near-black">{teamName}</h1>
        {teamSubheading && <p className="mt-1 font-inter text-lg text-cool-grey">{teamSubheading}</p>}
      </div>

      <TeamGrid members={teamMembers} />
    </div>
  )
}
