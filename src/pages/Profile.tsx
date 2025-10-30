import { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectsData } from '../data';

type FilterType = 'All' | 'Frontend' | 'Backend';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredProjectsData = activeFilter === 'All' 
    ? ProjectsData 
    : ProjectsData.filter(p => p.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-white mb-8">Portfolio</h1>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {(['All', 'Frontend', 'Backend'] as FilterType[]).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-lg transition-all ${
              activeFilter === filter
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* ProjectsData Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {filteredProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            image={project.image}
            tech={project.tech}
            link={project.link}
            github={project.github}
          />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProjectsData.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-zinc-400">No ProjectsData found in this category.</p>
        </motion.div>
      )}
    </motion.div>
  );
}
