import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface Connection {
  node1: Node;
  node2: Node;
  opacity: number;
  distance: number;
}

const PlexusBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
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
      // Reduced node count for better performance
      const nodeCount = Math.floor((canvas.width * canvas.height) / 120000) + 8;
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
      
      nodesRef.current = nodes;
    };

    const updateConnections = () => {
      const connections: Connection[] = [];
      const nodes = nodesRef.current;
      const maxDistance = 150; // Reduced connection distance
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.2;
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

    const drawNetwork = () => {
      // Clear canvas
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      timeRef.current += 0.003; // Slower animation
      
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
        node.opacity = 0.2 + Math.sin(timeRef.current * 2 + node.x * 0.001) * 0.05;
      });
      
      // Update connections less frequently for performance
      if (Math.floor(timeRef.current * 60) % 3 === 0) {
        updateConnections();
      }
      
      // Draw connections
      connectionsRef.current.forEach(connection => {
        if (connection.opacity > 0.03) {
          ctx.save();
          ctx.globalAlpha = connection.opacity;
          ctx.strokeStyle = '#3b82f6';
          ctx.lineWidth = 0.5;
          
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
        
        // Simple node without glow for performance
        ctx.fillStyle = '#60a5fa';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
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
    animate();

    // Handle resize with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        createNodes();
      }, 250);
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
        background: '#1a1a1a',
        mixBlendMode: 'normal'
      }}
    />
  );
};

export default PlexusBackground;