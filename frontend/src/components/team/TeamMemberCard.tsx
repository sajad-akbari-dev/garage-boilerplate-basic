import type { TeamMember } from '@/types'
import { TeamMemberPhoto } from './TeamMemberPhoto'

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-mint-green bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:z-20 hover:h-auto hover:scale-[1.2] hover:shadow-xl">
      <TeamMemberPhoto src={member.photo} name={member.name} />

      <div className="flex flex-col gap-2 p-5">
        <h3 className="line-clamp-2 font-inter text-2xl font-bold text-near-black group-hover:line-clamp-none">
          {member.name}
        </h3>
        <p className="font-inter text-lg font-semibold text-forest-green">{member.role}</p>
        {member.blurb && (
          <p className="line-clamp-3 font-inter text-sm font-medium text-cool-grey group-hover:line-clamp-none">
            {member.blurb}
          </p>
        )}
      </div>
    </div>
  )
}
