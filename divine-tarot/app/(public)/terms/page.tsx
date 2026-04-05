'use client'

import { motion } from 'framer-motion'
import { FileText, AlertTriangle, Shield, CheckCircle, Sparkles, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: `By accessing and using this website and our services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.

These Terms of Service govern your use of the Divine Tarot website and any related services provided by us. We reserve the right to update these terms at any time without prior notice. Your continued use of our services constitutes acceptance of any changes.`
  },
  {
    icon: AlertTriangle,
    title: "Disclaimer - No Guaranteed Outcomes",
    content: `The readings provided through our services are for entertainment and spiritual guidance purposes only. We do not guarantee any specific outcomes, results, or predictions from your reading.

Tarot readings are subjective interpretations and should not be used as a substitute for professional advice in any area including but not limited to legal, medical, financial, or relationship counseling. Always seek qualified professional advice for important decisions.

The information provided during readings is intended to offer perspective and insight, not definitive answers. You retain full responsibility for any choices or decisions you make based on the guidance received.`
  },
  {
    icon: Shield,
    title: "User Responsibility",
    content: `You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.

You agree to use our services in a manner consistent with all applicable laws and regulations. You agree not to:
- Use our services for any unlawful purpose
- Attempt to gain unauthorized access to any part of our services
- Interfere with the proper operation of our services
- Transmit any viruses, worms, or other harmful materials
- Engage in any activity that could harm or exploit minors

We reserve the right to terminate your access to our services at any time for violations of these terms.`
  },
  {
    icon: MessageCircle,
    title: "User Conduct",
    content: `When interacting with Ginni or our services, you agree to:
- Provide accurate and truthful information
- Treat our AI and staff with respect
- Not attempt to manipulate or abuse the system
- Not use our services to harass, threaten, or impersonate others
- Not share account access with others

We encourage open and meaningful conversations, but ask that you maintain appropriate boundaries and respectful communication at all times.`
  },
  {
    icon: Sparkles,
    title: "Intellectual Property",
    content: `All content, designs, graphics, logos, and materials on this website are the intellectual property of Divine Tarot unless otherwise stated. You may not copy, reproduce, distribute, or create derivative works from any content without our explicit written permission.

The tarot card images and interpretations provided through our services are for your personal use only. Any commercial use or redistribution of our readings or content is strictly prohibited.`
  }
]

export default function TermsPage() {
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
            <FileText className="w-8 h-8 text-primary" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our services
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
          className="max-w-3xl mx-auto mt-12 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Important Notice</h3>
              <p className="text-muted-foreground text-sm">
                By using our services, you acknowledge that tarot readings are for entertainment and spiritual guidance purposes only. We encourage you to use your own judgment and seek professional advice for important life decisions. Divine Tarot is not responsible for any actions taken based on readings.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Questions about these terms?
          </p>
          <Link href="/contact" className="text-primary hover:underline">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  )
}