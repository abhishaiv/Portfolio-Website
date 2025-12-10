'use client';

import { useState, FormEvent } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LocalTime from '@/components/LocalTime';

const greetings = [
  'Hello', 'Hola', 'Bonjour', 'Ciao', 'Hallo',
  'こんにちは', '안녕하세요', 'Olá', 'Привет', 'नमस्ते'
];

export default function ContactPage() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: '',
    organization: '',
    services: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Rotate greetings
  useState(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        phone: '',
        name: '',
        email: '',
        organization: '',
        services: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="py-12 md:py-20">
            {/* Animated Greeting */}
            <div className="mb-8 overflow-hidden">
              <span className="text-muted text-lg md:text-xl inline-block animate-fade">
                {greetings[currentGreeting]}
              </span>
            </div>

            {/* Page Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6">
              Let's start a
              <br />
              project together
            </h1>

            <div className="text-4xl md:text-6xl text-muted">↓</div>
          </div>

          {/* Form Section */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column - Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Field 01 - Phone */}
                  <div className="space-y-3">
                    <label htmlFor="phone" className="block text-sm text-muted">
                      01 What's your phone number?
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border pb-3 text-lg focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Optional"
                    />
                  </div>

                  {/* Field 02 - Name */}
                  <div className="space-y-3">
                    <label htmlFor="name" className="block text-sm text-muted">
                      02 What's your name? <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border pb-3 text-lg focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Field 03 - Email */}
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-sm text-muted">
                      03 What's your email? <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border pb-3 text-lg focus:outline-none focus:border-foreground transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Field 04 - Organization */}
                  <div className="space-y-3">
                    <label htmlFor="organization" className="block text-sm text-muted">
                      04 What's the name of your organization?
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border pb-3 text-lg focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Optional"
                    />
                  </div>

                  {/* Field 05 - Services */}
                  <div className="space-y-3">
                    <label htmlFor="services" className="block text-sm text-muted">
                      05 What services are you looking for? <span className="text-accent">*</span>
                    </label>
                    <select
                      id="services"
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border pb-3 text-lg focus:outline-none focus:border-foreground transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-background">Select a service</option>
                      <option value="ai-development" className="bg-background">AI Development</option>
                      <option value="market-intelligence" className="bg-background">Market Intelligence</option>
                      <option value="full-stack-ai" className="bg-background">Full-Stack AI Solutions</option>
                      <option value="consulting" className="bg-background">Consulting</option>
                      <option value="other" className="bg-background">Other</option>
                    </select>
                  </div>

                  {/* Field 06 - Message */}
                  <div className="space-y-3">
                    <label htmlFor="message" className="block text-sm text-muted">
                      06 Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-transparent border-b border-border pb-3 text-lg focus:outline-none focus:border-foreground transition-colors resize-none"
                      placeholder="Tell me more about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <span>→</span>}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <p className="mt-4 text-accent">
                        ✓ Message sent successfully! I'll get back to you soon.
                      </p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="mt-4 text-red-500">
                        ✗ Something went wrong. Please try again or email me directly.
                      </p>
                    )}
                  </div>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-12">
                {/* Contact Details */}
                <div>
                  <h3 className="text-sm text-muted uppercase mb-6">Contact Details</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:abhishaivardhan21@gmail.com"
                      className="block text-xl hover:text-accent transition-colors"
                    >
                      abhishaivardhan21@gmail.com
                    </a>
                    <a
                      href="tel:+918919451220"
                      className="block text-xl hover:text-accent transition-colors"
                    >
                      +91 89194 51220
                    </a>
                  </div>
                </div>

                {/* Location & Time */}
                <div>
                  <h3 className="text-sm text-muted uppercase mb-6">Location</h3>
                  <p className="text-xl mb-4">India 🇮🇳</p>
                  <div className="text-xl">
                    <LocalTime />
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-sm text-muted uppercase mb-6">Socials</h3>
                  <div className="space-y-3">
                    <a
                      href="https://github.com/abhishaiv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg hover:text-accent transition-colors"
                    >
                      GitHub →
                    </a>
                    <a
                      href="https://linkedin.com/in/abhishaivardhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg hover:text-accent transition-colors"
                    >
                      LinkedIn →
                    </a>
                    <a
                      href="https://twitter.com/abhishaiv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg hover:text-accent transition-colors"
                    >
                      Twitter →
                    </a>
                    <a
                      href="https://instagram.com/abhishaiv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg hover:text-accent transition-colors"
                    >
                      Instagram →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
