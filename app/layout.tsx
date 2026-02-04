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
    default: "Amandeep Singh | Full-Stack Developer & AI Solutions Specialist",
    template: "%s | Amandeep Singh",
  },
  description:
    "Full-Stack Developer specializing in AI-powered solutions, web development, SaaS, and mobile apps. Based in Mohali, India, available for freelance work worldwide. Expert in React, Next.js, Node.js, and LLM integration.",
  keywords: [
    "Full-Stack Developer",
    "AI Solutions",
    "Web Development",
    "React Developer",
    "Next.js Developer",
    "SaaS Development",
    "WordPress Developer",
    "Freelance Developer India",
    "LLM Integration",
    "RAG Systems",
    "AI Chatbots",
    "Mobile App Development",
    "Digital Marketing",
    "SEO Expert",
    "Mohali Developer",
    "US Clients",
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
    title: "Amandeep Singh | Full-Stack Developer & AI Solutions Specialist",
    description:
      "Full-Stack Developer specializing in AI-powered solutions, web development, SaaS, and mobile apps. Expert in React, Next.js, and LLM integration.",
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
    title: "Amandeep Singh | Full-Stack Developer & AI Solutions Specialist",
    description:
      "Full-Stack Developer specializing in AI-powered solutions, web development, SaaS, and mobile apps.",
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
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
