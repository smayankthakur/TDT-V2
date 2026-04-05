'use client'

import { motion } from 'framer-motion'
import { Sparkles, Eye, Shield, Heart, ArrowRight, Star, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function BookingPage() {
  const handleBooking = () => {
    window.location.href = 'https://sitelytc.com/booking'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#A78BFA]/10 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-7 h-7 text-[#A78BFA]" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Book a Personal Tarot Reading
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
              Share what's on your mind, and receive thoughtful guidance to help you move forward with clarity and confidence.
            </p>

            <Button 
              onClick={handleBooking}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] text-white rounded-full font-semibold text-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              Start Your Reading
              <ArrowRight className="w-5 h-5" />
            </Button>

            <p className="text-sm text-gray-500 mt-4">
              Private • Personal • Judgment-free
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - What You Can Expect */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              What You Can Expect
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              A reading is not about predicting your future. It's about helping you understand your present more clearly.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              During your session, you'll receive:
            </p>
            <div className="grid gap-4 max-w-md mx-auto text-left">
              {[
                "Insight into your current situation",
                "Clarity around your thoughts and emotions",
                "Guidance to help you make decisions with confidence"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl"
                >
                  <Check className="w-5 h-5 text-[#A78BFA] flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mt-8">
              Each reading is approached with care, honesty, and intuition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
              How It Works
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: 'Click "Start Your Reading"',
                description: "You'll be guided to begin your booking."
              },
              {
                step: "2",
                title: "Share Your Situation",
                description: "Let me know what's on your mind — there's no right or wrong way to express it."
              },
              {
                step: "3",
                title: "Receive Your Reading",
                description: "You'll receive thoughtful, intuitive guidance based on your situation."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-6 p-6 bg-white border border-gray-100 rounded-xl"
              >
                <div className="w-10 h-10 rounded-full bg-[#A78BFA] text-white flex items-center justify-center flex-shrink-0 text-lg font-semibold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Who This Is For */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Who This Is For
            </h2>
            <p className="text-gray-600 mb-8">
              This reading is for you if:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "You feel emotionally overwhelmed",
                "You're unsure about a relationship",
                "You're facing an important life decision",
                "You're seeking clarity or reassurance"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl"
                >
                  <Heart className="w-5 h-5 text-[#A78BFA] flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600 text-lg">
              You don't need to have everything figured out — just a willingness to explore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 5 - Safe & Private Space */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-12 h-12 text-[#A78BFA] mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Safe & Private Space
            </h2>
            <p className="text-gray-600 mb-4">
              Your experience is:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Completely confidential", "Handled with care and respect", "Free from judgment"].map((item, index) => (
                <span key={index} className="px-4 py-2 bg-[#A78BFA]/10 text-[#A78BFA] rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-lg">
              You can share openly, knowing this is a safe space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6 - Personal Note */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              A Personal Note
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Hi, I'm <strong>Bharti Singh</strong>.
              </p>
              <p>
                I understand how heavy uncertainty can feel.
              </p>
              <p>
                My intention is to offer you clarity, calmness, and a sense of direction — in a way that feels supportive and genuine.
              </p>
              <p>
                You don't have to go through things alone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Clarity begins with a simple step.
            </h2>
            
            <Button 
              onClick={handleBooking}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] text-white rounded-full font-semibold text-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              Book Your Personal Reading
              <ArrowRight className="w-6 h-6" />
            </Button>

            <p className="text-gray-500 mt-8 text-lg">
              I'll be here to listen and guide you.
            </p>
            <p className="text-xl font-semibold text-gray-900 mt-4" style={{ fontFamily: 'Georgia, serif' }}>
              — Bharti Singh
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
