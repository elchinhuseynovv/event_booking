import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'beat' | 'spark' | 'glow' | 'laser';
  life: number;
  maxLife: number;
  angle: number;
  speed: number;
  pulse: number;
}

interface LaserBeam {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
  color: string;
  width: number;
  life: number;
  maxLife: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const laserBeamsRef = useRef<LaserBeam[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      
      // DJ/Rave color palette - neon and vibrant colors
      const colors = [
        'rgba(255, 0, 255, 0.8)',     // Neon magenta
        'rgba(0, 255, 255, 0.8)',     // Cyan
        'rgba(255, 255, 0, 0.8)',     // Electric yellow
        'rgba(255, 0, 128, 0.8)',     // Hot pink
        'rgba(128, 0, 255, 0.8)',     // Purple
        'rgba(0, 255, 128, 0.8)',     // Neon green
        'rgba(255, 128, 0, 0.8)',     // Orange
        'rgba(255, 255, 255, 0.6)',   // White strobe
      ];

      const particleTypes: Particle['type'][] = ['beat', 'spark', 'glow', 'laser'];

      for (let i = 0; i < particleCount; i++) {
        const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        const maxLife = type === 'beat' ? 120 : type === 'spark' ? 60 : 180;
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (type === 'spark' ? 3 : 1),
          vy: (Math.random() - 0.5) * (type === 'spark' ? 3 : 1),
          size: type === 'beat' ? Math.random() * 6 + 2 : Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          type,
          life: maxLife,
          maxLife,
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 2 + 0.5,
          pulse: Math.random() * Math.PI * 2
        });
      }
      
      particlesRef.current = particles;
    };

    const createLaserBeam = () => {
      if (laserBeamsRef.current.length > 8) return; // Limit laser beams
      
      const colors = [
        'rgba(255, 0, 255, 0.6)',
        'rgba(0, 255, 255, 0.6)',
        'rgba(255, 255, 0, 0.6)',
        'rgba(128, 0, 255, 0.6)',
      ];

      const beam: LaserBeam = {
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        opacity: 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: Math.random() * 3 + 1,
        life: 60,
        maxLife: 60
      };

      laserBeamsRef.current.push(beam);
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      timeRef.current += 0.02;
      const beatPulse = Math.sin(timeRef.current * 4) * 0.5 + 0.5; // Simulated beat
      const strobeEffect = Math.sin(timeRef.current * 8) > 0.7 ? 1 : 0;

      // Create occasional laser beams
      if (Math.random() < 0.02) {
        createLaserBeam();
      }

      // Draw and update laser beams
      laserBeamsRef.current = laserBeamsRef.current.filter(beam => {
        beam.life--;
        beam.opacity = (beam.life / beam.maxLife) * 0.6;

        if (beam.life <= 0) return false;

        // Draw laser beam with glow effect
        ctx.save();
        ctx.globalAlpha = beam.opacity;
        ctx.strokeStyle = beam.color;
        ctx.lineWidth = beam.width;
        ctx.shadowColor = beam.color;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.moveTo(beam.x1, beam.y1);
        ctx.lineTo(beam.x2, beam.y2);
        ctx.stroke();
        ctx.restore();

        return true;
      });

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update particle based on type
        switch (particle.type) {
          case 'beat':
            // Pulsing particles that react to beat
            particle.size = (Math.sin(timeRef.current * 6 + index) * 2 + 4) * (beatPulse + 0.5);
            particle.opacity = (Math.sin(timeRef.current * 4 + index) * 0.3 + 0.7) * (beatPulse + 0.3);
            particle.x += Math.sin(timeRef.current + index) * 0.5;
            particle.y += Math.cos(timeRef.current + index) * 0.5;
            break;
            
          case 'spark':
            // Fast-moving sparks
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life--;
            particle.opacity = (particle.life / particle.maxLife) * 0.8;
            particle.size *= 0.99;
            
            // Regenerate spark
            if (particle.life <= 0) {
              particle.x = Math.random() * canvas.width;
              particle.y = Math.random() * canvas.height;
              particle.life = particle.maxLife;
              particle.size = Math.random() * 4 + 1;
              particle.vx = (Math.random() - 0.5) * 6;
              particle.vy = (Math.random() - 0.5) * 6;
            }
            break;
            
          case 'glow':
            // Floating glowing orbs
            particle.pulse += 0.1;
            particle.x += Math.sin(particle.pulse) * 0.3;
            particle.y += Math.cos(particle.pulse * 0.7) * 0.2;
            particle.opacity = Math.sin(particle.pulse) * 0.3 + 0.5;
            particle.size = Math.sin(particle.pulse * 2) * 1 + 3;
            break;
            
          case 'laser':
            // Linear moving particles
            particle.angle += 0.02;
            particle.x += Math.cos(particle.angle) * particle.speed;
            particle.y += Math.sin(particle.angle) * particle.speed;
            particle.opacity = Math.sin(timeRef.current * 3 + index) * 0.4 + 0.6;
            break;
        }

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Apply strobe effect
        const finalOpacity = particle.opacity * (strobeEffect ? 1.5 : 1);

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = Math.min(finalOpacity, 1);
        
        // Outer glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 3;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner bright core
        ctx.shadowBlur = 0;
        ctx.globalAlpha = Math.min(finalOpacity * 1.5, 1);
        ctx.fillStyle = particle.color.replace(/rgba?\(([^)]+)\)/, 'rgba($1, 1)');
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();

        // Draw connections between nearby particles (energy lines)
        if (particle.type === 'glow' || particle.type === 'beat') {
          particlesRef.current.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex && (otherParticle.type === 'glow' || otherParticle.type === 'beat')) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 120) {
                const connectionOpacity = (1 - distance / 120) * 0.3 * beatPulse;
                ctx.save();
                ctx.globalAlpha = connectionOpacity;
                ctx.strokeStyle = particle.color;
                ctx.lineWidth = 1;
                ctx.shadowColor = particle.color;
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
                ctx.restore();
              }
            }
          });
        }
      });

      // Add screen flash effect occasionally
      if (Math.random() < 0.005) {
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }
    };

    const animate = () => {
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default ParticleBackground;