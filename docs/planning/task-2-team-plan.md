# Task 2 — Mock Sprint: Team Plan

**Course:** COSC2408 Programming Project 1
**What we're building:** A styled login page that leads into a team page (team name, each member's photo/name/role, short blurb), using the garage boilerplate.
**Worth:** 4 points (the biggest single chunk of the 8 available)
**Budget:** 3 hours each, 15 hours total.

---

## 1. Roles

We have 4 people covering 5 roles, so one person doubles up.

| Role | Person | Notes |
|---|---|---|
| PM | | Writes cards, signs off last, submits everything |
| BA | | Requirements + design validation |
| UX | | Mockups for login + team page |
| Dev 1 | | Builds the feature |
| Dev 2 | | Tests the feature |

**Hard rules from the assignment (these are graded, not suggestions):**
- PM cannot also be Dev 1 or Dev 2
- Dev 1 and Dev 2 must be different people
- Developers never test their own code
- A BA may pick up development tasks, but developers never pick up BA tasks
- Only the PM marks a task Done

Once agreed, record the final roles in the **Loop document in our Teams channel** (separate assignment requirement, easy to forget).

---

## 2. The Board

- Import the **Capstone Programming Project Template** from Shared at planner.cloud.microsoft, **as a copy** — do not edit the shared template
- Name it: **"Week 4 - project : Team X"**
- 9 buckets, 9 pre-loaded tasks
- Assign every task to a real person immediately

### How to work a card

1. Move it into your column **only when you're actually starting it** — no working ahead
2. Tick each Acceptance Criteria item **only when genuinely done**
3. Add a completion comment in the card's **Notes field** before moving it forward (chat/tagging is fine for discussion, but the handoff itself must be in the notes)
4. Move it to the next bucket **immediately** once done — the board should reflect reality, not what we'll update later

### Handoff structure (use this exact shape)

```
Done: one line on what you actually completed.
Deliverable: link to where it lives (doc, design file, branch/commit, deployed URL).
Note for next role: assumptions you made, edge cases handled, what you left out of scope.
```

---

## 3. Task Flow & Dependencies

Based on the worked example provided by the teaching team, the sequence runs roughly like this. Confirm against the real card names once the board is imported.

| # | Task | Role | Depends on |
|---|---|---|---|
| 1 | Write requirements: team page & login styling | BA | Client/team discussion |
| 2 | Design login style & team page layout | UX | Task 1 |
| 3 | Validate design against requirements | BA | Task 2 |
| 4 | Style login page | Dev 1 | Task 3 |
| 5 | Build team page & auth redirect | Dev 1 | Task 4 |
| 6 | Test login → redirect → team page flow | Dev 2 | Task 5 |
| 7 | Test edge cases & log bugs | Dev 2 | Task 6 |
| 8 | Final review & sign-off | PM | Tasks 1–7 |
| 9 | Master document | PM/team | Ongoing, assembled throughout |

**The chain matters.** Dev 1 is blocked until BA and UX finish. Dev 2 is blocked until Dev 1 finishes. If BA and UX drift, everyone downstream loses their window. Front-load tasks 1–3.

### Master document

Task 2 says to replace the master document subtask on the board with our own version. It collects every task's completion comment, git URL, and screenshots into one document. The worked example (Master-Document-EXAMPLE.docx) shows the format: one section per task with Role, Date, Done/Deliverable/Note for next role, git URL, and a screenshot of real output where relevant. Build this as we go, not at the end.

---

## 4. Repo & Git Workflow

**Repo:** https://github.com/sajad-akbari-dev/garage-boilerplate-basic (public, one shared repo for the whole team)

### Getting set up

```bash
git clone https://github.com/sajad-akbari-dev/garage-boilerplate-basic.git
cd garage-boilerplate-basic
git checkout docs/planning-readme     # PM
git checkout docs/requirements-readme # BA
git checkout docs/design-readme       # UX
```

Cloning downloads all branches, but only creates `main` locally. The `git checkout` above creates your local branch and links it to the remote one.

### Folder structure

