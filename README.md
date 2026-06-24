# Stackfold

A developer-first SaaS platform for building and hosting your professional portfolio. Manage your profile, projects, and experience timeline - then ship it instantly at your own public URL.

**Live:** [stackfold.vercel.app](https://stackfold.vercel.app) &nbsp;·&nbsp; Portfolio URL: `/p/username`

---

## Features

- **AI Copilot** - manage your entire portfolio through natural language. Add projects, update your bio, change your theme, check analytics - all via chat.
- **Multi-tenant portfolios** - each user gets a unique public URL at `/p/username` with their own hosted portfolio page.
- **Project showcase** - add and manage projects with tech stack, features, live links, and GitHub URLs.
- **Experience timeline** - track your work history with roles, companies, and dates.
- **Theme switching** - toggle between dark and light themes instantly.
- **Visitor analytics** - real-time visit tracking with country breakdown and weekly/monthly summaries.
- **Cloudinary media** - project images and icons hosted and optimized via Cloudinary.
- **JWT authentication** - secure session handling with email verification.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Database | MongoDB + Mongoose |
| Auth | JWT |
| Styling | Tailwind CSS |
| AI | Google Gemini (via Vercel AI SDK) |
| Media | Cloudinary |
| Deployment | Vercel |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/theahmednagra/stackfold.git
cd stackfold
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_signing_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to get started.