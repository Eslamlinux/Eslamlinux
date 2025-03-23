import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Mail, Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react"
import { getDictionary } from "@/lib/dictionary"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"

export default async function AboutPage({ params }: { params: { locale: string } }) {
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
            <Link href={`/${locale}/about`} className="text-[#00ff00] transition-colors">
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
                {dict.about.title} <span className="text-white">EslamLinux</span>
              </h1>
              <p className="text-xl mb-6 text-gray-300">{dict.about.subtitle}</p>
              <p className="text-gray-300 mb-6">
                {locale === "ar"
                  ? "أنا مطور ويب ومتخصص في أنظمة لينكس وأمن المعلومات مع خبرة أكثر من 10 سنوات في هذا المجال. أعمل على تطوير حلول برمجية آمنة وفعالة، وأساهم في مشاريع مفتوحة المصدر، وأشارك معرفتي من خلال المدونات والمحاضرات."
                  : "I am a web developer and specialist in Linux systems and information security with over 10 years of experience in this field. I work on developing secure and efficient software solutions, contribute to open source projects, and share my knowledge through blogs and lectures."}
              </p>
              <div className={`flex flex-wrap gap-4 ${isRtl ? "rtl:space-x-reverse" : ""}`}>
                <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">
                  <Download className="mr-2 h-4 w-4" />
                  {dict.about.downloadCV}
                </Button>
                <Button
                  variant="outline"
                  className="border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {dict.about.contactMe}
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#00ff00]">{dict.about.aboutMe.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#00ff00]">{dict.about.aboutMe.title}</h3>
              <div className="space-y-4 text-gray-300">
                <p>{dict.about.aboutMe.content1}</p>
                <p>{dict.about.aboutMe.content2}</p>
                <p>{dict.about.aboutMe.content3}</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#00ff00]">{dict.about.skills.title}</h3>
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#00ff00]">{dict.about.experience.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-[#00ff00] mr-3" />
                <h3 className="text-2xl font-bold text-[#00ff00]">{dict.about.experience.professional}</h3>
              </div>
              <div className="space-y-8">
                {[
                  {
                    title: locale === "ar" ? "مستشار أمن معلومات" : "Information Security Consultant",
                    company: locale === "ar" ? "شركة تكنولوجيا المعلومات" : "IT Company",
                    period: locale === "ar" ? "2020 - الآن" : "2020 - Present",
                    description:
                      locale === "ar"
                        ? "تقديم استشارات في مجال أمن المعلومات وتطوير استراتيجيات الأمن السيبراني للشركات."
                        : "Providing consultations in the field of information security and developing cybersecurity strategies for companies.",
                  },
                  {
                    title: locale === "ar" ? "مطور ويب رئيسي" : "Senior Web Developer",
                    company: locale === "ar" ? "شركة البرمجيات العربية" : "Arab Software Company",
                    period: locale === "ar" ? "2017 - 2020" : "2017 - 2020",
                    description:
                      locale === "ar"
                        ? "تطوير وصيانة تطبيقات الويب باستخدام PHP و JavaScript وإدارة فريق المطورين."
                        : "Developing and maintaining web applications using PHP and JavaScript and managing the development team.",
                  },
                  {
                    title: locale === "ar" ? "مدير أنظمة لينكس" : "Linux Systems Manager",
                    company: locale === "ar" ? "شركة استضافة المواقع" : "Web Hosting Company",
                    period: locale === "ar" ? "2014 - 2017" : "2014 - 2017",
                    description:
                      locale === "ar"
                        ? "إدارة خوادم لينكس وتأمينها وتحسين أدائها وحل المشكلات التقنية."
                        : "Managing Linux servers, securing them, improving their performance, and solving technical problems.",
                  },
                ].map((job, index) => (
                  <div key={index} className={`relative border-r-2 border-[#333] ${isRtl ? "pr-6" : "pl-6"}`}>
                    <div
                      className={`absolute ${isRtl ? "right-[-9px]" : "left-[-9px]"} top-0 w-4 h-4 rounded-full bg-[#00ff00]`}
                    ></div>
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
                <h3 className="text-2xl font-bold text-[#00ff00]">{dict.about.experience.education}</h3>
              </div>
              <div className="space-y-8">
                {[
                  {
                    title: locale === "ar" ? "ماجستير في أمن المعلومات" : "Master's in Information Security",
                    institution: locale === "ar" ? "جامعة القاهرة" : "Cairo University",
                    period: locale === "ar" ? "2015 - 2017" : "2015 - 2017",
                    description:
                      locale === "ar"
                        ? "دراسة متقدمة في مجال أمن المعلومات والشبكات مع التركيز على تأمين أنظمة لينكس."
                        : "Advanced study in the field of information security and networks with a focus on securing Linux systems.",
                  },
                  {
                    title: locale === "ar" ? "بكالوريوس علوم الحاسب" : "Bachelor of Computer Science",
                    institution: locale === "ar" ? "جامعة عين شمس" : "Ain Shams University",
                    period: locale === "ar" ? "2010 - 2014" : "2010 - 2014",
                    description:
                      locale === "ar"
                        ? "دراسة علوم الحاسب مع التخصص في تطوير البرمجيات وأنظمة التشغيل."
                        : "Studying computer science with a specialization in software development and operating systems.",
                  },
                  {
                    title: locale === "ar" ? "شهادات احترافية" : "Professional Certifications",
                    institution: locale === "ar" ? "مؤسسات عالمية" : "Global Institutions",
                    period: locale === "ar" ? "2014 - 2020" : "2014 - 2020",
                    description: "RHCE, CCNA Security, CEH, CompTIA Security+, AWS Certified Solutions Architect",
                  },
                ].map((edu, index) => (
                  <div key={index} className={`relative border-r-2 border-[#333] ${isRtl ? "pr-6" : "pl-6"}`}>
                    <div
                      className={`absolute ${isRtl ? "right-[-9px]" : "left-[-9px]"} top-0 w-4 h-4 rounded-full bg-[#00ff00]`}
                    ></div>
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#00ff00]">{dict.about.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-10 w-10 text-[#00ff00]" />,
                title: dict.about.services.webdev,
                description:
                  locale === "ar"
                    ? "تصميم وتطوير مواقع ويب احترافية وتطبيقات ويب متكاملة باستخدام أحدث التقنيات."
                    : "Designing and developing professional websites and integrated web applications using the latest technologies.",
              },
              {
                icon: <Award className="h-10 w-10 text-[#00ff00]" />,
                title: dict.about.services.security,
                description:
                  locale === "ar"
                    ? "تقديم استشارات في مجال أمن المعلومات وتطوير استراتيجيات الأمن السيبراني للشركات."
                    : "Providing consultations in the field of information security and developing cybersecurity strategies for companies.",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-[#00ff00]" />,
                title: dict.about.services.linux,
                description:
                  locale === "ar"
                    ? "إعداد وإدارة وتأمين خوادم لينكس وتحسين أدائها وحل المشكلات التقنية."
                    : "Setting up, managing, and securing Linux servers, improving their performance, and solving technical problems.",
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-[#00ff00]" />,
                title: dict.about.services.training,
                description:
                  locale === "ar"
                    ? "تقديم دورات تدريبية في مجال لينكس وأمن المعلومات وتطوير الويب."
                    : "Providing training courses in Linux, information security, and web development.",
              },
              {
                icon: <Github className="h-10 w-10 text-[#00ff00]" />,
                title: dict.about.services.opensource,
                description:
                  locale === "ar"
                    ? "المساهمة في تطوير البرمجيات مفتوحة المصدر وتقديم الدعم الفني لها."
                    : "Contributing to the development of open source software and providing technical support for it.",
              },
              {
                icon: <Mail className="h-10 w-10 text-[#00ff00]" />,
                title: dict.about.services.consulting,
                description:
                  locale === "ar"
                    ? "تقديم استشارات تقنية في مجال تكنولوجيا المعلومات والبرمجيات والشبكات."
                    : "Providing technical consultations in the field of information technology, software, and networks.",
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#00ff00]">{dict.about.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: locale === "ar" ? "أحمد محمد" : "Ahmed Mohamed",
                position: locale === "ar" ? "مدير تكنولوجيا المعلومات" : "IT Manager",
                company: locale === "ar" ? "شركة التقنية العربية" : "Arab Tech Company",
                testimonial:
                  locale === "ar"
                    ? "تعاملنا مع إسلام في مشروع تأمين البنية التحتية لشركتنا، وكان العمل احترافياً ودقيقاً. نتائج المشروع كانت ممتازة وتجاوزت توقعاتنا."
                    : "We worked with Eslam on a project to secure our company's infrastructure, and the work was professional and precise. The project results were excellent and exceeded our expectations.",
              },
              {
                name: locale === "ar" ? "سارة أحمد" : "Sarah Ahmed",
                position: locale === "ar" ? "مؤسس شركة ناشئة" : "Startup Founder",
                company: locale === "ar" ? "تك ستارت" : "Tech Start",
                testimonial:
                  locale === "ar"
                    ? "ساعدنا إسلام في تطوير موقع الويب الخاص بشركتنا الناشئة، وكان التعامل معه ممتازاً. الموقع الآن سريع وآمن ويلبي جميع احتياجاتنا."
                    : "Eslam helped us develop our startup's website, and working with him was excellent. The site is now fast, secure, and meets all our needs.",
              },
              {
                name: locale === "ar" ? "محمد علي" : "Mohamed Ali",
                position: locale === "ar" ? "مدير الأمن السيبراني" : "Cybersecurity Manager",
                company: locale === "ar" ? "بنك الاستثمار العربي" : "Arab Investment Bank",
                testimonial:
                  locale === "ar"
                    ? "قدم لنا إسلام استشارات قيمة في مجال أمن المعلومات ساعدتنا على تحسين مستوى الأمان في أنظمتنا المصرفية بشكل كبير."
                    : "Eslam provided us with valuable consultations in the field of information security that helped us greatly improve the security level in our banking systems.",
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

