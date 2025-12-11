'use client';

import { useState, FormEvent } from 'react';
import TopNav from '@/components/TopNav';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    services: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5]">
        {/* Hero Section with Headline + Photo */}
        <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight max-w-3xl">
                Let's start a<br/>
                project<br/>
                together
              </h1>
              <div className="hidden lg:block w-32 h-32 rounded-full bg-gray-600 flex-shrink-0 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Photo]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content: Form + Sidebar */}
        <section className="px-6 md:px-12 lg:px-24 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Side: Contact Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-12">
                  {/* Field 01 - Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-500 mb-4">
                      01
                    </label>
                    <div>
                      <p className="text-xl mb-4">What's your name?</p>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-gray-700 pb-3 text-lg text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="John Doe *"
                      />
                    </div>
                  </div>

                  {/* Field 02 - Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-500 mb-4">
                      02
                    </label>
                    <div>
                      <p className="text-xl mb-4">What's your email?</p>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-gray-700 pb-3 text-lg text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="john@doe.com *"
                      />
                    </div>
                  </div>

                  {/* Field 03 - Organization */}
                  <div>
                    <label htmlFor="organization" className="block text-sm text-gray-500 mb-4">
                      03
                    </label>
                    <div>
                      <p className="text-xl mb-4">What's the name of your organization?</p>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-700 pb-3 text-lg text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="John & Doe ®"
                      />
                    </div>
                  </div>

                  {/* Field 04 - Services */}
                  <div>
                    <label htmlFor="services" className="block text-sm text-gray-500 mb-4">
                      04
                    </label>
                    <div>
                      <p className="text-xl mb-4">What services are you looking for?</p>
                      <input
                        type="text"
                        id="services"
                        name="services"
                        value={formData.services}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-700 pb-3 text-lg text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="Web Design, Web Development ..."
                      />
                    </div>
                  </div>

                  {/* Field 05 - Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-500 mb-4">
                      05
                    </label>
                    <div>
                      <p className="text-xl mb-4">Your message</p>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-transparent border-b border-gray-700 pb-3 text-lg text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                        placeholder="Hello Dennis, can you help me with ... *"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-12 flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-48 h-48 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-light transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                    >
                      {isSubmitting ? 'Sending...' : 'Send it!'}
                    </button>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <p className="text-center text-green-400">
                      ✓ Message sent successfully!
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-center text-red-400">
                      ✗ Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>

              {/* Right Side: Contact Details Sidebar */}
              <div className="lg:col-span-5 space-y-12">
                {/* Contact Details */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">CONTACT DETAILS</p>
                  <div className="space-y-2">
                    <p className="text-sm">abhishaivardhan21@gmail.com</p>
                    <p className="text-sm">+31 6 27 84 74 30</p>
                  </div>
                </div>

                {/* Business Details */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">BUSINESS DETAILS</p>
                  <div className="space-y-1 text-sm">
                    <p>Abhishai Vardhan</p>
                    <p>Based in India</p>
                    <p>Location: India</p>
                  </div>
                </div>

                {/* Socials */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">SOCIALS</p>
                  <div className="space-y-2">
                    <a
                      href="https://linkedin.com/in/abhishaivardhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm hover:text-gray-300 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://twitter.com/abhishaiv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm hover:text-gray-300 transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://instagram.com/abhishaiv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm hover:text-gray-300 transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-sm">
            <div>
              <p className="text-gray-500 mb-2">VERSION</p>
              <p>2024 © Edition</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2">LOCAL TIME</p>
              <p>IST</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2">SOCIALS</p>
              <div className="flex gap-6">
                <a href="https://linkedin.com/in/abhishaivardhan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com/abhishaiv" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  Twitter
                </a>
                <a href="https://instagram.com/abhishaiv" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
