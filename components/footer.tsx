"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/amanjaswalia/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/amanjaswalia", icon: Github },
  { name: "Twitter", href: "https://x.com/amanjaswalia", icon: Twitter },
  { name: "Email", href: "mailto:amanjaswalia@gmail.com", icon: Mail },
]

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.testimonials"), href: "#testimonials" },
    { name: t("nav.gallery"), href: "#gallery" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Amandeep Singh
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t("footer.connect")}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Mohali, India
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} {t("footer.copyright")}{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t("footer.inIndia")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("footer.availableFreelance")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
