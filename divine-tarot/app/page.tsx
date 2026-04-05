'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Heart, ArrowRight, Shield, MessageCircle, BookOpen, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#A78BFA]/10 blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-[#C4B5FD]/10 blur-3xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-white to-[#F9FAFB]">
        <FloatingOrbs />
        
        <motion.div 
          className="container relative z-10 px-4 py-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/20">
              <Sparkles className="w-4 h-4 text-[#A78BFA]" />
              <span className="text-sm text-gray-700">Personal Tarot Readings</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Find Clarity, Peace & Direction When You Need It Most
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Connect with a real tarot reader and gently explore what's on your mind. Whether you're feeling uncertain, overwhelmed, or simply seeking guidance — you're not alone.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-6 text-base bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] text-white rounded-full hover:scale-105 transition-transform">
                <Link href="/booking">
                  Start Your Personal Reading
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm text-gray-500">
              Private • Personal • Judgment-free
            </motion.p>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9FAFB] to-transparent" />
      </section>

      {/* Section 2 - A Calm Introduction */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Sometimes, life feels unclear.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                You may be searching for answers, trying to understand your emotions, or standing at a point where decisions feel heavy.
              </p>
              <p>
                Tarot offers a quiet space to pause, reflect, and see things from a new perspective.
              </p>
              <p>
                Here, you're not being told what will happen — you're being guided to understand what you already feel, but may not yet see clearly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Meet Your Reader */}
      <section className="py-24 bg-[#F9FAFB]">
        <FloatingOrbs />
        <div className="container px-4 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Meet Your Reader
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Hi, I'm Bharti Singh.
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                I offer intuitive tarot readings designed to help you reconnect with your thoughts, emotions, and direction.
              </p>
              <p>
                My approach is simple — I listen, I understand, and I guide.
              </p>
              <p>
                You don't need perfect questions. You just need to show up as you are.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - How It Works */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              How It Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Share What's On Your Mind",
                description: "Tell me about your situation, your thoughts, or what's been bothering you."
              },
              {
                step: "2",
                title: "I Connect & Read the Cards",
                description: "Using tarot and intuition, I explore the energy around your situation."
              },
              {
                step: "3",
                title: "You Receive Clarity & Guidance",
                description: "You'll walk away with a clearer understanding and a sense of direction."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#A78BFA] text-white flex items-center justify-center mx-auto mb-6 text-lg font-semibold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Who This Is For */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="container px-4">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Who This Is For
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Feeling confused or emotionally overwhelmed",
                "Facing uncertainty in love or relationships",
                "Struggling with decisions about your future",
                "Looking for clarity, reassurance, or peace"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
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
              If something has been weighing on your heart, this is a safe place to explore it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6 - Trust & Safety */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-12 h-12 text-[#A78BFA] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Trust & Safety
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Your experience here is:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Completely private", "Judgment-free", "Handled with care and respect"].map((item, index) => (
                <span key={index} className="px-4 py-2 bg-[#A78BFA]/10 text-[#A78BFA] rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-lg">
              This is your space to open up freely and honestly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <FloatingOrbs />
        <div className="container px-4 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
              You don't need to have everything figured out.
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              Sometimes, a little clarity is all it takes to move forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-6 text-base bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] text-white rounded-full hover:scale-105 transition-transform">
                <Link href="/booking">
                  Book Your Personal Reading
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <p className="text-gray-500 pt-4">
              I'll be here to listen and guide you.
            </p>
            <p className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
              — Bharti Singh
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}