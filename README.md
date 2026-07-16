<h1 align="center">GAITS — Gamified AI Tutoring System</h1>

<p align="center">
  <img src="https://img.shields.io/badge/status-under%20development-orange" alt="Under Development" />
  <img src="https://img.shields.io/badge/AI-powered-blueviolet" alt="AI Powered" />
  <img src="https://img.shields.io/badge/gamified-learning-brightgreen" alt="Gamified Learning" />
  <img src="https://img.shields.io/badge/research-academic-yellow" alt="Research Project" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License: MIT" />
</p>

<p align="center">
  Research and development of GAITS (Gamified AI Tutoring System), a CS50-inspired, AI-powered learning platform with a native IDE, developed as part of an academic research project on the usability and acceptability of gamified programming education. 
</p>

## Overview

GAITS provides AI tutoring, a native IDE, coding challenges, gamification (XP, levels, badges, leaderboards), progress tracking, and instructor management — designed for academic research in programming education.

---

## Tech Stack

| Layer          | Technology                              |
| -------------- | --------------------------------------- |
| Framework      | Next.js 15 (App Router)                 |
| Language       | TypeScript (strict mode)                |
| UI             | React 19, Tailwind CSS, shadcn/ui, Radix UI |
| Database       | PostgreSQL, Drizzle ORM                 |
| Auth           | Supabase Auth                           |
| AI             | Google Gemini, Groq                     |
| IDE            | Monaco Editor                           |
| Monorepo       | Turborepo                               |
| Package Manager| pnpm                                    |
| Code Quality   | ESLint, Prettier, Husky, lint-staged    |
| Deployment     | Vercel                                  |

---

## Project Structure

```
gaits/
├── apps/
│   ├── web/          # Student application (port 3000)
│   ├── admin/        # Admin dashboard (port 3001)
│   ├── landing/      # Marketing website (port 3002)
│   └── docs/         # Documentation (port 3003)
│
├── packages/
│   ├── ui/           # Shared UI components (shadcn/ui)
│   ├── auth/         # Supabase Auth (hooks, middleware, guards)
│   ├── ai/           # AI providers (Gemini, Groq), services, prompts
│   ├── database/     # Drizzle ORM schema, migrations, repositories
│   ├── config/       # Shared ESLint, Prettier, TypeScript, Tailwind configs
│   ├── types/        # Shared interfaces, DTOs, enums, API contracts
│   └── utils/        # Validators, formatters, constants, helpers
│
├── .husky/           # Git hooks (pre-commit, commit-msg)
├── package.json      # Root workspace configuration
├── pnpm-workspace.yaml
├── turbo.json        # Turborepo pipeline configuration
└── tsconfig.json     # Base TypeScript configuration
```

---

## Apps

### `apps/web` — Student Application

The primary student-facing app with:

- **Authentication** — Login, register, password reset
- **Dashboard** — Overview of progress, XP, and recent activity
- **Courses & Lessons** — Browse, enroll, and complete course content
- **Native IDE** — Monaco Editor with multi-language support
- **AI Tutor** — Real-time hints, code explanations, solution reviews
- **Challenges** — Coding problems with test cases and auto-grading
- **Gamification** — XP system, levels, badges, streaks, leaderboards
- **Progress Tracking** — Per-course and per-lesson progress
- **Profile & Settings** — User preferences and account management

### `apps/admin` — Administrator Dashboard

- User management (CRUD, role assignment)
- Course & lesson builder
- Challenge management
- Analytics & reporting
- AI prompt management
- Leaderboard configuration
- System settings

### `apps/landing` — Marketing Website

Static pages: Home, Features, Pricing, Research, About, Contact

### `apps/docs` — Documentation

MDX-powered docs: Developer Guide, API Docs, Architecture, Contributing Guide

---

## Packages

### `@gaits/ui`

Shared component library using shadcn/ui patterns:
- Button, Card, Input, Dialog, Badge, Progress, Avatar
- Table, Tabs, DropdownMenu, Sidebar, Navbar, Toast
- Uses Radix UI primitives + class-variance-authority + Tailwind

### `@gaits/database`

