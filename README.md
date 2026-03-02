# ESTRA Longevity Intelligence Platform

Production-oriented monorepo structure for an editorial, evidence-first platform with strict role-based access and governed contribution workflows.

## Folder Structure

- `src/` Frontend experience (React + TS + Tailwind + Recharts + Framer Motion style animations)
  - `app/pages/EvidenceCardPublic.tsx` 3-tab evidence card with RBAC UI gating and version history
  - `app/components/why-now/WhyNowCharts.tsx` WHY NOW responsive visualization block
  - `app/pages/ExpertProfile.tsx` expert profile surface linked to evidence cards
  - `app/pages/ContributionDashboard.tsx` editorial workflow dashboard
- `backend/` Deploy-ready API service (Node + Express + Prisma + PostgreSQL)
  - `src/middleware/` JWT auth, RBAC, rate limiting, bot detection
  - `src/routes/` auth, evidence, contributions, admin governance, WHY NOW datasets
  - `prisma/schema.prisma` governed domain models
  - `prisma/seed.ts` seeded admin, expert profile, and evidence card
  - `src/data/*.csv` chart data sources parsed server-side

## Security

- JWT authentication middleware
- Server-enforced RBAC by role and endpoint
- Rate limiter
- Basic bot detection middleware
- Validation-ready architecture for tokenized exports and watermarking extensions

## Backend Quickstart

```bash
cd backend
npm install
cp .env.example .env # create DATABASE_URL + JWT_SECRET
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

## Frontend Quickstart

```bash
npm install
npm run dev
```
