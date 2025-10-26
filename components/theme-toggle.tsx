"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full hover:bg-primary/10 transition-all hover:scale-110 shadow-lg"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary transition-transform hover:rotate-90" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-transform hover:rotate-90" />
      )}
    </Button>
  )
}
