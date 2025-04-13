"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, Settings, LogOut, Trophy } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Courses", href: "/courses" },
    { name: "Explore", href: "/explore" },
    { name: "Community", href: "/community" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E0E0E0] dark:border-[#757575] bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-white dark:bg-black">
              <div className="px-7">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg text-black dark:text-white">
                  MicroLearn
                </Link>
              </div>
              <nav className="flex flex-col gap-4 px-2 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                      pathname === item.href 
                        ? "bg-[#5B2A86] dark:bg-[#FFDE5A] text-white dark:text-black font-medium" 
                        : "text-black dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#757575]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-black dark:text-white">
            MicroLearn
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium ${
                  pathname === item.href 
                    ? "text-[#5B2A86] dark:text-[#FFDE5A]" 
                    : "text-[#757575] dark:text-[#E0E0E0] hover:text-[#5B2A86] dark:hover:text-[#FFDE5A]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" className="rounded-full hover:bg-[#E0E0E0] dark:hover:bg-[#757575]">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white dark:bg-black border-[#E0E0E0] dark:border-[#757575]">
                  <DropdownMenuLabel className="text-black dark:text-white">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#E0E0E0] dark:bg-[#757575]" />
                  <DropdownMenuItem asChild className="text-black dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#757575]">
                    <Link href="/profile" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-black dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#757575]">
                    <Link href="/dashboard" className="flex items-center gap-2">
                      <Trophy className="h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-black dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#757575]">
                    <Link href="/settings" className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-[#E0E0E0] dark:bg-[#757575]" />
                  <DropdownMenuItem 
                    onClick={() => setIsLoggedIn(false)} 
                    className="text-black dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#757575]"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild className="text-[#757575] dark:text-[#E0E0E0] hover:text-[#5B2A86] dark:hover:text-[#FFDE5A]">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild className="bg-[#5B2A86] hover:bg-[#4A2370] text-white dark:bg-[#FFDE5A] dark:hover:bg-[#E6C851] dark:text-black">
                <Link href="/signup">Sign up</Link>
              </Button>
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}