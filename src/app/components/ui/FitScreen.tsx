import React, { useEffect, useRef, useState } from "react";

interface FitScreenProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  className?: string;
}

export function FitScreen({ 
  children, 
  width = 1440, 
  height = 1024,
  className = ""
}: FitScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          const { clientWidth, clientHeight } = parent;
          // Calculate scale to fit within the viewport while maintaining aspect ratio
          const scaleX = clientWidth / width;
          const scaleY = clientHeight / height;
          
          // Use Math.min to ensure the content fits entirely within the screen (contain)
          // This keeps all elements at their original size
          const newScale = Math.min(scaleX, scaleY);
          
          setScale(newScale);
        }
      }
    };

    window.addEventListener("resize", updateScale);
    // Initial calculation
    updateScale();

    return () => window.removeEventListener("resize", updateScale);
  }, [width, height]);

  return (
    <div className={`relative flex items-center justify-center w-full h-full overflow-hidden ${className}`}>
      <div 
        ref={containerRef}
        style={{
          width: width,
          height: height,
          transform: `scale(${scale})`,
          // Center the transformation
          transformOrigin: "center center",
        }}
        className="shrink-0 relative"
      >
        {children}
      </div>
    </div>
  );
}
