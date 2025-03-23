"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  FileText,
  Home,
  Image,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Users,
  PlusCircle,
  Edit,
  Trash,
  ChevronRight,
} from "lucide-react"

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#1a1a1a]">
        <Card className="w-full max-w-md bg-[#222] border-[#333] text-white">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-[#00ff00]">تسجيل الدخول</CardTitle>
            <CardDescription className="text-center text-gray-400">
              أدخل بيانات الدخول للوصول إلى لوحة التحكم
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="email"
                  placeholder="البريد الإلكتروني"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  className="bg-[#1a1a1a] border-[#333] text-white focus:border-[#00ff00] focus:ring-[#00ff00]"
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="password"
                  placeholder="كلمة المرور"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="current-password"
                  className="bg-[#1a1a1a] border-[#333] text-white focus:border-[#00ff00] focus:ring-[#00ff00]"
                />
              </div>
              <Button className="w-full bg-[#00ff00] text-black hover:bg-[#00cc00]" onClick={() => setIsLoggedIn(true)}>
                تسجيل الدخول
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr] bg-[#1a1a1a] text-white">
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
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-[#00ff00]"
              >
                <Home className="h-4 w-4" />
                الرئيسية
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-[#333] px-3 py-2 text-[#00ff00] transition-all"
              >
                <LayoutDashboard className="h-4 w-4" />
                لوحة التحكم
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-[#00ff00]"
              >
                <FileText className="h-4 w-4" />
                المقالات
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-[#00ff00]"
              >
                <Image className="h-4 w-4" />
                المشاريع
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-[#00ff00]"
              >
                <MessageSquare className="h-4 w-4" />
                الرسائل
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-[#00ff00]"
              >
                <Users className="h-4 w-4" />
                المستخدمين
              </Link>
              <Link
                href="#"
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
              onClick={() => setIsLoggedIn(false)}
            >
              <LogOut className="h-4 w-4" />
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b border-[#333] bg-[#222] px-6">
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold text-[#00ff00]">لوحة التحكم</h1>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-6 p-6 bg-[#1a1a1a]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-[#222] border-[#333] text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">إجمالي الزيارات</CardTitle>
                <Users className="h-4 w-4 text-[#00ff00]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">+2,350</div>
                <p className="text-xs text-gray-400">+180.1% من الشهر الماضي</p>
              </CardContent>
            </Card>
            <Card className="bg-[#222] border-[#333] text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">المقالات</CardTitle>
                <FileText className="h-4 w-4 text-[#00ff00]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">+12</div>
                <p className="text-xs text-gray-400">+19% من الشهر الماضي</p>
              </CardContent>
            </Card>
            <Card className="bg-[#222] border-[#333] text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">المشاريع</CardTitle>
                <Image className="h-4 w-4 text-[#00ff00]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">+9</div>
                <p className="text-xs text-gray-400">+12% من الشهر الماضي</p>
              </CardContent>
            </Card>
            <Card className="bg-[#222] border-[#333] text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">التعليقات</CardTitle>
                <MessageSquare className="h-4 w-4 text-[#00ff00]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">+48</div>
                <p className="text-xs text-gray-400">+25.5% من الشهر الماضي</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-[#222] border-[#333] text-white">
              <CardHeader>
                <CardTitle className="text-[#00ff00]">نظرة عامة على الزيارات</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full flex items-center justify-center bg-[#1a1a1a] rounded-md">
                  <BarChart className="h-16 w-16 text-gray-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3 bg-[#222] border-[#333] text-white">
              <CardHeader>
                <CardTitle className="text-[#00ff00]">النشاط الأخير</CardTitle>
                <CardDescription className="text-gray-400">تم تسجيل 10 أنشطة هذا الشهر</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[
                    { action: "تم إضافة مقال جديد", time: "منذ ساعة واحدة" },
                    { action: "تم تحديث مشروع", time: "منذ 3 ساعات" },
                    { action: "تم الرد على تعليق", time: "منذ 5 ساعات" },
                    { action: "تم تسجيل دخول جديد", time: "منذ يوم واحد" },
                  ].map((activity, i) => (
                    <div className="flex items-center" key={i}>
                      <div className="mr-4 h-2 w-2 rounded-full bg-[#00ff00]"></div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none text-white">{activity.action}</p>
                        <p className="text-sm text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-[#222] border-[#333] text-white">
              <CardHeader>
                <CardTitle className="text-[#00ff00]">إدارة المحتوى</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="articles" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-[#1a1a1a]">
                    <TabsTrigger
                      value="articles"
                      className="data-[state=active]:bg-[#00ff00] data-[state=active]:text-black"
                    >
                      المقالات
                    </TabsTrigger>
                    <TabsTrigger
                      value="projects"
                      className="data-[state=active]:bg-[#00ff00] data-[state=active]:text-black"
                    >
                      المشاريع
                    </TabsTrigger>
                    <TabsTrigger
                      value="pages"
                      className="data-[state=active]:bg-[#00ff00] data-[state=active]:text-black"
                    >
                      ال" data-[state=active]:text-black" > الصفحات
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="articles" className="space-y-4 pt-4">
                    <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      إضافة مقال جديد
                    </Button>
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-lg border border-[#333] bg-[#1a1a1a] p-3"
                        >
                          <div className="flex items-center">
                            <div className="mr-3 h-10 w-10 rounded bg-[#333]"></div>
                            <div>
                              <div className="font-medium">عنوان المقال {i}</div>
                              <div className="text-sm text-gray-400">
                                نُشر في {new Date().toLocaleDateString("ar-EG")}
                              </div>
                            </div>
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
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-[#333] text-gray-400 hover:text-[#00ff00]">
                      عرض المزيد
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </TabsContent>
                  <TabsContent value="projects" className="pt-4">
                    <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      إضافة مشروع جديد
                    </Button>
                    <div className="mt-4 space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-lg border border-[#333] bg-[#1a1a1a] p-3"
                        >
                          <div className="flex items-center">
                            <div className="mr-3 h-10 w-10 rounded bg-[#333]"></div>
                            <div>
                              <div className="font-medium">مشروع لينكس {i}</div>
                              <div className="text-sm text-gray-400">
                                تم التحديث في {new Date().toLocaleDateString("ar-EG")}
                              </div>
                            </div>
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
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="pages" className="pt-4">
                    <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      إضافة صفحة جديدة
                    </Button>
                    <div className="mt-4 space-y-2">
                      {["الرئيسية", "من أنا", "اتصل بي"].map((page, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-lg border border-[#333] bg-[#1a1a1a] p-3"
                        >
                          <div className="font-medium">{page}</div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#00ff00]">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <Card className="col-span-3 bg-[#222] border-[#333] text-white">
              <CardHeader>
                <CardTitle className="text-[#00ff00]">الإعدادات العامة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">عنوان الموقع</label>
                  <Input
                    defaultValue="EslamLinux - الموقع الشخصي"
                    className="bg-[#1a1a1a] border-[#333] text-white focus:border-[#00ff00] focus:ring-[#00ff00]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">وصف الموقع</label>
                  <Input
                    defaultValue="مطور ويب ومتخصص في لينكس وأمن المعلومات"
                    className="bg-[#1a1a1a] border-[#333] text-white focus:border-[#00ff00] focus:ring-[#00ff00]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">البريد الإلكتروني للتواصل</label>
                  <Input
                    defaultValue="contact@eslamlinux.com"
                    className="bg-[#1a1a1a] border-[#333] text-white focus:border-[#00ff00] focus:ring-[#00ff00]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">شعار الموقع</label>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded bg-[#333] flex items-center justify-center text-gray-500">
                      Logo
                    </div>
                    <Button variant="outline" className="border-[#333] text-gray-400 hover:text-[#00ff00]">
                      تغيير الشعار
                    </Button>
                  </div>
                </div>
                <Button className="bg-[#00ff00] text-black hover:bg-[#00cc00]">حفظ الإعدادات</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

