# 🐕 Hundefreunde Herzogenrath Website

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Contentful](https://img.shields.io/badge/Contentful-CMS-2478CC?style=for-the-badge&logo=contentful)

**Moderne Website für den Hundesportverein Hundefreunde Herzogenrath e.V.**

[🌐 Live Website](https://hundefreunde-herzogenrath.de) • [📧 Kontakt](mailto:info@hundefreunde-herzogenrath.de)

## 📖 Über das Projekt

Die offizielle Website der **Hundefreunde Herzogenrath e.V.** - ein moderner, responsiver Webauftritt für den traditionsreichen Hundesportverein aus der Städteregion Aachen. Die Website bietet umfassende Informationen über Kurse, Termine, das Team und aktuelle Neuigkeiten.

### 🎯 Hauptfunktionen

- 📝 **Content Management** - Dynamische Inhalte über Contentful CMS
- 🖼️ **Bildergalerien** - Interaktive Galerie für Events und Aktivitäten
- 📰 **Blog-System** - Aktuelle Nachrichten und Vereinsinformationen
- 📅 **Kursmanagement** - Detaillierte Kursinformationen und Terminplanung
- 👥 **Team-Profile** - Vorstellung der Trainer und Vereinsmitglieder
- 🎨 **Modernes Design** - Responsive Layout mit Tailwind CSS
- ⚡ **Performance** - Optimiert für schnelle Ladezeiten und SEO

## 🚀 Tech Stack

### Frontend

- **[Next.js 14](https://nextjs.org/)** - React Framework mit App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Typsichere Entwicklung
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-First CSS Framework
- **[React](https://reactjs.org/)** - UI Bibliothek

### Content Management

- **[Contentful](https://www.contentful.com/)** - Headless CMS
- **[Contentful Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)** - Content API

### Entwicklung & Build

- **[PNPM](https://pnpm.io/)** - Package Manager
- **[ESLint](https://eslint.org/)** - Code Linting
- **[PostCSS](https://postcss.org/)** - CSS Processing

### Hosting & Deployment

- **[Vercel](https://vercel.com/)** - Deployment Platform

## 🛠️ Installation & Entwicklung

### Voraussetzungen

- Node.js 18+
- PNPM (empfohlen) oder npm
- Git

### Lokale Entwicklung starten

1. **Repository klonen**

```bash
git clone https://github.com/parns/next.hundefreunde-herzogenrath.de.git
cd next.hundefreunde-herzogenrath.de
```

2. **Abhängigkeiten installieren**

```bash
pnpm install
# oder
npm install
```

3. **Umgebungsvariablen konfigurieren**

```bash
# .env.local erstellen und Contentful API Keys hinzufügen
cp .env.example .env.local
```

4. **Entwicklungsserver starten**

```bash
pnpm dev
# oder
npm run dev
# oder
yarn dev
# oder
bun dev
```

5. **Website öffnen**  
   Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

### 📝 Entwicklung

- Bearbeite `app/page.tsx` um die Startseite zu ändern
- Die Seite aktualisiert sich automatisch bei Änderungen
- Nutze das [Next.js Font System](https://nextjs.org/docs/basic-features/font-optimization) für optimierte Schriftarten

## 📚 Projektstruktur

```
├── app/                    # Next.js App Router
│   ├── (content)/         # Gruppierte Routen
│   └── globals.css        # Globale Styles
├── components/            # React Komponenten
│   ├── blog/             # Blog-spezifische Komponenten
│   ├── gallery-card/     # Galerie Komponenten
│   └── navigation/       # Navigation & Layout
├── data-provider/        # Contentful Integration
│   └── contentful/       # API Client & Provider
├── public/               # Statische Assets
└── sections/             # Seiten-Sektionen
```

## 🔧 Verfügbare Scripts

```bash
pnpm dev          # Entwicklungsserver starten
pnpm build        # Production Build erstellen
pnpm start        # Production Server starten
pnpm lint         # Code Linting
pnpm type-check   # TypeScript Typen prüfen
```

## 📈 SEO & Performance

- ✅ **Core Web Vitals** optimiert
- ✅ **Strukturierte Daten** für bessere Suchmaschinenerkennung
- ✅ **Meta Tags** für Social Media Sharing
- ✅ **Responsive Images** mit Next.js Image Optimierung
- ✅ **Semantic HTML** für Barrierefreiheit
- ✅ **Lighthouse Score** 90+ in allen Kategorien

## 🌐 Deployment

### Automatisches Deployment mit Vercel

Die Website wird automatisch bei Push auf den `main` Branch deployed.

[![Deploy mit Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/next.hundefreunde-herzogenrath.de)

### Manuelle Deployment

```bash
# Build erstellen
pnpm build

# Build testen
pnpm start
```

## 📖 Weiterführende Ressourcen

- 📚 [Next.js Dokumentation](https://nextjs.org/docs) - Erfahre mehr über Next.js Features und API
- 🎓 [Next.js Tutorial](https://nextjs.org/learn) - Interaktives Next.js Tutorial
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs) - Utility-First CSS Framework
- 📝 [Contentful Docs](https://www.contentful.com/developers/docs/) - Headless CMS Dokumentation

Du kannst auch das [Next.js GitHub Repository](https://github.com/vercel/next.js/) besuchen - Feedback und Beiträge sind willkommen!

## 🤝 Mitwirken

Beiträge sind herzlich willkommen! Bitte beachte folgende Schritte:

1. 🍴 Fork das Repository
2. 🔀 Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push zum Branch (`git push origin feature/AmazingFeature`)
5. 🔃 Öffne eine Pull Request

## 📄 Lizenz

Dieses Projekt ist proprietary Software, entwickelt für die **Hundefreunde Herzogenrath e.V.**

Alle Rechte vorbehalten. Die Nutzung, Vervielfältigung oder Verbreitung ohne ausdrückliche schriftliche Genehmigung ist untersagt.

---

**Mit ❤️ entwickelt für die Hundefreunde Herzogenrath e.V. von Patrick Arns [https://arns.dev](https://arns.dev) **

## 👨‍💻 Autor

**Patrick Arns**  
_Full-Stack Developer & Digital Solutions Architect_

[![Website](https://img.shields.io/badge/Website-arns.dev-blue?style=for-the-badge&logo=safari)](https://arns.dev)
[![GitHub](https://img.shields.io/badge/GitHub-PatrickArns-black?style=for-the-badge&logo=github)](https://github.com/PArns)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/patrick-arns)

_Spezialisiert auf Rust & VPN Technik_
