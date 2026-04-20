import { motion, useScroll, useTransform } from 'motion/react';

export function HeroSection() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 800], ['0%', '15%']);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 0.85]);
  const blurFilter = useTransform(scrollY, [0, 420, 880], ['blur(0px)', 'blur(2.5px)', 'blur(0px)']);

  return (
    <>
      <div className="h-screen w-full relative pointer-events-none"></div>
      <motion.div style={{ opacity, filter: blurFilter }} className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden pointer-events-none z-[2]">

        <motion.div style={{ y, scale }} className="relative z-20 text-center px-8 max-w-7xl">
          {/* Timecode */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-12 px-3 py-1 border border-neutral-800 bg-black/80"
          >
            <span className="font-['IBM_Plex_Mono'] text-neutral-300 text-xs tracking-[0.25em]">
              00:00:01:00
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <h1
              className="font-['Inter'] text-7xl md:text-8xl lg:text-9xl tracking-tight relative inline-block"
              style={{
                fontWeight: 900,
                color: '#e5e5e5',
              }}
            >
              FELIPE R. LEONE
            </h1>
          </motion.div>

          {/* Main profession title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mb-16 overflow-visible"
          >
            <h2
              className="font-['Space_Grotesk'] text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight font-bold text-[#d6d0ca]"
            >
              SOFTWARE DEVELOPER
            </h2>

            {/* Minimal frame corners */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-neutral-700"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t border-r border-neutral-700"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b border-l border-neutral-700"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-neutral-700"></div>
          </motion.div>

          {/* Secondary titles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {['TECHNICAL ARCHITECT', 'CODE DIRECTOR', 'DIGITAL CRAFTSMAN'].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="px-3 py-1 border border-neutral-600/60 bg-black/35"
              >
                <span className="font-['IBM_Plex_Mono'] text-xs tracking-[0.15em] text-neutral-200">
                  {title}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="font-['IBM_Plex_Mono'] text-xs text-neutral-200 tracking-widest">
              SCROLL
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5 border border-neutral-200/80 border-t-0 border-l-0 rotate-45"
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
