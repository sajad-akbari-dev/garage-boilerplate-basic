# Planning

This folder holds everything the PM produces for the sprint — plans, meeting notes, and board exports. It does **not** hold app code.

## What goes here

- `sprint-1-plan.md` — the sprint plan (goals, scope, timeline)
- `meeting-notes-YYYY-MM-DD.md` — one file per client/team meeting
- `board-export.xlsx` — Planner board export when it's due at submission
- Anything else that's a planning artifact rather than requirements or design

## How to commit it

1. Branch off: `docs/planning-<short-description>` (e.g. `docs/planning-sprint-1`)
2. Add your file(s), commit, push
3. Open a PR into main (even for docs — it keeps a clean commit history everyone can point to)
4. Merge once it's ready

## Linking it back to Planner

Once merged, copy the file's GitHub link (permalink, not just the branch URL) into the **Notes field** of the relevant Planner card using the handoff structure:

- **Done:** what you completed
- **Deliverable:** the GitHub link to the file
- **Note for next role:** anything the next person needs before they start

Only move the card once the comment is in — that's what "the board should always reflect reality" means in practice.

## Naming

Lowercase, hyphenated, no spaces: `sprint-1-plan.md` not `Sprint 1 Plan.md`. Makes linking and searching painless later.
