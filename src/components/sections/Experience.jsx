import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    role: 'Java Developer Intern',
    company: 'CodSoft | Remote',
    duration: 'Jun 2025 - Jul 2025',
    description: [
      'Delivered 3 Java applications, all approved in mentor code review, by applying OOP, exception handling, file I/O, and modular design with Git/GitHub version control.'
    ]
  },
  {
    role: 'Software Development Intern (Java & DSA)',
    company: 'HitBullseye',
    duration: 'Jun 2025 - Jul 2025',
    description: [
      'Improved timed problem-solving speed by 40% by solving 50+ DSA problems (arrays, stacks, recursion) in a 4-week proctored curriculum.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-darker/50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading title="Work Experience" subtitle="My professional journey and internships." />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-darker border-2 border-primary shadow-neon-primary z-10">
                <FiBriefcase className="text-primary text-sm" />
              </div>

              {/* Content Box */}
              <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                <div className="glass-card p-6 relative group hover:border-primary/50 transition-colors">
                  <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-mono mb-3 border border-primary/20">
                    {exp.duration}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                  
                  <ul className={`space-y-2 text-sm text-gray-400 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'} list-none`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="relative">
                        <span className={`absolute top-2 w-1.5 h-1.5 rounded-full bg-secondary ${index % 2 === 0 ? '-left-4' : 'md:-right-4 -left-4'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
