# Rehearse360 - AI Interview Module
 
## Overview

Rehearse360 is a modern, AI-powered interview simulation platform designed to help professionals practice and improve their interview skills. The application provides realistic interview experiences with role-specific questions, real-time feedback, and detailed performance analytics.

Whether you're preparing for a software engineering role, data analyst position, product management interview, or marketing opportunity, Rehearse360 offers tailored interview simulations to boost your confidence and performance.

## ✨ Features

### Core Features
- **Role-Based Interviews**: Practice for 4 different job roles:
  - Software Developer
  - Data Analyst
  - Product Manager
  - Marketing Specialist

- **Skill Level Selection**: Choose your experience level:
  - Beginner
  - Intermediate
  - Advanced

- **Interactive Interview Simulator**:
  - 5 contextual questions per interview session
  - Real-time typing animations for immersive experience
  - Progress tracking with visual indicators
  - Helpful hints for each question
  - Smooth transitions between questions

- **Intelligent Feedback System**:
  - Automatic score calculation
  - Strengths and improvements analysis
  - Detailed question-by-question review
  - Actionable insights for improvement

- **Theme Support**:
  - Dark mode (default) and light mode
  - Smooth theme transitions
  - Persistent theme preference

- **Responsive Design**:
  - Mobile-first approach
  - Seamless experience on all devices
  - Touch-friendly interface

- **Engaging Animations**:
  - Fade-in and slide-in effects
  - Typing animations for questions
  - Confetti celebration on completion
  - Smooth hover states and transitions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Build Tool**: Next.js 16 (App Router)
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Instructions

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/ashish-dhakane/rehearse360.git
   cd rehearse360
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open in browser**:
   Navigate to `http://localhost:3000`

## 🚀 Usage

### Getting Started
1. **Visit the Hero Section**: Read about the platform and its benefits
2. **Select Your Role**: Choose the job position you want to practice for
3. **Choose Skill Level**: Select your experience level (Beginner, Intermediate, Advanced)
4. **Start Interview**: Begin the simulation with 5 contextual questions
5. **Review Feedback**: Get detailed analysis and improvement suggestions

### Interview Flow
- Each interview consists of 5 questions tailored to your selected role and skill level
- Questions appear with typing animations for a realistic experience
- Use the "Get Hint" button if you need guidance on a question
- Answer each question and proceed to the next
- After completing all questions, receive comprehensive feedback

### Theme Toggle
- Click the theme toggle button in the top-right corner to switch between dark and light modes
- Your preference is saved for future sessions

## 📁 Project Structure

\`\`\`
rehearse360/
├── app/
│   ├── layout.tsx              # Root layout (Server Component)
│   ├── layout-client.tsx       # Client-side layout wrapper
│   ├── page.tsx                # Main page
│   └── globals.css             # Global styles and design tokens
├── components/
│   ├── hero-section.tsx        # Landing section with CTA
│   ├── role-selection.tsx      # Role and skill level selection
│   ├── interview-simulator.tsx # Interview Q&A interface
│   ├── feedback-section.tsx    # Results and feedback display
│   ├── theme-toggle.tsx        # Dark/light mode toggle
│   └── footer.tsx              # Footer with links
├── public/                     # Static assets
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
\`\`\`

## 🎨 Design System

### Color Palette
- **Primary**: Cyan/Teal (#06B6D4)
- **Accent**: Magenta (#EC4899)
- **Background**: Dark (#0F172A) / Light (#FFFFFF)
- **Text**: Light (#F1F5F9) / Dark (#0F172A)

### Typography
- **Headings**: Geist Sans (Bold, 600-700 weight)
- **Body**: Geist Sans (Regular, 400 weight)

### Animations
- Fade-in: 0.5s ease-in
- Slide-in: 0.6s ease-out
- Typing: Dynamic based on text length
- Pulse: 2s infinite

## 🔧 Configuration

### Environment Variables
Currently, no environment variables are required for local development. The application runs with default settings.

### Customization
- **Interview Questions**: Modify questions in `components/interview-simulator.tsx`
- **Roles**: Add or remove roles in `components/role-selection.tsx`
- **Colors**: Update design tokens in `app/globals.css`
- **Animations**: Adjust animation timings in `app/globals.css`

## 📊 Interview Questions

The platform includes role-specific questions for each position:

### Software Developer
- System design and architecture questions
- Coding challenges and problem-solving
- Technical communication skills

### Data Analyst
- Data analysis and visualization
- SQL and database queries
- Statistical concepts and insights

### Product Manager
- Product strategy and roadmap
- User research and requirements
- Metrics and success measurement

### Marketing Specialist
- Campaign strategy and execution
- Market analysis and positioning
- ROI and performance metrics

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**:
   \`\`\`bash
   git push origin main
   \`\`\`

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure settings

3. **Deploy**:
   - Click "Deploy"
   - Your app will be live in seconds

### Live URL
Your project is deployed at: **[https://vercel.com/ashish-dhakanes-projects/v0-ai-interview-module](https://vercel.com/ashish-dhakanes-projects/v0-ai-interview-module)**

## 🔄 Development Workflow

This repository stays in sync with v0.app deployments:

1. **Make changes** on [v0.app](https://v0.app/chat/projects/CZZLEulrPQv)
2. **Deploy** from the v0 interface
3. **Changes auto-sync** to this GitHub repository
4. **Vercel redeploys** automatically

## 📝 Building Your App

Continue building and customizing your app on:
**[https://v0.app/chat/projects/CZZLEulrPQv](https://v0.app/chat/projects/CZZLEulrPQv)**

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Ashish Dhakane**
- GitHub: [@ashish-dhakane](https://github.com/ashish-dhakane)

**Happy interviewing! 🎉 Practice with Rehearse360 and ace your next interview.**
