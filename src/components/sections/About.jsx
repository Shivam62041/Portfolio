import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiCode, FiCpu, FiGlobe, FiDatabase } from 'react-icons/fi';

const features = [
  {
    icon: <FiCpu className="text-3xl text-primary" />,
    title: 'AI/ML Enthusiast',
    description: 'Passionate about machine learning, predictive analytics, and building intelligent systems.'
  },
  {
    icon: <FiCode className="text-3xl text-secondary" />,
    title: 'Full Stack Development',
    description: 'Experience building scalable web applications using React, Node.js, and modern frameworks.'
  },
  {
    icon: <FiDatabase className="text-3xl text-primary" />,
    title: 'Data-Driven Solutions',
    description: 'Skilled in data analysis, visualization, and managing robust database architectures.'
  },
  {
    icon: <FiGlobe className="text-3xl text-secondary" />,
    title: 'Continuous Learner',
    description: 'Always adapting to new technologies and striving to solve complex, real-world problems.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="About Me" subtitle="A brief introduction to who I am and what I do." />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Image/Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glass-card p-2 group">
              {/* Using a placeholder for now, user can replace with their photo */}
              <img 
                src="https://github.com/Shivam62041.png" 
                alt="Shivam Kumar Jha" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent rounded-xl pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 text-center border-l-4 border-l-primary">
                  <p className="font-bold text-lg">Shivam Kumar Jha</p>
                  <p className="text-primary text-sm font-mono mt-1">MCA (AI & ML) Graduate</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full mix-blend-screen" />
          </motion.div>

          {/* Right: Text & Features */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Bridging <span className="text-gradient">Intelligence</span> and <span className="text-gradient">Development</span>
            </h3>
            
            <div className="space-y-4 text-gray-400 mb-8 leading-relaxed">
              <p>
                Hello! I'm Shivam Kumar Jha, a results-driven Java Full Stack Developer who recently completed my Master of Computer Applications (MCA) with a specialization in Artificial Intelligence and Machine Learning at Uttaranchal University, Dehradun (CGPA: 7.27).
              </p>
              <p>
                I have hands-on experience building production-grade web applications using Java, Spring Boot, React, REST APIs, and MySQL. I am skilled in OOP, Data Structures & Algorithms (DSA), and Agile/Scrum. My objective is to contribute to scalable, enterprise-grade solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass-card p-5 group hover:border-primary/50 transition-colors"
                >
                  <div className="mb-4 p-3 bg-darker inline-block rounded-lg group-hover:shadow-neon-primary transition-shadow">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
