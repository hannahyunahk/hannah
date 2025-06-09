import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDE4]">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center justify-between gap-12 bg-[#FFFDE4] rounded-b-3xl shadow-sm">
        {/* 왼쪽: 소개/버튼 */}
        <div className="flex-1 flex flex-col items-start justify-center text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#665c00] drop-shadow">곽현아 <span className="block text-[#5B6EE1]">선생님</span></h1>
          <h2 className="text-2xl mb-6 text-[#8d7b00] font-semibold">중학교 교사, AI 교육 혁신가</h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl text-[#665c00]">
            "학생과 함께 성장하는 AI 시대의 교육자"
          </p>
          <div className="flex gap-4">
            <Button className="bg-[#FFD700] text-[#665c00] font-bold shadow-lg hover:bg-[#FFFACD]" size="lg" asChild>
              <a href="mailto:hyunahv@konkuk.ac.kr">
                <Mail className="mr-2 h-5 w-5" />
                이메일
              </a>
            </Button>
            <Button variant="outline" className="border-[#FFD700] text-[#665c00] font-bold shadow-lg hover:bg-[#FFFACD]" size="lg" asChild>
              <a href="#contact">
                연락처 보기
              </a>
            </Button>
          </div>
        </div>
        {/* 오른쪽: 카드형 인포그래픽 */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-[#FFFACD] rounded-3xl shadow-2xl p-10 flex flex-col items-center w-[340px] h-[340px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-[#FFD700] via-[#FFFACD] to-[#FFFDE4] opacity-40 blur-2xl" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg">
                <span className="text-5xl text-[#FFD700]">🤖</span>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-[#665c00] mb-1">AI-Powered Learning</div>
                <div className="text-[#8d7b00] text-sm">AI, 교육 혁신, 실무 경험을 한 번에!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 border-[#F5EFC0]" />

      {/* Education Philosophy Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#665c00]">교육 철학</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-[#FFFACD] border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-[#8d7b00]">AI 시대의 교육</CardTitle>
              <CardDescription className="text-[#b3a369]">미래 교육의 방향성</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#333333]">
                AI 기술을 활용한 혁신적인 교육 방법론을 연구하고 실천하며,
                학생들의 창의력과 문제 해결 능력을 키우는 교육을 추구합니다.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#FFFACD] border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-[#8d7b00]">학생 중심 교육</CardTitle>
              <CardDescription className="text-[#b3a369]">개성과 잠재력 발굴</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#333333]">
                각 학생의 개성과 잠재력을 최대한 발휘할 수 있도록 지원하며,
                함께 성장하는 교육 환경을 만들어갑니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 border-[#F5EFC0]" />

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#665c00]">기술 스택</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Next.js", "TailwindCSS", "ShadCN", "Supabase", "DrizzleORM", "Clerk", "Lucide", "Replit", "Vercel"].map((tech) => (
            <HoverCard key={tech}>
              <HoverCardTrigger>
                <Badge variant="secondary" className="text-lg px-4 py-2 bg-[#FFFACD] text-[#665c00] border-none shadow-sm">
                  {tech}
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className="bg-[#FFFFF0] text-[#333333] border-[#F5EFC0]">
                <p className="text-sm">
                  {tech}를 활용한 웹 개발 및 교육 프로젝트 경험이 있습니다.
                </p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </section>

      <Separator className="my-8 border-[#F5EFC0]" />

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#665c00]">연락처</h2>
        <div className="flex flex-col items-center gap-4">
          <Button className="bg-[#FFD700] text-[#665c00] hover:bg-[#ffe066] border-none shadow-md" size="lg" asChild>
            <a href="mailto:hyunahv@konkuk.ac.kr">
              <Mail className="mr-2 h-4 w-4" />
              hyunahv@konkuk.ac.kr
            </a>
          </Button>
          <div className="flex gap-4 mt-4">
            <Button variant="ghost" size="icon" className="hover:bg-[#FFFACD] text-[#665c00]" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-[#FFFACD] text-[#665c00]" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-[#FFFACD] text-[#665c00]" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