```
docs/
├── planning/       ← PM: sprint plan, meeting notes, board export
├── requirements/   ← BA: requirements doc, user stories
└── design/         ← UX: mockups, wireframes, or a links file
```

Each folder has a README explaining what goes there and how to commit it.

### Two things that will trip you up

**1. Commit messages must follow Conventional Commits.** A git hook (lefthook) will reject anything else. Format: `type(scope): description`

```
docs: add requirements document
feat: add team page component
fix(auth): handle redirect on invalid session
```

Valid types: `feat` `fix` `docs` `style` `refactor` `test` `chore` `build` `ci` `perf` `revert`

**2. You cannot push directly to `main`.** A branch ruleset blocks it. Work on your branch, then open a Pull Request into main and merge it.

### The full loop

```bash
git checkout -b docs/your-branch-name   # or checkout an existing one
# do your work
git add <your files>
git commit -m "docs: short description"
git push -u origin docs/your-branch-name
# then open a PR on GitHub and merge it
```

### Everyone must commit

The assignment states explicitly that **everyone makes at least one commit**. This is not just for devs — PM commits planning docs, BA commits requirements, UX commits designs or a links file. Any document apart from the Planner board itself lives in Git and is linked from the board.

If your design files live in Figma, don't force the raw files into Git — commit a `design-links.md` with the share link instead.

---

## 5. What Everyone Needs to Bring

Collect at the first meeting so nobody's chasing it later:

- Photo/headshot (or say if you don't have one, so UX can design a placeholder avatar)
- Full name as it should appear
- Role
- Short blurb (say if yours is long, so the design accounts for it)
- GitHub username (for collaborator invite)
- Task 1 individual repo URL (needed for the individual performance summary)

---

## 6. Timeline

Working back from submission, with 3 hours each:

| Day | What happens | Who |
|---|---|---|
| Day 1 | Roles locked, board imported and assigned, repo cloned by everyone, assets collected | Everyone |
| Day 1–2 | Requirements written (Task 1), design started (Task 2) | BA, UX |
| Day 2 | Design validated (Task 3) | BA |
| Day 3 | Login styled, team page built (Tasks 4–5) | Dev 1 |
| Day 4 | Flow tested, edge cases tested (Tasks 6–7) | Dev 2 |
| Day 4 | Fixes if bugs found | Dev 1 |
| Day 5 | Final review and sign-off (Task 8), master doc finalised, deploy confirmed live | PM |
| Day 5 | Buffer + submission prep | PM |

Build in the buffer deliberately. If testing finds bugs, Dev 1 needs time to fix and Dev 2 needs time to retest.

---

## 7. Submission Checklist (PM submits everything together)

- [ ] Mock sprint board exported from Planner (Export to Excel)
- [ ] Real project board exported (separate board, provided Week 4 Tuesday)
- [ ] Team performance summary + overall reflection (template provided)
- [ ] 2-minute video presenting the team, using the artifact from Task 2
- [ ] Individual team performance summary, including each person's Task 1 GitHub URL
- [ ] Project proposal and Sprint 1 plan (Task 3)
- [ ] Task 4 target grade form — **completed individually by each person**
- [ ] Team card updated on the Team Status page
- [ ] Board link + live deployed URL
- [ ] All 9 tasks in Done, each with checklist ticked and completion comment

---

## 8. Where Marks Get Lost

Worth reading twice, because these are the avoidable ones:

- Cards moved before work actually started, or ticked before genuinely done
- Completion comments missing, or put in chat instead of the Notes field
- Someone with zero commits in the repo
- A dev testing their own code
- Someone other than the PM marking a task Done
- Documents that exist but aren't linked from the board
- Board not reflecting reality at the moment it gets marked

---

## 9. Other Deadlines This Fortnight

- Supervisor meeting must happen **before the end of Week 4**
- Client meeting: offer 4–5 time slots across the week, invite both Nhi and Alessio, prepare an agenda, ask permission to record
- Task 3 (Client Proposal & Sprint 1 Plan) uses a **separate board** — do not use this mock sprint board for it
- Cameras on for client and supervisor meetings. If your camera isn't working, tell the PM beforehand so they can apologise to the client.
