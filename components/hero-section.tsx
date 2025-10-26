"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"

interface HeroSectionProps {
  onStart: () => void
}

export function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-2xl text-center space-y-8 animate-fade-in">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="p-4 bg-primary/10 rounded-full animate-pulse-glow">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">Rehearse360°</h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-foreground/70 text-balance">
          Practice, Learn, and Grow with AI-Powered Interview Simulations
        </p>

        {/* Description */}
        <p className="text-lg text-foreground/60 max-w-xl mx-auto leading-relaxed">
          Master your interview skills with realistic AI-powered scenarios. Get instant feedback and improve your
          performance across different roles and skill levels.
        </p>

        {/* CTA Button */}
        <Button
          onClick={onStart}
          size="lg"
          className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 group"
        >
          Start Your Interview
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-border">
          <div className="space-y-2 hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-primary">5</div>
            <p className="text-sm text-foreground/60">Questions per Interview</p>
          </div>
          <div className="space-y-2 hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-accent">4+</div>
            <p className="text-sm text-foreground/60">Job Roles Available</p>
          </div>
          <div className="space-y-2 hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-primary">3</div>
            <p className="text-sm text-foreground/60">Skill Levels</p>
          </div>
        </div>
      </div>
    </section>
  )
}
