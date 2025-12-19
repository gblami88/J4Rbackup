import React, { useEffect } from 'react';

// This component generates favicon files from SVG
const FaviconGenerator: React.FC = () => {
  useEffect(() => {
    const generateFavicons = () => {
      // Create canvas for different sizes
      const sizes = [
        { size: 16, name: 'favicon-16x16.png' },
        { size: 32, name: 'favicon-32x32.png' },
        { size: 180, name: 'apple-touch-icon.png' }
      ];

      sizes.forEach(({ size, name }) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = size;
        canvas.height = size;

        // Draw black rounded rectangle background
        const radius = size * 0.1875; // 6/32 ratio for border radius
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.roundRect(0, 0, size, size, radius);
        ctx.fill();

        // Draw white outer circle
        const centerX = size / 2;
        const centerY = size / 2;
        const outerRadius = size * 0.25; // 8/32 ratio
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI);
        ctx.fill();

        // Draw black inner circle (creating the "O")
        const innerRadius = size * 0.09375; // 3/32 ratio
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
        ctx.fill();

        // Convert to blob and create download link
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = name;
            link.click();
            URL.revokeObjectURL(url);
          }
        }, 'image/png');
      });

      // Generate ICO file (simplified - just use 32x32 version)
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 32;
      canvas.height = 32;

      // Draw the same design
      const radius = 6;
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.roundRect(0, 0, 32, 32, radius);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(16, 16, 8, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(16, 16, 3, 0, 2 * Math.PI);
      ctx.fill();

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'favicon.ico';
          link.click();
          URL.revokeObjectURL(url);
        }
      }, 'image/png');
    };

    // Only generate in development
    if (import.meta.env.DEV) {
      console.log('Favicon generator ready. Call generateFavicons() in console to create files.');
      (window as any).generateFavicons = generateFavicons;
    }
  }, []);

  return null;
};

export default FaviconGenerator;