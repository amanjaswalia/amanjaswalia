"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n/language-context"

const experienceKeys = [
  {
    titleKey: "experience.freelance.title",
    companyKey: "experience.freelance.company",
    locationKey: "experience.freelance.location",
    periodKey: "experience.freelance.period",
    descriptionKey: "experience.freelance.description",
    achievementKeys: [
      "experience.freelance.achievement1",
      "experience.freelance.achievement2",
      "experience.freelance.achievement3",
      "experience.freelance.achievement4",
    ],
    technologies: ["React", "Next.js", "Node.js", "AI/LLMs", "WordPress"],
  },
  {
    titleKey: "experience.ai.title",
    companyKey: "experience.ai.company",
    locationKey: "experience.ai.location",
    periodKey: "experience.ai.period",
    descriptionKey: "experience.ai.description",
    achievementKeys: [
      "experience.ai.achievement1",
      "experience.ai.achievement2",
      "experience.ai.achievement3",
      "experience.ai.achievement4",
    ],
    technologies: ["OpenAI", "LangChain", "RAG", "Python", "TypeScript"],
  },
  {
    titleKey: "experience.wordpress.title",
    companyKey: "experience.wordpress.company",
    locationKey: "experience.wordpress.location",
    periodKey: "experience.wordpress.period",
    descriptionKey: "experience.wordpress.description",
    achievementKeys: [
      "experience.wordpress.achievement1",
      "experience.wordpress.achievement2",
      "experience.wordpress.achievement3",
      "experience.wordpress.achievement4",
    ],
    technologies: ["WordPress", "PHP", "WooCommerce", "MySQL", "REST API"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("experience.title")} <span className="text-blue-500">{t("experience.highlight")}</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </div>

        {/* Timeline */}
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block" />

            {/* Experience Items */}
            {experienceKeys.map((exp, index) => (
              <motion.div
                key={exp.titleKey}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className={`relative mb-8 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-8 md:text-right md:ml-0"
                    : "md:pl-8 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-background ${
                    index % 2 === 0 ? "right-0 translate-x-1/2 md:-right-2" : "left-0 -translate-x-1/2 md:-left-2"
                  }`}
                />

                <Card className="bg-background/50 border hover:border-blue-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className={`flex flex-col gap-2 ${index % 2 === 0 ? "md:items-end" : ""}`}>
                      <h3 className="text-xl font-semibold">{t(exp.titleKey)}</h3>
                      <p className="text-blue-500 font-medium">{t(exp.companyKey)}</p>
                      <div className={`flex flex-wrap gap-3 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {t(exp.periodKey)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {t(exp.locationKey)}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className={`text-muted-foreground ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {t(exp.descriptionKey)}
                    </p>
                    <ul className={`space-y-1 text-sm text-muted-foreground ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.achievementKeys.map((achievementKey, i) => (
                        <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <Briefcase className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{t(achievementKey)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`flex flex-wrap gap-2 pt-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
