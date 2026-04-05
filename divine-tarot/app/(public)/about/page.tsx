'use client'

import { motion } from 'framer-motion'
import { Sparkles, Heart, Shield, MessageCircle, Users, Target, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#A78BFA]/10 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-[#A78BFA]" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Hi, I'm Bharti Singh
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              I'm here to help you find clarity when things feel uncertain, overwhelming, or confusing. Life doesn't always give us clear answers — and that's where tarot becomes a gentle guide.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This space was created for you to pause, reflect, and reconnect with your inner voice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12 text-center">
            My Journey with Tarot
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              My connection with tarot began as a personal journey — a way to understand emotions, patterns, and the deeper meaning behind life's situations.
            </p>
            <p>
              Over time, it became something more. I realized that tarot isn't about predicting a fixed future. It's about helping you see your present more clearly, so you can move forward with confidence and awareness.
            </p>
            <p>
              Every reading I offer comes from a place of intuition, empathy, and genuine care.
            </p>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12 text-center">
            My Approach
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#A78BFA]/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#A78BFA]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe</h3>
              <p className="text-gray-600">
                A judgment-free space where you can openly share what's on your mind without fear.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#A78BFA]/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#A78BFA]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal</h3>
              <p className="text-gray-600">
                Every reading is tailored to your unique situation and energy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#A78BFA]/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-[#A78BFA]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Honest</h3>
              <p className="text-gray-600">
                I guide you, not decide for you. You hold the answers within yourself.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#A78BFA]/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#A78BFA]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Supportive</h3>
              <p className="text-gray-600">
                You don't need perfect questions. Simply come as you are.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12 text-center">
            Who This Is For
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Feeling confused or emotionally overwhelmed",
              "Seeking clarity in love or relationships",
              "Facing career or life decisions",
              "Looking for deeper understanding and direction"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl"
              >
                <div className="w-2 h-2 rounded-full bg-[#A78BFA]" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 mt-8">
            If something has been on your mind or heart, you're already in the right place.
          </p>
        </div>
      </section>

      {/* Privacy & Confidentiality */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#A78BFA]/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-[#A78BFA]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            A Safe & Private Experience
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your comfort and privacy matter deeply. Everything you share during a reading is treated with complete confidentiality, respect, and care. This is your space to express freely without fear of judgment.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            A Gentle Invitation
          </h2>
          <p className="text-gray-600 mb-8">
            If you feel drawn to explore your situation more deeply, you're welcome to book a personal reading. I'll be here to listen, understand, and guide you with honesty and compassion.
          </p>
          <Button asChild className="px-8 py-6 bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] text-white rounded-full">
            <Link href="/booking">
              Book a Reading
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}