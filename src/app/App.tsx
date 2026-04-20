import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Navigation } from './components/Navigation';
import { FilmGrain } from './components/FilmGrain';
import FloatingLines from './components/FloatingLines';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function App() {
  const { scrollY } = useScroll();
  const heroBackgroundOpacity = useTransform(scrollY, [1800, 2400], [1, 0]);
  const heroBackgroundBlur = useTransform(scrollY, [0, 420, 880], ['blur(0px)', 'blur(3px)', 'blur(0px)']);

  // Lenis smooth scrolling with momentum
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Film grain overlay */}
      <FilmGrain />

      {/* Hero background */}
      <motion.div style={{ opacity: heroBackgroundOpacity, filter: heroBackgroundBlur }} className="fixed inset-0 z-[1]">
        <FloatingLines
          enabledWaves={['top', 'bottom', 'middle']}
          lineCount={10}
          lineDistance={12}
          bendRadius={25.5}
          bendStrength={4}
          interactive
          parallax
          animationSpeed={1.5}
          gradientStart="#d00000"
          gradientMid="#5e4b30"
          gradientEnd="#afaaa4"
          topWavePosition={{ x: 10.0, y: 0.52, rotate: -0.4 }}
          middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0.2 }}
          bottomWavePosition={{ x: 2.0, y: -0.7, rotate: -1 }}
          mixBlendMode="screen"
        />
      </motion.div>

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <section id="home" className="relative z-[2]">
        <HeroSection />
      </section>

      <section id="projects" className="relative z-10">
        <ProjectsSection />
      </section>

      <section id="skills" className="relative z-10">
        <SkillsSection />
      </section>

      <section id="contact" className="relative z-10">
        <ContactSection />
      </section>
    </div>
  );
}
