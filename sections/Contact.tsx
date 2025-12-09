import React from 'react';
import Card from '@/components/ui/Card';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <Card>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
            Contact form or contact information will go here
          </p>
        </Card>
      </div>
    </section>
  );
}
