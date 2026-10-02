import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-darker/80">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together." />

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              I'm currently looking for new opportunities as an AI/ML Engineer or Full Stack Developer. My inbox is always open.
            </p>

            <a href="mailto:shivamjha8077@gmail.com" className="flex items-center gap-4 group p-4 glass-card hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <FiMail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium group-hover:text-primary transition-colors">shivamjha8077@gmail.com</p>
              </div>
            </a>

            <a href="tel:+916204410431" className="flex items-center gap-4 group p-4 glass-card hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <FiPhone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-medium group-hover:text-primary transition-colors">+91 62044 10431</p>
              </div>
            </a>

            <div className="flex gap-4 mt-8">
              <a href="https://github.com/Shivam62041" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shivamjha123/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-secondary hover:border-secondary/50 transition-all hover:-translate-y-1">
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="glass-card p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
              
              <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400 font-medium">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Opportunity / Collaboration"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows="5"
                    className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-none"
                    placeholder="Hello Shivam, I would like to discuss..."
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 group">
                  Send Message
                  <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
