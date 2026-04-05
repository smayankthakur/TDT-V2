'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, UserCheck, Cookie, Mail, MessageCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: `We collect information you provide directly to us, including your name, email address, and any messages you send when using our services. When you interact with Ginni, we may also collect data about your reading preferences and interaction patterns to improve our services.

We may also collect certain automatically generated information such as device type, browser information, and usage patterns through cookies and similar technologies.`
  },
  {
    icon: Mail,
    title: "How We Use Your Information",
    content: `We use the information we collect to provide, maintain, and improve our services. Your email may be used to send you updates about your readings, respond to your inquiries, and provide customer support.

We may also use your information to personalize your experience, send relevant content, and communicate about new features or changes to our services. You can opt out of marketing communications at any time.`
  },
  {
    icon: Lock,
    title: "Data Protection",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.

While we strive to protect your data, no method of electronic storage is 100% secure. We cannot guarantee absolute security, but we are committed to maintaining industry-standard protections.`
  },
  {
    icon: Cookie,
    title: "Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to enhance your experience. Cookies are small text files stored on your device that help us understand how you use our services.

You can control cookies through your browser settings. Please note that disabling cookies may affect the functionality of some features. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until you delete them).`
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: `You have the right to access, update, or delete your personal information at any time. You can also object to the processing of your data or request data portability.

To exercise these rights or if you have questions about our privacy practices, please contact us. We will respond to your request within a reasonable timeframe.

You also have the right to lodge a complaint with a data protection authority if you believe your rights have been violated.`
  },
  {
    icon: MessageCircle,
    title: "Children's Privacy",
    content: `Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately so we can delete such information.`
  }
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen mystical-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-400/5 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-purple-400/20 mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Shield className="w-8 h-8 text-primary" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 glass"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto mt-12 p-6 rounded-2xl bg-card/50 border border-border/30"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-muted-foreground text-sm">
                If you have any questions about this Privacy Policy, please contact us through our 
                <Link href="/contact" className="text-primary hover:underline mx-1">contact page</Link>
                or email us directly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}