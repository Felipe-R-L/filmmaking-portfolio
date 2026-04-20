import { ProjectCard } from './ProjectCard';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';


const projects = [
  {
    title: 'E-COMMERCE PLATFORM',
    subtitle: 'Full-stack enterprise solution with microservices architecture',
    scene: '001.A',
    tech: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Docker'],
    code: [
      'import { useQuery } from "@apollo/client";',
      'import { ProductGrid } from "./components";',
      '',
      'export function Shop() {',
      '  const { data, loading } = useQuery(GET_PRODUCTS);',
      '  ',
      '  return (',
      '    <ProductGrid products={data?.products} />',
      '  );',
      '}',
    ],
  },
  {
    title: 'REAL-TIME ANALYTICS',
    subtitle: 'Data visualization dashboard with WebSocket integration',
    scene: '002.B',
    tech: ['TypeScript', 'D3.js', 'WebSockets', 'Redis', 'MongoDB'],
    code: [
      'const socket = new WebSocket(WS_URL);',
      '',
      'socket.onmessage = (event) => {',
      '  const data = JSON.parse(event.data);',
      '  updateChart(data.metrics);',
      '};',
      '',
      'function updateChart(metrics: Metrics) {',
      '  // Real-time data processing',
      '}',
    ],
  },
  {
    title: 'AI CONTENT GENERATOR',
    subtitle: 'Machine learning powered content creation tool',
    scene: '003.C',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Tailwind'],
    code: [
      'async function generateContent(prompt: string) {',
      '  const response = await fetch("/api/generate", {',
      '    method: "POST",',
      '    body: JSON.stringify({ prompt }),',
      '  });',
      '  ',
      '  const { content } = await response.json();',
      '  return content;',
      '}',
    ],
  },
  {
    title: 'BLOCKCHAIN EXPLORER',
    subtitle: 'Decentralized application for transaction monitoring',
    scene: '004.D',
    tech: ['Web3.js', 'Solidity', 'Next.js', 'Ethers.js', 'Hardhat'],
    code: [
      'import { ethers } from "ethers";',
      '',
      'const provider = new ethers.JsonRpcProvider();',
      'const contract = new ethers.Contract(',
      '  contractAddress,',
      '  abi,',
      '  provider',
      ');',
      '',
      'const balance = await contract.balanceOf(address);',
    ],
  },
];

