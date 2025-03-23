import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Mail, Menu, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
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
            <Link href="/blog" className="text-white hover:text-[#00ff00] transition-colors">
              المدونة
            </Link>
            <Link href="/projects" className="text-white hover:text-[#00ff00] transition-colors">
              المشاريع
            </Link>
            <Link href="/about" className="text-white hover:text-[#00ff00] transition-colors">
              من أنا
            </Link>
            <Link href="/contact" className="text-[#00ff00] transition-colors">
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

      {/* Contact Header */}
      <section className="py-12 bg-[#222] border-b border-[#333]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-[#00ff00]">اتصل بي</h1>
          <p className="text-xl mb-8 text-gray-300">
            يمكنك التواصل معي من خلال النموذج أدناه أو عبر وسائل التواصل المختلفة
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#00ff00]">أرسل رسالة</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">الاسم</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-[#222] border border-[#333] rounded-md focus:border-[#00ff00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="w-full p-3 bg-[#222] border border-[#333] rounded-md focus:border-[#00ff00] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">الموضوع</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-[#222] border border-[#333] rounded-md focus:border-[#00ff00] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">الرسالة</label>
                  <textarea
                    rows={6}
                    className="w-full p-3 bg-[#222] border border-[#333] rounded-md focus:border-[#00ff00] focus:outline-none"
                  ></textarea>
                </div>
                <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">
                  <Send className="mr-2 h-4 w-4" />
                  إرسال الرسالة
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#00ff00]">معلومات التواصل</h2>
              <div className="space-y-8">
                <Card className="bg-[#222] border-[#333]">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-[#333] p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-[#00ff00]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#00ff00]">البريد الإلكتروني</h3>
                        <p className="text-gray-300">contact@eslamlinux.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[#222] border-[#333]">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-[#333] p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-[#00ff00]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#00ff00]">الهاتف</h3>
                        <p className="text-gray-300">+20 123 456 7890</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[#222] border-[#333]">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-[#333] p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-[#00ff00]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#00ff00]">العنوان</h3>
                        <p className="text-gray-300">القاهرة، مصر</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-[#00ff00]">تابعني على وسائل التواصل الاجتماعي</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-[#222] border-t border-[#333]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#00ff00]">موقعي</h2>
          <div className="h-[400px] bg-[#333] rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <MapPin className="h-12 w-12 mr-2" />
              <span className="text-xl">خريطة الموقع</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#1a1a1a] border-t border-[#333]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center text-[#00ff00]">الأسئلة الشائعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "ما هي خدمات تطوير الويب التي تقدمها؟",
                answer:
                  "أقدم خدمات تطوير مواقع ويب كاملة باستخدام أحدث التقنيات مثل React و Next.js و PHP، بالإضافة إلى تطوير واجهات المستخدم وقواعد البيانات وتحسين أداء المواقع.",
              },
              {
                question: "هل تقدم خدمات استشارية في مجال أمن المعلومات؟",
                answer:
                  "نعم، أقدم استشارات في مجال أمن المعلومات تشمل تقييم المخاطر وفحص الثغرات وتطوير استراتيجيات الأمن السيبراني وتدريب الموظفين على أفضل ممارسات الأمان.",
              },
              {
                question: "كيف يمكنني التعاون معك في مشروع؟",
                answer:
                  "يمكنك التواصل معي من خلال نموذج الاتصال في هذه الصفحة أو عبر البريد الإلكتروني. سنقوم بتحديد موعد لمناقشة تفاصيل المشروع واحتياجاتك ثم نضع خطة عمل مناسبة.",
              },
              {
                question: "هل تقدم دورات تدريبية في مجال لينكس وأمن المعلومات؟",
                answer:
                  "نعم، أقدم دورات تدريبية متخصصة في مجال لينكس وأمن المعلومات للأفراد والشركات، سواء بشكل مباشر أو عبر الإنترنت، مع توفير مواد تدريبية وتطبيقات عملية.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-[#222] border-[#333]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-[#00ff00]">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
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

