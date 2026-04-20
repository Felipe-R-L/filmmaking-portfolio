import { motion } from 'motion/react';
import { Code2, Database, Layers, Zap, Globe, Lock } from 'lucide-react';
import ChromaGrid from './ChromaGrid';
import BorderGlow from './BorderGlow';

const skills = [
  {
    category: 'Languages',
    icon: Globe,
    items: ['Portuguese: Native', 'English: Fluent'],
    color: '#8A847C',
  },
  {
    category: 'FRONTEND',
    icon: Code2,
    items: ['React', 'TypeScript', 'Angular', 'Next.js', 'Tailwind CSS'],
    color: '#F1ECE8',
  },
  {
    category: 'BACKEND',
    icon: Database,
    items: ['Node.js', 'Java', 'PostgreSQL', 'TimescaleDB', 'Redis', 'NestJs'],
    color: '#B5C0C8',
  },
  {
    category: 'DEVOPS',
    icon: Layers,
    items: ['Docker', 'GCP', 'CI/CD', 'Nginx'],
    color: '#C4DDC8',
  },
  {
    category: 'ARCHITECTURE',
    icon: Zap,
    items: ['Microservices', 'REST APIs', 'WebSockets', 'Event-Driven', 'DDD'],
    color: '#D53A4A',
  },
  {
    category: 'SECURITY',
    icon: Lock,
    items: ['OAuth', 'JWT', 'Encryption'],
    color: '#C9C1B7',
  },
];

export function SkillsSection() {
  return (
    <div className="min-h-screen relative py-32 bg-[#161313] flex items-center overflow-hidden">
      {/* Background with Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" /%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 xl:px-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24 relative"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-[1px] bg-[#B3CDB8]"></div>
            <span className="font-['Space_Mono'] text-[#B3CDB8] text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
              Technical Capabilities
            </span>
          </div>
          
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl tracking-tighter text-[#E5E2E1] uppercase font-bold leading-none mb-6">
            Skill <span className="text-[#353534] italic font-['Noto_Serif'] font-light">Matrix</span>
          </h2>
          
          <p className="font-['Noto_Serif'] text-lg text-[#B6AEA9] max-w-xl italic leading-relaxed">
            "A structural breakdown of the systems and technologies that power the cinematic digital experiences."
          </p>
        </motion.div>

        {/* Skills grid */}
        <ChromaGrid columns={3} rows={2}>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isRed = skill.color === '#B01B2E';
            return (
              <BorderGlow key={skill.category} glowRadius={80} glowIntensity={1.5} edgeSensitivity={50} className="h-full w-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-[#0E0E0E] p-8 md:p-10 group overflow-hidden border border-[#353534]/50 h-full w-full"
                >
                {/* Subtle hover blur */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${skill.color}15 0%, transparent 60%)`,
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div
                          className={`w-12 h-12 flex items-center justify-center border-l-2 ${isRed ? 'border-[#B01B2E] bg-[#B01B2E]/10' : 'border-[#5B5550] bg-[#131313]'}`}
                    >
                      <Icon size={20} className={isRed ? 'text-[#D53A4A]' : 'text-[#C8C1BC]'} />
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold tracking-tight uppercase text-[#E5E2E1]">
                      {skill.category}
                    </h3>
                  </div>

                  <div className="space-y-4 flex-1">
                    {skill.items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-center gap-4"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-none ${isRed ? 'bg-[#D53A4A]' : 'bg-[#8A847C]'}`}
                        ></div>
                        <span className="font-['Space_Mono'] text-xs sm:text-sm text-[#C8C1BC] uppercase tracking-wider group-hover:text-[#F2EEEA] transition-colors duration-300">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                  <div className={`absolute top-4 right-4 w-2 h-2 border-t border-r ${isRed ? 'border-[#D53A4A]' : 'border-[#8A847C]'}`}></div>
                </div>
                </motion.div>
              </BorderGlow>
            );
          })}
        </ChromaGrid>
      </div>

      {/* Ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[560px] h-[560px] bg-[#B01B2E]/7 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[560px] h-[560px] bg-[#B3CDB8]/7 rounded-full blur-[150px] pointer-events-none"></div>
    </div>
  );
}