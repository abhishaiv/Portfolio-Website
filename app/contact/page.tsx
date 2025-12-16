'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

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
      <Navigation theme="dark" />

      <main className="min-h-screen bg-[#2b2b2b] text-white pt-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Left: Headline */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                Let's Build<br/>
                Something<br/>
                Cooler Together
              </h1>
            </motion.div>

            {/* Right: Photo + Contact Details */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Profile Photo */}
              <img
                src="/images/portfolio/profile.jpg"
                alt="Abhishai Vardhan"
                className="w-32 h-32 rounded-full object-cover"
              />

              {/* Contact Details */}
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">CONTACT DETAILS</p>
                <p className="text-sm mb-2">abhishaivardhan21@gmail.com</p>
                <p className="text-sm">+91 8919451220</p>
              </div>

              {/* Business Details */}
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">BUSINESS DETAILS</p>
                <p className="text-sm mb-1">nexaflowstudios.in</p>
                <p className="text-sm">Location: INDIA</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="max-w-4xl space-y-12"
          >
            {/* Field 01 - Name */}
            <div className="border-b border-gray-600 pb-6">
              <label className="block text-sm text-gray-500 mb-4">01</label>
              <p className="text-2xl mb-4">Name</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe*"
                className="w-full bg-transparent border-none text-lg text-gray-400 placeholder-gray-600 focus:outline-none"
              />
            </div>

            {/* Field 02 - Email */}
            <div className="border-b border-gray-600 pb-6">
              <label className="block text-sm text-gray-500 mb-4">02</label>
              <p className="text-2xl mb-4">E-mail</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="johndoe@gmail.com*"
                className="w-full bg-transparent border-none text-lg text-gray-400 placeholder-gray-600 focus:outline-none"
              />
            </div>

            {/* Field 03 - Organization */}
            <div className="border-b border-gray-600 pb-6">
              <label className="block text-sm text-gray-500 mb-4">03</label>
              <p className="text-2xl mb-4">Name of the Organisation</p>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="John & Doe"
                className="w-full bg-transparent border-none text-lg text-gray-400 placeholder-gray-600 focus:outline-none"
              />
            </div>

            {/* Field 04 - Services */}
            <div className="border-b border-gray-600 pb-6">
              <label className="block text-sm text-gray-500 mb-4">04</label>
              <p className="text-2xl mb-4">Services you are looking for</p>
              <input
                type="text"
                name="services"
                value={formData.services}
                onChange={handleChange}
                placeholder="Smart Chatbots, AI infused Website Development ..."
                className="w-full bg-transparent border-none text-lg text-gray-400 placeholder-gray-600 focus:outline-none"
              />
            </div>

            {/* Field 05 - Message */}
            <div className="border-b border-gray-600 pb-6">
              <label className="block text-sm text-gray-500 mb-4">05</label>
              <p className="text-2xl mb-4">Your message</p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Hello Abhishai, Can you help me with ..."
                className="w-full bg-transparent border-none text-lg text-gray-400 placeholder-gray-600 focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-12">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-56 h-56 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-2xl font-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Get in touch'}
              </motion.button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <p className="text-center text-green-400">✓ Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-red-400">✗ Something went wrong. Please try again.</p>
            )}
          </motion.form>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-24 pt-12 border-t border-white/10"
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
      </main>
    </>
  );
}
