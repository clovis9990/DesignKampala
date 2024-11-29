import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { 
    name: 'Frontend Development',
    level: 95,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  { 
    name: 'Backend Development',
    level: 90,
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB']
  },
  { 
    name: 'UI/UX Design',
    level: 85,
    technologies: ['Figma', 'Adobe XD', 'User Research', 'Prototyping']
  },
  { 
    name: 'DevOps & Cloud',
    level: 80,
    technologies: ['AWS', 'Docker', 'CI/CD', 'Kubernetes']
  }
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Mastery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A decade of experience crafting digital solutions, continuously evolving with the latest technologies.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto space-y-8">
          {inView && skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-700/50 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between text-white mb-2">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden mb-3">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}