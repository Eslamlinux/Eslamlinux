import { type NextRequest, NextResponse } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// قائمة اللغات المدعومة
export const locales = ["ar", "en"]
export const defaultLocale = "ar"

// الحصول على اللغة المفضلة من الطلب
function getLocale(request: NextRequest) {
  // محاولة الحصول على اللغة من الكوكيز
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // محاولة الحصول على اللغة من رأس الطلب
  const headers = new Headers(request.headers)
  const acceptLanguage = headers.get("accept-language")
  if (acceptLanguage) {
    headers.set("accept-language", acceptLanguage)
  }

  const negotiator = new Negotiator({
    headers: Object.fromEntries(headers.entries()),
  })

  try {
    const languages = negotiator.languages()
    return match(languages, locales, defaultLocale)
  } catch (error) {
    return defaultLocale
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // تخطي الطلبات إلى الملفات الثابتة والصور وما إلى ذلك
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // الحصول على اللغة المفضلة
  const pathnameLocale = locales.find((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  // إذا كان المسار يحتوي بالفعل على رمز اللغة، فلا تقم بإعادة التوجيه
  if (pathnameLocale) {
    return NextResponse.next()
  }

  // الحصول على اللغة المفضلة من الطلب
  const locale = getLocale(request)
  const newUrl = new URL(`/${locale}${pathname}`, request.url)

  // نسخ معلمات الاستعلام
  request.nextUrl.searchParams.forEach((value, key) => {
    newUrl.searchParams.set(key, value)
  })

  // إعادة التوجيه إلى المسار مع رمز اللغة
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

