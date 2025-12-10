'use client';

interface ProjectFilterProps {
  activeFilter: 'all' | 'design' | 'development';
  onFilterChange: (filter: 'all' | 'design' | 'development') => void;
  projectCounts: {
    all: number;
    design: number;
    development: number;
  };
}

export default function ProjectFilter({
  activeFilter,
  onFilterChange,
  projectCounts,
}: ProjectFilterProps) {
  const filters = [
    { id: 'all' as const, label: 'All', count: projectCounts.all },
    { id: 'design' as const, label: 'Design', count: projectCounts.design },
    { id: 'development' as const, label: 'Development', count: projectCounts.development },
  ];

  return (
    <div className="border-t border-b border-border py-6">
      <div className="flex flex-wrap gap-6">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`text-lg transition-colors ${
              activeFilter === filter.id
                ? 'text-foreground'
                : 'text-muted hover:text-foreground'
            }`}
          >
            {filter.label}
            <span className="ml-2">({filter.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
}
