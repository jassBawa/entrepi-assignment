"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          size="icon" 
          variant="ghost" 
          className="rounded-full hover:bg-[#E0E0E0] dark:hover:bg-[#757575]"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#5B2A86] dark:text-[#FFDE5A]" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[#5B2A86] dark:text-[#FFDE5A]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-40 bg-white dark:bg-black border-[#E0E0E0] dark:border-[#757575]"
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="text-black dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#757575] cursor-pointer"
        >
          <Sun className="mr-2 h-4 w-4 text-[#5B2A86] dark:text-[#FFDE5A]" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="text-black dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#757575] cursor-pointer"
        >
          <Moon className="mr-2 h-4 w-4 text-[#5B2A86] dark:text-[#FFDE5A]" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="text-black dark:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#757575] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 text-[#5B2A86] dark:text-[#FFDE5A]"
          >
            <rect width="14" height="6" x="5" y="14" rx="2" />
            <rect width="10" height="6" x="7" y="4" rx="2" />
            <path d="M2 20h20" />
            <path d="M2 10h20" />
          </svg>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
