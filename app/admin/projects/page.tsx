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
  Filter,
  Github,
  ExternalLink,
} from "lucide-react"

export default function AdminProjectsPage() {
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
            <Link href="/admin/blog" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-[#00ff00]">
              <FileText className="h-5 w-5" />
              المقالات
            </Link>
            <Link href="/admin/projects" className="flex items-center gap-3 px-3 py-2 text-[#00ff00]">
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
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-[#00ff00]"
                >
                  <FileText className="h-4 w-4" />
                  المقالات
                </Link>
                <Link
                  href="/admin/projects"
                  className="flex items-center gap-3 rounded-lg bg-[#333] px-3 py-2 text-[#00ff00] transition-all"
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
              <h1 className="text-lg font-semibold text-[#00ff00]">إدارة المشاريع</h1>
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
                  إضافة مشروع جديد
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
                  placeholder="بحث في المشاريع..."
                  className="bg-[#222] border-[#333] text-white pr-10 focus:border-[#00ff00] focus:ring-[#00ff00]"
                />
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "LinuxSecurityScanner",
                  description: "أداة متكاملة لفحص وتحليل ثغرات أنظمة لينكس واكتشاف نقاط الضعف الأمنية.",
                  category: "أمن المعلومات",
                  featured: true,
                  tags: ["Python", "Bash", "Linux", "Security"],
                },
                {
                  title: "NetworkMonitor",
                  description: "أداة لمراقبة حركة الشبكة واكتشاف الأنشطة المشبوهة في الوقت الفعلي.",
                  category: "أمن المعلومات",
                  featured: false,
                  tags: ["Python", "Network", "Security"],
                },
                {
                  title: "LinuxAutomation",
                  description: "مجموعة من السكربتات لأتمتة المهام اليومية في أنظمة لينكس.",
                  category: "لينكس",
                  featured: false,
                  tags: ["Bash", "Python", "Automation"],
                },
                {
                  title: "SecureFileSystem",
                  description: "نظام ملفات آمن مع تشفير من طرف إلى طرف لحماية البيانات الحساسة.",
                  category: "أمن المعلومات",
                  featured: false,
                  tags: ["C++", "Encryption", "Security"],
                },
                {
                  title: "DockerManager",
                  description: "واجهة رسومية لإدارة حاويات Docker بسهولة وكفاءة على أنظمة لينكس.",
                  category: "أدوات",
                  featured: false,
                  tags: ["JavaScript", "Docker", "Node.js"],
                },
                {
                  title: "LinuxBackupTool",
                  description: "أداة للنسخ الاحتياطي الآلي والمجدول لأنظمة لينكس مع دعم التخزين السحابي.",
                  category: "لينكس",
                  featured: false,
                  tags: ["Python", "Backup", "Cloud"],
                },
              ].map((project, index) => (
                <Card key={index} className="bg-[#222] border-[#333] overflow-hidden">
                  <div className="h-40 bg-[#333] relative">
                    <img
                      src={`/placeholder.svg?height=160&width=300&text=${project.title}`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-[#00ff00] text-black px-3 py-1 rounded-full text-xs font-medium">
                        مميز
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-[#333] px-3 py-1 rounded-full text-xs font-medium text-[#00ff00]">
                      {project.category}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-[#00ff00]">{project.title}</h3>
                    <p className="text-gray-300 mb-3 text-sm line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-[#1a1a1a] px-2 py-1 rounded-md text-xs font-medium text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#00ff00]">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#00ff00]">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#00ff00]">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#00ff00]">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-500">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add New Project Card */}
            <Card className="bg-[#222] border-dashed border-[#333] hover:border-[#00ff00] transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center text-center h-60">
                  <PlusCircle className="h-12 w-12 text-gray-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-[#00ff00]">إضافة مشروع جديد</h3>
                  <p className="text-gray-400 mb-4">قم بإضافة مشروع جديد لعرضه في صفحة المشاريع</p>
                  <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">إضافة مشروع</Button>
                </div>
              </CardContent>
            </Card>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <div className="flex gap-2">
                {[1, 2].map((page) => (
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

