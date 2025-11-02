import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Code2, Database, Layout, Server } from 'lucide-react';
import { Card, CardContent } from "../components/Card";
import { Badge } from '../components/libs/badge';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2023 - Present',
    description: 'Leading development of enterprise web applications using React, Node.js, and cloud infrastructure. Mentoring junior developers and architecting scalable solutions.',
    achievements: [
      'Reduced application load time by 60% through optimization',
      'Led migration to microservices architecture',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    period: '2021 - 2023',
    description: 'Developed and maintained multiple client-facing applications. Collaborated with design teams to create seamless user experiences.',
    achievements: [
      'Built 15+ responsive web applications',
      'Integrated third-party APIs and payment systems',
      'Improved code quality through testing and code reviews',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'StartUp Studio',
    period: '2019 - 2021',
    description: 'Created responsive and interactive user interfaces. Worked closely with UX designers to implement pixel-perfect designs.',
    achievements: [
      'Developed reusable component library',
      'Increased user engagement by 45%',
      'Optimized SEO resulting in 3x organic traffic',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'University of Lagos State',
    period: '2024 - 2028',
    description: 'Focused on web development and engineering technologies',
  },
  {
    degree: 'Full Stack Web Development',
    school: 'Univel Academy',
    period: '2023',
    description: 'Intensive program covering modern web development technologies and best practices.',
  },
];

const skills = {
  'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS',],
  'Backend': ['Node.js', 'Express', 'Python', 'MongoDB', 'Django', 'REST APIs'],
  'Tools & Others': ['Git', 'Figma', 'CI/CD'],
};

const certifications = [
  'Univelcity Frontend Certificate',
  'Univelcity Backend Certificate',
];

export function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-white mb-2">Resume</h1>
        <p className="text-zinc-400">My professional journey and expertise</p>
      </div>

      {/* Experience Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-white">Work Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white mb-1">{exp.title}</h3>
                      <p className="text-cyan-400">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="bg-zinc-800/50 border-zinc-700 text-zinc-400 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-zinc-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-white">Education</h2>
        </div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="text-white">{edu.degree}</h3>
                    <Badge variant="outline" className="bg-zinc-800/50 border-zinc-700 text-zinc-400 w-fit">
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-cyan-400 mb-2">{edu.school}</p>
                  <p className="text-sm text-zinc-400">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-white">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {category === 'Frontend' && <Layout className="w-5 h-5 text-cyan-400" />}
                    {category === 'Backend' && <Server className="w-5 h-5 text-purple-400" />}
                    {category === 'Tools & Others' && <Database className="w-5 h-5 text-orange-400" />}
                    <h3 className="text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center">
            <Award className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-white">Certifications</h2>
        </div>

        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-6">
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  {cert}
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Download Resume Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center pt-4"
      >
        <button className="px-8 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
          Download Resume (PDF)
        </button>
      </motion.div>
    </motion.div>
  );
}
