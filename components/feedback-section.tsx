"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, AlertCircle, RotateCcw, TrendingUp } from "lucide-react"

interface FeedbackSectionProps {
  data: {
    role: string
    level: string
    answers: string[]
    questions: string[]
    score: number
  }
  onRestart: () => void
}

// Feedback templates based on role and level
const FEEDBACK_TEMPLATES: Record<string, Record<string, { strengths: string[]; improvements: string[] }>> = {
  "software-dev": {
    beginner: {
      strengths: [
        "Good understanding of fundamental programming concepts",
        "Clear communication about your learning journey",
        "Enthusiasm for technology and continuous learning",
      ],
      improvements: [
        "Provide more specific code examples in your answers",
        "Discuss the trade-offs between different approaches",
        "Elaborate on how you debug and test your code",
      ],
    },
    intermediate: {
      strengths: [
        "Strong technical knowledge and problem-solving skills",
        "Good understanding of system design principles",
        "Ability to discuss trade-offs and architectural decisions",
      ],
      improvements: [
        "Provide more concrete examples from your projects",
        "Discuss scalability and performance considerations",
        "Elaborate on your experience with testing and CI/CD",
      ],
    },
    expert: {
      strengths: [
        "Excellent system design and architectural thinking",
        "Deep technical expertise and industry knowledge",
        "Strong leadership and mentoring capabilities",
      ],
      improvements: [
        "Discuss more about your impact on team and product",
        "Share insights on emerging technologies and trends",
        "Elaborate on your experience with large-scale systems",
      ],
    },
  },
  "data-analyst": {
    beginner: {
      strengths: [
        "Good grasp of data analysis fundamentals",
        "Clear understanding of data cleaning importance",
        "Enthusiasm for data-driven insights",
      ],
      improvements: [
        "Provide more specific examples of datasets you've worked with",
        "Discuss statistical concepts and their applications",
        "Elaborate on visualization best practices",
      ],
    },
    intermediate: {
      strengths: [
        "Strong statistical knowledge and analytical skills",
        "Good understanding of data quality and validation",
        "Ability to translate data into actionable insights",
      ],
      improvements: [
        "Discuss more advanced statistical techniques",
        "Elaborate on your experience with big data tools",
        "Share insights on predictive modeling approaches",
      ],
    },
    expert: {
      strengths: [
        "Excellent data pipeline and infrastructure knowledge",
        "Strong predictive modeling and ML expertise",
        "Ability to drive business impact through data",
      ],
      improvements: [
        "Discuss more about your leadership in analytics",
        "Share insights on emerging data technologies",
        "Elaborate on your experience with real-time analytics",
      ],
    },
  },
  "product-manager": {
    beginner: {
      strengths: [
        "Good understanding of product management fundamentals",
        "Clear communication about user needs",
        "Enthusiasm for product development",
      ],
      improvements: [
        "Provide more specific examples from your experience",
        "Discuss prioritization frameworks and methodologies",
        "Elaborate on how you measure product success",
      ],
    },
    intermediate: {
      strengths: [
        "Strong product strategy and roadmap planning skills",
        "Good understanding of user research and validation",
        "Ability to balance stakeholder needs",
      ],
      improvements: [
        "Discuss more about competitive analysis",
        "Elaborate on your experience with go-to-market strategies",
        "Share insights on product-market fit indicators",
      ],
    },
    expert: {
      strengths: [
        "Excellent strategic thinking and market analysis",
        "Strong leadership and cross-functional collaboration",
        "Ability to scale products and drive business growth",
      ],
      improvements: [
        "Discuss more about your impact on company strategy",
        "Share insights on emerging market trends",
        "Elaborate on your experience with international expansion",
      ],
    },
  },
  marketing: {
    beginner: {
      strengths: [
        "Good understanding of marketing channels and tactics",
        "Clear communication about campaign goals",
        "Enthusiasm for creative marketing",
      ],
      improvements: [
        "Provide more specific metrics and ROI examples",
        "Discuss audience segmentation and targeting",
        "Elaborate on content strategy and planning",
      ],
    },
    intermediate: {
      strengths: [
        "Strong marketing strategy and campaign planning skills",
        "Good understanding of marketing analytics",
        "Ability to drive customer engagement",
      ],
      improvements: [
        "Discuss more about brand positioning and messaging",
        "Elaborate on your experience with marketing automation",
        "Share insights on customer acquisition strategies",
      ],
    },
    expert: {
      strengths: [
        "Excellent strategic marketing and brand leadership",
        "Strong data-driven decision making",
        "Ability to scale marketing and drive revenue growth",
      ],
      improvements: [
        "Discuss more about your impact on company growth",
        "Share insights on emerging marketing technologies",
        "Elaborate on your experience with global marketing",
      ],
    },
  },
}

