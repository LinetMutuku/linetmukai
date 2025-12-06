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

  // Code rain symbols
  const codeSymbols = ['<', '>', '{', '}', '[', ']', '(', ')', ';', ':', '=', '+', '-', '*', '/', 'λ', 'π', '∑', '∆', '∇', '0', '1'];

  // Generate random code rain drops
  const codeRainDrops = [...Array(30)].map((_, i) => ({
    id: i,
    symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
    left: `${Math.random() * 100}%`,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 5,
    fontSize: 12 + Math.random() * 8,
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated wave at the top */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden z-0">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="rgba(6, 182, 212, 0.1)"
            fillOpacity="1"
            d="M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,186.7C672,181,768,139,864,128C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            animate={{
              d: [
                "M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,186.7C672,181,768,139,864,128C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
                "M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,117.3C672,117,768,171,864,181.3C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
                "M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,186.7C672,181,768,139,864,128C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            fill="rgba(59, 130, 246, 0.08)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,106.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,106.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
                "M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,80C672,53,768,43,864,64C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
                "M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,106.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </svg>
      </div>

      {/* Code rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none z-5">
        {codeRainDrops.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute text-cyan-400 font-mono font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            style={{
              left: drop.left,
              fontSize: `${drop.fontSize}px`,
              top: '-20px',
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: drop.duration,
              repeat: Infinity,
              delay: drop.delay,
              ease: 'linear',
            }}
          >
            {drop.symbol}
          </motion.div>
        ))}
      </div>

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
        className="relative z-20 max-w-7xl mx-auto px-6 text-center perspective-1000"
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

        {/* Social links with wave/tag style */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={itemVariants}
        >
          {[
            { icon: Github, url: 'https://github.com/LinetMutuku', label: 'GitHub' },
            { icon: Gitlab, url: 'https://gitlab.com/linetmukai9', label: 'GitLab' },
            { icon: Mail, url: 'mailto:linetmukai9@gmail.com', label: 'Email' },
            { icon: Phone, url: 'tel:+254706711354', label: 'Phone' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              {/* Wave background */}
              <div className="relative px-6 py-3 overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 200 60"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0,30 Q50,10 100,30 T200,30 L200,60 L0,60 Z"
                    fill="rgba(6, 182, 212, 0.1)"
                    stroke="rgba(6, 182, 212, 0.4)"
                    strokeWidth="2"
                    className="group-hover:fill-cyan-500/20 transition-all"
                    animate={{
                      d: [
                        "M0,30 Q50,10 100,30 T200,30 L200,60 L0,60 Z",
                        "M0,30 Q50,50 100,30 T200,30 L200,60 L0,60 Z",
                        "M0,30 Q50,10 100,30 T200,30 L200,60 L0,60 Z",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>

                {/* Content */}
                <div className="relative z-10 flex items-center gap-2">
                  <social.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <span className="text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {social.label}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
        className="pointer-events-none fixed w-96 h-96 rounded-full blur-3xl opacity-20 z-5"
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

      {/* Ocean waves at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 overflow-hidden z-10 pointer-events-none">
        {/* Wave 1 - Deepest layer */}
        <motion.svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ transform: 'translateY(30%)' }}
        >
          <motion.path
            fill="rgba(6, 182, 212, 0.15)"
            d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,154.7C672,139,768,117,864,122.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,154.7C672,139,768,117,864,122.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,154.7C672,139,768,117,864,122.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>

        {/* Wave 2 - Middle layer */}
        <motion.svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ transform: 'translateY(15%)' }}
        >
          <motion.path
            fill="rgba(6, 182, 212, 0.1)"
            d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,117.3C672,117,768,171,864,181.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,117.3C672,117,768,171,864,181.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,138.7C672,117,768,107,864,128C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,117.3C672,117,768,171,864,181.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.svg>

        {/* Wave 3 - Front layer */}
        <motion.svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="rgba(59, 130, 246, 0.12)"
            d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,181.3C672,181,768,235,864,240C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,181.3C672,181,768,235,864,240C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,256L48,250.7C96,245,192,235,288,240C384,245,480,267,576,261.3C672,256,768,224,864,213.3C960,203,1056,213,1152,229.3C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,181.3C672,181,768,235,864,240C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.svg>

        {/* Wave foam/highlights */}
        <motion.svg
          className="absolute bottom-0 w-full h-full opacity-60"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="none"
            stroke="rgba(147, 197, 253, 0.4)"
            strokeWidth="2"
            d="M0,256L48,250.7C96,245,192,235,288,240C384,245,480,267,576,261.3C672,256,768,224,864,213.3C960,203,1056,213,1152,229.3C1248,245,1344,267,1392,277.3L1440,288"
            animate={{
              d: [
                "M0,256L48,250.7C96,245,192,235,288,240C384,245,480,267,576,261.3C672,256,768,224,864,213.3C960,203,1056,213,1152,229.3C1248,245,1344,267,1392,277.3L1440,288",
                "M0,240L48,245.3C96,251,192,261,288,256C384,251,480,229,576,229.3C672,229,768,251,864,261.3C960,272,1056,272,1152,261.3C1248,251,1344,229,1392,218.7L1440,208",
                "M0,256L48,250.7C96,245,192,235,288,240C384,245,480,267,576,261.3C672,256,768,224,864,213.3C960,203,1056,213,1152,229.3C1248,245,1344,267,1392,277.3L1440,288",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </div>
    </section>
  );
};

export default Hero;
