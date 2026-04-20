import { useEffect, useRef } from 'react';

export function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;
      
      // Ensure minimum size to prevent errors
      canvas.width = Math.max(width, 1);
      canvas.height = Math.max(height, 1);
    };

    setCanvasSize();

    const createNoise = () => {
      if (canvas.width < 1 || canvas.height < 1) return;
      
      try {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const buffer = new Uint32Array(imageData.data.buffer);

        for (let i = 0; i < buffer.length; i++) {
          if (Math.random() < 0.05) {
            const value = Math.random() * 255;
            buffer[i] = (30 << 24) | (value << 16) | (value << 8) | value;
          }
        }

        ctx.putImageData(imageData, 0, 0);
      } catch (error) {
        console.error('FilmGrain error:', error);
      }
    };

    let animationId: number;
    const animate = () => {
      createNoise();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 opacity-[0.08] mix-blend-soft-light"
    />
  );
}