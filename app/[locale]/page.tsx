import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { getDictionary } from "@/lib/dictionary"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"

export default async function Home({ params }: { params: { locale: string } }) {
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

      {/* Hero Section */}
      <section className="py-16 bg-[#222] border-b border-[#333]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ff00]">
                {dict.home.hero.welcome} <span className="text-white">EslamLinux</span>
              </h1>
              <p className="text-xl mb-6 text-gray-300">{dict.home.hero.title}</p>
              <div className={`flex space-x-4 ${isRtl ? "rtl:space-x-reverse" : ""}`}>
                <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">{dict.home.hero.contactMe}</Button>
                <Button
                  variant="outline"
                  className="border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black"
                >
                  {dict.home.hero.viewWork}
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-[#333] border-4 border-[#00ff00] overflow-hidden">
                <img
                  src="/placeholder.svg?height=256&width=256&text=EslamLinux"
                  alt="EslamLinux"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#00ff00]">{dict.home.skills.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Linux", level: 95 },
              { name: "Web Development", level: 90 },
              { name: "Network Security", level: 85 },
              { name: "Penetration Testing", level: 80 },
              { name: "Python", level: 85 },
              { name: "PHP", level: 90 },
              { name: "JavaScript", level: 85 },
              { name: "Database Management", level: 80 },
            ].map((skill, index) => (
              <Card key={index} className="bg-[#222] border-[#333]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#00ff00]">{skill.name}</h3>
                  <div className="w-full bg-[#333] h-2 rounded-full">
                    <div className="bg-[#00ff00] h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <p className={`mt-2 ${isRtl ? "text-right" : "text-left"} text-gray-300`}>{skill.level}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-[#222] border-y border-[#333]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#00ff00]">{dict.home.projects.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="bg-[#1a1a1a] border-[#333] overflow-hidden hover:border-[#00ff00] transition-colors"
              >
                <div className="h-48 bg-[#333]">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=${locale === "ar" ? "مشروع" : "Project"} ${i}`}
                    alt={`${locale === "ar" ? "مشروع" : "Project"} ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#00ff00]">
                    {locale === "ar" ? `مشروع لينكس ${i}` : `Linux Project ${i}`}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {locale === "ar"
                      ? "وصف مختصر للمشروع. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة."
                      : "Brief project description. This text is an example that can be replaced in the same space."}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black w-full"
                  >
                    {dict.home.projects.viewProject}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">{dict.home.projects.viewAllProjects}</Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#00ff00]">{dict.home.blog.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="bg-[#222] border-[#333] hover:border-[#00ff00] transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#333] mr-4"></div>
                    <div>
                      <h3 className="text-xl font-bold text-[#00ff00]">
                        {locale === "ar" ? `عنوان المقال ${i}` : `Article Title ${i}`}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {new Date().toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US")}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {locale === "ar"
                      ? "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي."
                      : "This text is an example that can be replaced in the same space. This text was generated from a text generator."}
                  </p>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="text-[#00ff00] hover:text-[#00cc00] p-0">
                      {dict.common.readMore}
                    </Button>
                    <div className="text-gray-400 text-sm">5 {dict.home.blog.readTime}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">{dict.home.blog.viewAllPosts}</Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#222] border-t border-[#333]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#00ff00]">{dict.home.contact.title}</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">{dict.home.contact.name}</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-md focus:border-[#00ff00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">{dict.home.contact.email}</label>
                    <input
                      type="email"
                      className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-md focus:border-[#00ff00] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">{dict.home.contact.subject}</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-md focus:border-[#00ff00] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">{dict.home.contact.message}</label>
                  <textarea
                    rows={5}
                    className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-md focus:border-[#00ff00] focus:outline-none"
                  ></textarea>
                </div>
                <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00] w-full">{dict.home.contact.send}</Button>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[#1a1a1a] border border-[#333] rounded-md p-6 h-full">
                <h3 className="text-xl font-bold mb-6 text-[#00ff00]">{dict.home.contact.contactInfo}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-[#00ff00] mr-4" />
                    <span className="text-gray-300">contact@eslamlinux.com</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="w-6 h-6 text-[#00ff00] mr-4" />
                    <span className="text-gray-300">github.com/eslamlinux</span>
                  </div>
                  <div className="flex items-center">
                    <Twitter className="w-6 h-6 text-[#00ff00] mr-4" />
                    <span className="text-gray-300">twitter.com/eslamlinux</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-6 h-6 text-[#00ff00] mr-4" />
                    <span className="text-gray-300">linkedin.com/in/eslamlinux</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-[#00ff00]">{dict.home.contact.followMe}</h3>
                  <div className={`flex space-x-4 ${isRtl ? "rtl:space-x-reverse" : ""}`}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black"
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black"
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
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

