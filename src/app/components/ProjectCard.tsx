import { CodeTerminal } from './CodeTerminal';
import { Terminal, Database } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import BorderGlow from './BorderGlow';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  scene: string;
  tech: string[];
  code: string[];
  index: number;
}

export function ProjectCard({ title, subtitle, scene, tech, code, index }: ProjectCardProps) {
  return (
    <div className="relative w-[80vw] max-w-5xl shrink-0 flex flex-col group self-stretch overflow-visible">
      {/* Physical overlap header block */}
      <div className="absolute -top-3 z-30 -left-2 md:-left-4">
        <div className="bg-[#B01B2E] text-white px-4 py-1.5 font-['Space_Mono'] text-[10px] sm:text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 shadow-[0_0_20px_rgba(176,27,46,0.3)] border border-[#B01B2E]/50">
          <span className="w-1.5 h-1.5 rounded-none bg-white animate-pulse"></span>
          REC / {scene}
        </div>
      </div>

      {/* Main Content Module */}
      <BorderGlow glowRadius={80} glowIntensity={1.5} edgeSensitivity={50} className="flex-1 z-10 flex">
        <SpotlightCard className="h-full w-full bg-[#1A1A1A] relative transition-colors duration-500 hover:bg-[#1C1C1C] flex flex-col" spotlightColor="rgba(176, 27, 46, 0.15)">
        <div className="p-6 md:p-8 lg:p-10 relative overflow-hidden flex-1 flex flex-col min-h-0">

          {/* Subtle Bordeaux blur in background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B01B2E]/5 blur-[100px] pointer-events-none group-hover:bg-[#B01B2E]/10 transition-colors duration-1000"></div>

          {/* Title & Subtitle */}
          <h3 className="font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#E5E2E1] tracking-tighter mb-2 uppercase leading-none shrink-0">
            {title}
          </h3>
          <p className="font-['Noto_Serif'] text-base md:text-lg text-[#B6AEA9] mb-6 max-w-2xl leading-relaxed italic shrink-0">
            "{subtitle}"
          </p>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-6 items-start flex-1 min-h-0">

            {/* Technical Specifications Container */}
            <div className="lg:col-span-5 flex flex-col gap-4 relative z-10">
              <div className="bg-[#0E0E0E] p-4 text-sm border-l-2 border-[#B3CDB8]/30 shadow-2xl relative">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#B3CDB8]/50"></div>

                <div className="flex items-center gap-2 mb-3 text-[#D2E0D4] font-['Space_Mono'] uppercase text-[10px] tracking-[0.2em]">
                  <Database size={12} /> System Components
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {tech.map((item) => (
                    <span
                      key={item}
                      className="font-['Space_Mono'] text-[#E5E2E1] bg-[#353534]/50 border border-[#353534] px-2.5 py-1 text-[10px] uppercase tracking-wider hover:bg-[#B01B2E]/20 hover:border-[#B01B2E]/50 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <BorderGlow className="self-start">
                <button className="w-full bg-transparent text-[#E5E2E1] font-['Space_Grotesk'] font-medium uppercase tracking-wider text-sm py-3 px-6 border border-[#353534] hover:bg-[#E5E2E1] hover:text-[#131313] transition-all duration-300 relative overflow-hidden group/btn">
                  <span className="relative z-10 flex items-center gap-2">
                    Execute Case Study <Terminal size={14} />
                  </span>
                  <div className="absolute inset-0 bg-[#E5E2E1] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                </button>
              </BorderGlow>
            </div>

            {/* Code Visualization block */}
            <div className="lg:col-span-7 relative z-10 w-full min-h-0 flex-1">
              {/* Glassmorphic underlay */}
              <div className="absolute -inset-4 bg-[#0E0E0E]/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="relative h-full bg-[#0E0E0E] shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-1 overflow-hidden">
                <CodeTerminal code={code} title={`${title.toLowerCase().replace(/ /g, '_')}.ts`} delay={300} />
              </div>
            </div>

          </div>
        </div>

        {/* Ambient tonal shift on hover */}
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#B01B2E]/0 via-[#B01B2E]/30 to-[#B01B2E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </SpotlightCard>
      </BorderGlow>
    </div>
  );
}