- Drizzle ORM with PostgreSQL
- Schema: users, courses, lessons, challenges, submissions, progress, gamification
- Repository pattern for data access
- Drizzle Kit for migrations

### `@gaits/auth`

- Supabase Auth (SSR-compatible)
- Browser & server clients
- Next.js middleware for route protection
- Hooks: `useAuth`, `useUser`
- Guards: `withAuth`, `withRole`
- Roles: Student, Instructor, Admin

### `@gaits/ai`

- Providers: Google Gemini, Groq
- Services: `TutorService`, `CodeReviewService`, `ChallengeService`
- Methods: `generateHint()`, `explainCode()`, `reviewSolution()`, `generateChallenge()`, `evaluateSubmission()`
- Shared prompts and tool definitions

### `@gaits/types`

Shared TypeScript types:
- Auth: `User`, `Session`, `AuthState`, `UserRole`
- Database: `Course`, `Lesson`, `Challenge`, `Submission`
- API: `ApiResponse`, `PaginatedResponse`, DTOs
- Gamification: `XPTransaction`, `Badge`, `Level`, `LeaderboardEntry`, `UserProgress`

### `@gaits/utils`

- Validators (Zod schemas for email, password, courses, challenges, pagination)
- Formatters (XP, duration, dates, relative time, file size, slugify, truncate)
- Constants (levels, XP config, API routes, cache keys)
- Helpers (calculateLevel, generateId, chunk, groupBy, pick, omit)

### `@gaits/config`

Shared configurations:
- ESLint (base + Next.js presets)
- Prettier (with Tailwind plugin)
- TypeScript (base, Next.js, library presets)
- Tailwind (brand colors, gamification colors, custom animations)

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+
- PostgreSQL database
- Supabase project
- Google AI API key and/or Groq API key

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/gaits.git
cd gaits

# Install dependencies
pnpm install

# Copy environment files
cp apps/web/.env.example apps/web/.env.local
cp apps/admin/.env.example apps/admin/.env.local

# Run database migrations
pnpm db:migrate

# Start all apps in development
pnpm dev
```

### Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Database
DATABASE_URL=

# AI Providers
GOOGLE_GENERATIVE_AI_API_KEY=
GROQ_API_KEY=
```

---

## Scripts

| Command             | Description                            |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | Start all apps in development          |
| `pnpm build`        | Build all apps and packages            |
| `pnpm lint`         | Lint all packages                      |
| `pnpm format`       | Format all files with Prettier         |
| `pnpm typecheck`    | Type-check all packages                |
| `pnpm test`         | Run tests across all packages          |
| `pnpm clean`        | Clean all build artifacts              |
| `pnpm db:generate`  | Generate Drizzle migrations            |
| `pnpm db:migrate`   | Run database migrations                |
| `pnpm db:push`      | Push schema to database                |

---

## Import Strategy

All internal packages use the `@gaits/` scope:

```typescript
import { Button, Card } from '@gaits/ui';
import { useAuth } from '@gaits/auth';
import { db, users } from '@gaits/database';
import { GeminiProvider, TutorService } from '@gaits/ai';
import type { User, Course } from '@gaits/types';
import { formatXP, calculateLevel } from '@gaits/utils';
```

---

## Code Quality

- **ESLint** — TypeScript-aware linting with import ordering
- **Prettier** — Consistent formatting with Tailwind plugin
- **Husky** — Git hooks for pre-commit (lint-staged) and commit messages
- **lint-staged** — Only lint/format staged files
- **TypeScript** — Strict mode, no `any`, path aliases

---

## Architecture Decisions

1. **Monorepo with Turborepo** — Shared code, parallel builds, intelligent caching
2. **pnpm workspaces** — Efficient dependency management, strict isolation
3. **Next.js App Router** — Server components, streaming, typed routes
4. **Drizzle ORM** — Type-safe SQL, lightweight, excellent DX
5. **Supabase Auth** — Managed auth with SSR support, row-level security
6. **Provider pattern for AI** — Swap between Gemini/Groq without code changes
7. **shadcn/ui** — Copy-paste components, full ownership, accessible by default

---

## License

MIT
