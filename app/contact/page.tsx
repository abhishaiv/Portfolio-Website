'use client';

import { useState, FormEvent } from 'react';

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
    <main className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form - Left Side */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Field 01 - Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-3">
                  01 What's your name?
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 pb-3 text-xl text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="John Doe *"
                />
              </div>

              {/* Field 02 - Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-3">
                  02 What's your email?
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 pb-3 text-xl text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="john@example.com *"
                />
              </div>

              {/* Field 03 - Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm text-gray-400 mb-3">
                  03 What's the name of your organization?
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 pb-3 text-xl text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="John & Doe ®"
                />
              </div>

              {/* Field 04 - Services */}
              <div>
                <label htmlFor="services" className="block text-sm text-gray-400 mb-3">
                  04 What services are you looking for?
                </label>
                <input
                  type="text"
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 pb-3 text-xl text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="AI Development, Web Design ..."
                />
              </div>

              {/* Field 05 - Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-3">
                  05 Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-700 pb-3 text-xl text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  placeholder="Hello Abhishai, can you help me with ... *"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-12 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-48 h-48 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-light transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  style={{ transition: 'all 0.3s ease' }}
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

          {/* Social Links - Right Side */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:justify-center space-y-4 lg:items-end">
            <a
              href="https://linkedin.com/in/abhishaivardhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/abhishaiv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com/abhishaiv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/abhishaiv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
