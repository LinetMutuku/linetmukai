import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Code, Sparkles, Rocket } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25" />
                <div className="relative bg-slate-800 p-8 rounded-lg border border-slate-700">
                  <p className="text-lg text-slate-300 leading-relaxed">
                    A <span className="text-cyan-400 font-semibold">passionate frontend developer</span> crafting
                    exceptional digital experiences with modern technologies. I specialize in building
                    <span className="text-cyan-400 font-semibold"> scalable, performant web applications</span>,
                    <span className="text-cyan-400 font-semibold"> SaaS applications</span>, and
                    <span className="text-cyan-400 font-semibold"> Progressive Web Apps</span> that deliver
                    outstanding user experiences.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25" />
                <div className="relative bg-slate-800 p-8 rounded-lg border border-slate-700">
                  <p className="text-lg text-slate-300 leading-relaxed">
                    With expertise in <span className="text-cyan-400 font-semibold">Vue.js, React, and Next.js</span>,
                    I transform ideas into pixel-perfect, responsive interfaces. My strong foundation in backend
                    technologies enables seamless <span className="text-cyan-400 font-semibold">full-stack collaboration</span> and
                    efficient API integration.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25" />
                <div className="relative bg-slate-800 p-8 rounded-lg border border-slate-700">
                  <p className="text-lg text-slate-300 leading-relaxed">
                    I'm driven by creating innovative solutions that make a real impact. From enterprise PWAs
                    revolutionizing agricultural supply chains to sophisticated content management systems,
                    I bring <span className="text-cyan-400 font-semibold">technical excellence</span> and
                    <span className="text-cyan-400 font-semibold"> creative problem-solving</span> to every project.
                  </p>
                </div>
              </div>

              <motion.a
                href="/cv.pdf"
                download
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Download Resume</span>
                <Download className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {[
                {
                  icon: Code,
                  title: 'Clean Code Advocate',
                  description: 'Writing maintainable, scalable code following industry best practices and design patterns',
                  gradient: 'from-cyan-500 to-blue-500',
                },
                {
                  icon: Sparkles,
                  title: 'UX Enthusiast',
                  description: 'Crafting intuitive interfaces with smooth animations and delightful user interactions',
                  gradient: 'from-blue-500 to-purple-500',
                },
                {
                  icon: Rocket,
                  title: 'Performance Focused',
                  description: 'Optimizing applications for speed, accessibility, and exceptional user experience',
                  gradient: 'from-purple-500 to-cyan-500',
                },
              ].map((highlight) => (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${highlight.gradient} rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity`} />
                  <div className="relative bg-slate-800 p-6 rounded-lg border border-slate-700 group-hover:border-cyan-500/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${highlight.gradient} rounded-lg`}>
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-slate-400">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
