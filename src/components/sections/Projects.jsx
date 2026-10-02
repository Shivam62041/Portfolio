import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'ShopVerse',
    description: 'Delivered a full-stack e-commerce platform with a 100+ product catalog. Built a React frontend consuming Spring Boot REST APIs. Increased engagement by 35% via an AI recommendation engine and achieved sub-200 ms navigation.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Java', 'Spring Boot', 'React', 'Firebase', 'Docker'],
    github: 'https://github.com/Shivam62041/ShopVerse5',
    demo: '#'
  },
  {
    title: 'Energy Analysis & Forecasting',
    description: 'Reached 87% forecast accuracy on 50,000+ records by building Linear Regression and ARIMA models in Python and Pandas. Shared results through 3 interactive Power BI dashboards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'ARIMA', 'Pandas', 'Power BI'],
    github: '#',
    demo: '#'
  },
  {
    title: 'e-Learning Platform',
    description: 'Secured 12+ REST endpoints with zero unauthorized access using JWT and RBAC. Delivered 8+ user flows across dual-role dashboards. Kept API response under 150 ms and implemented CI/CD with GitHub Actions.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Spring Boot', 'MySQL', 'JWT', 'CI/CD'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Health Tracker Web App',
    description: 'Enabled daily logging of 10+ metric types (steps, calories, sleep) by designing a normalized MySQL schema. Delivered 7-day and 30-day trend views using Recharts components with client-server payload validation.',
    image: 'https://images.unsplash.com/photo-1526506471676-e91024524240?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Spring Boot', 'Hibernate', 'React', 'Recharts'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Featured Projects" subtitle="A selection of my recent work in web development and AI/ML." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                {/* Image */}
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-dark/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a href={project.github} className="p-3 bg-white/10 hover:bg-primary text-white rounded-full transition-colors backdrop-blur-md">
                    <FiGithub size={24} />
                  </a>
                  <a href={project.demo} className="p-3 bg-white/10 hover:bg-secondary text-white rounded-full transition-colors backdrop-blur-md">
                    <FiExternalLink size={24} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1 bg-darker rounded-full text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com/Shivam62041" target="_blank" rel="noreferrer" className="btn-secondary inline-block">
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
