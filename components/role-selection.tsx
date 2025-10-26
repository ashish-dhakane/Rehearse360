"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code2, BarChart3, Briefcase, Megaphone, ArrowLeft } from "lucide-react"

interface RoleSelectionProps {
  onSelect: (role: string, level: string) => void
  onBack: () => void
}

const ROLES = [
  { id: "software-dev", name: "Software Developer", icon: Code2, description: "Build and optimize software systems" },
  { id: "data-analyst", name: "Data Analyst", icon: BarChart3, description: "Analyze and interpret data insights" },
  { id: "product-manager", name: "Product Manager", icon: Briefcase, description: "Lead product strategy and vision" },
  { id: "marketing", name: "Marketing Manager", icon: Megaphone, description: "Drive growth and brand awareness" },
]

const LEVELS = [
  { id: "beginner", name: "Beginner", description: "Just starting out" },
  { id: "intermediate", name: "Intermediate", description: "Some experience" },
  { id: "expert", name: "Expert", description: "Highly experienced" },
]

export function RoleSelection({ onSelect, onBack }: RoleSelectionProps) {
  const [selectedRole, setSelectedRole] = React.useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = React.useState<string | null>(null)

  const handleStart = () => {
    if (selectedRole && selectedLevel) {
      onSelect(selectedRole, selectedLevel)
    }
  }

  return (
    <section className="min-h-screen bg-background py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h1 className="text-4xl font-bold mb-2">Select Your Role</h1>
            <p className="text-foreground/60">Choose a role and skill level to begin your interview</p>
          </div>
          <Button variant="outline" onClick={onBack} className="gap-2 bg-transparent hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>

        {/* Role Selection */}
        <div className="mb-16 animate-slide-in-up">
          <h2 className="text-2xl font-semibold mb-6">Job Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROLES.map((role, index) => {
              const Icon = role.icon
              return (
                <Card
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedRole === role.id
                      ? "ring-2 ring-primary bg-primary/10 border-primary"
                      : "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 mb-3 text-primary" />
                  <h3 className="font-semibold mb-1">{role.name}</h3>
                  <p className="text-xs text-foreground/60">{role.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Level Selection */}
        <div className="mb-12 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-semibold mb-6">Skill Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {LEVELS.map((level, index) => (
              <Card
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedLevel === level.id
                    ? "ring-2 ring-accent bg-accent/10 border-accent"
                    : "hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-lg mb-1">{level.name}</h3>
                <p className="text-sm text-foreground/60">{level.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={handleStart}
            disabled={!selectedRole || !selectedLevel}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start Interview
          </Button>
        </div>
      </div>
    </section>
  )
}
