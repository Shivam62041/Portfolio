import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiAward } from 'react-icons/fi';

const certifications = [
  {
    title: 'GenAI-Powered Data Analytics Job Simulation',
    issuer: 'Tata (Forage)',
    date: 'Sep 2025',
    description: 'Completed tasks in EDA, AI-driven risk profiling, delinquency prediction modeling, and AI-powered collections strategy design.'
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte (Forage)',
    date: 'Aug 2025',
    description: 'Completed practical assessments in data analysis, data visualization, and forensic technology use cases.'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative bg-darker/30">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <SectionHeading title="Certifications & Achievements" subtitle="Continuous learning and professional development." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col h-full hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <FiAward size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <div className="flex justify-between items-center text-sm font-mono mb-4">
                <span className="text-secondary">{cert.issuer}</span>
                <span className="text-gray-500">{cert.date}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
