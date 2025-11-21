import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, GitlabIcon as Gitlab, Mail, Phone, ChevronDown, Sparkles, Code2, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (isHovered) {
        const rect = document.getElementById('hero-card')?.getBoundingClientRect();
        if (rect) {
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
          const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
          mouseX.set(x);
          mouseY.set(y);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered, mouseX, mouseY]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const floatingSkills = [
    { name: 'Vue.js', icon: Code2, delay: 0 },
    { name: 'React', icon: Zap, delay: 0.5 },
    { name: 'TypeScript', icon: Sparkles, delay: 1 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-50"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
      </div>

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            left: `${20 + i * 30}%`,
            top: `${30 - i * 10}%`,
            background: i % 2 === 0
              ? 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}

      {/* Enhanced particle system */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const duration = Math.random() * 20 + 10;
          const delay = Math.random() * 5;

          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0
                  ? 'rgba(6, 182, 212, 0.8)'
                  : i % 3 === 1
                  ? 'rgba(59, 130, 246, 0.8)'
                  : 'rgba(147, 197, 253, 0.6)',
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Grid overlay with animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating skill badges */}
      {floatingSkills.map((skill, i) => (
        <motion.div
          key={skill.name}
          className="absolute hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-md border border-cyan-500/30 rounded-full"
          style={{
            left: `${10 + i * 30}%`,
            top: `${20 + i * 15}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.05, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: skill.delay,
            ease: 'easeInOut',
          }}
        >
          <skill.icon className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-300 font-medium">{skill.name}</span>
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        id="hero-card"
        className="relative z-10 max-w-7xl mx-auto px-6 text-center perspective-1000"
        style={{
          rotateX: isHovered ? rotateX : '0deg',
          rotateY: isHovered ? rotateY : '0deg',
          transformStyle: 'preserve-3d',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          mouseX.set(0);
          mouseY.set(0);
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge with pulse */}
        <motion.div
          className="inline-block mb-6"
          variants={itemVariants}
        >
          <motion.div
            className="relative px-6 py-3 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-full border border-cyan-500/30 backdrop-blur-sm"
            animate={{
              boxShadow: [
                '0 0 20px rgba(6, 182, 212, 0.3)',
                '0 0 40px rgba(6, 182, 212, 0.5)',
                '0 0 20px rgba(6, 182, 212, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 bg-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-cyan-400 text-sm font-semibold tracking-wide">
                Available for Opportunities
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            Linet Mukai Mutuku
          </motion.span>
        </motion.h1>

        {/* Subtitle with animated underline */}
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 relative">
              <motion.span
                className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(6, 182, 212, 0.5)',
                    '0 0 40px rgba(6, 182, 212, 0.8)',
                    '0 0 20px rgba(6, 182, 212, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Frontend Developer
              </motion.span>
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <motion.p
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mt-6"
            variants={itemVariants}
          >
            Crafting exceptional digital experiences with{' '}
            <span className="text-cyan-400 font-semibold">modern web technologies</span>
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Specializing in building{' '}
          <span className="text-cyan-400">scalable</span>,{' '}
          <span className="text-blue-400">performant</span> web applications and Progressive
          Web Apps with modern JavaScript frameworks
        </motion.p>

        {/* CTA Buttons with magnetic effect */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group relative px-8 py-4 rounded-xl font-bold text-cyan-400 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 border-2 border-cyan-500 rounded-xl"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(6, 182, 212, 0.5)',
                  '0 0 20px rgba(6, 182, 212, 0.5)',
                  '0 0 0px rgba(6, 182, 212, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 bg-cyan-500/10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Contact Me</span>
          </motion.button>
        </motion.div>

        {/* Social links with enhanced animations */}
        <motion.div
          className="flex items-center justify-center gap-4"
          variants={itemVariants}
        >
          {[
            { icon: Github, url: 'https://github.com/LinetMutuku', label: 'GitHub', color: 'cyan' },
            { icon: Gitlab, url: 'https://gitlab.com/linetmukai9', label: 'GitLab', color: 'blue' },
            { icon: Mail, url: 'mailto:linetmukai9@gmail.com', label: 'Email', color: 'purple' },
            { icon: Phone, url: 'tel:+254706711354', label: 'Phone', color: 'cyan' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-xl group"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.1,
                borderColor: `rgba(6, 182, 212, 0.8)`,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)',
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
                    'linear-gradient(225deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
                    'linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <social.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors relative z-10" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll down"
        >
          <span className="text-xs text-cyan-400 font-medium tracking-wider uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
          <motion.div
            className="p-2 rounded-full border-2 border-cyan-500/50 group-hover:border-cyan-500 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="w-5 h-5 text-cyan-400" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Ambient light effect following mouse */}
      <motion.div
        className="pointer-events-none fixed w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
};

export default Hero;
