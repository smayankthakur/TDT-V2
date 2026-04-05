'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface GinniChatContextType {
  isOpen: boolean
  openChat: () => void
  closeChat: () => void
  toggleChat: () => void
}

const GinniChatContext = createContext<GinniChatContextType | undefined>(undefined)

export function GinniChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openChat = useCallback(() => setIsOpen(true), [])
  const closeChat = useCallback(() => setIsOpen(false), [])
  const toggleChat = useCallback(() => setIsOpen((prev) => !prev), [])

  return (
    <GinniChatContext.Provider value={{ isOpen, openChat, closeChat, toggleChat }}>
      {children}
    </GinniChatContext.Provider>
  )
}

export function useGinniChat() {
  const context = useContext(GinniChatContext)
  if (!context) {
    throw new Error('useGinniChat must be used within a GinniChatProvider')
  }
  return context
}