import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './libs/badge';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  tech?: string[];
  link?: string;
  github?: string;
}

export function ProjectCard({ title, category, image, tech, link, github }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all"
    >
      <div className="aspect-video overflow-hidden bg-zinc-800">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-white mb-1 group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-zinc-400">{category}</p>
          </div>
          <Badge variant="outline" className="bg-zinc-800/50 border-zinc-700 text-cyan-400">
            {category}
          </Badge>
        </div>
        
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, i) => (
              <span 
                key={i}
                className="text-xs px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-2">
          {link && (
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-sm transition-colors flex-1">
              <ExternalLink className="w-4 h-4" />
              View Live
            </button>
          )}
          {github && (
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 text-sm transition-colors flex-1">
              <Github className="w-4 h-4" />
              Code
            </button>
          )}
        </div>
      </div>
      
      <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/20 rounded-xl transition-colors pointer-events-none" />
    </motion.div>
  );
}
