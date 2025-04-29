
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  element: HTMLDivElement;
}

export function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const particles: Particle[] = [];
    const particleCount = 20;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random properties
      const size = Math.random() * 3 + 1;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;
      
      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();
      
      // Set animation delay
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      // Add to container
      container.appendChild(particle);
      
      // Store particle data
      particles.push({ x, y, size, speedX, speedY, element: particle });
    }
    
    // Animation loop
    let animationId: number;
    
    const animate = () => {
      particles.forEach(p => {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Boundary check and reverse
        if (p.x < 0 || p.x > window.innerWidth) p.speedX *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.speedY *= -1;
        
        // Apply new position
        p.element.style.left = `${p.x}px`;
        p.element.style.top = `${p.y}px`;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      particles.forEach(p => container.contains(p.element) && container.removeChild(p.element));
    };
  }, []);
  
  return <div ref={containerRef} className="particles-container" />;
}
