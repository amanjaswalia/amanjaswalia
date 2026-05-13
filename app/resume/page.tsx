"use client"

import { useEffect } from "react"

export default function ResumePage() {
  useEffect(() => {
    // Auto-trigger print dialog when page loads
    const timer = setTimeout(() => {
      window.print()
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white text-black p-8 print:p-0">
      <div className="max-w-[8.5in] mx-auto print:max-w-none">
        {/* Header */}
        <header className="text-center border-b-2 border-gray-800 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Amandeep Singh</h1>
          <p className="text-lg text-gray-700 mt-1">Full-Stack Developer | AI-Powered Solutions Specialist</p>
          <div className="flex flex-wrap justify-center gap-4 mt-3 text-sm text-gray-600">
            <span>Mohali, India</span>
            <span>|</span>
            <span>amanjaswalia@gmail.com</span>
            <span>|</span>
            <span>linkedin.com/in/amanjaswalia</span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">Professional Summary</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Full Stack Engineer with 13+ years of experience building scalable web and mobile solutions.
            Specializing in React, Next.js, Node.js, Django, and AI integrations. Available for immediate
            hire with 40+ hours/week and US timezone alignment. Delivering clean architecture with reusable
            design patterns for clients worldwide.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Frontend:</strong> React.js, Next.js, TypeScript, Tailwind CSS, Material UI, Redux</p>
              <p><strong>Backend:</strong> Node.js, Express, NestJS, Django, Python, PHP, REST APIs</p>
              <p><strong>Database:</strong> PostgreSQL, MySQL, MongoDB, Redis, Firebase</p>
            </div>
            <div>
              <p><strong>AI/ML:</strong> OpenAI, Claude AI, LangChain, RAG, LLM Integration</p>
              <p><strong>Cloud:</strong> AWS, Vercel, Docker, CI/CD</p>
              <p><strong>Mobile:</strong> React Native, iOS, Android</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">Work Experience</h2>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-gray-900">Full Stack Engineer</h3>
              <span className="text-sm text-gray-600">Sep 2021 - Present</span>
            </div>
            <p className="text-sm text-gray-700 italic">Freelance | Remote (US Clients)</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-0.5">
              <li>Built 17+ production applications for US and global clients</li>
              <li>Implemented payment integrations, Twilio messaging, and serverless capabilities</li>
              <li>Delivered clean architecture with reusable design patterns</li>
              <li>Available 40+ hours/week with US timezone alignment</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-gray-900">Development Team Lead</h3>
              <span className="text-sm text-gray-600">Mar 2020 - Sep 2021</span>
            </div>
            <p className="text-sm text-gray-700 italic">LoudOwls | Mohali, India</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-0.5">
              <li>Designed modular and scalable architecture for web/mobile applications</li>
              <li>Implemented CI/CD workflows and performance optimization strategies</li>
              <li>Oversaw code standards, sprint planning, and release management</li>
              <li>Mentored developers and improved onboarding and documentation</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-gray-900">Full Stack Engineer</h3>
              <span className="text-sm text-gray-600">Jul 2018 - Mar 2020</span>
            </div>
            <p className="text-sm text-gray-700 italic">Webethics | Mohali, India</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-0.5">
              <li>Developed applications using React.js, Next.js, and TypeScript</li>
              <li>Implemented backend services with Node.js, Express, and PHP</li>
              <li>Designed REST APIs for third-party and internal system integrations</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-gray-900">Web Developer</h3>
              <span className="text-sm text-gray-600">Jan 2015 - Jul 2018</span>
            </div>
            <p className="text-sm text-gray-700 italic">ILLUMINZ | Mohali, India</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-0.5">
              <li>Built full-stack applications with Node.js, Express, and NestJS</li>
              <li>Managed databases with MySQL, PostgreSQL, and MongoDB</li>
              <li>Deployed and managed applications on AWS infrastructure</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-gray-900">Web Developer</h3>
              <span className="text-sm text-gray-600">Sep 2013 - Jan 2015</span>
            </div>
            <p className="text-sm text-gray-700 italic">WhizKraft Solutions Pvt Ltd | Mohali, India</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-0.5">
              <li>Developed web and mobile applications across multiple projects</li>
              <li>Ensured seamless API integrations and UI/UX improvements</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">Education</h2>
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="font-bold text-gray-900">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-sm text-gray-700">Punjab Technical University</p>
            </div>
            <span className="text-sm text-gray-600">2008 - 2011</span>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">Certifications</h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            <p>• AI Chatbots, RAG & Governance</p>
            <p>• Introduction to Large Language Models</p>
            <p>• React Native Development</p>
            <p>• Claude AI</p>
            <p>• Jasper AI</p>
            <p>• Gemini AI</p>
            <p>• Midjourney AI Art</p>
            <p>• Lovable AI App Builder</p>
          </div>
        </section>

        {/* Print button - hidden when printing */}
        <div className="print:hidden text-center mt-8 space-x-4">
          <button
            onClick={() => window.print()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download as PDF
          </button>
          <button
            onClick={() => window.close()}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  )
}
