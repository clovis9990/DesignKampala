import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { useInView } from 'react-intersection-observer';

export function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inView && projects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={`project-${index}`}
              onClick={() => setSelectedId(`project-${index}`)}
              className="cursor-pointer group relative overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={`${project.image}?auto=format&fit=crop&w=600&q=60`}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={selectedId}
                className="bg-gray-800 rounded-xl p-6 max-w-2xl w-full"
                onClick={e => e.stopPropagation()}
              >
                {projects.map((project, index) => {
                  if (`project-${index}` === selectedId) {
                    return (
                      <div key={index}>
                        <img 
                          src={`${project.image}?auto=format&fit=crop&w=800&q=70`}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-purple-400 mb-4">{project.category}</p>
                        <p className="text-gray-300">{project.description}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}