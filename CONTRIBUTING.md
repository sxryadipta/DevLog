```md
# Contributing to DevLog

## One Rule That Overrides Everything

Issues are numbered for a reason. Complete them in order. Issue #4 requires #3 to be done. Issue #11 requires #10. Do not skip ahead, do not backport changes. The sequential structure is the entire point of this project.

## Branch Naming

```
issue-<number>-<short-description>
```

Examples:
- `issue-03-express-refactor`
- `issue-07-multer-avatar-upload`
- `issue-11-graphql-schema`

## Commit Messages

Prefix every commit with the issue number in brackets.

```
[#03] Add request logging middleware
[#03] Write logger to file using fs
[#03] Test all routes in Postman
```

## Before Closing an Issue

Check all of these before merging and closing:

- [ ] The deliverable listed in the issue exists at the correct path
- [ ] No leftover `console.log` debug statements
- [ ] No `.env` values or secrets committed — use `.env.example` instead
- [ ] README updated if the issue changes the architecture or project structure

## What Not to Do

- Don't open a PR that touches files owned by a future issue
- Don't merge a branch that skips its prerequisite issue
- Don't refactor previous issues while working on a new one — open a separate cleanup issue if needed

## External Contributors

Open a discussion before writing any code. The sequential structure means parallel PRs almost always conflict, and work done out of order will not be merged regardless of quality.
```
