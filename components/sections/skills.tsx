"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n/language-context"

const skillCategoryKeys = [
  {
    titleKey: "skills.frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    titleKey: "skills.backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 80 },
      { name: "PHP", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    titleKey: "skills.ai",
    skills: [
      { name: "LLMs/GPT", level: 85 },
      { name: "RAG Systems", level: 80 },
      { name: "LangChain", level: 75 },
      { name: "OpenAI API", level: 85 },
      { name: "AI Chatbots", level: 85 },
      { name: "Prompt Engineering", level: 90 },
    ],
  },
  {
    titleKey: "skills.tools",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "WordPress", level: 95 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 80 },
    ],
  },
]

const additionalSkills = [
  "Responsive Design",
  "UI/UX Design",
  "SEO Optimization",
  "WooCommerce",
  "Shopify",
  "Mobile-First Development",
  "Performance Optimization",
  "API Integration",
  "Database Design",
  "Agile/Scrum",
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("skills.title")} <span className="text-blue-500">{t("skills.highlight")}</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategoryKeys.map((category, catIndex) => (
            <motion.div
              key={category.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + catIndex * 0.1 }}
              className="bg-background/50 border rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-500">
                {t(category.titleKey)}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold mb-4">{t("skills.also")}</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.03 }}
              >
                <Badge variant="outline" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
