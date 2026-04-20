import { motion, useMotionTemplate, useTransform, type MotionValue } from 'motion/react';

interface DepthTitleProps {
  text: string;
  progress: MotionValue<number>;
  as?: 'h1' | 'h2' | 'div';
  className?: string;
  letterClassName?: string;
  perspective?: number;
  depth?: number;
  spread?: number;
  trailLayers?: number;
  trailSpacing?: number;
  trailOpacity?: number;
}

interface DepthLetterProps {
  character: string;
  index: number;
  centerIndex: number;
  progress: MotionValue<number>;
  className?: string;
  depth: number;
  spread: number;
  trailLayers: number;
  trailSpacing: number;
  trailOpacity: number;
}

function DepthLetter({
  character,
  index,
  centerIndex,
  progress,
  className,
  depth,
  spread,
  trailLayers,
  trailSpacing,
  trailOpacity,
}: DepthLetterProps) {
  if (character === ' ') {
    return <span aria-hidden className="inline-block w-[0.28em] sm:w-[0.34em]" />;
  }

  const offset = index - centerIndex;
  const distance = Math.abs(offset);
  const direction = offset === 0 ? (index % 2 === 0 ? -1 : 1) : Math.sign(offset);
  const trailIndices = Array.from({ length: trailLayers }, (_, layerIndex) => layerIndex);

  const x = useTransform(progress, [0, 0.18, 0.6, 1], [0, direction * (spread * 0.06 + distance * 1.5), direction * (spread * 0.42 + distance * 6), direction * (spread + distance * 13)]);
  const y = useTransform(progress, [0, 0.64, 1], [0, -distance * 1.2, -distance * 5.5]);
  const z = useTransform(progress, [0, 0.16, 0.58, 1], [0, 120 + distance * 18, depth * 0.7 + distance * 120, depth * 1.85 + distance * 220]);
  const rotateX = useTransform(progress, [0, 0.72, 1], [0, -4 - distance * 0.35, -12 - distance * 1.2]);
  const rotateY = useTransform(progress, [0, 0.32, 0.76, 1], [0, direction * (4 + distance * 0.35), direction * (14 + distance * 1.8), direction * (22 + distance * 2.6)]);
  const scale = useTransform(progress, [0, 0.7, 1], [1, 1.04, 1.22]);
  const opacity = useTransform(progress, [0, 0.93, 1], [1, 1, 0.35]);
  const blurAmount = useTransform(progress, [0, 0.9, 1], [0, 0.3, 2.8]);
  const filter = useMotionTemplate`blur(${blurAmount}px)`;
  const transform = useMotionTemplate`translate3d(${x}px, ${y}px, ${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

  return (
    <motion.span
      aria-hidden
      className={`relative inline-block ${className ?? ''}`}
      style={{
        transform,
        opacity,
        filter,
        transformStyle: 'preserve-3d',
        textShadow: '0 1px 0 rgba(255,255,255,0.12), 0 3px 0 rgba(255,255,255,0.07), 0 16px 40px rgba(0,0,0,0.5)',
        willChange: 'transform, opacity, filter',
      }}
    >
      {trailIndices.map((layerIndex) => (
        <span
          key={`${character}-${index}-trail-${layerIndex}`}
          aria-hidden
          className="absolute inset-0"
          style={{
            transform: `translateZ(-${trailSpacing * (layerIndex + 1)}px)`,
            transformStyle: 'preserve-3d',
            opacity: Math.max(0, trailOpacity - layerIndex * (trailOpacity / (trailLayers + 1))),
            color: 'inherit',
            textShadow: '0 0 12px rgba(229,226,225,0.08)',
            filter: `blur(${Math.min(1.6, layerIndex * 0.12)}px)`,
          }}
        >
          {character}
        </span>
      ))}
      <span className="relative z-10">{character}</span>
    </motion.span>
  );
}

export function DepthTitle({
  text,
  progress,
  as = 'div',
  className,
  letterClassName,
  perspective = 1800,
  depth = 800,
  spread = 84,
  trailLayers = 10,
  trailSpacing = 120,
  trailOpacity = 0.15,
}: DepthTitleProps) {
  const HeadingTag = as;
  const characters = text.split('');
  const centerIndex = (characters.length - 1) / 2;

  return (
    <div
      className="relative inline-flex max-w-full justify-center"
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
    >
      <HeadingTag
        aria-label={text}
        className={className}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }}
      >
        {characters.map((character, index) => (
          <DepthLetter
            key={`${character}-${index}`}
            character={character}
            index={index}
            centerIndex={centerIndex}
            progress={progress}
            className={letterClassName}
            depth={depth}
            spread={spread}
            trailLayers={trailLayers}
            trailSpacing={trailSpacing}
            trailOpacity={trailOpacity}
          />
        ))}
      </HeadingTag>
    </div>
  );
}