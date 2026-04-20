import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import BorderGlow from './BorderGlow';

const socialLinks = [
  { icon: Github, label: 'GitHub', url: '#', color: '#E5E2E1' },
  { icon: Linkedin, label: 'LinkedIn', url: '#', color: '#888888' },
  { icon: Twitter, label: 'Twitter', url: '#', color: '#888888' },
];

export function ContactSection() {
  return (
    <div className="min-h-screen relative py-32 bg-[#141111] flex items-center overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" /%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-[1px] bg-[#B01B2E]"></div>
                <span className="font-['Space_Mono'] text-[#D53A4A] text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
                  Connection Protocol
                </span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl tracking-tighter text-[#E5E2E1] uppercase font-bold leading-none mb-6">
                Initiate <br />
                <span className="text-[#8A847C] italic font-['Noto_Serif'] font-light">Sequence</span>
              </h2>
              <p className="font-['Noto_Serif'] text-lg text-[#B6AEA9] max-w-md italic leading-relaxed">
                "For inquiries, collaborations, and architectural discussions. Open a direct transmission channel."
              </p>
            </div>

            <div className="space-y-8">
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 border border-[#353534] bg-[#131313] flex items-center justify-center group-hover:border-[#B01B2E] group-hover:bg-[#B01B2E]/10 transition-colors duration-300">
                  <Mail className="text-[#888888] group-hover:text-[#B01B2E] transition-colors" size={20} />
                </div>
                <div>
                  <div className="font-['Space_Mono'] text-[10px] text-[#AEA6A0] tracking-[0.2em] mb-1">
                    PRIMARY CHANNEL
                  </div>
                  <div className="font-['Space_Grotesk'] text-xl text-[#E5E2E1] uppercase tracking-wide group-hover:text-[#B01B2E] transition-colors">
                    hello@felipere.leone
                  </div>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 border border-[#353534] bg-[#131313] flex items-center justify-center group-hover:border-[#B3CDB8] group-hover:bg-[#B3CDB8]/10 transition-colors duration-300">
                  <MapPin className="text-[#888888] group-hover:text-[#B3CDB8] transition-colors" size={20} />
                </div>
                <div>
                  <div className="font-['Space_Mono'] text-[10px] text-[#AEA6A0] tracking-[0.2em] mb-1">
                    PHYSICAL NODE
                  </div>
                  <div className="font-['Space_Grotesk'] text-xl text-[#E5E2E1] uppercase tracking-wide group-hover:text-[#B3CDB8] transition-colors">
                    São Paulo, BR
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    whileHover={{ y: -5 }}
                    className="w-12 h-12 border border-[#353534] bg-[#131313] flex items-center justify-center hover:border-[#E5E2E1] hover:bg-[#353534] transition-colors group"
                  >
                    <Icon size={18} className="text-[#888888] group-hover:text-[#E5E2E1] transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-[#B01B2E]/10 blur-3xl pointer-events-none"></div>
            <BorderGlow 
              glowRadius={80} 
              glowIntensity={1.5}
              edgeSensitivity={50}
              className="shadow-2xl"
            >
              <div className="relative p-8 md:p-12 h-full w-full">
              
              {/* Form Header Terminal style */}
              <div className="flex items-center justify-between border-b border-[#353534] pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#B01B2E] rounded-none animate-pulse"></div>
                  <span className="text-[10px] font-['Space_Mono'] text-[#B6AEA9] tracking-widest uppercase">
                    COM_LINK_ESTABLISHED
                  </span>
                </div>
                <span className="text-[10px] font-['Space_Mono'] text-[#B3CDB8] opacity-50">
                  AWAITING_INPUT
                </span>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="block font-['Space_Mono'] text-[10px] text-[#B6AEA9] tracking-[0.2em]">
                    IDENTIFICATION
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#111111] border-b border-[#4B4642] p-4 font-['Space_Mono'] text-sm text-[#F2EEEA] focus:outline-none focus:border-[#D53A4A] transition-colors placeholder:text-[#6A625D]"
                    placeholder="Enter your name // or alias"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-['Space_Mono'] text-[10px] text-[#B6AEA9] tracking-[0.2em]">
                    RETURN_ADDRESS
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#111111] border-b border-[#4B4642] p-4 font-['Space_Mono'] text-sm text-[#F2EEEA] focus:outline-none focus:border-[#D53A4A] transition-colors placeholder:text-[#6A625D]"
                    placeholder="Enter your email // transmission channel"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-['Space_Mono'] text-[10px] text-[#B6AEA9] tracking-[0.2em]">
                    PAYLOAD
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#111111] border-b border-[#4B4642] p-4 font-['Space_Mono'] text-sm text-[#F2EEEA] focus:outline-none focus:border-[#D53A4A] transition-colors placeholder:text-[#6A625D] resize-none"
                    placeholder="Transmit your message // details here"
                  ></textarea>
                </div>

                <BorderGlow className="mt-4">
                  <button
                    type="submit"
                    className="w-full bg-transparent text-[#E5E2E1] font-['Space_Grotesk'] font-medium uppercase tracking-wider text-sm py-5 px-8 border border-[#353534] hover:bg-[#E5E2E1] hover:text-[#131313] transition-all duration-300 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Transmit Data 
                    </span>
                    <div className="absolute inset-0 bg-[#E5E2E1] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  </button>
                </BorderGlow>
              </form>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </div>
  );
}