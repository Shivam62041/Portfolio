import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiBookOpen } from 'react-icons/fi';

const education = [
  {
    degree: 'Master of Computer Applications (MCA) - AI & ML',
    institution: 'Uttaranchal University, Dehradun',
    duration: 'Aug 2024 - Aug 2026',
    description: 'Specialization: Artificial Intelligence & Machine Learning | CGPA: 7.27 / 10'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Bhupendra Narayan Mandal University (BNMU)',
    duration: 'Jul 2021 - Jun 2024',
    description: 'Percentage: 88.4%'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading title="Education History" subtitle="My academic background and qualifications." />

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 relative overflow-hidden group hover:shadow-neon-secondary transition-shadow"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-darker border border-secondary flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <FiBookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                      {item.degree}
                    </h3>
                    <h4 className="text-gray-400 font-medium">{item.institution}</h4>
                  </div>
                </div>
                <div className="md:text-right">
                  <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-mono border border-secondary/20">
                    {item.duration}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-0 md:pl-16">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
