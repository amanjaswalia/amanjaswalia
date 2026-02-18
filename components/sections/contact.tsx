"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { SendHorizontal, Mail, MapPin, Linkedin, Github, CheckCircle2, Phone, Twitter, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/language-context"

const contactInfo = [
  {
    icon: Mail,
    labelKey: "contact.email",
    value: "amanjaswalia@gmail.com",
    href: "mailto:amanjaswalia@gmail.com",
  },
  {
    icon: Phone,
    labelKey: "Phone",
    value: "+91 99150 20036",
    href: "tel:+919915020036",
  },
  {
    icon: MessageCircle,
    labelKey: "contact.whatsapp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/919915020036",
  },
  {
    icon: SendHorizontal,
    labelKey: "Telegram",
    value: "@amanjaswalia7",
    href: "https://t.me/amanjaswalia7",
  },
  {
    icon: MapPin,
    labelKey: "Location",
    value: "Mohali, India",
    href: null,
  },
  {
    icon: Linkedin,
    labelKey: "LinkedIn",
    value: "linkedin.com/in/amanjaswalia",
    href: "https://www.linkedin.com/in/amanjaswalia/",
  },
  {
    icon: Github,
    labelKey: "GitHub",
    value: "github.com/amanjaswalia",
    href: "https://github.com/amanjaswalia",
  },
  {
    icon: Twitter,
    labelKey: "Twitter",
    value: "x.com/amanjaswalia",
    href: "https://x.com/amanjaswalia",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useLanguage()

  const contactSchema = z.object({
    name: z.string().min(2, t("contact.nameError")),
    email: z.string().email(t("contact.emailError")),
    message: z.string().min(10, t("contact.messageError")),
  })

  type ContactFormData = z.infer<typeof contactSchema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    const message = `Hi, I'm *${data.name}*.\nEmail: ${data.email}\n\n${data.message}`
    const url = `https://wa.me/919915020036?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("contact.title")} <span className="text-blue-500">{t("contact.highlight")}</span>
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
            {t("contact.subtitle")}
          </motion.p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card className="bg-background/50 border">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t("contact.name")}
                    </label>
                    <Input
                      id="name"
                      placeholder={t("contact.namePlaceholder")}
                      {...register("name")}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t("contact.email")}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("contact.emailPlaceholder")}
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t("contact.message")}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.messagePlaceholder")}
                      rows={5}
                      {...register("message")}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        {t("contact.sent")}
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {t("contact.send")}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">{t("contact.connect")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("contact.connectDesc")}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.labelKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border hover:border-blue-500/50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.labelKey}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.labelKey}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="p-4 rounded-lg bg-green-500/10 border border-green-500/30"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500 font-medium">{t("contact.available")}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.22357840854!2d76.68831233267498!3d30.737185818498498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sMohali%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mohali, India - Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
