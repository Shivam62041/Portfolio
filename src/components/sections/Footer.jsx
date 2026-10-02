import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold font-mono text-white">
            <span className="text-primary">&lt;</span>
            SJ
            <span className="text-primary">/&gt;</span>
          </div>
          
          <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
            Built with <FiHeart className="text-red-500 mx-1" /> by Shivam Kumar Jha &copy; {currentYear}
          </p>
          
          <div className="flex gap-4 text-sm font-mono text-gray-500">
            <span>React</span>
            <span>&bull;</span>
            <span>Tailwind</span>
            <span>&bull;</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
