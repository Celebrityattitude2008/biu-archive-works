import { useState, useEffect } from 'react';

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="size-full flex items-center justify-center bg-[#0f172a] relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3f19e6] rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed] rounded-full blur-[120px] opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="animate-float">
          <VoxelText text="BIU" delay={0} />
          <VoxelText text="ARCHIVE" delay={300} />
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#7c3aed] animate-bounce-dot" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#7c3aed] animate-bounce-dot" style={{ animationDelay: '0.15s' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#7c3aed] animate-bounce-dot" style={{ animationDelay: '0.3s' }}></div>
          </div>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-[#1e293b] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#3f19e6] via-[#7c3aed] to-[#a78bfa] rounded-full transition-all duration-100 ease-linear"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 10px rgba(124, 58, 237, 0.5)',
              }}
            ></div>
          </div>

          {/* Percentage */}
          <div className="text-[#94a3b8] text-sm tabular-nums">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}

function VoxelText({ text, delay }: { text: string; delay: number }) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setIsComplete(false);
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleChars((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            setIsComplete(true);
            return prev;
          }
          return prev + 1;
        });
      }, 80);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text.length, delay, resetKey]);

  useEffect(() => {
    const resetInterval = setInterval(() => {
      setVisibleChars(0);
      setResetKey((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(resetInterval);
  }, []);

  const layers = [
    { color: '#1a0933', offset: 12 },
    { color: '#250d47', offset: 10 },
    { color: '#2f115a', offset: 8 },
    { color: '#3f19e6', offset: 6 },
    { color: '#5a2beb', offset: 4 },
    { color: '#6c3aed', offset: 2 },
    { color: '#7c3aed', offset: 1 },
    { color: '#8b5cf6', offset: 0 }, // front face
  ];

  const displayText = text.split('').map((char, index) => (
    <span
      key={index}
      className="inline-block"
      style={{
        opacity: index < visibleChars ? 1 : 0,
        transform: index < visibleChars ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(10px)',
        filter: index < visibleChars ? 'blur(0px)' : 'blur(4px)',
        transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.2s ease-out',
      }}
    >
      {char}
    </span>
  ));

  const fontSize = typeof window !== 'undefined' && window.innerWidth < 640 ? '64px' : '120px';

  return (
    <div className="relative select-none">
      {layers.map((layer, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 font-black tracking-tighter"
          style={{
            fontSize,
            fontFamily: '"Courier New", monospace',
            color: layer.color,
            transform: `translate(${layer.offset}px, ${layer.offset}px)`,
            textShadow: index === 0
              ? '2px 2px 8px rgba(0,0,0,0.6)'
              : '1px 1px 2px rgba(0,0,0,0.3)',
            letterSpacing: '-0.05em',
            lineHeight: '1',
            fontWeight: '900',
            WebkitTextStroke: `${index === 0 ? '2' : '1'}px rgba(0,0,0,${0.3 - index * 0.03})`,
            opacity: 1 - index * 0.05,
          }}
        >
          {displayText}
        </div>
      ))}
      {/* Front layer with enhanced glow */}
      <div
        className="relative font-black tracking-tighter"
        style={{
          fontSize,
          fontFamily: '"Courier New", monospace',
          color: '#a78bfa',
          letterSpacing: '-0.05em',
          lineHeight: '1',
          fontWeight: '900',
          WebkitTextStroke: '1px rgba(0,0,0,0.4)',
          textShadow: isComplete
            ? `
              inset 0 -3px 0 rgba(0,0,0,0.3),
              inset 0 3px 0 rgba(255,255,255,0.15),
              0 0 40px rgba(124,58,237,0.8),
              0 0 80px rgba(124,58,237,0.4),
              0 4px 20px rgba(0,0,0,0.5)
            `
            : `
              inset 0 -2px 0 rgba(0,0,0,0.2),
              inset 0 2px 0 rgba(255,255,255,0.1),
              0 0 30px rgba(124,58,237,0.6),
              0 4px 15px rgba(0,0,0,0.4)
            `,
          transition: 'text-shadow 0.5s ease-out',
        }}
      >
        {displayText}
      </div>
    </div>
  );
}