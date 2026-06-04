# DevLog 🚀
### A Developer Activity Dashboard: Full-Stack Node.js Portfolio Project

> **Built sequentially as the repo-owner learn.** Every feature maps to a concept. Every concept ships as a GitHub Issue.

---

## What Is DevLog?

DevLog is a real-time developer analytics platform where you connect your GitHub account and get a live dashboard of your coding activity — commit heatmaps, language breakdowns, repo star notifications, streaks, and a shareable public profile. 

Learning objectives:
- **REST and GraphQL APIs to coexist** on the same server, powered by the same Mongoose models
- **Real-time activity feed** via GraphQL Subscriptions (the same tech GitHub and Shopify use in production)
- **Full auth system** with JWT, cookies, and role-based authorization
- **Production-ready patterns** — MVC architecture, cluster module, streaming CSV exports

---

## Live Demo

> _Link to be added after deployment_

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| APIs | GitHub REST API, GraphQL |
| GraphQL Server | Apollo Server |
| Real-time | WebSockets → GraphQL Subscriptions |
| Auth | JWT + Cookies |
| File Uploads | Multer |
| Streams | Node.js Transform Streams |
| Scaling | Node.js Cluster Module |

---

## Roadmap

The build is divided into **15 sequential GitHub Issues**, each targeting a specific concept. They are designed to be tackled one at a time — each issue builds directly on the last.

---

### Phase 1 — Pure Node.js Foundation

#### Issue #1 — CLI GitHub Activity Fetcher
**Concepts:** Node.js basics, built-in modules, File System  
Fetch your GitHub public events using the GitHub REST API from the command line. Save the raw response to a local `activity.json` file. No frameworks, no HTTP server — just Node and `fs`.

**Deliverable:** `cli/fetch-activity.js` — runnable with `node cli/fetch-activity.js <username>`

---

#### Issue #2 — Raw HTTP Server with `/activity` and `/stats`
**Concepts:** Node `http` module, URL parsing, HTTP methods  
Replace the CLI script with a raw Node HTTP server (no Express). Manually parse the URL and method to route requests to `/activity` and `/stats`. This forces you to see exactly what Express abstracts away.

**Deliverable:** `server-raw.js` — runs without any npm packages

---

### Phase 2 — Express + REST API

#### Issue #3 — Refactor to Express with Request Logging Middleware
**Concepts:** Express, REST APIs, Middleware, Postman  
Refactor the raw server into an Express app. Add custom middleware that logs every request — method, URL, and timestamp — to a file using `fs`. Test all routes in Postman and include screenshots in the PR.

**Deliverable:** `src/app.js`, `src/middleware/logger.js`

---

### Phase 3 — Database + MVC

#### Issue #4 — MongoDB Persistence with Mongoose Models
**Concepts:** MongoDB, Mongoose, MVC architecture  
Persist GitHub activity data to MongoDB. Create Mongoose models for `User` and `CommitEvent`. Refactor the entire codebase into proper MVC — `routes/`, `controllers/`, and `models/` in separate folders.

**Deliverable:** Full MVC directory structure, two Mongoose schemas

---

### Phase 4 — Authentication

#### Issue #5 — Auth System: Signup, Login, JWT + Cookies
**Concepts:** Authentication, JWT, Cookies  
Add a login and signup system. Users connect their GitHub username on signup. JWT tokens are issued on login and stored in HTTP-only cookies. All dashboard routes are protected behind an `authenticate` middleware.

**Deliverable:** `POST /auth/signup`, `POST /auth/login`, `GET /dashboard` (protected)

---

#### Issue #6 — Role-Based Authorization + Public Profile URL
**Concepts:** Authorization, roles  
Add two roles: `owner` (full private stats) and `viewer` (read-only). Implement a public shareable profile at `GET /user/:username` that any visitor can see without logging in. Protect owner-only routes with an `authorize` middleware.

**Deliverable:** `src/middleware/authorize.js`, `GET /user/:username`

---

### Phase 5 — File Uploads

#### Issue #7 — Avatar Upload with Multer
**Concepts:** Multer, multipart form data  
Let users upload a profile picture stored to disk via `POST /profile/avatar`. Validate file type (images only) and size. _(Bonus: swap local disk storage for Cloudinary — worth adding to your resume.)_

**Deliverable:** `src/middleware/upload.js`, avatar stored in `uploads/`

---

### Phase 6 — Real-Time

#### Issue #8 — Live Activity Feed with WebSockets
**Concepts:** WebSockets, `ws` library  
Add a live activity feed panel to the dashboard. Poll the GitHub API every 30 seconds for new star events. When a new star is detected, push a real-time notification to all connected clients over WebSockets.

**Deliverable:** `src/ws/activityFeed.js`, client-side event listener in `public/`

---

### Phase 7 — Streams

#### Issue #9 — CSV Export with Node Transform Streams
**Concepts:** Node.js Streams, Transform streams  
Add a `GET /export/commits` endpoint that streams the user's full commit history as a downloadable CSV. Use a `Transform` stream to convert raw data to CSV format — no loading everything into memory at once.

**Deliverable:** `src/streams/csvExport.js`

---

### Phase 8 — Scalability

#### Issue #10 — Cluster Mode Entry Point
**Concepts:** Node.js Cluster module, CPU cores  
Add a `cluster.js` entry point that spawns one worker per CPU core using the `cluster` module. Workers share the same port. Document in the README why this matters for production Node.js applications.

**Deliverable:** `cluster.js`, updated README section on clustering

---

### Phase 9 — GraphQL (Parallel API Layer)

#### Issue #11 — GraphQL Schema, Queries + Resolvers
**Concepts:** GraphQL schema definition, queries, resolvers  
Add a `/graphql` endpoint alongside your existing REST routes. Define a `Query { user(username: String!): User }` type. Wire resolvers to the same Mongoose models that power your REST API. Both APIs now coexist on the same server.

**Deliverable:** `src/graphql/schema.js`, `src/graphql/resolvers.js`

---

#### Issue #12 — GraphQL Mutations for Profile Updates
**Concepts:** GraphQL mutations, MongoDB writes  
Replace the REST `POST /profile` and `PUT /profile/github` routes with GraphQL mutations — `updateProfile` and `linkGitHub`. Demonstrate in the README that the same Mongoose models back both REST and GraphQL.

**Deliverable:** `mutation { updateProfile(...): User }`, `mutation { linkGitHub(...): User }`

---

#### Issue #13 — Migrate to Apollo Server
**Concepts:** Apollo Server, Express integration  
Swap the basic `express-graphql` setup for Apollo Server integrated with Express. This gives you the **Apollo Sandbox explorer** at `/graphql` (like Postman for GraphQL). Include a screenshot of the Sandbox in your README — it's a great visual for your portfolio.

**Deliverable:** `src/graphql/apollo.js`, Apollo Sandbox screenshot in `/docs`

---

#### Issue #14 — GraphQL Subscriptions: Live Star Event Feed
**Concepts:** GraphQL Subscriptions, PubSub, WebSocket transport  
Replace the WebSocket-based activity feed (Issue #8) with a proper GraphQL Subscription — `subscription { newStarEvent }`. The real-time feature is now expressed cleanly in GraphQL using the same transport layer. This is exactly what production systems like GitHub's own API use.

**Deliverable:** `subscription { newStarEvent: StarEvent }`, `src/graphql/pubsub.js`

---




## License

MIT
