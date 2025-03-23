import type React from "react"
import "@/app/globals.css"
import { Cairo, Roboto } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { locales } from "@/middleware"
import { LanguageProvider } from "@/components/language-provider"

// تحميل الخطوط
const cairo = Cairo({ subsets: ["arabic"] })
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params

  return {
    title: locale === "ar" ? "EslamLinux - الموقع الشخصي" : "EslamLinux - Personal Website",
    description:
      locale === "ar"
        ? "مطور ويب ومتخصص في لينكس وأمن المعلومات"
        : "Web developer and specialist in Linux and information security",
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params
  const isRtl = locale === "ar"
  const fontClass = isRtl ? cairo.className : roboto.className

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"}>
      <body className={fontClass}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider locale={locale}>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

