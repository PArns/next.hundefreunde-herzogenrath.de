# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 website for **Hundefreunde Herzogenrath e.V.**, a dog training club in the Aachen region of Germany. The site uses the App Router architecture with TypeScript, Tailwind CSS, and Contentful as a headless CMS.

## Development Commands

### Essential Commands
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Create production build (runs prebuild.js first)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Package Management
This project uses **pnpm** as the package manager (version 10.20.0). Always use `pnpm` commands, not npm or yarn.

## Architecture Overview

### Content Management Strategy
The site uses **Contentful** as a headless CMS with a GraphQL API. Content is fetched server-side using the Contentful GraphQL API (`data-provider/contentful/client/index.tsx`).

**Environment Variables Required:**
- `CONTENTFUL_SPACE_ID` - Contentful space identifier
- `CONTENTFUL_ACCESS_TOKEN` - Delivery API token
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN` - Preview API token (optional)
- `NEXT_PUBLIC_GOOGLE_API_KEY` - Google Calendar API key
- `NEXT_PUBLIC_GOOGLE_CALENDAR_ID` - Google Calendar ID for events

### Directory Structure

**`app/`** - Next.js App Router
- `app/(content)/` - Route group for main content pages (shares layout with header/footer/jumbotron)
- `app/layout.tsx` - Root layout with global styles
- `app/(content)/layout.tsx` - Content layout with navigation, jumbotron, and footer
- Static generation is preferred: many pages use `export const dynamic = "force-static"`

**`components/`** - Reusable React components organized by feature:
- `navigation/` - Header, Footer, Jumbotron components
- `blog/` - Blog-related components
- `gallery-card/` - Gallery display components
- `contentful/` - Contentful-specific rendering components
- `*-structured-data/` - SEO structured data components (JSON-LD)

**`sections/`** - Page sections used to compose pages (e.g., `motd/`, `kurse/`, `neuigkeiten/`, `bilder/`, `anfahrt/`, `faq/`)

**`data-provider/contentful/`** - Contentful integration layer
- `client/` - GraphQL fetch function
- `provider/` - Data providers for different content types (blog posts, galleries, MOTD)
- `types/` - TypeScript types for Contentful content models

**`configuration/`** - Site configuration
- `index.tsx` - Base site configuration (title, description, baseUrl, blogPostsPerPage)
- `kursData.tsx` - Static course/training data

**`public/`** - Static assets (images, etc.)

### Build Process

**prebuild.js** - Runs before each build to generate `build-info.json` containing:
- Version from package.json
- Commit count from GitHub API
- Build date
- Build number format: `{version}.{commitCount}`

This build info is used by the build-number component.

### Contentful Data Flow

1. GraphQL queries are sent via `fetchGraphQL()` in `data-provider/contentful/client/index.tsx`
2. Providers in `data-provider/contentful/provider/` fetch and transform data
3. Components consume data and render using Contentful's rich text renderer (`@contentful/rich-text-react-renderer`)

**Key Content Types:**
- Blog Posts (TypeBlogPost)
- Image Galleries (TypeImageGallery)
- MOTD (Message of the Day)
- Projects

### Image Handling

Next.js Image component is configured for Contentful CDN:
- Remote patterns: `images.ctfassets.net`, `downloads.ctfassets.net`
- Formats: WebP, AVIF
- Cache TTL: 30 days (2592000 seconds)
- Custom device sizes and image sizes defined in `next.config.mjs`

### Styling & UI

- **Tailwind CSS 4** with Typography plugin
- Custom breakpoint: `max-w-(--breakpoint-2xl)` used throughout layouts
- Dark mode support: `darkMode: "selector"` (class-based)
- Global styles in `app/globals.css` and `app/body.css`
- Prettier with tailwindcss plugin for class sorting

### Route Groups

The `(content)` route group shares a common layout with:
- Header with navigation menu
- Jumbotron with hero image
- Footer with links
- Constrained max-width container

Pages outside this group (if any) use the root layout only.

### Static Site Generation

Most pages use static generation (`force-static` or default behavior). Contentful content is fetched at build time with `cache: "no-store"` to ensure fresh content on each build.

### SEO & Structured Data

The site includes comprehensive SEO features:
- Metadata generation per page
- Structured data components for:
  - LocalBusiness
  - Articles
  - FAQ
  - ImageGallery
- Sitemap generation (`app/sitemap.tsx`)
- Robots.txt (`app/robots.tsx`)

### Third-Party Integrations

- **@next/third-parties/google** - YouTube embeds
- **@vercel/analytics** - Analytics
- **@fullcalendar** - Event calendar with Google Calendar integration
- **embla-carousel** - Image carousels
- **react-photo-album** - Photo gallery layouts

## Development Guidelines

### TypeScript Paths
Path aliases use `@/*` mapping to root directory (defined in `tsconfig.json`).

### Performance Optimizations
Package imports are optimized in `next.config.mjs`:
- @heroicons/react
- @headlessui/react
- @contentful/rich-text-react-renderer
- react-photo-album
- embla-carousel-react

### Deployment
The site is deployed on **Vercel** with automatic deployments from the main branch.

## Content Editing Workflow

Content is managed in Contentful CMS. When content is updated:
1. Changes are made in Contentful
2. Webhook triggers Vercel rebuild (if configured), or
3. Manual deployment/build fetches latest content

## Key Files to Reference

- `next.config.mjs` - Next.js configuration including image domains
- `configuration/index.tsx` - Site-wide settings and constants
- `app/(content)/layout.tsx` - Main layout structure and navigation
- `data-provider/contentful/client/index.tsx` - Contentful API client
