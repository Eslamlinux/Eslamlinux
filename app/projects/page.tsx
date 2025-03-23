import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Menu, ExternalLink, Eye } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="border-b border-[#333] bg-[#222]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#00ff00]">EslamLinux</Link>
          </div>
          <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
            <Link href="/" className="text-white hover:text-[#00ff00] transition-colors">الرئيسية</Link>
            <Link href="/blog" className="text-white hover:text-[#00ff00] transition-colors">المدونة</Link>
            <Link href="/projects" className="text-[#00ff00] transition-colors">المشاريع</Link>
            <Link href="/about" className="text-white hover:text-[#00ff00] transition-colors">من أنا</Link>
            <Link href="/contact" className="text-white hover:text-[#00ff00] transition-colors">اتصل بي</Link>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Projects Header */}
      <section className="py-12 bg-[#222] border-b border-[#333]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-[#00ff00]">المشاريع</h1>
          <p className="text-xl mb-8 text-gray-300">مجموعة من المشاريع التي قمت بتطويرها في مجال لينكس وأمن المعلومات</p>
          
          <div className="flex flex-wrap gap-4">
            {["الكل", "لينكس", "أمن المعلومات", "تطوير الويب", "أدوات", "مفتوحة المصدر"].map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"} 
                className={index === 0 ? "bg-[#00ff00] text-black hover:bg-[#00cc00]" : "border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-[#1a1a1a] border-b border-[#333]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[#00ff00]">المشروع المميز</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-[#333] px-3 py-1 rounded-full text-xs font-medium text-[#00ff00] mb-4">
                أمن المعلومات
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#00ff00]">LinuxSecurityScanner</h3>
              <p className="text-gray-300 mb-6">
                أداة متكاملة لفحص وتحليل ثغرات أنظمة لينكس واكتشاف نقاط الضعف الأمنية. تقوم الأداة بفحص الإعدادات والخدمات والملفات وتقديم تقارير مفصلة مع توصيات للإصلاح.
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
                  عرض المشروع
                </Button>
                <Button variant="outline" className="border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]">
                  <Github className="mr-2 h-4 w-4" />
                  كود المصدر
                </Button>
                <Button variant="outline" className="border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  العرض التجريبي
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
          <h2 className="text-2xl font-bold mb-8 text-[#00ff00]">جميع المشاريع</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NetworkMonitor",
                description: "أداة لمراقبة حركة الشبكة واكتشاف الأنشطة المشبوهة في الوقت الفعلي.",
                category: "أمن المعلومات",
                tags: ["Python", "Network", "Security", "Monitoring"]
              },
              {
                title: "LinuxAutomation",
                description: "مجموعة من السكربتات لأتمتة المهام اليومية في أنظمة لينكس وتوفير الوقت والجهد.",
                category: "لينكس",
                tags: ["Bash", "Python", "Automation", "Linux"]
              },
              {
                title: "SecureFileSystem",
                description: "نظام ملفات آمن مع تشفير من طرف إلى طرف لحماية البيانات الحساسة.",
                category: "أمن المعلومات",
                tags: ["C++", "Encryption", "File System", "Security"]
              },
              {
                title: "DockerManager",
                description: "واجهة رسومية لإدارة حاويات Docker بسهولة وكفاءة على أنظمة لينكس.",
                category: "أدوات",
                tags: ["JavaScript", "Docker", "Node.js", "Management"]
              },
              {
                title: "LinuxBackupTool",
                description: "أداة للنسخ الاحتياطي الآلي والمجدول لأنظمة لينكس مع دعم التخزين السحابي.",
                category: "لينكس",
                tags: ["Python", "Backup", "Cloud", "Automation"]
              },
              {
                title: "WebVulnScanner",
                description: "أداة لفحص ثغرات تطبيقات الويب واكتشاف نقاط الضعف الأمنية.",
                category: "أمن المعلومات",
                tags: ["Python", "Web Security", "Penetration Testing"]
              },
              {
                title: "ServerMonitor",
                description: "لوحة تحكم لمراقبة أداء الخوادم وإرسال تنبيهات عند حدوث مشاكل.",
                category: "أدوات",
                tags: ["JavaScript", "Node.js", "Monitoring", "Dashboard"]
              },
              {
                title: "SecureChat",
                description: "تطبيق دردشة آمن مع تشفير من طرف إلى طرف وميزات أمان متقدمة.",
                category: "أمن المعلومات",
                tags: ["JavaScript", "React", "Encryption", "WebRTC"]
              },
              {
                title: "LinuxSystemOptimizer",
                description: "أداة لتحسين أداء أنظمة لينكس وتسريع عملها بشكل تلقائي.",
                category: "لينكس",
                tags: ["Bash", "Python", "Performance", "Optimization"]
              }
            ].map((project, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-[#333] hover:border-[#00ff00] transition-colors overflow-hidden">
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
                    <Button variant="outline" size="sm" className="border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]">
                      <Eye className="mr-2 h-3 w-3" />
                      عرض المشروع
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
                  className={page === 1 ? "bg-[#00ff00] text-black hover:bg-[#00cc00]" : "
                  className={page === 1 ? "bg-[#00ff00] text-black hover:bg-[#00cc00]" : "border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"}
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
            <h2 className="text-2xl font-bold mb-4 text-[#00ff00]">هل لديك فكرة مشروع؟</h2>
            <p className="text-gray-300 mb-6">أنا دائماً متحمس للعمل على مشاريع جديدة ومبتكرة. إذا كان لديك فكرة مشروع وتحتاج إلى مساعدة في تنفيذها، فلا تتردد في التواصل معي.</p>
            <Button className=\"bg-[#00ff00] text-black hover:bg-[#00cc00]">
              تواصل معي
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] border-t border-[#333] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-[#00ff00]">EslamLinux</Link>
              <p className="text-gray-400 mt-2">© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
            </div>
            <div className="flex space-x-8 rtl:space-x-reverse">
              <Link href="/" className="text-gray-300 hover:text-[#00ff00]">الرئيسية</Link>
              <Link href="/blog" className="text-gray-300 hover:text-[#00ff00]">المدونة</Link>
              <Link href="/projects" className="text-gray-300 hover:text-[#00ff00]">المشاريع</Link>
              <Link href="/about" className="text-gray-300 hover:text-[#00ff00]">من أنا</Link>
              <Link href="/contact" className="text-gray-300 hover:text-[#00ff00]">اتصل بي</Link>
            </div>
            <div>
              <Link href="/admin" className="text-[#00ff00] hover:underline">لوحة التحكم</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

