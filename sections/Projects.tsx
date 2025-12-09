import React from 'react';
import Card from '@/components/ui/Card';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Project description will go here
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
