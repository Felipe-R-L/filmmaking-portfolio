import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface CodeTerminalProps {
  code: string[];
  title?: string;
  delay?: number;
}

export function CodeTerminal({ code, title = 'TERMINAL', delay = 0 }: CodeTerminalProps) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleLines((prev) => {
          if (prev >= code.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 80);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [code.length, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="relative bg-[#0E0E0E] overflow-hidden group border border-[#353534]"
      style={{
        boxShadow: '0 0 40px rgba(176, 27, 46, 0.05), inset 0 0 20px rgba(0, 0, 0, 0.8)',
      }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#131313] border-b border-[#353534]">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-[#B01B2E] rounded-none animate-pulse"></div>
          <span className="text-[10px] font-['Space_Mono'] text-[#888888] tracking-widest uppercase">
            {title}
          </span>
        </div>
        <span className="text-[10px] font-['Space_Mono'] text-[#B3CDB8] opacity-50">
          SECURE_CON // 204.1
        </span>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-['Space_Mono'] text-xs sm:text-sm leading-relaxed overflow-x-auto">
        {code.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="text-[#E5E2E1] whitespace-pre"
          >
            <span className="text-[#353534] mr-6 select-none inline-block w-4 text-right">
              {index + 1}
            </span>
            <span className="opacity-80 hover:opacity-100 transition-opacity">
              {line}
            </span>
          </motion.div>
        ))}
        {visibleLines < code.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-2.5 h-4 bg-[#B01B2E] ml-1 align-middle"
          />
        )}
      </div>

      {/* Scan line effect */}
      <motion.div
        animate={{ y: ['-10%', '110%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-[#B01B2E]/5 to-transparent pointer-events-none"
      />
    </motion.div>
  );
}