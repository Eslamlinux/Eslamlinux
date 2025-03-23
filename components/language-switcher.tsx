"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { locales } from "@/middleware"
import { Globe } from "lucide-react"
import { setCookie } from "cookies-next"

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const { locale } = useLanguage()

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return

    // تعيين كوكي اللغة
    setCookie("NEXT_LOCALE", newLocale, { maxAge: 60 * 60 * 24 * 365 })

    // استبدال رمز اللغة في المسار
    const currentPathWithoutLocale = pathname.replace(`/${locale}`, "")
    const newPath = `/${newLocale}${currentPathWithoutLocale}`

    router.push(newPath)
    router.refresh()
  }

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-400" />
      <div className="flex rounded-md overflow-hidden">
        {locales.map((l) => (
          <Button
            key={l}
            variant="ghost"
            size="sm"
            className={`px-2 py-1 rounded-none ${
              locale === l ? "bg-[#00ff00] text-black hover:bg-[#00cc00]" : "text-gray-400 hover:text-[#00ff00]"
            }`}
            onClick={() => switchLanguage(l)}
          >
            {l === "ar" ? "العربية" : "English"}
          </Button>
        ))}
      </div>
    </div>
  )
}

