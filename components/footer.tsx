"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-foreground/60">AI Interview Module - Practice, Learn, and Grow</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ashish-dhakane"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-foreground/60 hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-dhakane-971935289/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground/60 hover:text-primary" />
            </a>
            <a
              href="mailto:dhakneashish110@gmail.com"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-foreground/60 hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
