"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  LayoutDashboard,
  FileText,
  Image,
  Users,
  Settings,
  LogOut,
  Menu,
  PlusCircle,
  Search,
  Edit,
  Trash,
  Eye,
  Calendar,
  Clock,
  Filter,
} from "lucide-react"

export default function AdminBlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-80 z-50 md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="bg-[#222] h-full w-64 p-4">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="text-xl font-bold text-[#00ff00]">
              EslamLinux
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
          <nav className="space-y-4">
            <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-[#00ff00]">
              <LayoutDashboard className="h-5 w-5" />
              لوحة التحكم
            </Link>
            <Link href="/admin/blog" className="flex items-center gap-3 px-3 py-2 text-[#00ff00]">
              <FileText className="h-5 w-5" />
              المقالات
            </Link>
            <Link
              href="/admin/projects"
              className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-[#00ff00]"
            >
              <Image className="h-5 w-5" />
              المشاريع
            </Link>
            <Link href="/admin/users" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-[#00ff00]">
              <Users className="h-5 w-5" />
              المستخدمين
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-[#00ff00]"
            >
              <Settings className="h-5 w-5" />
              الإعدادات
            </Link>
            <div className="pt-4 border-t border-[#333]">
              <Button
                variant="outline"
                className="w-full justify-start gap-2 border-[#333] text-gray-400 hover:text-[#00ff00]"
              >
                <LogOut className="h-5 w-5" />
                تسجيل الخروج
              </Button>
            </div>
          </nav>
        </div>
      </div>

      <div className="grid min-h-screen md:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <div className="hidden border-r border-[#333] bg-[#222] md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b border-[#333] px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <span className="font-bold text-[#00ff00]">EslamLinux</span>
                <span className="text-xs text-gray-400">لوحة التحكم</span>
              </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  href="/admin"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-[#00ff00]"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  لوحة التحكم
                </Link>
                <Link
                  href="/admin/blog"
                  className="flex items-center gap-3 rounded-lg bg-[#333] px-3 py-2 text-[#00ff00] transition-all"
                >
                  <FileText className="h-4 w-4" />
                  المقالات
                </Link>
                <Link
                  href="/admin/projects"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-[#00ff00]"
                >
                  <Image className="h-4 w-4" />
                  المشاريع
                </Link>
                <Link
                  href="/admin/users"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-[#00ff00]"
                >
                  <Users className="h-4 w-4" />
                  المستخدمين
                </Link>
                <Link
                  href="/admin/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-[#00ff00]"
                >
                  <Settings className="h-4 w-4" />
                  الإعدادات
                </Link>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Button
                variant="outline"
                className="w-full justify-start gap-2 border-[#333] text-gray-400 hover:bg-[#333] hover:text-[#00ff00]"
              >
                <LogOut className="h-4 w-4" />
                تسجيل الخروج
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b border-[#333] bg-[#222] px-6">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6 text-white" />
            </Button>
            <div className="w-full flex-1">
              <h1 className="text-lg font-semibold text-[#00ff00]">إدارة المقالات</h1>
            </div>
            <Link href="/" className="text-sm text-gray-400 hover:text-[#00ff00]">
              العودة للموقع
            </Link>
          </header>

          <main className="flex flex-1 flex-col gap-6 p-6 bg-[#1a1a1a]">
            {/* Actions Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex gap-4">
                <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  إضافة مقال جديد
                </Button>
                <Button
                  variant="outline"
                  className="border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  تصفية
                </Button>
              </div>
              <div className="relative max-w-md w-full">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="بحث في المقالات..."
                  className="bg-[#222] border-[#333] text-white pr-10 focus:border-[#00ff00] focus:ring-[#00ff00]"
                />
              </div>
            </div>

            {/* Blog Posts */}
            <Card className="bg-[#222] border-[#333]">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {[
                    {
                      title: "أفضل توزيعات لينكس للمطورين في 2024",
                      excerpt: "في هذا المقال سنستعرض أفضل توزيعات لينكس للمطورين في عام 2024...",
                      date: "15 مارس 2024",
                      readTime: "10 دقائق",
                      status: "منشور",
                      category: "لينكس",
                    },
                    {
                      title: "كيفية تأمين خادم لينكس من الهجمات",
                      excerpt: "دليل شامل لتأمين خادم لينكس من الهجمات الإلكترونية وحماية البيانات...",
                      date: "10 مارس 2024",
                      readTime: "8 دقائق",
                      status: "منشور",
                      category: "أمن المعلومات",
                    },
                    {
                      title: "أساسيات Docker للمبتدئين",
                      excerpt: "تعلم أساسيات Docker وكيفية استخدامه لتطوير وتشغيل التطبيقات في بيئات معزولة...",
                      date: "5 مارس 2024",
                      readTime: "12 دقيقة",
                      status: "منشور",
                      category: "لينكس",
                    },
                    {
                      title: "إعداد بيئة تطوير React على لينكس",
                      excerpt: "خطوات إعداد بيئة تطوير متكاملة لـ React.js على نظام لينكس مع أفضل الأدوات...",
                      date: "28 فبراير 2024",
                      readTime: "6 دقائق",
                      status: "منشور",
                      category: "تطوير الويب",
                    },
                    {
                      title: "استخدام Python لأتمتة المهام في لينكس",
                      excerpt: "كيفية استخدام Python لأتمتة المهام اليومية في نظام لينكس وتوفير الوقت والجهد...",
                      date: "20 فبراير 2024",
                      readTime: "9 دقائق",
                      status: "مسودة",
                      category: "البرمجة",
                    },
                  ].map((post, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-4 border-b border-[#333] pb-6 last:border-0 last:pb-0"
                    >
                      <div className="md:w-1/4 h-40 bg-[#333] rounded-lg overflow-hidden">
                        <img
                          src={`/placeholder.svg?height=160&width=300&text=مقال ${index + 1}`}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/4">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${post.status === "منشور" ? "bg-green-900 text-green-300" : "bg-yellow-900 text-yellow-300"}`}
                          >
                            {post.status}
                          </span>
                          <span className="bg-[#333] px-2 py-1 rounded-full text-xs font-medium text-gray-300">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[#00ff00]">{post.title}</h3>
                        <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center text-gray-400 text-xs">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center text-gray-400 text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                            >
                              <Eye className="mr-2 h-3 w-3" />
                              معاينة
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-[#333] text-gray-300 hover:border-[#00ff00] hover:text-[#00ff00]"
                            >
                              <Edit className="mr-2 h-3 w-3" />
                              تعديل
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-[#333] text-red-500 hover:border-red-500 hover:bg-red-950"
                            >
                              <Trash className="mr-2 h-3 w-3" />
                              حذف
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
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
          </main>
        </div>
      </div>
    </div>
  )
}

