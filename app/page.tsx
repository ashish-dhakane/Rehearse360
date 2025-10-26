"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { RoleSelection } from "@/components/role-selection"
import { InterviewSimulator } from "@/components/interview-simulator"
import { FeedbackSection } from "@/components/feedback-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"hero" | "selection" | "interview" | "feedback">("hero")
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [interviewData, setInterviewData] = useState<any>(null)

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Theme Toggle - Fixed in top right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Page Router */}
        {currentPage === "hero" && <HeroSection onStart={() => setCurrentPage("selection")} />}

        {currentPage === "selection" && (
          <RoleSelection
            onSelect={(role, level) => {
              setSelectedRole(role)
              setSelectedLevel(level)
              setCurrentPage("interview")
            }}
            onBack={() => setCurrentPage("hero")}
          />
        )}

        {currentPage === "interview" && selectedRole && selectedLevel && (
          <InterviewSimulator
            role={selectedRole}
            level={selectedLevel}
            onComplete={(data) => {
              setInterviewData(data)
              setCurrentPage("feedback")
            }}
            onBack={() => setCurrentPage("selection")}
          />
        )}

        {currentPage === "feedback" && interviewData && (
          <FeedbackSection
            data={interviewData}
            onRestart={() => {
              setCurrentPage("hero")
              setSelectedRole(null)
              setSelectedLevel(null)
              setInterviewData(null)
            }}
          />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
