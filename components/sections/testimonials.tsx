"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/language-context"

const testimonials = [
  { quoteKey: "testimonials.1.quote", nameKey: "testimonials.1.name", roleKey: "testimonials.1.role", rating: 5 },
  { quoteKey: "testimonials.2.quote", nameKey: "testimonials.2.name", roleKey: "testimonials.2.role", rating: 5 },
  { quoteKey: "testimonials.3.quote", nameKey: "testimonials.3.name", roleKey: "testimonials.3.role", rating: 5 },
  { quoteKey: "testimonials.4.quote", nameKey: "testimonials.4.name", roleKey: "testimonials.4.role", rating: 5 },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("testimonials.title")} <span className="text-blue-500">{t("testimonials.highlight")}</span>
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
            {t("testimonials.subtitle")}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.nameKey}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full bg-background/50 border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-8 h-8 text-blue-500/30" />
                  <p className="text-muted-foreground italic leading-relaxed">
                    &ldquo;{t(testimonial.quoteKey)}&rdquo;
                  </p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <div className="pt-2 border-t">
                    <p className="font-semibold">{t(testimonial.nameKey)}</p>
                    <p className="text-sm text-muted-foreground">{t(testimonial.roleKey)}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
