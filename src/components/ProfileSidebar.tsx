import { Mail, Github } from 'lucide-react';

const exampleImage = 'https://placehold.co/600x400';

export function ProfileSidebar() {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm border-r border-zinc-800 p-8 flex flex-col items-center">
      <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 bg-linear-to-br from-purple-500/20 to-pink-500/20 p-1">
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <img 
            src={exampleImage} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <h2 className="text-white mb-2 text-center">Omoera Sean</h2>
      <p className="text-zinc-400 text-sm mb-8 text-center">FullStack Developer</p>
      
      <div className="w-full space-y-4">
        <a 
          href="mailto:Seanmoera@gmail.com"
          className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-red-500 to-pink-500 flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-zinc-400">Email</p>
            <p className="text-sm text-white truncate">Seanmoera@gmail.com</p>
          </div>
        </a>
        
        <a 
          href="https://github.com/Dedzz19"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0">
            <Github className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-zinc-400">Github</p>
            <p className="text-sm text-white truncate">Dedzz19</p>
          </div>
        </a>
      </div>
    </div>
  );
}
