import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Eye } from "lucide-react"
import { getDictionary } from "@/lib/dictionary"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"

export default async function ProjectsPage({ params }: { params: { locale: string } }) {
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
            <Link href={`/${locale}/blog`} className="text-white hover:text-[#00ff00] transition-colors">
              {dict.common.blog}
            </Link>
            <Link href={`/${locale}/projects`} className="text-[#00ff00] transition-colors">
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

      {/* Projects Header */}
      <section className="py-12 bg-[#222] border-b border-[#333]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-[#00ff00]">{dict.projects.title}</h1>
          <p className="text-xl mb-8 text-gray-300">{dict.projects.subtitle}</p>

          <div className="flex flex-wrap gap-4">
            {[
              { key: "all", label: dict.projects.categories.all },
              { key: "linux", label: dict.projects.categories.linux },
              { key: "security", label: dict.projects.categories.security },
              { key: "webdev", label: dict.projects.categories.webdev },
              { key: "tools", label: dict.projects.categories.tools },
              { key: "opensource", label: dict.projects.categories.opensource },
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

      {/* Featured Project */}
      <section className="py-16 bg-[#1a1a1a] border-b border-[#333]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[#00ff00]">{dict.projects.featured}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-[#333] px-3 py-1 rounded-full text-xs font-medium text-[#00ff00] mb-4">
                {locale === "ar" ? "أمن المعلومات" : "Security"}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#00ff00]">LinuxSecurityScanner</h3>
              <p className="text-gray-300 mb-6">
                {locale === "ar"
                  ? "أداة متكاملة لفحص وتحليل ثغرات أنظمة لينكس واكتشاف نقاط الضعف الأمنية. تقوم الأداة بفحص الإعدادات والخدمات والملفات وتقديم تقارير مفصلة مع توصيات للإصلاح."
                  : "An integrated tool for scanning and analyzing Linux system vulnerabilities and discovering security weaknesses. The tool examines settings, services, and files, providing detailed reports with recommendations for fixes."}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["Python", "Bash", "Linux", "Security", "Penetration Testing"].map((tag, index) => (
                  <span key={index} className="bg-[#222] px-3 py-1 rounded-md text-xs font-medium text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">
                  <Eye className="mr-2 h-4 w-4" />
                  {dict.projects.viewProject}
                </Button>
                <Button
                  variant="outline"
                  className="border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                >
                  <Github className="mr-2 h-4 w-4" />
                  {dict.projects.sourceCode}
                </Button>
                <Button
                  variant="outline"
                  className="border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {dict.projects.liveDemo}
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 h-[300px] bg-[#333] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=600&text=LinuxSecurityScanner"
                alt="LinuxSecurityScanner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#222]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[#00ff00]">{dict.projects.allProjects}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NetworkMonitor",
                description:
                  locale === "ar"
                    ? "أداة لمراقبة حركة الشبكة واكتشاف الأنشطة المشبوهة في الوقت الفعلي."
                    : "A tool for monitoring network traffic and detecting suspicious activities in real-time.",
                category: locale === "ar" ? "أمن المعلومات" : "Security",
                tags: ["Python", "Network", "Security", "Monitoring"],
              },
              {
                title: "LinuxAutomation",
                description:
                  locale === "ar"
                    ? "مجموعة من السكربتات لأتمتة المهام اليومية في أنظمة لينكس وتوفير الوقت والجهد."
                    : "A collection of scripts to automate daily tasks in Linux systems and save time and effort.",
                category: locale === "ar" ? "لينكس" : "Linux",
                tags: ["Bash", "Python", "Automation", "Linux"],
              },
              {
                title: "SecureFileSystem",
                description:
                  locale === "ar"
                    ? "نظام ملفات آمن مع تشفير من طرف إلى طرف لحماية البيانات الحساسة."
                    : "A secure file system with end-to-end encryption to protect sensitive data.",
                category: locale === "ar" ? "أمن المعلومات" : "Security",
                tags: ["C++", "Encryption", "File System", "Security"],
              },
              {
                title: "DockerManager",
                description:
                  locale === "ar"
                    ? "واجهة رسومية لإدارة حاويات Docker بسهولة وكفاءة على أنظمة لينكس."
                    : "A graphical interface for managing Docker containers easily and efficiently on Linux systems.",
                category: locale === "ar" ? "أدوات" : "Tools",
                tags: ["JavaScript", "Docker", "Node.js", "Management"],
              },
              {
                title: "LinuxBackupTool",
                description:
                  locale === "ar"
                    ? "أداة للنسخ الاحتياطي الآلي والمجدول لأنظمة لينكس مع دعم التخزين السحابي."
                    : "A tool for automatic and scheduled backup of Linux systems with cloud storage support.",
                category: locale === "ar" ? "لينكس" : "Linux",
                tags: ["Python", "Backup", "Cloud", "Automation"],
              },
              {
                title: "WebVulnScanner",
                description:
                  locale === "ar"
                    ? "أداة لفحص ثغرات تطبيقات الويب واكتشاف نقاط الضعف الأمنية."
                    : "A tool for scanning web application vulnerabilities and discovering security weaknesses.",
                category: locale === "ar" ? "أمن المعلومات" : "Security",
                tags: ["Python", "Web Security", "Penetration Testing"],
              },
              {
                title: "ServerMonitor",
                description:
                  locale === "ar"
                    ? "لوحة تحكم لمراقبة أداء الخوادم وإرسال تنبيهات عند حدوث مشاكل."
                    : "A dashboard for monitoring server performance and sending alerts when problems occur.",
                category: locale === "ar" ? "أدوات" : "Tools",
                tags: ["JavaScript", "Node.js", "Monitoring", "Dashboard"],
              },
              {
                title: "SecureChat",
                description:
                  locale === "ar"
                    ? "تطبيق دردشة آمن مع تشفير من طرف إلى طرف وميزات أمان متقدمة."
                    : "A secure chat application with end-to-end encryption and advanced security features.",
                category: locale === "ar" ? "أمن المعلومات" : "Security",
                tags: ["JavaScript", "React", "Encryption", "WebRTC"],
              },
              {
                title: "LinuxSystemOptimizer",
                description:
                  locale === "ar"
                    ? "أداة لتحسين أداء أنظمة لينكس وتسريع عملها بشكل تلقائي."
                    : "A tool for optimizing Linux system performance and speeding up its operation automatically.",
                category: locale === "ar" ? "لينكس" : "Linux",
                tags: ["Bash", "Python", "Performance", "Optimization"],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-[#1a1a1a] border-[#333] hover:border-[#00ff00] transition-colors overflow-hidden"
              >
                <div className="h-48 bg-[#333] relative">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=${project.title}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#00ff00] text-black px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#00ff00]">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-[#222] px-2 py-1 rounded-md text-xs font-medium text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                    >
                      <Eye className="mr-2 h-3 w-3" />
                      {dict.projects.viewProject}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#00ff00]">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              {[1, 2, 3].map((page) => (
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

      {/* Call to Action */}
      <section className="py-16 bg-[#1a1a1a] border-t border-[#333]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#00ff00]">{dict.projects.cta.title}</h2>
            <p className="text-gray-300 mb-6">{dict.projects.cta.description}</p>
            <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">{dict.projects.cta.button}</Button>
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

