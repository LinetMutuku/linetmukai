import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skills';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      name: 'Frontend Mastery',
      category: 'frontend',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Building exceptional user interfaces',
    },
    {
      name: 'Backend Foundation',
      category: 'backend',
      gradient: 'from-emerald-500 to-teal-500',
      description: 'API integration & server-side logic',
    },
    {
      name: 'Development Tools',
      category: 'tools',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Version control & deployment',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'from-cyan-500 to-blue-500';
      case 'Advanced':
        return 'from-emerald-500 to-teal-500';
      default:
        return 'from-purple-500 to-pink-500';
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Modern technologies and frameworks for building exceptional web applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {cat.name}
                </h3>
                <p className="text-slate-400">{cat.description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {skills
                  .filter((skill) => skill.category === cat.category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: catIndex * 0.2 + index * 0.05 }}
                      className="group relative"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${cat.gradient} rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity`} />
                      <div className="relative h-full bg-slate-900 p-6 rounded-lg border border-slate-800 group-hover:border-transparent transition-all">
                        <div className="text-center">
                          <motion.div
                            className="text-4xl mb-3"
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: 'reverse',
                            }}
                          >
                            {skill.icon}
                          </motion.div>
                          <h4 className="font-semibold text-white mb-2 text-sm">
                            {skill.name}
                          </h4>
                          <div className="relative">
                            <div className={`inline-block px-3 py-1 bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full text-xs font-medium text-white`}>
                              {skill.level}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg blur opacity-25" />
            <div className="relative bg-slate-900 px-8 py-6 rounded-lg border border-slate-800">
              <p className="text-slate-300 text-lg">
                <span className="text-cyan-400 font-semibold">Always learning</span> and staying
                up-to-date with the latest web technologies and best practices
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
