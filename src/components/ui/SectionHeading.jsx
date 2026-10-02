import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-4"
      >
        <span className="text-white">{title.split(' ')[0]} </span>
        <span className="text-gradient">{title.split(' ').slice(1).join(' ')}</span>
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 max-w-2xl text-sm md:text-base"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full origin-left"
      />
    </div>
  );
};

export default SectionHeading;
