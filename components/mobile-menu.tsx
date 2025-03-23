"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function MobileMenu({ locale, dict }: { locale: string; dict: any }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80">
          <div
            className={`fixed inset-y-0 ${locale === "ar" ? "right-0" : "left-0"} w-full max-w-xs bg-[#222] p-6 shadow-lg`}
          >
            <div className="flex items-center justify-between mb-8">
              <Link href={`/${locale}`} className="text-2xl font-bold text-[#00ff00]" onClick={() => setIsOpen(false)}>
                EslamLinux
              </Link>
              <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="space-y-6">
              <Link
                href={`/${locale}`}
                className="block text-lg font-medium text-white hover:text-[#00ff00]"
                onClick={() => setIsOpen(false)}
              >
                {dict.common.home}
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="block text-lg font-medium text-white hover:text-[#00ff00]"
                onClick={() => setIsOpen(false)}
              >
                {dict.common.blog}
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="block text-lg font-medium text-white hover:text-[#00ff00]"
                onClick={() => setIsOpen(false)}
              >
                {dict.common.projects}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="block text-lg font-medium text-white hover:text-[#00ff00]"
                onClick={() => setIsOpen(false)}
              >
                {dict.common.about}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="block text-lg font-medium text-white hover:text-[#00ff00]"
                onClick={() => setIsOpen(false)}
              >
                {dict.common.contact}
              </Link>
              <div className="pt-6 border-t border-[#333]">
                <Link
                  href={`/${locale}/admin`}
                  className="block text-lg font-medium text-[#00ff00] hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {dict.common.admin}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

