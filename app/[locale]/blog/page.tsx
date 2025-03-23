import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, Search, Calendar, Clock, User } from "lucide-react"
import { getDictionary } from "@/lib/dictionary"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = params
  const dict = await getDictionary(locale)
  const isRtl = locale === "ar"

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="border-b border-[#333] bg-[#222]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="text-2xl font-bold text-[#00ff00]">
              EslamLinux
            </Link>
          </div>
          <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
            <Link href={`/${locale}`} className="text-white hover:text-[#00ff00] transition-colors">
              {dict.common.home}
            </Link>
            <Link href={`/${locale}/blog`} className="text-[#00ff00] transition-colors">
              {dict.common.blog}
            </Link>
            <Link href={`/${locale}/projects`} className="text-white hover:text-[#00ff00] transition-colors">
              {dict.common.projects}
            </Link>
            <Link href={`/${locale}/about`} className="text-white hover:text-[#00ff00] transition-colors">
              {dict.common.about}
            </Link>
            <Link href={`/${locale}/contact`} className="text-white hover:text-[#00ff00] transition-colors">
              {dict.common.contact}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <MobileMenu locale={locale} dict={dict} />
          </div>
        </div>
      </header>

      {/* Blog Header */}
      <section className="py-12 bg-[#222] border-b border-[#333]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-[#00ff00]">{dict.blog.title}</h1>
          <p className="text-xl mb-8 text-gray-300">{dict.blog.subtitle}</p>

          <div className="relative max-w-md mx-auto md:mx-0">
            <input
              type="text"
              placeholder={dict.blog.searchPlaceholder}
              className={`w-full p-3 ${isRtl ? "pr-10" : "pl-10"} bg-[#1a1a1a] border border-[#333] rounded-md focus:border-[#00ff00] focus:outline-none`}
            />
            <Search
              className={`absolute ${isRtl ? "left-3" : "right-3"} top-1/2 transform -translate-y-1/2 text-gray-400`}
            />
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8 bg-[#1a1a1a] border-b border-[#333]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { key: "all", label: dict.blog.categories.all },
              { key: "linux", label: dict.blog.categories.linux },
              { key: "security", label: dict.blog.categories.security },
              { key: "webdev", label: dict.blog.categories.webdev },
              { key: "networks", label: dict.blog.categories.networks },
              { key: "programming", label: dict.blog.categories.programming },
            ].map((category, index) => (
              <Button
                key={category.key}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-[#00ff00] text-black hover:bg-[#00cc00]"
                    : "border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-[#222]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[#00ff00]">{dict.blog.featured}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-[300px] bg-[#333] rounded-lg overflow-hidden">
              <img
                src={`/placeholder.svg?height=300&width=600&text=${locale === "ar" ? "مقال مميز" : "Featured Article"}`}
                alt={dict.blog.featured}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{locale === "ar" ? "15 مارس 2024" : "March 15, 2024"}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>10 {dict.blog.readTime}</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#00ff00]">
                {locale === "ar"
                  ? "أفضل توزيعات لينكس للمطورين في 2024"
                  : "Best Linux Distributions for Developers in 2024"}
              </h3>
              <p className="text-gray-300 mb-6">
                {locale === "ar"
                  ? "في هذا المقال سنستعرض أفضل توزيعات لينكس للمطورين في عام 2024، مع شرح مميزات كل توزيعة والأدوات التي تقدمها للمطورين، بالإضافة إلى نصائح لاختيار التوزيعة المناسبة لاحتياجاتك."
                  : "In this article, we will review the best Linux distributions for developers in 2024, explaining the features of each distribution and the tools it provides for developers, as well as tips for choosing the right distribution for your needs."}
              </p>
              <div className="flex items-center gap-4">
                <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">{dict.common.readMore}</Button>
                <div className="flex items-center gap-2">
                  <div className="text-gray-400">{dict.blog.share}:</div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#00ff00]">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#00ff00]">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[#00ff00]">{dict.blog.latestPosts}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title:
                  locale === "ar" ? "كيفية تأمين خادم لينكس من الهجمات" : "How to Secure a Linux Server from Attacks",
                excerpt:
                  locale === "ar"
                    ? "دليل شامل لتأمين خادم لينكس من الهجمات الإلكترونية وحماية البيانات من الاختراق."
                    : "A comprehensive guide to securing a Linux server from cyber attacks and protecting data from breaches.",
                date: locale === "ar" ? "10 مارس 2024" : "March 10, 2024",
                readTime: "8",
                category: locale === "ar" ? "أمن المعلومات" : "Security",
              },
              {
                title: locale === "ar" ? "أساسيات Docker للمبتدئين" : "Docker Basics for Beginners",
                excerpt:
                  locale === "ar"
                    ? "تعلم أساسيات Docker وكيفية استخدامه لتطوير وتشغيل التطبيقات في بيئات معزولة."
                    : "Learn Docker basics and how to use it to develop and run applications in isolated environments.",
                date: locale === "ar" ? "5 مارس 2024" : "March 5, 2024",
                readTime: "12",
                category: locale === "ar" ? "لينكس" : "Linux",
              },
              {
                title:
                  locale === "ar"
                    ? "إعداد بيئة تطوير React على لينكس"
                    : "Setting Up a React Development Environment on Linux",
                excerpt:
                  locale === "ar"
                    ? "خطوات إعداد بيئة تطوير متكاملة لـ React.js على نظام لينكس مع أفضل الأدوات والإضافات."
                    : "Steps to set up a complete React.js development environment on Linux with the best tools and extensions.",
                date: locale === "ar" ? "28 فبراير 2024" : "February 28, 2024",
                readTime: "6",
                category: locale === "ar" ? "تطوير الويب" : "Web Development",
              },
              {
                title:
                  locale === "ar" ? "استخدام Python لأتمتة المهام في لينكس" : "Using Python to Automate Tasks in Linux",
                excerpt:
                  locale === "ar"
                    ? "كيفية استخدام Python لأتمتة المهام اليومية في نظام لينكس وتوفير الوقت والجهد."
                    : "How to use Python to automate daily tasks in Linux and save time and effort.",
                date: locale === "ar" ? "20 فبراير 2024" : "February 20, 2024",
                readTime: "9",
                category: locale === "ar" ? "البرمجة" : "Programming",
              },
              {
                title:
                  locale === "ar"
                    ? "إعداد جدار ناري قوي باستخدام iptables"
                    : "Setting Up a Strong Firewall Using iptables",
                excerpt:
                  locale === "ar"
                    ? "دليل خطوة بخطوة لإعداد جدار ناري قوي على لينكس باستخدام iptables لحماية الخادم."
                    : "A step-by-step guide to setting up a strong firewall on Linux using iptables to protect the server.",
                date: locale === "ar" ? "15 فبراير 2024" : "February 15, 2024",
                readTime: "10",
                category: locale === "ar" ? "أمن المعلومات" : "Security",
              },
              {
                title:
                  locale === "ar"
                    ? "تحسين أداء قواعد البيانات MySQL على لينكس"
                    : "Optimizing MySQL Database Performance on Linux",
                excerpt:
                  locale === "ar"
                    ? "نصائح وتقنيات لتحسين أداء قواعد بيانات MySQL على خوادم لينكس للتطبيقات عالية الأداء."
                    : "Tips and techniques for optimizing MySQL database performance on Linux servers for high-performance applications.",
                date: locale === "ar" ? "10 فبراير 2024" : "February 10, 2024",
                readTime: "7",
                category: locale === "ar" ? "قواعد البيانات" : "Databases",
              },
            ].map((post, index) => (
              <Card key={index} className="bg-[#222] border-[#333] hover:border-[#00ff00] transition-colors">
                <CardContent className="p-0">
                  <div className="h-48 bg-[#333] relative">
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=${locale === "ar" ? "مقال" : "Article"} ${index + 1}`}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-[#00ff00] text-black px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>
                          {post.readTime} {dict.blog.readTime}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#00ff00]">{post.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <Button variant="link" className="text-[#00ff00] hover:text-[#00cc00] p-0">
                        {dict.common.readMore}
                      </Button>
                      <div className="flex items-center gap-1">
                        <div className="w-6 h-6 rounded-full bg-[#333] flex items-center justify-center">
                          <User className="h-3 w-3 text-gray-400" />
                        </div>
                        <span className="text-gray-400 text-xs">EslamLinux</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  className={
                    page === 1
                      ? "bg-[#00ff00] text-black hover:bg-[#00cc00]"
                      : "border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                  }
                  size="icon"
                >
                  {page}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#222] border-t border-[#333]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#00ff00]">{dict.blog.newsletter.title}</h2>
            <p className="text-gray-300 mb-6">{dict.blog.newsletter.description}</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder={dict.blog.newsletter.placeholder}
                className="flex-1 p-3 bg-[#1a1a1a] border border-[#333] rounded-md focus:border-[#00ff00] focus:outline-none"
              />
              <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">{dict.blog.newsletter.subscribe}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] border-t border-[#333] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href={`/${locale}`} className="text-2xl font-bold text-[#00ff00]">
                EslamLinux
              </Link>
              <p className="text-gray-400 mt-2">
                © {new Date().getFullYear()} {dict.common.copyright}
              </p>
            </div>
            <div className={`flex space-x-8 ${isRtl ? "rtl:space-x-reverse" : ""}`}>
              <Link href={`/${locale}`} className="text-gray-300 hover:text-[#00ff00]">
                {dict.common.home}
              </Link>
              <Link href={`/${locale}/blog`} className="text-gray-300 hover:text-[#00ff00]">
                {dict.common.blog}
              </Link>
              <Link href={`/${locale}/projects`} className="text-gray-300 hover:text-[#00ff00]">
                {dict.common.projects}
              </Link>
              <Link href={`/${locale}/about`} className="text-gray-300 hover:text-[#00ff00]">
                {dict.common.about}
              </Link>
              <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-[#00ff00]">
                {dict.common.contact}
              </Link>
            </div>
            <div>
              <Link href={`/${locale}/admin`} className="text-[#00ff00] hover:underline">
                {dict.common.admin}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

