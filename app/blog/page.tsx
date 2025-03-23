import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, Menu, Search, Calendar, Clock, User } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="border-b border-[#333] bg-[#222]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#00ff00]">
              EslamLinux
            </Link>
          </div>
          <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
            <Link href="/" className="text-white hover:text-[#00ff00] transition-colors">
              الرئيسية
            </Link>
            <Link href="/blog" className="text-[#00ff00] transition-colors">
              المدونة
            </Link>
            <Link href="/projects" className="text-white hover:text-[#00ff00] transition-colors">
              المشاريع
            </Link>
            <Link href="/about" className="text-white hover:text-[#00ff00] transition-colors">
              من أنا
            </Link>
            <Link href="/contact" className="text-white hover:text-[#00ff00] transition-colors">
              اتصل بي
            </Link>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Blog Header */}
      <section className="py-12 bg-[#222] border-b border-[#333]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-[#00ff00]">المدونة</h1>
          <p className="text-xl mb-8 text-gray-300">آخر المقالات والتدوينات في مجال لينكس وأمن المعلومات</p>

          <div className="relative max-w-md mx-auto md:mx-0">
            <input
              type="text"
              placeholder="ابحث في المدونة..."
              className="w-full p-3 pr-10 bg-[#1a1a1a] border border-[#333] rounded-md focus:border-[#00ff00] focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8 bg-[#1a1a1a] border-b border-[#333]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {["الكل", "لينكس", "أمن المعلومات", "تطوير الويب", "الشبكات", "البرمجة"].map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-[#00ff00] text-black hover:bg-[#00cc00]"
                    : "border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-[#222]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[#00ff00]">المقال المميز</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-[300px] bg-[#333] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=600&text=مقال مميز"
                alt="مقال مميز"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>15 مارس 2024</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>10 دقائق للقراءة</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#00ff00]">أفضل توزيعات لينكس للمطورين في 2024</h3>
              <p className="text-gray-300 mb-6">
                في هذا المقال سنستعرض أفضل توزيعات لينكس للمطورين في عام 2024، مع شرح مميزات كل توزيعة والأدوات التي
                تقدمها للمطورين، بالإضافة إلى نصائح لاختيار التوزيعة المناسبة لاحتياجاتك.
              </p>
              <div className="flex items-center gap-4">
                <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">قراءة المقال</Button>
                <div className="flex items-center gap-2">
                  <div className="text-gray-400">مشاركة:</div>
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
          <h2 className="text-2xl font-bold mb-8 text-[#00ff00]">أحدث المقالات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "كيفية تأمين خادم لينكس من الهجمات",
                excerpt: "دليل شامل لتأمين خادم لينكس من الهجمات الإلكترونية وحماية البيانات من الاختراق.",
                date: "10 مارس 2024",
                readTime: "8 دقائق",
                category: "أمن المعلومات",
              },
              {
                title: "أساسيات Docker للمبتدئين",
                excerpt: "تعلم أساسيات Docker وكيفية استخدامه لتطوير وتشغيل التطبيقات في بيئات معزولة.",
                date: "5 مارس 2024",
                readTime: "12 دقيقة",
                category: "لينكس",
              },
              {
                title: "إعداد بيئة تطوير React على لينكس",
                excerpt: "خطوات إعداد بيئة تطوير متكاملة لـ React.js على نظام لينكس مع أفضل الأدوات والإضافات.",
                date: "28 فبراير 2024",
                readTime: "6 دقائق",
                category: "تطوير الويب",
              },
              {
                title: "استخدام Python لأتمتة المهام في لينكس",
                excerpt: "كيفية استخدام Python لأتمتة المهام اليومية في نظام لينكس وتوفير الوقت والجهد.",
                date: "20 فبراير 2024",
                readTime: "9 دقائق",
                category: "البرمجة",
              },
              {
                title: "إعداد جدار ناري قوي باستخدام iptables",
                excerpt: "دليل خطوة بخطوة لإعداد جدار ناري قوي على لينكس باستخدام iptables لحماية الخادم.",
                date: "15 فبراير 2024",
                readTime: "10 دقائق",
                category: "أمن المعلومات",
              },
              {
                title: "تحسين أداء قواعد البيانات MySQL على لينكس",
                excerpt: "نصائح وتقنيات لتحسين أداء قواعد بيانات MySQL على خوادم لينكس للتطبيقات عالية الأداء.",
                date: "10 فبراير 2024",
                readTime: "7 دقائق",
                category: "قواعد البيانات",
              },
            ].map((post, index) => (
              <Card key={index} className="bg-[#222] border-[#333] hover:border-[#00ff00] transition-colors">
                <CardContent className="p-0">
                  <div className="h-48 bg-[#333] relative">
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=مقال ${index + 1}`}
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
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#00ff00]">{post.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <Button variant="link" className="text-[#00ff00] hover:text-[#00cc00] p-0">
                        قراءة المزيد
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
            <h2 className="text-2xl font-bold mb-4 text-[#00ff00]">اشترك في النشرة البريدية</h2>
            <p className="text-gray-300 mb-6">
              احصل على أحدث المقالات والنصائح في مجال لينكس وأمن المعلومات مباشرة إلى بريدك الإلكتروني.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 p-3 bg-[#1a1a1a] border border-[#333] rounded-md focus:border-[#00ff00] focus:outline-none"
              />
              <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">اشتراك</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] border-t border-[#333] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-[#00ff00]">
                EslamLinux
              </Link>
              <p className="text-gray-400 mt-2">© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
            </div>
            <div className="flex space-x-8 rtl:space-x-reverse">
              <Link href="/" className="text-gray-300 hover:text-[#00ff00]">
                الرئيسية
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-[#00ff00]">
                المدونة
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-[#00ff00]">
                المشاريع
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-[#00ff00]">
                من أنا
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-[#00ff00]">
                اتصل بي
              </Link>
            </div>
            <div>
              <Link href="/admin" className="text-[#00ff00] hover:underline">
                لوحة التحكم
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

