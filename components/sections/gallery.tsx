"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Smartphone, Code, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n/language-context"

const webProjects = [
  {
    titleKey: "gallery.1.title",
    descriptionKey: "gallery.1.description",
    gradient: "from-blue-500 to-cyan-500",
    techs: ["React.js", "Tailwind", "Django", "Python"],
    url: "https://web.nspire.ai",
  },
  {
    titleKey: "gallery.2.title",
    descriptionKey: "gallery.2.description",
    gradient: "from-purple-500 to-pink-500",
    techs: ["React.js", "Material UI", "Django", "Python"],
    url: "https://sso.atpt.io/login",
  },
  {
    titleKey: "gallery.3.title",
    descriptionKey: "gallery.3.description",
    gradient: "from-green-500 to-emerald-500",
    techs: ["React.js", "Bootstrap", "Django", "Python"],
    url: "https://don-key.finance",
  },
  {
    titleKey: "gallery.4.title",
    descriptionKey: "gallery.4.description",
    gradient: "from-orange-500 to-red-500",
    techs: ["React.js", "Bootstrap", "Express.js", "Node.js"],
    url: "https://core-strategy.us",
  },
  {
    titleKey: "gallery.5.title",
    descriptionKey: "gallery.5.description",
    gradient: "from-indigo-500 to-violet-500",
    techs: ["Next.js", "Bootstrap", "Full-Stack"],
    url: "https://www.shoetrekker.com",
  },
  {
    titleKey: "gallery.6.title",
    descriptionKey: "gallery.6.description",
    gradient: "from-teal-500 to-blue-500",
    techs: ["React.js", "NestJS", "TypeScript"],
    url: "https://inquiryconcierge.com",
  },
]

const mobileApps = [
  {
    titleKey: "gallery.app1.title",
    descriptionKey: "gallery.app1.description",
    gradient: "from-pink-500 to-rose-500",
    techs: ["React Native", "Firebase"],
    ios: "https://apps.apple.com/us/app/id1636878385",
    android: "https://play.google.com/store/apps/details?id=com.square.justluvcreamery",
  },
  {
    titleKey: "gallery.app2.title",
    descriptionKey: "gallery.app2.description",
    gradient: "from-amber-500 to-orange-500",
    techs: ["React Native", "Node.js"],
    ios: "https://apps.apple.com/in/app/edb%C4%81/id1598855380",
    android: "https://play.google.com/store/apps/details?id=com.edba_app&hl=en&gl=US",
  },
  {
    titleKey: "gallery.app3.title",
    descriptionKey: "gallery.app3.description",
    gradient: "from-cyan-500 to-blue-500",
    techs: ["React Native", "GraphQL"],
    ios: "https://apps.apple.com/app/clean-freak/id1600409873",
    android: "https://play.google.com/store/apps/details?id=com.cleanfreak.cleanfreak",
  },
  {
    titleKey: "gallery.app4.title",
    descriptionKey: "gallery.app4.description",
    gradient: "from-violet-500 to-purple-500",
    techs: ["React Native", "GraphQL"],
    ios: "https://apps.apple.com/us/app/cues-notebook/id1547154002",
    android: "https://play.google.com/store/apps/details?id=com.vora.cues",
  },
  {
    titleKey: "gallery.app5.title",
    descriptionKey: "gallery.app5.description",
    gradient: "from-emerald-500 to-green-500",
    techs: ["React Native", "GraphQL"],
    ios: "https://apps.apple.com/in/app/boss-pdx/id1611260956",
    android: null,
  },
]

const phpProjects = [
  {
    titleKey: "gallery.php1.title",
    descriptionKey: "gallery.php1.description",
    gradient: "from-slate-500 to-zinc-600",
    techs: ["PHP", "MySQL", "HTML/CSS"],
    url: "https://fmportal.techtiles.net/fm2/",
  },
]

const laravelProjects = [
  {
    titleKey: "gallery.laravel1.title",
    descriptionKey: "gallery.laravel1.description",
    gradient: "from-red-500 to-orange-500",
    techs: ["Laravel", "PHP", "MySQL"],
    url: "https://www.dashboard.karially.com",
  },
  {
    titleKey: "gallery.laravel2.title",
    descriptionKey: "gallery.laravel2.description",
    gradient: "from-blue-600 to-indigo-500",
    techs: ["Laravel", "PHP", "MySQL"],
    url: "https://findingdirect.com",
  },
  {
    titleKey: "gallery.laravel3.title",
    descriptionKey: "gallery.laravel3.description",
    gradient: "from-sky-500 to-cyan-400",
    techs: ["Laravel", "PHP", "MySQL"],
    url: "https://gskywings.com",
  },
  {
    titleKey: "gallery.laravel4.title",
    descriptionKey: "gallery.laravel4.description",
    gradient: "from-yellow-500 to-amber-500",
    techs: ["Laravel", "PHP", "MySQL"],
    url: "http://dieonlineschule.de",
  },
  {
    titleKey: "gallery.laravel5.title",
    descriptionKey: "gallery.laravel5.description",
    gradient: "from-green-600 to-lime-500",
    techs: ["Laravel", "PHP", "MySQL"],
    url: "https://www.boletosbarato.com",
  },
  {
    titleKey: "gallery.laravel6.title",
    descriptionKey: "gallery.laravel6.description",
    gradient: "from-purple-600 to-fuchsia-500",
    techs: ["Laravel", "PHP", "MySQL"],
    url: "https://fansquab.com",
  },
  {
    titleKey: "gallery.laravel7.title",
    descriptionKey: "gallery.laravel7.description",
    gradient: "from-teal-600 to-emerald-500",
    techs: ["Laravel", "PHP", "MySQL"],
    url: "http://cassiadmin.com/public/login",
  },
]

