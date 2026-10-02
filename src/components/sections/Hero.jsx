import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ["#00f0ff", "#8a2be2"] },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="w-full h-full" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-mono text-lg mb-4"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
          >
            Shivam Kumar Jha.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-6 min-h-[80px] md:min-h-[120px]"
          >
            I am a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              <Typewriter
                words={[
                  'Java Full Stack Developer.',
                  'AI/ML Enthusiast.',
                  'Spring Boot Developer.',
                  'React & REST API Developer.'
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Results-driven Java Full Stack Developer with hands-on experience building production-grade web applications using Java, Spring Boot, React, and MySQL. Recently completed MCA with AI/ML specialization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects <FiArrowRight />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
              Download Resume <FiDownload />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-500 text-sm tracking-widest mb-2 font-mono">SCROLL</span>
        <div className="w-1 h-16 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            animate={{ y: [0, 64, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-gradient-to-b from-primary to-secondary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
