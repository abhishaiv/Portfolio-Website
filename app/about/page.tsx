'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function AboutPage() {
  return (
    <>
      <Navigation theme="light" />

      <main className="min-h-screen bg-white pt-32">
        {/* Hero Section with Headline */}
        <section className="px-6 md:px-12 py-16 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-start justify-between gap-12">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl"
              >
                Building AI-fuelled systems that upgrade humans from 1 to <span className="text-red-600">10x</span>
              </motion.h1>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                className="hidden lg:block"
              >
                <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeWidth="1.5"/>
                    <path d="M3 12h18M12 3c2.5 2.5 3 5.5 3 9s-.5 6.5-3 9M12 3c-2.5 2.5-3 5.5-3 9s.5 6.5 3 9" strokeWidth="1.5"/>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="px-6 md:px-12 py-16 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-medium mb-12"
            >
              What I Do
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-medium mb-4">By profession</h3>
                <p className="text-gray-600 leading-relaxed">
                  I analyse markets, build strategic models, and turn insights into executive narratives. I've worked across multiple domains such as logistics, energy, and CEP markets building IT solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-medium mb-4">By passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  I build AI-powered tools that cut friction from real human problems: job hunting, learning, eating well, and even watching F1 like an engineer.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Professional Timeline */}
        <section className="px-6 md:px-12 py-16 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-medium mb-16"
            >
              Professional Timeline
            </motion.h2>

            {/* Vertical Timeline Container */}
            <div className="relative pl-0 md:pl-32">
              {/* Vertical timeline line (hidden on mobile) */}
              <div className="hidden md:block absolute left-16 top-4 bottom-0 w-px bg-gray-200" />

              {/* Timeline entries */}
              <div className="space-y-16">
                {[
                  {
                    years: "2025 - Current",
                    title: "Market Intelligence (Courier, Express and Parcel Market)",
                    company: "Cognizant",
                    points: [
                      "Analysed data across 50+ countries (CEP Market) to create earnings reports, map macro shifts, and build demand models to benchmark competitors.",
                      "Strategic dashboards & infographics for enterprise leadership",
                      "Earnings intelligence from 8-Ks, 10-Qs, annual reports"
                    ]
                  },
                  {
                    years: "23 - 25",
                    title: "Pre-Sales (Energy And Utilities)",
                    company: "Cognizant",
                    points: [
                      "Built high-stakes proposals for the Energy & Utilities sector. Designed solutions, priced offers, and stacked pitches that won. We secured $24M+ annual revenue by aligning tech solutions with business needs & tweaking go-to-market angles."
                    ]
                  },
                  {
                    years: "21 - 23",
                    title: "MBA (International Business)",
                    company: "",
                    points: [
                      "Achievements & Recognition:",
                      "National Semi-finalist — Boat Wave-makers Challenge",
                      "National Semi-finalist — JSW Case Competition"
                    ]
                  },
                  {
                    years: "20 - 21",
                    title: "Business Development Executive",
                    company: "GeorgePrep",
                    points: [
                      "Acquired clients, designed subscription plans, and partnered with educators for growth. Learned early that early-stage sales is just problem math — identify value, then price it."
                    ]
                  },
                  {
                    years: "2015 - 19",
                    title: "B.Tech. (Mechanical Engineering)",
                    company: "",
                    points: []
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Year marker on left (desktop) */}
                    <div className="hidden md:block absolute -left-32 top-0 w-24">
                      {/* Bullet point */}
                      <div className="absolute left-[88px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                      <p className="text-sm font-medium text-gray-700">{item.years}</p>
                    </div>

                    {/* Year marker for mobile */}
                    <div className="md:hidden mb-3">
                      <p className="text-sm font-medium text-gray-700">{item.years}</p>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      {item.company && <p className="text-gray-600 mb-4">{item.company}</p>}
                      {item.points.length > 0 && (
                        <ul className="space-y-2 text-gray-600">
                          {item.points.map((point, i) => (
                            <li key={i} className="text-sm leading-relaxed">• {point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* My Skill Set */}
        <section className="px-6 md:px-12 py-16 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-medium mb-12"
            >
              My Skill Set
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-medium mb-3">Professional Universe</h3>
                <p className="text-gray-600">
                  Competitive Intelligence • Market Sizing • Pitch Decks & Infographics • Pre-Sales & Bid Strategy • Pricing Models • Go-to-Market Playbooks
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-medium mb-3">Builder Universe</h3>
                <p className="text-gray-600">
                  AI Product Design • Product Management • Prompt Engineering • UX Strategy • Automation Workflows • Founder-Mode Problem Solving
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* My Why */}
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-[1400px] mx-auto">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-medium mb-8"
            >
              My Why
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl space-y-4 text-lg leading-relaxed"
            >
              <p className="font-medium">Productivity should compound.</p>
              <p className="text-gray-600">
                I build <span className="text-red-600 font-medium">AI systems that upgrade humans, not by replacing effort</span>, but by amplifying it.
              </p>
              <p className="text-gray-600">
                My work focuses on removing micro-frictions that stall progress in learning, work, and decision-making.
              </p>
              <p className="text-gray-600">
                I want to create tools that feel inevitable once they're used.
              </p>
              <p className="text-gray-600">
                The goal isn't noise; it's impact.
              </p>
              <p className="text-gray-600">
                Even if it improved the world by just 0.1%, micro gains compound into real change.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Dark Footer */}
      <footer className="bg-[#2b2b2b] text-white px-6 md:px-12 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/portfolio/profile.jpg"
                  alt="Abhishai Vardhan"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
                Let's build<br/>something cooler
              </h2>
            </motion.div>

            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:items-end gap-6"
            >
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:abhishaivardhan21@gmail.com"
                  className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  abhishaivardhan21@gmail.com
                </a>
                <a
                  href="tel:+918919451220"
                  className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  +91 8919451220
                </a>
              </div>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-48 h-48 rounded-full bg-blue-500 flex items-center justify-center text-xl cursor-pointer hover:bg-blue-600 transition-colors"
                >
                  Get in touch
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">SOCIALS</p>
            <div className="flex gap-8 text-sm">
              <a href="https://linkedin.com/in/abhishaivardhan" className="hover:text-gray-300 transition-colors">Linkedin</a>
              <a href="https://github.com/abhishaiv" className="hover:text-gray-300 transition-colors">Github</a>
              <a href="https://twitter.com/abhishaiv" className="hover:text-gray-300 transition-colors">Twitter</a>
              <a href="https://instagram.com/abhishaiv" className="hover:text-gray-300 transition-colors">Instagram</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
