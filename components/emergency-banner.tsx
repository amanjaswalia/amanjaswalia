"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function EmergencyBanner() {
  const [isDismissed, setIsDismissed] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    const dismissed = sessionStorage.getItem("banner-dismissed")
    setIsDismissed(dismissed === "true")
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    sessionStorage.setItem("banner-dismissed", "true")
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        >
          <div className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t("banner.text")}
            </span>
            <button
              onClick={scrollToContact}
              className="font-semibold underline underline-offset-2 hover:no-underline whitespace-nowrap"
            >
              {t("banner.cta")}
            </button>
            <button
              onClick={handleDismiss}
              className="ml-2 p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
