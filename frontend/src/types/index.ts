export type * from './auth'
export type * from './firestore'

/** Generic Server Action response shape */
export interface ActionResult<T = undefined> {
  success: boolean
  error?: string
  data?: T
}

/** Static team member entry — sourced from src/data/team.ts, not Firestore */
export interface TeamMember {
  name: string
  role: string
  photo: string
  blurb?: string
}
