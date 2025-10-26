"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Loader2, Lightbulb } from "lucide-react"

interface InterviewSimulatorProps {
  role: string
  level: string
  onComplete: (data: any) => void
  onBack: () => void
}

// Sample interview questions based on role and level
const INTERVIEW_QUESTIONS: Record<string, Record<string, string[]>> = {
  "software-dev": {
    beginner: [
      "Tell me about your experience with programming languages.",
      "How do you approach debugging a complex issue?",
      "Describe a project you built from scratch.",
      "What design patterns are you familiar with?",
      "How do you stay updated with new technologies?",
    ],
    intermediate: [
      "Explain the difference between REST and GraphQL APIs.",
      "How would you optimize a slow database query?",
      "Describe your experience with version control systems.",
      "What is your approach to writing testable code?",
      "Tell me about a challenging technical problem you solved.",
    ],
    expert: [
      "Design a scalable microservices architecture.",
      "How do you approach system design interviews?",
      "Explain your experience with distributed systems.",
      "What are your thoughts on code review best practices?",
      "Describe your experience leading technical initiatives.",
    ],
  },
  "data-analyst": {
    beginner: [
      "What tools do you use for data analysis?",
      "How do you approach data cleaning?",
      "Tell me about a dataset you analyzed.",
      "What is your experience with SQL?",
      "How do you visualize data insights?",
    ],
    intermediate: [
      "Explain the difference between correlation and causation.",
      "How do you handle missing data in your analysis?",
      "Describe your experience with statistical testing.",
      "What is your approach to exploratory data analysis?",
      "Tell me about a complex analysis you performed.",
    ],
    expert: [
      "Design a data pipeline for real-time analytics.",
      "How do you approach predictive modeling?",
      "Explain your experience with big data technologies.",
      "What is your approach to A/B testing?",
      "Describe your experience with machine learning applications.",
    ],
  },
  "product-manager": {
    beginner: [
      "What does a product manager do?",
      "Tell me about a product you use daily.",
      "How do you gather user feedback?",
      "What is your experience with product roadmaps?",
      "How do you prioritize features?",
    ],
    intermediate: [
      "Walk me through your product development process.",
      "How do you define success metrics for a product?",
      "Tell me about a product decision you made.",
      "How do you handle conflicting stakeholder requirements?",
      "What is your experience with user research?",
    ],
    expert: [
      "Design a product strategy for a new market.",
      "How do you approach competitive analysis?",
      "Describe your experience scaling a product.",
      "What is your approach to product-market fit?",
      "Tell me about your experience with go-to-market strategies.",
    ],
  },
  marketing: {
    beginner: [
      "What marketing channels are you familiar with?",
      "Tell me about a campaign you worked on.",
      "How do you measure marketing success?",
      "What is your experience with social media?",
      "How do you approach content creation?",
    ],
    intermediate: [
      "Explain your experience with marketing automation.",
      "How do you develop a marketing strategy?",
      "Tell me about your experience with SEO/SEM.",
      "How do you analyze marketing data?",
      "Describe a successful campaign you led.",
    ],
    expert: [
      "Design a comprehensive marketing strategy for a new product.",
      "How do you approach brand positioning?",
      "Describe your experience with marketing analytics.",
      "What is your approach to customer acquisition?",
      "Tell me about your experience with marketing leadership.",
    ],
  },
}

// Helpful hints for each question
const HINTS: Record<string, Record<string, string[]>> = {
  "software-dev": {
    beginner: [
      "Mention specific languages like Python, JavaScript, or Java",
      "Describe your debugging process step by step",
      "Include technologies and challenges you faced",
      "Mention patterns like MVC, Singleton, or Factory",
      "Talk about blogs, courses, or communities you follow",
    ],
    intermediate: [
      "Discuss caching, pagination, and query optimization",
      "Mention Git workflows and branching strategies",
      "Talk about unit tests, integration tests, and TDD",
      "Describe the problem, your approach, and the solution",
      "Focus on technical depth and problem-solving",
    ],
    expert: [
      "Consider scalability, fault tolerance, and load balancing",
      "Discuss trade-offs and architectural decisions",
      "Mention technologies like Kubernetes or message queues",
      "Talk about code quality, documentation, and mentoring",
      "Highlight your impact on team and product",
    ],
  },
  "data-analyst": {
    beginner: [
      "Mention Excel, Python, R, SQL, or Tableau",
      "Discuss handling duplicates, missing values, and outliers",
      "Include the data source, size, and insights found",
      "Mention SELECT, WHERE, JOIN, and GROUP BY",
      "Talk about charts, dashboards, or reports",
    ],
    intermediate: [
      "Explain causation requires controlled experiments",
      "Discuss imputation methods and their trade-offs",
      "Mention t-tests, chi-square, or ANOVA",
      "Describe data profiling, distribution analysis, and patterns",
      "Include metrics, findings, and business impact",
    ],
    expert: [
      "Discuss data ingestion, transformation, and storage",
      "Mention Apache Spark, Airflow, or cloud platforms",
      "Discuss model validation, cross-validation, and metrics",
      "Explain statistical significance and sample size",
      "Highlight insights that drove business decisions",
    ],
  },
  "product-manager": {
    beginner: [
      "Mention user research, roadmap planning, and stakeholder management",
      "Discuss what makes it useful and what could be improved",
      "Talk about surveys, interviews, or user testing",
      "Mention prioritization frameworks and timelines",
      "Discuss impact, effort, and user value",
    ],
    intermediate: [
      "Describe discovery, design, development, and launch phases",
      "Mention OKRs, KPIs, or other success metrics",
      "Explain your reasoning and the outcome",
      "Discuss communication and compromise strategies",
      "Mention methods like interviews, surveys, or analytics",
    ],
    expert: [
      "Discuss market analysis, competitive positioning, and GTM",
      "Mention SWOT analysis and market trends",
      "Discuss growth strategies and scaling challenges",
      "Explain product-market fit indicators",
      "Highlight revenue impact and market expansion",
    ],
  },
  marketing: {
    beginner: [
      "Mention email, social media, content, or paid advertising",
      "Describe the goal, audience, and results",
      "Mention conversion rates, engagement, or ROI",
      "Discuss content types and posting strategies",
      "Talk about audience research and content planning",
    ],
    intermediate: [
      "Discuss automation workflows and lead nurturing",
      "Mention market research, positioning, and messaging",
      "Discuss keyword research, ad copy, and landing pages",
      "Mention dashboards, attribution, and reporting",
      "Include metrics like reach, engagement, and conversions",
    ],
    expert: [
      "Discuss market segmentation and positioning strategy",
      "Mention brand guidelines, messaging, and differentiation",
      "Discuss attribution models and marketing mix optimization",
      "Mention CAC, LTV, and retention metrics",
      "Highlight revenue impact and market leadership",
    ],
  },
}

