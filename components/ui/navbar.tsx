import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="w-full px-6 py-3 flex items-center justify-between bg-[#FFFDE4] shadow-md">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl text-[#5B6EE1] drop-shadow">AI Focus Class</span>
      </div>
      <div className="hidden md:flex gap-8">
        <Link href="#" className="text-[#665c00] font-medium hover:text-[#5B6EE1] transition">Home</Link>
        <Link href="#" className="text-[#665c00] font-medium hover:text-[#5B6EE1] transition">About</Link>
        <Link href="#" className="text-[#665c00] font-medium hover:text-[#5B6EE1] transition">Skills</Link>
        <Link href="#" className="text-[#665c00] font-medium hover:text-[#5B6EE1] transition">Projects</Link>
        <Link href="#" className="text-[#665c00] font-medium hover:text-[#5B6EE1] transition">Contact</Link>
      </div>
      <Button className="bg-gradient-to-r from-[#7F6AFF] to-[#A66CFF] text-white font-semibold shadow-md hover:from-[#A66CFF] hover:to-[#7F6AFF]">Login</Button>
    </nav>
  )
} 