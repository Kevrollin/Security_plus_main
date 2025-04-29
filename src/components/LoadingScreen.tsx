
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`loading-screen ${fade ? 'animate-fade-out' : ''}`}
      style={{ 
        opacity: fade ? 0 : 1, 
        visibility: fade ? 'hidden' : 'visible',
        transition: 'opacity 0.5s ease, visibility 0.5s ease'
      }}
    >
      <h1 className="loading-text">
        Security<span className="text-primary">+</span>
      </h1>
    </div>
  );
}