export function FeedbackSection({ data, onRestart }: FeedbackSectionProps) {
  const [confetti, setConfetti] = useState(false)
  const [animateScore, setAnimateScore] = useState(false)

  useEffect(() => {
    // Trigger animations on mount
    setAnimateScore(true)
    setConfetti(true)
    const timer = setTimeout(() => setConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const feedback = FEEDBACK_TEMPLATES[data.role]?.[data.level] || {
    strengths: ["Strong performance overall"],
    improvements: ["Continue practicing and learning"],
  }

  const scorePercentage = Math.min(100, Math.max(0, data.score))
  const scoreLevel = scorePercentage >= 80 ? "Excellent" : scorePercentage >= 60 ? "Good" : "Fair"

  return (
    <section className="min-h-screen bg-background py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Confetti effect */}
      {confetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{
                left: Math.random() * 100 + "%",
                top: -10,
                animation: `fall ${2 + Math.random() * 1}s linear forwards`,
                animationDelay: Math.random() * 0.5 + "s",
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Interview Complete!</h1>
          <p className="text-foreground/60">Here's your detailed feedback</p>
        </div>

        {/* Score Card */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 animate-slide-in-up">
          <div className="text-center">
            <div className="mb-4">
              <div
                className={`text-6xl font-bold text-primary mb-2 transition-all duration-1000 ${
                  animateScore ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                {scorePercentage}
              </div>
              <p className="text-lg text-foreground/70">Overall Score</p>
            </div>
            <Progress value={scorePercentage} className="h-3 mb-4" />
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <p className="text-sm font-semibold text-primary">{scoreLevel} Performance</p>
            </div>
            <p className="text-sm text-foreground/60">
              {data.role.replace("-", " ").toUpperCase()} - {data.level.toUpperCase()}
            </p>
          </div>
        </Card>

        {/* Strengths */}
        <div className="mb-8 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold">Strengths</h2>
          </div>
          <div className="space-y-3">
            {feedback.strengths.map((strength, i) => (
              <Card
                key={i}
                className="p-4 bg-green-500/5 border-green-500/20 hover:border-green-500/40 transition-colors"
              >
                <p className="text-foreground">{strength}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Areas for Improvement */}
        <div className="mb-8 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-amber-500" />
            <h2 className="text-2xl font-bold">Areas for Improvement</h2>
          </div>
          <div className="space-y-3">
            {feedback.improvements.map((improvement, i) => (
              <Card
                key={i}
                className="p-4 bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40 transition-colors"
              >
                <p className="text-foreground">{improvement}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Question Review */}
        <div className="mb-12 animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-bold mb-4">Question Review</h2>
          <div className="space-y-4">
            {data.questions.map((question, i) => (
              <Card key={i} className="p-6 hover:border-primary/50 transition-colors">
                <div className="mb-3">
                  <p className="text-sm font-semibold text-primary mb-1">QUESTION {i + 1}</p>
                  <p className="font-semibold text-foreground">{question}</p>
                </div>
                <div className="bg-foreground/5 p-4 rounded-lg border border-foreground/10">
                  <p className="text-sm text-foreground/70 line-clamp-3">{data.answers[i]}</p>
                  {data.answers[i].length > 150 && <p className="text-xs text-foreground/50 mt-2">... (truncated)</p>}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={onRestart}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 gap-2 transition-all hover:scale-105"
          >
            <RotateCcw className="w-4 h-4" />
            Try Another Interview
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
