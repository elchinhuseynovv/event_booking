import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  connections: Connection[];
}

interface Connection {
  node1: Node;
  node2: Node;
  opacity: number;
  distance: number;
}

interface LaserBeam {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  angle: number;
  opacity: number;
  color: string;
  width: number;
  life: number;
  maxLife: number;
  speed: number;
}

interface FogParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const PlexusBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const laserBeamsRef = useRef<LaserBeam[]>([]);
  const fogParticlesRef = useRef<FogParticle[]>([]);
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

    const createNodes = () => {
      const nodes: Node[] = [];
      // Very sparse network - only 15-20 nodes for ultra-minimalist look
      const nodeCount = Math.floor((canvas.width * canvas.height) / 80000) + 15;
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // Very slow movement
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1, // Small nodes
          opacity: Math.random() * 0.4 + 0.2, // Dim glow
          connections: []
        });
      }
      
      nodesRef.current = nodes;
    };

    const createFogParticles = () => {
      const particles: FogParticle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        const maxLife = 300 + Math.random() * 200;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 40 + 20,
          opacity: Math.random() * 0.1 + 0.02,
          life: maxLife,
          maxLife
        });
      }
      
      fogParticlesRef.current = particles;
    };

    const createLaserBeam = () => {
      if (laserBeamsRef.current.length > 6) return; // Limit laser beams for minimalism
      
      const colors = [
        'rgba(30, 58, 138, 0.4)', // Deep blue
        'rgba(67, 56, 202, 0.4)', // Deep purple
        'rgba(29, 78, 216, 0.3)', // Blue
        'rgba(91, 33, 182, 0.3)', // Purple
        'rgba(37, 99, 235, 0.2)', // Lighter blue
      ];

      const isVertical = Math.random() > 0.5;
      const maxLife = 180 + Math.random() * 120;
      
      let beam: LaserBeam;
      
      if (isVertical) {
        // Vertical beam
        const x = Math.random() * canvas.width;
        beam = {
          x1: x,
          y1: -50,
          x2: x + (Math.random() - 0.5) * 100,
          y2: canvas.height + 50,
          angle: Math.PI / 2 + (Math.random() - 0.5) * 0.3,
          opacity: 0.6,
          color: colors[Math.floor(Math.random() * colors.length)],
          width: Math.random() * 3 + 1,
          life: maxLife,
          maxLife,
          speed: 0.5 + Math.random() * 0.5
        };
      } else {
        // Diagonal beam
        const startSide = Math.floor(Math.random() * 4);
        let x1, y1, x2, y2;
        
        switch (startSide) {
          case 0: // Top
            x1 = Math.random() * canvas.width;
            y1 = -50;
            x2 = Math.random() * canvas.width;
            y2 = canvas.height + 50;
            break;
          case 1: // Right
            x1 = canvas.width + 50;
            y1 = Math.random() * canvas.height;
            x2 = -50;
            y2 = Math.random() * canvas.height;
            break;
          case 2: // Bottom
            x1 = Math.random() * canvas.width;
            y1 = canvas.height + 50;
            x2 = Math.random() * canvas.width;
            y2 = -50;
            break;
          default: // Left
            x1 = -50;
            y1 = Math.random() * canvas.height;
            x2 = canvas.width + 50;
            y2 = Math.random() * canvas.height;
            break;
        }
        
        beam = {
          x1, y1, x2, y2,
          angle: Math.atan2(y2 - y1, x2 - x1),
          opacity: 0.6,
          color: colors[Math.floor(Math.random() * colors.length)],
          width: Math.random() * 2 + 0.5,
          life: maxLife,
          maxLife,
          speed: 0.3 + Math.random() * 0.4
        };
      }

      laserBeamsRef.current.push(beam);
    };

    const updateConnections = () => {
      const connections: Connection[] = [];
      const nodes = nodesRef.current;
      const maxDistance = 200; // Sparse connections
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3; // Very subtle lines
            connections.push({
              node1: nodes[i],
              node2: nodes[j],
              opacity,
              distance
            });
          }
        }
      }
      
      connectionsRef.current = connections;
    };

    const drawAtmosphericBackground = () => {
      // Create atmospheric gradient base
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, '#1a1a1a');
      gradient.addColorStop(0.5, '#151515');
      gradient.addColorStop(1, '#0f0f0f');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawFog = () => {
      // Update and draw fog particles
      fogParticlesRef.current = fogParticlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        particle.opacity = (particle.life / particle.maxLife) * 0.08;
        
        // Wrap around edges
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
        
        if (particle.life <= 0) {
          // Respawn particle
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.opacity = Math.random() * 0.08 + 0.02;
        }
        
        // Draw fog particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = '#2a2a2a';
        ctx.filter = 'blur(20px)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        return true;
      });
    };

    const drawLaserBeams = () => {
      // Create occasional laser beams
      if (Math.random() < 0.008) {
        createLaserBeam();
      }

      // Update and draw laser beams
      laserBeamsRef.current = laserBeamsRef.current.filter(beam => {
        beam.life--;
        beam.opacity = (beam.life / beam.maxLife) * 0.4;
        
        if (beam.life <= 0) return false;
        
        // Draw laser beam with atmospheric effect
        ctx.save();
        ctx.globalAlpha = beam.opacity;
        
        // Create gradient for beam
        const gradient = ctx.createLinearGradient(beam.x1, beam.y1, beam.x2, beam.y2);
        gradient.addColorStop(0, beam.color.replace('0.4', '0.1'));
        gradient.addColorStop(0.5, beam.color);
        gradient.addColorStop(1, beam.color.replace('0.4', '0.1'));
        
        // Draw main beam
        ctx.strokeStyle = gradient;
        ctx.lineWidth = beam.width;
        ctx.shadowColor = beam.color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.moveTo(beam.x1, beam.y1);
        ctx.lineTo(beam.x2, beam.y2);
        ctx.stroke();
        
        // Draw outer glow
        ctx.globalAlpha = beam.opacity * 0.3;
        ctx.lineWidth = beam.width * 3;
        ctx.shadowBlur = 30;
        ctx.stroke();
        
        ctx.restore();
        
        return true;
      });
    };

    const drawNetwork = () => {
      // Draw atmospheric background
      drawAtmosphericBackground();
      
      // Draw fog layer
      drawFog();
      
      // Draw laser beams
      drawLaserBeams();
      
      timeRef.current += 0.005; // Very slow animation
      
      // Update node positions
      nodesRef.current.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
        
        // Subtle pulsing
        node.opacity = 0.3 + Math.sin(timeRef.current * 2 + node.x * 0.001) * 0.1;
      });
      
      // Update connections
      updateConnections();
      
      // Draw connections first (behind nodes)
      connectionsRef.current.forEach(connection => {
        if (connection.opacity > 0.05) {
          ctx.save();
          ctx.globalAlpha = connection.opacity;
          ctx.strokeStyle = '#1e3a8a'; // Deep blue
          ctx.lineWidth = 0.5; // Thin, sharp lines
          ctx.shadowColor = '#1e3a8a';
          ctx.shadowBlur = 2;
          
          ctx.beginPath();
          ctx.moveTo(connection.node1.x, connection.node1.y);
          ctx.lineTo(connection.node2.x, connection.node2.y);
          ctx.stroke();
          ctx.restore();
        }
      });
      
      // Draw nodes
      nodesRef.current.forEach(node => {
        ctx.save();
        ctx.globalAlpha = node.opacity;
        
        // Outer glow
        ctx.shadowColor = '#3b82f6'; // Lighter blue for glow
        ctx.shadowBlur = 8;
        ctx.fillStyle = '#1e40af'; // Deep blue nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner bright core
        ctx.shadowBlur = 0;
        ctx.globalAlpha = node.opacity * 1.5;
        ctx.fillStyle = '#60a5fa'; // Brighter blue core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });
    };

    const animate = () => {
      drawNetwork();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    createNodes();
    createFogParticles();
    animate();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      createNodes();
      createFogParticles();
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
        background: '#1a1a1a', // Dark charcoal gray
        mixBlendMode: 'normal'
      }}
    />
  );
};

export default PlexusBackground;