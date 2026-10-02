import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const skillCategories = [
  {
    title: 'Languages & Core',
    skills: [
      { name: 'Java / TypeScript / Python', level: 90 },
      { name: 'JavaScript (ES6+) / SQL', level: 85 },
      { name: 'HTML5 & CSS3', level: 90 },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot / Security / MVC', level: 90 },
      { name: 'REST APIs / DTOs / JWT / RBAC', level: 90 },
      { name: 'Hibernate / JPA / Maven', level: 85 },
      { name: 'Node.js / Express.js', level: 75 },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js / Context API / Axios', level: 85 },
      { name: 'Tailwind CSS / Bootstrap', level: 85 },
      { name: 'React Router / Recharts', level: 80 },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL / PostgreSQL', level: 85 },
      { name: 'MongoDB / Firebase', level: 80 },
    ]
  },
  {
    title: 'Testing, DevOps & Tools',
    skills: [
      { name: 'Git / GitHub Actions (CI/CD)', level: 90 },
      { name: 'JUnit 5 / Mockito / Swagger', level: 80 },
      { name: 'Docker / AWS / Vercel', level: 75 },
    ]
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'OOP & DSA', level: 85 },
      { name: 'MVC / CRUD / DBMS', level: 85 },
      { name: 'Agile/Scrum', level: 90 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-darker/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with to bring ideas to life." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-gray-800 pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-mono text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-secondary relative"
                      >
                        {/* Glow effect on the bar */}
                        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
