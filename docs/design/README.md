# Design

This folder holds the UX work for the feature — wireframes, mockups, and design decisions for the login page and team page. It does **not** hold app code.

## What goes here

- If your design files live in Git-friendly formats (images, PDFs, markdown): put them directly here, e.g. `login-wireframe.png`, `team-page-mockup.png`
- If they live in an external tool (Figma, etc.): don't force the raw files in — add `design-links.md` with the share link(s) instead, so there's still a commit and a discoverable path
- `design-notes.md` — any decisions worth recording (colour/style choices, why a layout was picked, states covered)

## How to commit it

1. Branch off: `docs/design-<short-description>` (e.g. `docs/design-login-team-page`)
2. Add your file(s) or link file, commit, push
3. Open a PR into main
4. Merge once it's ready

## Linking it back to Planner

Once merged, copy the file's GitHub link (or the Figma link if that's what you committed) into the **Notes field** of the relevant Planner card:

- **Done:** what design work you completed
- **Deliverable:** the GitHub link (or Figma link) to the design
- **Note for next role:** anything Dev needs to know before building — spacing, states, edge cases, what's intentionally out of scope

## Naming

Lowercase, hyphenated, no spaces: `login-wireframe.png`, `design-links.md`.
