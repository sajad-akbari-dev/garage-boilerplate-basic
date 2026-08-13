import type { TeamMember } from '@/types'
import { cn } from '@/lib/utils'
import { TeamMemberPhoto } from './TeamMemberPhoto'

interface TeamMemberCardProps {
  member: TeamMember
}

function CardBody({ member, clampText }: { member: TeamMember; clampText: boolean }) {
  return (
    <>
      <TeamMemberPhoto src={member.photo} name={member.name} />

      <div className="flex flex-col gap-2 p-5">
        <h3
          className={cn(
            'font-inter text-2xl font-bold text-near-black',
            clampText && 'line-clamp-2'
          )}
        >
          {member.name}
        </h3>
        <p className="font-inter text-lg font-semibold text-forest-green">{member.role}</p>
        {member.blurb && (
          <p
            className={cn(
              'font-inter text-sm font-medium text-cool-grey',
              clampText && 'line-clamp-3'
            )}
          >
            {member.blurb}
          </p>
        )}
      </div>
    </>
  )
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="group relative h-full w-full">
      {/*
        Base card is always visible and always clamped — this is the only
        element the grid measures, so hovering can never resize sibling cards.
        The hover overlay below is absolutely positioned (excluded from grid
        sizing) and reveals the full, unclamped content on top of it.
      */}
      <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-mint-green bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        <CardBody member={member} clampText />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex max-h-full w-full flex-col overflow-hidden rounded-xl border border-mint-green bg-white opacity-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:z-20 group-hover:max-h-[700px] group-hover:scale-[1.03] group-hover:opacity-100 group-hover:shadow-xl"
      >
        <CardBody member={member} clampText={false} />
      </div>
    </div>
  )
}