const wordpressProjects = [
  {
    titleKey: "gallery.wp1.title",
    descriptionKey: "gallery.wp1.description",
    gradient: "from-blue-500 to-sky-400",
    techs: ["WordPress", "PHP", "CSS"],
    url: "https://karwash.com/",
  },
  {
    titleKey: "gallery.wp2.title",
    descriptionKey: "gallery.wp2.description",
    gradient: "from-stone-500 to-amber-600",
    techs: ["WordPress", "PHP", "CSS"],
    url: "https://www.ikmaier.com/",
  },
  {
    titleKey: "gallery.wp3.title",
    descriptionKey: "gallery.wp3.description",
    gradient: "from-green-500 to-teal-500",
    techs: ["WordPress", "PHP", "CSS"],
    url: "http://livingconcept.in/",
  },
  {
    titleKey: "gallery.wp4.title",
    descriptionKey: "gallery.wp4.description",
    gradient: "from-lime-500 to-green-600",
    techs: ["WordPress", "PHP", "CSS"],
    url: "https://www.groexpo.com/",
  },
  {
    titleKey: "gallery.wp5.title",
    descriptionKey: "gallery.wp5.description",
    gradient: "from-cyan-500 to-blue-600",
    techs: ["WordPress", "PHP", "CSS"],
    url: "http://dryip.com/",
  },
  {
    titleKey: "gallery.wp6.title",
    descriptionKey: "gallery.wp6.description",
    gradient: "from-orange-500 to-red-500",
    techs: ["WordPress", "PHP", "CSS"],
    url: "https://nutburgers.com/",
  },
  {
    titleKey: "gallery.wp7.title",
    descriptionKey: "gallery.wp7.description",
    gradient: "from-indigo-500 to-purple-500",
    techs: ["WordPress", "PHP", "CSS"],
    url: "https://referrednation.com/",
  },
  {
    titleKey: "gallery.wp8.title",
    descriptionKey: "gallery.wp8.description",
    gradient: "from-rose-500 to-pink-600",
    techs: ["WordPress", "PHP", "CSS"],
    url: "https://prolificmanagers.com/",
  },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("gallery.title")} <span className="text-blue-500">{t("gallery.highlight")}</span>
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
            {t("gallery.subtitle")}
          </motion.p>
        </div>

        {/* Web Projects Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {webProjects.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full bg-background/50 border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group overflow-hidden">
                  <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(project.descriptionKey)}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techs.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Mobile Apps Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-2xl font-bold text-center mt-16 mb-8"
        >
          {t("gallery.mobileTitle")} <span className="text-blue-500">{t("gallery.mobileHighlight")}</span>
        </motion.h3>

        {/* Mobile Apps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mobileApps.map((app, index) => (
            <motion.div
              key={app.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <Card className="h-full bg-background/50 border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group overflow-hidden">
                <div className={`h-40 bg-gradient-to-br ${app.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-semibold text-lg">
                    {t(app.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(app.descriptionKey)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {app.techs.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {app.ios && (
                      <a
                        href={app.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium bg-secondary hover:bg-secondary/80 rounded-full px-3 py-1.5 transition-colors"
                      >
                        App Store
                      </a>
                    )}
                    {app.android && (
                      <a
                        href={app.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium bg-secondary hover:bg-secondary/80 rounded-full px-3 py-1.5 transition-colors"
                      >
                        Google Play
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Laravel Projects Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="text-2xl font-bold text-center mt-16 mb-8"
        >
          {t("gallery.laravelTitle")} <span className="text-blue-500">{t("gallery.laravelHighlight")}</span>
        </motion.h3>

        {/* Laravel Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {laravelProjects.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 + index * 0.1 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full bg-background/50 border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group overflow-hidden">
                  <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(project.descriptionKey)}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techs.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Core PHP Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.2 }}
          className="text-2xl font-bold text-center mt-16 mb-8"
        >
          {t("gallery.phpTitle")} <span className="text-blue-500">{t("gallery.phpHighlight")}</span>
        </motion.h3>

        {/* Core PHP Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {phpProjects.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.3 + index * 0.1 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full bg-background/50 border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group overflow-hidden">
                  <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(project.descriptionKey)}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techs.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* WordPress CMS Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.4 }}
          className="text-2xl font-bold text-center mt-16 mb-8"
        >
          {t("gallery.wpTitle")} <span className="text-blue-500">{t("gallery.wpHighlight")}</span>
        </motion.h3>

        {/* WordPress Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {wordpressProjects.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.5 + index * 0.1 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full bg-background/50 border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group overflow-hidden">
                  <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(project.descriptionKey)}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techs.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
