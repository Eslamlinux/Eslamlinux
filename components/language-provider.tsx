"use client"

import { createContext, useContext, type ReactNode } from "react"

type LanguageContextType = {
  locale: string
  isRtl: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "ar",
  isRtl: true,
})

export function LanguageProvider({
  children,
  locale,
}: {
  children: ReactNode
  locale: string
}) {
  const isRtl = locale === "ar"

  return <LanguageContext.Provider value={{ locale, isRtl }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}

