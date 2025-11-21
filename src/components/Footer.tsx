import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, GitlabIcon as Gitlab, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Linet Mukai Mutuku
            </motion.div>
            <p className="text-slate-400 mb-4">
              Frontend Developer crafting exceptional digital experiences with modern JavaScript frameworks.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, url: 'https://github.com/LinetMutuku' },
                { icon: Gitlab, url: 'https://gitlab.com/linetmukai9' },
                { icon: Mail, url: 'mailto:linetmukai9@gmail.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 border border-slate-700 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-slate-400">
              <p>Nairobi, Kenya</p>
              <a
                href="mailto:linetmukai9@gmail.com"
                className="block hover:text-cyan-400 transition-colors"
              >
                linetmukai9@gmail.com
              </a>
              <a
                href="tel:+254706711354"
                className="block hover:text-cyan-400 transition-colors"
              >
                +254 706711354
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © 2024 Linet Mukai Mutuku. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
