# Dejin Website

Next.js 14+ App Router website for dejin.io

## Project Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: JavaScript (not TypeScript)
- **Styling**: Tailwind CSS v3
- **UI Components**: Custom React components
- **AI**: Anthropic API (claude-sonnet-4-6)
- **Hosting**: Vercel

## Setup

### Prerequisites

- Node.js 20.x LTS (`nvm install 20`)
- npm 10.x or higher

### Installation

```bash
nvm use
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in required values:

```bash
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  ├── layout.jsx          # Root layout with fonts
  ├── page.jsx            # Homepage
  └── api/                # API routes
components/              # Reusable React components
content/                 # Content files (copy, data)
lib/                     # Utilities and helpers
  ├── metadata.js         # SEO metadata
  ├── fonts.js            # Font configuration
  └── rate-limit.js       # Rate limiting for APIs
public/                  # Static assets
styles/                  # Global CSS
```

## Deployment

Deploy to Vercel:

```bash
git push origin main
```

GitHub auto-deploy is configured on Vercel.

## Documentation

See the `c:\MyApps\claudespace\Dejin\Website\` folder for:
- `03a_Dejin_PRD_Structure_v2.0.md` — Component specs
- `03b_Dejin_PRD_Content_v2.0.md` — Copy and content
- `05_Dejin_Style_Guide_v2.0.md` — Design system

## Brand Colors

- **Primary**: #F28C28 (Dejin Orange)
- **Dark**: #1F2428 (Charcoal)
- **Light**: #FFF3E6 (Cream)
- **Accent**: #2AAE9F (Teal), #FDBA4D (Amber), #111827 (Navy)

## Brand Fonts

- **Display**: Manrope (headlines, UI text)
- **Body**: Inter (body copy)
