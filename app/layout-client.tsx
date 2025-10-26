"use client"

import type React from "react"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/next"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
      <Analytics />
    </ThemeProvider>
  )
}
