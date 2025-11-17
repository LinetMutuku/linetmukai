import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, GitlabIcon as Gitlab, MapPin, Copy, Check } from 'lucide-react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { copied, copy } = useCopyToClipboard();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'linetmukai9@gmail.com',
      href: 'mailto:linetmukai9@gmail.com',
      copyable: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 706711354',
      href: 'tel:+254706711354',
      copyable: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null,
      copyable: false,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@LinetMutuku',
      href: 'https://github.com/LinetMutuku',
      gradient: 'from-slate-500 to-slate-700',
    },
    {
      icon: Gitlab,
      label: 'GitLab',
      value: '@linetmukai9',
      href: 'https://gitlab.com/linetmukai9',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25" />
              <div className="relative bg-slate-900 p-8 rounded-lg border border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="group flex items-center justify-between p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-white hover:text-cyan-400 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                      {item.copyable && (
                        <motion.button
                          onClick={() => copy(item.value, `${item.label} copied!`)}
                          className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`Copy ${item.label}`}
                        >
                          {copied ? (
                            <Check className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <Copy className="w-5 h-5 text-slate-400" />
                          )}
                        </motion.button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25" />
              <div className="relative bg-slate-900 p-8 rounded-lg border border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>

                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="group relative block"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.gradient} rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity`} />
                      <div className="relative flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg group-hover:bg-slate-800 transition-all">
                        <div className={`p-3 bg-gradient-to-r ${social.gradient} rounded-lg`}>
                          <social.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">{social.label}</p>
                          <p className="text-white group-hover:text-cyan-400 transition-colors">
                            {social.value}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg"
                >
                  <p className="text-slate-300 text-center leading-relaxed">
                    <span className="text-cyan-400 font-semibold">Open to opportunities!</span>
                    <br />
                    Looking for a passionate frontend developer who delivers exceptional results?
                    Let's connect and build something great together.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="mailto:linetmukai9@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white text-lg overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Send Me a Message</span>
            <Mail className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
