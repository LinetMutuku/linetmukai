import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
    >
      <div className="relative">
        <motion.div
          className="w-20 h-20 border-4 border-slate-800 border-t-cyan-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        >
          <span className="text-cyan-400 font-semibold">Loading...</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
