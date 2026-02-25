"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n/language-context"

const certificationKeys = [
  {
    titleKey: "certifications.aiChatbots",
    provider: "KNIME",
    date: "December 2025",
    descriptionKey: "certifications.aiChatbotsDesc",
    skills: ["AI Chatbots", "RAG", "AI Governance", "LLMs"],
    color: "from-green-500 to-emerald-500",
    certificateUrl: "/certificates/ai-chatbots-rag-governance.pdf",
  },
  {
    titleKey: "certifications.llm",
    provider: "LinkedIn Learning",
    date: "January 2026",
    descriptionKey: "certifications.llmDesc",
    skills: ["LLMs", "NLP", "AI Fundamentals", "Transformers"],
    color: "from-blue-500 to-cyan-500",
    certificateUrl: "/certificates/introduction-to-llm.pdf",
  },
  {
    titleKey: "certifications.reactNative",
    provider: "Udemy",
    date: "July 2023",
    descriptionKey: "certifications.reactNativeDesc",
    skills: ["React Native", "Mobile Development", "iOS", "Android"],
    color: "from-purple-500 to-indigo-500",
    certificateUrl: "/certificates/react-native.pdf",
  },
  {
    titleKey: "certifications.jasperAi",
    provider: "Coursiv",
    date: "February 2026",
    descriptionKey: "certifications.jasperAiDesc",
    skills: ["Jasper AI", "AI Content", "Copywriting", "Prompt Engineering"],
    color: "from-orange-500 to-amber-500",
    certificateUrl: "/certificates/jasper-ai.pdf",
  },
  {
    titleKey: "certifications.claude",
    provider: "Coursiv",
    date: "February 2026",
    descriptionKey: "certifications.claudeDesc",
    skills: ["Claude AI", "Prompt Engineering", "AI Assistants", "LLMs"],
    color: "from-amber-500 to-yellow-500",
    certificateUrl: "/certificates/claude-ai.pdf",
  },
  {
    titleKey: "certifications.midjourney",
    provider: "Coursiv",
    date: "February 2026",
    descriptionKey: "certifications.midjourneyDesc",
    skills: ["Midjourney", "AI Art", "Image Generation", "Prompt Design"],
    color: "from-pink-500 to-rose-500",
    certificateUrl: "/certificates/midjourney.pdf",
  },
  {
    titleKey: "certifications.gemini",
    provider: "Coursiv",
    date: "February 2026",
    descriptionKey: "certifications.geminiDesc",
    skills: ["Gemini AI", "Google AI", "Prompt Engineering", "LLMs"],
    color: "from-blue-500 to-violet-500",
    certificateUrl: "/certificates/gemini-ai.pdf",
  },
  {
    titleKey: "certifications.lovable",
    provider: "Coursiv",
    date: "February 2026",
    descriptionKey: "certifications.lovableDesc",
    skills: ["Lovable", "AI App Builder", "Full-Stack Development", "Rapid Prototyping"],
    color: "from-rose-500 to-orange-500",
    certificateUrl: "/certificates/lovable.pdf",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-blue-500">{t("certifications.title")}</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            {t("certifications.subtitle")}
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationKeys.map((cert, index) => (
            <motion.div
              key={cert.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full bg-background/50 border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">
                        {t(cert.titleKey)}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <span className="font-medium text-blue-500">
                          {cert.provider}
                        </span>
                        <span>-</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {t(cert.descriptionKey)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 font-medium transition-colors"
                    >
                      {t("certifications.viewCertificate")}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold mb-4">{t("certifications.languages")}</h3>
          <div className="flex justify-center gap-4">
            {[
              { name: "Hindi", level: "Native" },
              { name: "English", level: "Advanced" },
              { name: "Punjabi", level: "Native" },
            ].map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-background/50 border rounded-lg px-6 py-3 text-center"
              >
                <span className="font-medium block">{language.name}</span>
                <span className="text-xs text-muted-foreground">{language.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
