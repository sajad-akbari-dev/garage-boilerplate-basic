# Requirements

This folder holds the BA's requirements work — what the feature needs to do, from the client/user's point of view. It does **not** hold app code or design files.

## What goes here

- `requirements.md` — the core requirements doc / PRD for the feature (login page → team page)
- `user-stories.md` — user stories with acceptance criteria, if kept separate from the main doc
- Any notes from the client meeting that shaped requirements (or link to the planning folder's meeting notes if PM owns those)

## How to commit it

1. Branch off: `docs/requirements-<short-description>` (e.g. `docs/requirements-login-team-page`)
2. Add your file(s), commit, push
3. Open a PR into main
4. Merge once it's reviewed

Remember: BA can pick up development tasks if needed, but this folder itself is BA territory — keep it focused on requirements, not implementation details.

## Linking it back to Planner

Once merged, copy the file's GitHub link into the **Notes field** of the relevant Planner card:

- **Done:** what requirements work you completed
- **Deliverable:** the GitHub link to the file
- **Note for next role:** open questions, assumptions you made, anything the next person (usually UX or Dev) needs to know before building

## Naming

Lowercase, hyphenated, no spaces: `requirements.md`, `user-stories.md`.
