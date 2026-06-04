# Changelog

All notable changes to DevLog are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

---

## [0.1.0] — Issue #1 — CLI GitHub Activity Fetcher
### Added
- CLI script to fetch GitHub public events via REST API
- Saves raw response to `activity.json` using `fs`

---

## [0.2.0] — Issue #2 — Raw HTTP Server
### Added
- Raw Node.js HTTP server with no frameworks
- `/activity` and `/stats` endpoints with manual URL and method parsing

### Removed
- CLI as the primary entry point

---

## [0.3.0] — Issue #3 — Express Refactor
### Added
- Express app replacing the raw HTTP server
- Request logging middleware — method, URL, timestamp written to file

---

## [0.4.0] — Issue #4 — MongoDB + MVC
### Added
- MongoDB connection via Mongoose
- `User` and `CommitEvent` models
- MVC folder structure — `routes/`, `controllers/`, `models/`

---

## [0.5.0] — Issue #5 — Authentication
### Added
- `POST /auth/signup` and `POST /auth/login` routes
- JWT issued on login, stored in HTTP-only cookie
- `authenticate` middleware protecting dashboard routes

---


## [0.7.0] — Issue #6 — Avatar Upload
### Added
- `POST /profile/avatar` endpoint
- Multer middleware for disk storage
- File type and size validation

---

## [0.8.0] — Issue #7 — WebSocket Activity Feed
### Added
- Live activity feed panel via WebSockets
- GitHub API polled every 30s for new star events
- Real-time push notifications to connected clients

---

## [0.9.0] — Issue #8 — CSV Export via Streams
### Added
- `GET /export/commits` endpoint
- Transform stream converting commit data to CSV
- Streamed response — no full in-memory load

---

## [0.10.0] — Issue #9 — Cluster Mode
### Added
- `cluster.js` entry point
- One worker spawned per CPU core
- Auto-restart on worker crash

---

## [0.11.0] — Issue #10 — GraphQL Schema + Queries
### Added
- `/graphql` endpoint alongside existing REST routes
- `Query { user(username: String!): User }` type
- Resolvers wired to existing Mongoose models

---

## [0.12.0] — Issue #11 — GraphQL Mutations
### Added
- `mutation { updateProfile(...): User }`
- `mutation { linkGitHub(...): User }`

### Removed
- REST `POST /profile` and `PUT /profile/github` routes

---

## [0.13.0] — Issue #12 — Apollo Server
### Added
- Apollo Server integrated with Express
- Apollo Sandbox explorer at `/graphql`

### Removed
- Basic `express-graphql` setup

---

## [0.14.0] — Issue #13 — GraphQL Subscriptions
### Added
- `subscription { newStarEvent: StarEvent }`
- PubSub setup in `src/graphql/pubsub.js`

### Removed
- WebSocket-based activity feed from Issue #8

---

