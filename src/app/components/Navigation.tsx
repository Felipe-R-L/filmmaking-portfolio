import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['HOME', 'PROJECTS', 'SKILLS', 'CONTACT'];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-b border-neutral-800' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-['Bebas_Neue'] text-2xl tracking-wider cursor-pointer"
            >
              <span className="text-white">FL</span>
              <span className="text-[#00d9ff]">.</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(index)}
                  whileHover={{ y: -2 }}
                  className="font-['Space_Mono'] text-xs text-neutral-400 hover:text-[#00d9ff] tracking-[0.2em] transition-colors relative group"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00d9ff] group-hover:w-full transition-all duration-300"></div>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 border border-neutral-700 bg-black/50 flex items-center justify-center"
            >
              {isOpen ? (
                <X className="text-[#00d9ff]" size={20} />
              ) : (
                <Menu className="text-[#00d9ff]" size={20} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 bottom-0 w-full md:hidden bg-black/95 backdrop-blur-lg z-40 border-l border-neutral-800"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(index)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
              transition={{ delay: index * 0.1 }}
              className="font-['Bebas_Neue'] text-4xl text-neutral-400 hover:text-[#00d9ff] tracking-wider transition-colors"
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
