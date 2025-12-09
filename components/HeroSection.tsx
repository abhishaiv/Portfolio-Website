'use client';

import { useState, useEffect } from 'react';

const greetings = [
  { lang: 'French', text: 'Bonjour' },
  { lang: 'Hindi', text: 'नमस्ते' },
  { lang: 'Italian', text: 'Ciao' },
  { lang: 'Portuguese', text: 'Olá' },
  { lang: 'Japanese', text: 'こんにちは' },
  { lang: 'Swedish', text: 'Hej' },
  { lang: 'German', text: 'Hallo' },
  { lang: 'Dutch', text: 'Hallo' },
  { lang: 'Spanish', text: 'Hola' },
  { lang: 'English', text: 'Hello' },
];

export default function HeroSection() {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      <div className="max-w-6xl w-full">
        {/* Animated Greeting */}
        <div className="mb-8 overflow-hidden">
          <p className="text-muted text-sm md:text-base animate-fade-in">
            {greetings[currentGreeting].text}
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6">
          Abhishai Vardhan—
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted mb-8">
          AI Builder + Market Intelligence Specialist
        </p>

        {/* Description */}
        <div className="max-w-2xl">
          <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
            Building <span className="text-foreground">AI-fuelled systems</span> that upgrade humans — from 1 to 10x.
            Currently based in India, working on systems that think.
          </p>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
            By day, I decode global markets at <span className="text-foreground">Cognizant</span>.
            By night, I build <span className="text-foreground">AI products</span> that remove friction, amplify humans,
            and quietly push the world forward in micro-percentages.
          </p>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            <span className="text-foreground">Founder energy</span> — loading in the background. ⚡
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="#work"
            className="px-8 py-4 bg-foreground text-background rounded-full hover:bg-accent transition-colors text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors text-center"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
