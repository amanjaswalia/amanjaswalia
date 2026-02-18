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
      { name: "Next.js", level: 92 },
      { name: "React Native", level: 85 },
      { name: "Angular", level: 75 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5/CSS3/SCSS", level: 95 },
    ],
  },
  {
    titleKey: "skills.backend",
    skills: [
      { name: "Node.js/Express", level: 90 },
      { name: "NestJS", level: 85 },
      { name: "Django/Python", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "PHP/Laravel", level: 80 },
      { name: "GraphQL", level: 80 },
      { name: "Strapi", level: 78 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    titleKey: "skills.database",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "Firebase/Firestore", level: 82 },
      { name: "Redis", level: 72 },
      { name: "Prismic", level: 70 },
    ],
  },
  {
    titleKey: "skills.ai",
    skills: [
      { name: "Claude AI", level: 90 },
      { name: "OpenAI/GPT", level: 88 },
      { name: "Prompt Engineering", level: 92 },
      { name: "Jasper AI", level: 82 },
      { name: "Midjourney", level: 80 },
      { name: "RAG Systems", level: 78 },
    ],
  },
  {
    titleKey: "skills.tools",
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "Docker", level: 78 },
      { name: "AWS (EC2 & S3)", level: 78 },
      { name: "Vercel", level: 90 },
      { name: "Claude Code", level: 90 },
      { name: "Cursor AI", level: 88 },
    ],
  },
]

const additionalSkills = [
  "Redux",
  "Redux Saga",
  "TanStack",
  "Storybook",
  "Bootstrap",
  "Material UI",
  "Ant Design",
  "CodeIgniter",
  "Yii2",
  "WooCommerce",
  "Shopify",
  "WordPress",
  "Twilio API",
  "Payment Gateways",
  "Social Login",
  "Google Cloud",
  "Netlify",
  "Heroku",
  "Render",
  "Railway",
  "Hostinger",
  "Nginx",
  "Webpack",
  "Jira",
  "ClickUp",
  "Trello",
  "Postman",
  "VS Code",
  "SEO Optimization",
  "Responsive Design",
  "UI/UX Design",
  "Mobile-First Development",
  "Performance Optimization",
  "Agile/Scrum",
  "Chrome Extensions",
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
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.02 }}
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
