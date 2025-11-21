import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, GitlabIcon as Gitlab, Star } from 'lucide-react';
import { projects } from '../data/projects';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  // Helper function to determine if URL is GitLab or GitHub
  const getRepoIcon = (url: string) => {
    return url.includes('gitlab.com') ? Gitlab : Github;
  };

  // Image rotation effect for featured project with multiple images
  useEffect(() => {
    if (featuredProject?.images && featuredProject.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === featuredProject.images!.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }
  }, [featuredProject]);

  return (
    <section id="projects" className="py-20 bg-slate-900" ref={ref}>
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
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building innovative solutions that make a real-world impact
          </p>
        </motion.div>

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="group relative">
              {/* Enhanced animated glow border */}
              <motion.div
                className="absolute -inset-1 rounded-2xl blur-xl opacity-50 group-hover:opacity-100"
                animate={{
                  background: [
                    'linear-gradient(60deg, rgba(6, 182, 212, 0.8), rgba(59, 130, 246, 0.8), rgba(168, 85, 247, 0.8))',
                    'linear-gradient(180deg, rgba(59, 130, 246, 0.8), rgba(168, 85, 247, 0.8), rgba(6, 182, 212, 0.8))',
                    'linear-gradient(300deg, rgba(168, 85, 247, 0.8), rgba(6, 182, 212, 0.8), rgba(59, 130, 246, 0.8))',
                    'linear-gradient(60deg, rgba(6, 182, 212, 0.8), rgba(59, 130, 246, 0.8), rgba(168, 85, 247, 0.8))',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />

              {/* Orbiting particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 360) / 12;
                  return (
                    <motion.div
                      key={`orbit-${i}`}
                      className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [
                          Math.cos((angle * Math.PI) / 180) * 200,
                          Math.cos(((angle + 360) * Math.PI) / 180) * 200,
                        ],
                        y: [
                          Math.sin((angle * Math.PI) / 180) * 100,
                          Math.sin(((angle + 360) * Math.PI) / 180) * 100,
                        ],
                        opacity: [0.6, 0.2, 0.6],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: 'linear',
                      }}
                    />
                  );
                })}
              </div>

              <div className="relative bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-8">
                  <div className="relative overflow-hidden group/img h-[500px] lg:h-[700px] lg:col-span-3 rounded-lg bg-slate-950">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          'radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
                          'radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                          'radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
                        ],
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />

                    <AnimatePresence mode="wait">
                      <motion.img
                        key={featuredProject.images ? currentImageIndex : featuredProject.image}
                        src={featuredProject.images ? featuredProject.images[currentImageIndex] : featuredProject.image}
                        alt={featuredProject.title}
                        className="w-full h-full object-contain"
                        style={{ objectPosition: 'center' }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Image indicators */}
                    {featuredProject.images && featuredProject.images.length > 1 && (
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                        {featuredProject.images.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? 'bg-cyan-400 w-10 shadow-lg shadow-cyan-400/50'
                                : 'bg-slate-400/50 hover:bg-slate-400 w-2'
                            }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`View image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center lg:col-span-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {featuredProject.title}
                    </h3>
                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                      {featuredProject.longDescription}
                    </p>

                    {featuredProject.highlights && (
                      <div className="mb-6 space-y-2">
                        {featuredProject.highlights.slice(0, 5).map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-2 text-slate-400"
                          >
                            <Star className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                            <span className="text-sm">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {featuredProject.liveUrl && (
                        <motion.a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white overflow-hidden relative"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="relative z-10">View Live Demo</span>
                          <ExternalLink className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        </motion.a>
                      )}
                      <motion.a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {(() => {
                          const RepoIcon = getRepoIcon(featuredProject.githubUrl);
                          return <RepoIcon className="w-4 h-4" />;
                        })()}
                        <span>View Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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

              {/* Floating particles in background */}
              <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`particle-${project.id}-${i}`}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-70"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-20, -50, -20],
                      x: [0, Math.random() * 20 - 10, 0],
                      opacity: [0, 0.7, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>

              <div className="relative bg-slate-950 rounded-xl border border-slate-800 overflow-hidden h-full flex flex-col">
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
                      className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/90 backdrop-blur-sm rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-xs font-bold text-white">LIVE</span>
                    </motion.div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlights && (
                    <div className="mb-4 space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
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
                        className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-xs">
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
                      className={`${project.liveUrl ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {(() => {
                        const RepoIcon = getRepoIcon(project.githubUrl);
                        return <RepoIcon className="w-4 h-4" />;
                      })()}
                      <span>Code</span>
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
