import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Menu,
  Download,
  FileText,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react"

export default function AboutPage() {
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
            <Link href="/about" className="text-[#00ff00] transition-colors">
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

      {/* About Hero */}
      <section className="py-16 bg-[#222] border-b border-[#333]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-[#333] border-4 border-[#00ff00] overflow-hidden">
                <img
                  src="/placeholder.svg?height=256&width=256&text=EslamLinux"
                  alt="EslamLinux"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4 text-[#00ff00]">
                مرحباً، أنا <span className="text-white">إسلام لينكس</span>
              </h1>
              <p className="text-xl mb-6 text-gray-300">مطور ويب ومتخصص في لينكس وأمن المعلومات</p>
              <p className="text-gray-300 mb-6">
                أنا مطور ويب ومتخصص في أنظمة لينكس وأمن المعلومات مع خبرة أكثر من 10 سنوات في هذا المجال. أعمل على تطوير
                حلول برمجية آمنة وفعالة، وأساهم في مشاريع مفتوحة المصدر، وأشارك معرفتي من خلال المدونات والمحاضرات.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">
                  <Download className="mr-2 h-4 w-4" />
                  تحميل السيرة الذاتية
                </Button>
                <Button
                  variant="outline"
                  className="border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  تواصل معي
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-10 w-10 text-gray-400 hover:text-[#00ff00] hover:bg-[#333]"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-10 w-10 text-gray-400 hover:text-[#00ff00] hover:bg-[#333]"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-10 w-10 text-gray-400 hover:text-[#00ff00] hover:bg-[#333]"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#00ff00]">من أنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#00ff00]">نبذة عني</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  بدأت رحلتي في عالم التكنولوجيا منذ أكثر من 10 سنوات، حيث كنت مهتماً بأنظمة لينكس وكيفية عملها. مع مرور
                  الوقت، تطورت مهاراتي لتشمل تطوير الويب وأمن المعلومات.
                </p>
                <p>
                  أعمل حالياً كمستشار أمن معلومات ومطور ويب مستقل، حيث أساعد الشركات على بناء أنظمة آمنة وفعالة. كما أقوم
                  بتقديم دورات تدريبية في مجال لينكس وأمن المعلومات.
                </p>
                <p>
                  أؤمن بأهمية مشاركة المعرفة، لذلك أقوم بكتابة مقالات تقنية في مدونتي وأساهم في مشاريع مفتوحة المصدر.
                  هدفي هو مساعدة الآخرين على تعلم التكنولوجيا وتطوير مهاراتهم.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#00ff00]">مهاراتي</h3>
              <div className="space-y-4">
                {[
                  { name: "Linux Administration", level: 95 },
                  { name: "Web Development", level: 90 },
                  { name: "Network Security", level: 85 },
                  { name: "Penetration Testing", level: 80 },
                  { name: "Python", level: 85 },
                  { name: "PHP", level: 90 },
                  { name: "JavaScript", level: 85 },
                  { name: "Database Management", level: 80 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-[#00ff00]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#333] h-2 rounded-full">
                      <div className="bg-[#00ff00] h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-[#222] border-y border-[#333]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#00ff00]">الخبرات العملية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-[#00ff00] mr-3" />
                <h3 className="text-2xl font-bold text-[#00ff00]">الخبرة المهنية</h3>
              </div>
              <div className="space-y-8">
                {[
                  {
                    title: "مستشار أمن معلومات",
                    company: "شركة تكنولوجيا المعلومات",
                    period: "2020 - الآن",
                    description: "تقديم استشارات في مجال أمن المعلومات وتطوير استراتيجيات الأمن السيبراني للشركات.",
                  },
                  {
                    title: "مطور ويب رئيسي",
                    company: "شركة البرمجيات العربية",
                    period: "2017 - 2020",
                    description: "تطوير وصيانة تطبيقات الويب باستخدام PHP و JavaScript وإدارة فريق المطورين.",
                  },
                  {
                    title: "مدير أنظمة لينكس",
                    company: "شركة استضافة المواقع",
                    period: "2014 - 2017",
                    description: "إدارة خوادم لينكس وتأمينها وتحسين أدائها وحل المشكلات التقنية.",
                  },
                ].map((job, index) => (
                  <div key={index} className="relative border-r-2 border-[#333] pr-6">
                    <div className="absolute right-[-9px] top-0 w-4 h-4 rounded-full bg-[#00ff00]"></div>
                    <h4 className="text-xl font-bold text-white">{job.title}</h4>
                    <div className="flex items-center text-[#00ff00] mb-2">
                      <span>{job.company}</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-400">{job.period}</span>
                    </div>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-[#00ff00] mr-3" />
                <h3 className="text-2xl font-bold text-[#00ff00]">التعليم والشهادات</h3>
              </div>
              <div className="space-y-8">
                {[
                  {
                    title: "ماجستير في أمن المعلومات",
                    institution: "جامعة القاهرة",
                    period: "2015 - 2017",
                    description: "دراسة متقدمة في مجال أمن المعلومات والشبكات مع التركيز على تأمين أنظمة لينكس.",
                  },
                  {
                    title: "بكالوريوس علوم الحاسب",
                    institution: "جامعة عين شمس",
                    period: "2010 - 2014",
                    description: "دراسة علوم الحاسب مع التخصص في تطوير البرمجيات وأنظمة التشغيل.",
                  },
                  {
                    title: "شهادات احترافية",
                    institution: "مؤسسات عالمية",
                    period: "2014 - 2020",
                    description: "RHCE, CCNA Security, CEH, CompTIA Security+, AWS Certified Solutions Architect",
                  },
                ].map((edu, index) => (
                  <div key={index} className="relative border-r-2 border-[#333] pr-6">
                    <div className="absolute right-[-9px] top-0 w-4 h-4 rounded-full bg-[#00ff00]"></div>
                    <h4 className="text-xl font-bold text-white">{edu.title}</h4>
                    <div className="flex items-center text-[#00ff00] mb-2">
                      <span>{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-400">{edu.period}</span>
                    </div>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#00ff00]">الخدمات التي أقدمها</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-10 w-10 text-[#00ff00]" />,
                title: "تطوير مواقع الويب",
                description: "تصميم وتطوير مواقع ويب احترافية وتطبيقات ويب متكاملة باستخدام أحدث التقنيات.",
              },
              {
                icon: <Award className="h-10 w-10 text-[#00ff00]" />,
                title: "استشارات أمن المعلومات",
                description: "تقديم استشارات في مجال أمن المعلومات وتطوير استراتيجيات الأمن السيبراني للشركات.",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-[#00ff00]" />,
                title: "إدارة أنظمة لينكس",
                description: "إعداد وإدارة وتأمين خوادم لينكس وتحسين أدائها وحل المشكلات التقنية.",
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-[#00ff00]" />,
                title: "التدريب والتعليم",
                description: "تقديم دورات تدريبية في مجال لينكس وأمن المعلومات وتطوير الويب.",
              },
              {
                icon: <Github className="h-10 w-10 text-[#00ff00]" />,
                title: "تطوير البرمجيات مفتوحة المصدر",
                description: "المساهمة في تطوير البرمجيات مفتوحة المصدر وتقديم الدعم الفني لها.",
              },
              {
                icon: <Mail className="h-10 w-10 text-[#00ff00]" />,
                title: "الاستشارات التقنية",
                description: "تقديم استشارات تقنية في مجال تكنولوجيا المعلومات والبرمجيات والشبكات.",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-[#222] border-[#333] hover:border-[#00ff00] transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-[#00ff00]">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#222] border-t border-[#333]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#00ff00]">آراء العملاء</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "أحمد محمد",
                position: "مدير تكنولوجيا المعلومات",
                company: "شركة التقنية العربية",
                testimonial:
                  "تعاملنا مع إسلام في مشروع تأمين البنية التحتية لشركتنا، وكان العمل احترافياً ودقيقاً. نتائج المشروع كانت ممتازة وتجاوزت توقعاتنا.",
              },
              {
                name: "سارة أحمد",
                position: "مؤسس شركة ناشئة",
                company: "تك ستارت",
                testimonial:
                  "ساعدنا إسلام في تطوير موقع الويب الخاص بشركتنا الناشئة، وكان التعامل معه ممتازاً. الموقع الآن سريع وآمن ويلبي جميع احتياجاتنا.",
              },
              {
                name: "محمد علي",
                position: "مدير الأمن السيبراني",
                company: "بنك الاستثمار العربي",
                testimonial:
                  "قدم لنا إسلام استشارات قيمة في مجال أمن المعلومات ساعدتنا على تحسين مستوى الأمان في أنظمتنا المصرفية بشكل كبير.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-[#333] hover:border-[#00ff00] transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-[#00ff00] text-xl">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 flex-grow">"{testimonial.testimonial}"</p>
                    <div className="flex items-center mt-auto">
                      <div className="w-12 h-12 rounded-full bg-[#333] mr-4"></div>
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
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

