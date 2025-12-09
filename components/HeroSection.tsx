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
          Freelance Designer & Developer
        </p>

        {/* Description */}
        <div className="max-w-2xl">
          <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
            I help <span className="text-foreground">brands</span> to stand out in the digital era.
            Together we will set the new status quo. No nonsense, always on the cutting edge.
          </p>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            My passion is to <span className="text-foreground">design & develop</span> digital
            experiences with a focus on{' '}
            <span className="text-foreground">design, code & interaction</span>.
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
