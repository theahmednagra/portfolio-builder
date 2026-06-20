# Stackfold - Portfolio Builder SaaS

An extensible, developer-first SaaS platform designed to abstract, curate, and scale your professional digital identity. Seamlessly build, manage, and deploy a high-performance portfolio featuring deep theme customization, instant hosting, and real-time visitor tracking.

---

## System Design & Capabilities

* **Decoupled Data Architecture:** Decoupled structural layers for managing profile, projects, and professional timelines without strict aesthetic dependencies.
* **Granular Identity Routing:** Multi-tenant structural paradigm allowing unique runtime spaces for distinct public developer profiles.
* **Agile State & Experience Layers:** Unified contextual states orchestrating application behavior, inclusive of integrated global themes, hotkey commands, and interactive components.
* **Universal Asset & Analytics Pipelines:** Integrated operational pipelines managing high-capacity media routing, system lifecycle telemetry, and public interaction logging.
* **Bulletproof Edge Protocols:** Session validation rules working concurrently with deep structural input validation schemas to intercept and sanitize inputs at the architectural edge.

---

## Tech Stack

* **Frontend Framework:** Next.js (App Router) & React
* **Language:** TypeScript
* **Database & Modeling:** MongoDB & Mongoose
* **Styling:** Tailwind CSS & React Icons
* **Image Management:** Cloudinary API

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/theahmednagra/portfolio-builder.git
cd portfolio-builder
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and configure your keys:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_signing_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Fire Up the Development Server
```bash
npm run dev
```