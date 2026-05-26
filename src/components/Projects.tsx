import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, GitlabIcon as Gitlab, Star } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getRepoIcon = (url: string) => {
    return url.includes('gitlab.com') ? Gitlab : Github;
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
            Building innovative solutions that make a real-world impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              {/* Animated glow border */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(6, 182, 212, 0.5), rgba(59, 130, 246, 0.5))',
                    'linear-gradient(225deg, rgba(59, 130, 246, 0.5), rgba(168, 85, 247, 0.5))',
                    'linear-gradient(45deg, rgba(6, 182, 212, 0.5), rgba(59, 130, 246, 0.5))',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`particle-${project.id}-${i}`}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-70"
                    style={{
                      left: `${(i * 13 + 7) % 100}%`,
                      top: `${(i * 17 + 11) % 100}%`,
                    }}
                    animate={{
                      y: [-20, -50, -20],
                      x: [0, (i % 2 === 0 ? 1 : -1) * 10, 0],
                      opacity: [0, 0.7, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2 + (i * 0.3),
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>

              <div className="relative bg-white dark:bg-slate-950 rounded-xl border border-gray-200 dark:border-slate-800 overflow-hidden h-full flex flex-col">
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none"
                  animate={{
                    background: [
                      'radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.4) 0%, transparent 50%)',
                      'radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
                      'radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
                      'radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.4) 0%, transparent 50%)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                <div className="relative overflow-hidden h-72 group/img">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.08 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                  {project.liveUrl && (
                    <motion.div
                      className={`absolute top-4 right-4 px-3 py-1 backdrop-blur-sm rounded-full ${project.status === 'poc' ? 'bg-amber-500/90' : 'bg-emerald-500/90'}`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-xs font-bold text-white">{project.status === 'poc' ? 'POC' : 'LIVE'}</span>
                    </motion.div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-slate-400 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlights && (
                    <div className="mb-4 space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-gray-500 dark:text-slate-400 text-sm">
                          <Star className="w-3 h-3 text-cyan-400 flex-shrink-0 mt-1" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 rounded text-xs">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500/20 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.liveUrl ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300 rounded-lg font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {(() => {
                        const RepoIcon = getRepoIcon(project.githubUrl);
                        return <RepoIcon className="w-4 h-4" />;
                      })()}
                      <span>{project.githubUrl.includes('github.com/LinetMutuku/') ? 'Code' : 'GitLab Profile'}</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
