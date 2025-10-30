import { motion } from 'motion/react';
import { Sparkles, Target, Users, Zap } from 'lucide-react';
// import { Heart, Coffee } from 'lucide-react';

// const ImageWithFallback ='https://placehold.co/600x400';

const stats = [
  { label: 'Years Experience', value: '6+', icon: Sparkles },
  { label: 'Projects Completed', value: '50+', icon: Target },
  { label: 'Happy Clients', value: '30+', icon: Users },
  { label: 'Code Commits', value: '5000+', icon: Zap },
];

const interests = [
  {
    title: 'Open Source',
    description: 'Contributing to open source projects and building tools for the developer community.',
    icon: '🚀',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
    icon: '🎨',
  },
  {
    title: 'Problem Solving',
    description: 'Tackling complex challenges with elegant, scalable solutions.',
    icon: '🧩',
  },
  {
    title: 'Learning',
    description: 'Constantly exploring new technologies and staying updated with industry trends.',
    icon: '📚',
  },
];

const values = [
  {
    title: 'Clean Code',
    description: 'Writing maintainable, well-documented code that other developers can easily understand and build upon.',
  },
  {
    title: 'User-Centric',
    description: 'Putting users first in every decision, creating experiences that are both functional and delightful.',
  },
  {
    title: 'Continuous Growth',
    description: 'Always learning, experimenting, and pushing the boundaries of what\'s possible with technology.',
  },
  {
    title: 'Collaboration',
    description: 'Believing that the best solutions come from working together and sharing knowledge.',
  },
];

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h1 className="text-white mb-2">About Me</h1>
        <p className="text-zinc-400">Get to know me better</p>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* <Card className="bg-zinc-900/50 border-zinc-800 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1615285307672-09b361d7c61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NjE2OTM3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">👋</span>
                  <h2 className="text-white">Hello, I'm Sean</h2>
                </div>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    I'm a passionate Full Stack Developer with over 6 years of experience crafting 
                    digital experiences that make a difference. I specialize in building modern web 
                    applications that are not only functional but also beautiful and intuitive.
                  </p>
                  <p>
                    My journey in tech started with a curiosity about how websites work, and it has 
                    evolved into a career where I get to solve complex problems and bring ideas to life 
                    every single day. I believe in writing clean code, continuous learning, and creating 
                    solutions that truly serve users' needs.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open source, or sharing knowledge with the developer community. I'm always excited 
                    to take on new challenges and collaborate on interesting projects.
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-zinc-800">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Coffee className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm">Coffee Enthusiast</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="text-sm">Code Lover</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {/* <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-2xl text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </CardContent>
              </Card> */}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* What I Love Section */}
      <section>
        <h2 className="text-white mb-6">What I Love Doing</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {/* <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all hover:transform hover:scale-[1.02] h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{interest.icon}</span>
                    <div>
                      <h3 className="text-white mb-2">{interest.title}</h3>
                      <p className="text-sm text-zinc-400">{interest.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-white mb-6">My Values</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {/* <Card className="bg-zinc-900/50 border-zinc-800 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-white mb-2">{value.title}</h3>
                      <p className="text-sm text-zinc-400">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {/* <Card className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-zinc-800">
          <CardContent className="p-8 text-center">
            <h2 className="text-white mb-3">Let's Work Together</h2>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
              Get In Touch
            </button>
          </CardContent>
        </Card> */}
      </motion.div>
    </motion.div>
  );
}