/*
 * Animation phases (mapped to scrollYProgress of the 600vh container):
 *
 * Phase 1: 0 → 0.10  — "Expanding Card" entrance (Dark Star Labs style)
 *   - Rounded card appears at bottom center, grows to fill viewport
 *   - Full-screen "film slate" title card visible
 *
 * Phase 2: 0.10 → 0.20 — Slate → Compact header transition
 *   - Big centered title shrinks and slides to compact top bar
 *   - Film strip fades in below
 *
 * Phase 3: 0.20 → 0.90 — Horizontal film strip scroll
 *   - Cards slide left smoothly
 *
 * Phase 4: 0.90 → 1 — Exit buffer (resume normal scroll)
 */

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth - window.innerWidth);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Phase 1: Expanding card entrance (transparent background — stars visible)
  const cardScale = useTransform(scrollYProgress, [0, 0.10], [0.85, 1]);
  const cardBorderRadius = useTransform(scrollYProgress, [0, 0.10], [24, 0]);
  const cardWidth = useTransform(scrollYProgress, [0, 0.10], ['80%', '100%']);

  // Phase 2: Slate title fly-through starts as soon as the card enters frame
  const slateTitleOpacity = useTransform(scrollYProgress, [0, 0.20, 0.24], [1, 1, 0]);
  const slateTitleScale = useTransform(scrollYProgress, [0, 0.22], [1, 1.12]);
  // Completely hide the slate element after fade to prevent ghosting
  const slateDisplay = useTransform(scrollYProgress, (v) => v > 0.245 ? 'none' : 'flex');

  // Solid background rises during the fly-through so the transition feels continuous
  const bgOpacity = useTransform(scrollYProgress, [0.16, 0.24], [0, 1]);

  // Compact header fades in
  const compactHeaderOpacity = useTransform(scrollYProgress, [0.22, 0.27], [0, 1]);

  // Film strip reveals
  const filmStripOpacity = useTransform(scrollYProgress, [0.21, 0.28], [0, 1]);
  const filmStripY = useTransform(scrollYProgress, [0.21, 0.28], [60, 0]);

  // Phase 3: Horizontal scroll (pixel-based)
  const x = useTransform(scrollYProgress, [0.28, 0.92], [0, -trackWidth]);

  return (
    <div ref={containerRef} className="h-[600vh] relative bg-transparent">
      {/* Sticky viewport — the visible frame */}
      <div className="sticky top-20 h-[calc(100vh-5rem)] w-full overflow-hidden flex items-center justify-center">

        {/* Expanding card wrapper */}
        <motion.div
          className="absolute inset-0 flex flex-col"
          style={{
            scale: cardScale,
            borderRadius: cardBorderRadius,
            width: cardWidth,
            margin: '0 auto',
            left: 0,
            right: 0,
            overflow: 'hidden',
          }}
        >
          {/* Animated Background Layer */}
          <motion.div
            className="absolute inset-0 bg-[#1C1C1C] z-0"
            style={{ opacity: bgOpacity }}
          ></motion.div>

          {/* Background Texture overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{ opacity: useTransform(bgOpacity, [0, 1], [0, 0.03]) }}
          >
            <div className="w-full h-full" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
            }}></div>
          </motion.div>

          {/* Background Bordeaux Ambient Glow */}
          <motion.div style={{ opacity: bgOpacity }} className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-[#B01B2E]/10 rounded-full blur-[170px] pointer-events-none mix-blend-screen z-[1]"></motion.div>
          <motion.div style={{ opacity: bgOpacity }} className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#B3CDB8]/8 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-[1]"></motion.div>

          {/* ===== FULL-SCREEN FILM SLATE (Phase 1-2) ===== */}
          <motion.div
            className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
            style={{ opacity: slateTitleOpacity, display: slateDisplay }}
          >
            {/* Film leader countdown aesthetic */}
            <div className="relative z-10 flex items-center gap-6 mb-8">
              <div className="w-20 h-[1px] bg-[#B01B2E]"></div>
              <span className="font-['Space_Mono'] text-[#B3CDB8] text-xs tracking-[0.3em] uppercase font-bold">
                System Directory / Archive
              </span>
              <div className="w-20 h-[1px] bg-[#B01B2E]"></div>
            </div>

            <motion.div className="relative z-10 mb-4" style={{ scale: slateTitleScale }}>
              <h2 className="font-['Space_Grotesk'] text-6xl md:text-8xl lg:text-9xl tracking-tighter text-[#E5E2E1] uppercase font-bold leading-none text-center">
                PROJECT SHOWCASE
              </h2>
            </motion.div>

            <p className="relative z-10 font-['Space_Mono'] text-xs text-[#B0AAA6] leading-relaxed uppercase tracking-widest text-center max-w-md mt-6">
              Vol. 01 / Selected works demonstrating technical depth and aesthetic precision.
            </p>

            {/* Decorative frame corners */}
            <div className="absolute top-[15%] left-[15%] w-12 h-12 border-t border-l border-[#353534]/50"></div>
            <div className="absolute top-[15%] right-[15%] w-12 h-12 border-t border-r border-[#353534]/50"></div>
            <div className="absolute bottom-[15%] left-[15%] w-12 h-12 border-b border-l border-[#353534]/50"></div>
            <div className="absolute bottom-[15%] right-[15%] w-12 h-12 border-b border-r border-[#353534]/50"></div>
          </motion.div>

          {/* ===== COMPACT HEADER + FILM STRIP (Phase 2-3) ===== */}
          <div className="relative z-10 w-full flex flex-col h-full">

            {/* Compact single-line header */}
            <motion.div
              className="relative px-6 md:px-12 xl:px-24 py-3 shrink-0 border-b border-[#353534]/50"
              style={{ opacity: compactHeaderOpacity }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-[#B01B2E]"></div>
                  <span className="font-['Space_Mono'] text-[#B3CDB8] text-[10px] tracking-[0.3em] uppercase font-bold">
                    Archive
                  </span>
                  <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl tracking-tighter text-[#E5E2E1] uppercase font-bold leading-none">
                    Project Showcase
                  </h2>
                </div>
                <p className="font-['Space_Mono'] text-[10px] text-[#B0AAA6] uppercase tracking-widest hidden md:block">
                  Vol. 01 / Selected works
                </p>
              </div>
            </motion.div>

            {/* Horizontal Film Strip */}
            <motion.div
              className="flex-1 flex flex-col min-h-0 relative"
              style={{ opacity: filmStripOpacity, y: filmStripY }}
            >
              {/* Top Film Sprockets */}
              <div className="w-full h-6 bg-[#0E0E0E] flex items-center shrink-0 border-b border-[#353534]/30 z-20">
                <div className="w-full h-2.5" style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, #1A1A1A, #1A1A1A 14px, transparent 14px, transparent 28px)'
                }}></div>
              </div>

              {/* Projects Track — overflow visible so REC labels aren't clipped */}
              <div className="flex-1 flex items-stretch min-h-0 overflow-visible">
                <motion.div
                  ref={trackRef}
                  style={{ x }}
                  className="flex gap-12 px-[8vw] items-stretch h-full pt-6 pb-4"
                >
                  {projects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} index={index} />
                  ))}
                </motion.div>
              </div>

              {/* Bottom Film Sprockets */}
              <div className="w-full h-6 bg-[#0E0E0E] flex items-center shrink-0 border-t border-[#353534]/30 z-20">
                <div className="w-full h-2.5" style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, #1A1A1A, #1A1A1A 14px, transparent 14px, transparent 28px)'
                }}></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
