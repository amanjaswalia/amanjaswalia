import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/i18n/language-context"

const inter = Inter({ subsets: ["latin"] })

// Get the base URL for metadata - works with Vercel preview deployments
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return "https://amandeepsingh.dev"
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "Amandeep Singh | Full Stack Engineer - React, Next.js, Node.js, Django, AI",
    template: "%s | Amandeep Singh",
  },
  description:
    "Full Stack Engineer with 13+ years of experience building scalable web and mobile solutions. Specializing in React, Next.js, Node.js, Django, Python, React Native, and AI integrations. Based in Mohali, India, available for immediate hire worldwide with 40+ hours/week.",
  keywords: [
    "Full Stack Developer",
    "Full Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Django Developer",
    "Python Developer",
    "React Native Developer",
    "AI Solutions Specialist",
    "TypeScript Developer",
    "Freelance Developer India",
    "SaaS Development",
    "NestJS Developer",
    "GraphQL Developer",
    "FastAPI Developer",
    "PostgreSQL",
    "MongoDB",
    "AWS Developer",
    "Mohali Developer",
    "Hire Full Stack Developer",
    "Remote Developer US Timezone",
  ],
  authors: [{ name: "Amandeep Singh", url: "https://amandeepsingh.dev" }],
  creator: "Amandeep Singh",
  publisher: "Amandeep Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "fr-FR": "/?lang=fr",
      "de-DE": "/?lang=de",
      "es-ES": "/?lang=es",
      "nl-NL": "/?lang=nl",
      "it-IT": "/?lang=it",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR", "de_DE", "es_ES", "nl_NL", "it_IT"],
    url: getBaseUrl(),
    title: "Amandeep Singh | Full Stack Engineer - React, Next.js, Node.js, Django, AI",
    description:
      "Full Stack Engineer with 13+ years experience. React, Next.js, Node.js, Django, React Native, AI integrations. Available for immediate hire, 40+ hrs/week, US timezone.",
    siteName: "Amandeep Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amandeep Singh - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amandeep Singh | Full Stack Engineer - React, Next.js, Django, AI",
    description:
      "Full Stack Engineer with 13+ years experience. React, Next.js, Node.js, Django, AI integrations. Available for hire.",
    creator: "@amanjaswalia",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amandeep Singh",
  url: "https://amandeepsingh.dev",
  jobTitle: "Full Stack Engineer",
  description: "Full Stack Engineer with 13+ years of experience building scalable web and mobile solutions.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mohali",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  email: "amanjaswalia@gmail.com",
  telephone: "+919915020036",
  sameAs: [
    "https://www.linkedin.com/in/amanjaswalia/",
    "https://github.com/amanjaswalia",
    "https://x.com/amanjaswalia",
    "https://t.me/amanjaswalia7",
  ],
  knowsAbout: [
    "React", "Next.js", "Node.js", "Django", "Python", "TypeScript",
    "React Native", "NestJS", "GraphQL", "FastAPI", "PostgreSQL",
    "MongoDB", "AWS", "AI Integration", "Prompt Engineering",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Punjab Technical University",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
