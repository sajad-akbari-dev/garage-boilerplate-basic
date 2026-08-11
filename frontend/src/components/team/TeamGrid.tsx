import type { TeamMember } from '@/types'
import { TeamMemberCard } from './TeamMemberCard'

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member) => (
        <TeamMemberCard key={member.name} member={member} />
      ))}
    </div>
  )
}
