"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code2,
  Cloud,
  Bot,
  Smartphone,
  Globe,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/language-context"

const serviceKeys = [
  {
    titleKey: "services.webDev",
    descKey: "services.webDevDesc",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    titleKey: "services.saas",
    descKey: "services.saasDesc",
    icon: Cloud,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    titleKey: "services.ai",
    descKey: "services.aiDesc",
    icon: Bot,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    titleKey: "services.mobile",
    descKey: "services.mobileDesc",
    icon: Smartphone,
    gradient: "from-orange-500 to-red-500",
  },
  {
    titleKey: "services.wordpress",
    descKey: "services.wordpressDesc",
    icon: Globe,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    titleKey: "services.marketing",
    descKey: "services.marketingDesc",
    icon: TrendingUp,
    gradient: "from-yellow-500 to-orange-500",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("services.title")} <span className="text-blue-500">{t("services.highlight")}</span>
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
            {t("services.subtitle")}
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {serviceKeys.map((service) => (
            <motion.div key={service.titleKey} variants={itemVariants}>
              <Card className="group h-full bg-background/50 border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {t(service.descKey)}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