export function InterviewSimulator({ role, level, onComplete, onBack }: InterviewSimulatorProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [currentAnswer, setCurrentAnswer] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [displayedQuestion, setDisplayedQuestion] = useState("")
  const [showHint, setShowHint] = useState(false)

  const questions = INTERVIEW_QUESTIONS[role]?.[level] || []
  const hints = HINTS[role]?.[level] || []
  const progress = ((currentQuestion + 1) / questions.length) * 100

  // Typing animation for questions
  useEffect(() => {
    if (currentQuestion < questions.length) {
      const question = questions[currentQuestion]
      let index = 0
      setDisplayedQuestion("")
      setShowHint(false)
      setIsTyping(true)

      const interval = setInterval(() => {
        if (index < question.length) {
          setDisplayedQuestion(question.slice(0, index + 1))
          index++
        } else {
          setIsTyping(false)
          clearInterval(interval)
        }
      }, 30)

      return () => clearInterval(interval)
    }
  }, [currentQuestion, questions])

  const handleNext = () => {
    setAnswers([...answers, currentAnswer])
    setCurrentAnswer("")

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Interview complete - calculate score based on answer length and quality
      const avgLength = [...answers, currentAnswer].reduce((sum, ans) => sum + ans.length, 0) / questions.length
      const score = Math.min(100, Math.floor(50 + avgLength / 20))

      onComplete({
        role,
        level,
        answers: [...answers, currentAnswer],
        questions,
        score,
      })
    }
  }

  const isLastQuestion = currentQuestion === questions.length - 1

  return (
    <section className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold mb-2">Interview Simulation</h1>
            <p className="text-foreground/60">
              {role.replace("-", " ").toUpperCase()} - {level.toUpperCase()}
            </p>
          </div>
          <Button variant="outline" onClick={onBack} className="gap-2 bg-transparent hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>

        {/* Progress */}
        <div className="mb-8 animate-slide-in-up">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-foreground/60">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="p-8 mb-8 bg-card border-primary/20 animate-slide-in-up">
          <div className="mb-6">
            <p className="text-sm font-semibold text-primary mb-3">QUESTION {currentQuestion + 1}</p>
            <h2 className="text-2xl font-bold leading-relaxed">
              {displayedQuestion}
              {isTyping && <span className="animate-pulse">|</span>}
            </h2>
          </div>

          {/* Hint Button */}
          {!isTyping && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              <Lightbulb className="w-4 h-4" />
              {showHint ? "Hide hint" : "Show hint"}
            </button>
          )}

          {/* Hint Content */}
          {showHint && !isTyping && (
            <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm text-foreground/80">{hints[currentQuestion]}</p>
            </div>
          )}
        </Card>

        {/* Answer Input */}
        <div className="mb-8 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          <label className="block text-sm font-semibold mb-3">Your Answer</label>
          <Textarea
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="min-h-32 resize-none"
            disabled={isTyping}
          />
          <p className="text-xs text-foreground/50 mt-2">{currentAnswer.length} characters</p>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-between animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
          <Button variant="outline" onClick={onBack} className="gap-2 bg-transparent hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4" />
            Exit Interview
          </Button>
          <Button
            onClick={handleNext}
            disabled={isTyping || !currentAnswer.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 gap-2 transition-all hover:scale-105"
          >
            {isLastQuestion ? "Complete Interview" : "Next Question"}
            {isTyping && <Loader2 className="w-4 h-4 animate-spin" />}
          </Button>
        </div>
      </div>
    </section>
  )
}
