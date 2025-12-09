import React from 'react';
import Card from '@/components/ui/Card';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <Card>
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            This section will contain information about you, your background, and your expertise.
          </p>
        </Card>
      </div>
    </section>
  );
}
