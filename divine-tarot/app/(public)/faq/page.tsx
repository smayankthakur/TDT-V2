'use client'

import { motion } from 'framer-motion'
import { Sparkles, HelpCircle, MessageCircle, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const faqs = [
  {
    question: "What is tarot reading?",
    answer: "Tarot reading is a form of spiritual guidance that uses a deck of 78 cards to gain insight into past, present, and future situations. Each card carries symbolic meaning and when laid out in a spread, they create a narrative that offers clarity and perspective on your questions and life circumstances."
  },
  {
    question: "How accurate is it?",
    answer: "Our AI-powered readings are designed to provide thoughtful, intuitive guidance based on the traditional meanings of the cards combined with modern understanding. The accuracy often depends on the clarity of your question and your openness to receiving the messages. Many find the insights surprisingly relevant to their current situations."
  },
  {
    question: "Is this free?",
    answer: "Yes! You can start with free readings and chat with Ginni at no cost. We also offer optional premium sessions for those seeking deeper, more personalized guidance."
  },
  {
    question: "Can I ask multiple questions?",
    answer: "Absolutely! You can ask as many questions as you like. Each reading is unique and the cards respond to whatever is most relevant in your life at that moment. Some prefer to focus on one major question, while others explore multiple areas."
  },
  {
    question: "How does Ginni work?",
    answer: "Ginni is your AI spiritual companion, trained on the ancient wisdom of tarot and modern psychological insights. When you ask a question, she draws on the card meanings and provides personalized interpretations that speak directly to your unique situation and energy."
  },
  {
    question: "What if I'm new to tarot?",
    answer: "That's perfectly fine! There's no need for any prior experience. Simply hold a question in your mind, and let Ginni guide you through the reading. The cards speak to everyone, regardless of familiarity with tarot."
  },
  {
    question: "Can I get a reading for someone else?",
    answer: "Readings are most powerful when done for yourself, as they connect directly to your energy and intuition. We recommend focusing on your own questions and journey."
  },
  {
    question: "How often should I get a reading?",
    answer: "There's no set rule! Some prefer daily check-ins for guidance, while others come during important life decisions or transitions. Trust your intuition—when you feel called to seek guidance, that's the right time."
  }
]

export default function FAQPage() {
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
            <HelpCircle className="w-8 h-8 text-primary" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about tarot readings and our services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 glass"
            >
              <h3 className="text-lg font-semibold mb-3 flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-primary" />
                </span>
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-11">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Still have questions? Let's talk.
          </p>
          <Button asChild className="btn-premium rounded-full px-8">
            <Link href="/booking">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}