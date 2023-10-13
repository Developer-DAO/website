import {motion} from 'framer-motion';
import React, {useEffect, useState} from 'react';

interface TopBarGridProps {
  children: React.ReactNode;
  gradientColors?: string;
  className?: string;
  bgColor?: string; // New prop for a solid background color
}

const TopBarGrid: React.FC<TopBarGridProps> = ({
  children,
  gradientColors,
  bgColor,
  className,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Default gradient as inline style.
  const defaultGradient = '';
  const appliedGradient = gradientColors || defaultGradient;

  // Default background color when scrolled.
  const defaultBgColor = 'bg-neutral-800/70';
  const appliedBgColor = bgColor ? `bg-${bgColor}` : defaultBgColor;

  return (
    <motion.div
      style={{
        backgroundImage: !isScrolled ? appliedGradient : undefined, // Inline style for gradient.
      }}
      className={`fixed left-0 top-0 w-screen transition-all duration-300 ${className}
                  ${
                    isScrolled
                      ? `${appliedBgColor} shadow-b-s border-b border-neutral-900 backdrop-blur-md`
                      : ''
                  }`}>
      <div className="flex w-full justify-center">
        <div className="lg:grid-cols-lg lg:gap-lg xl:grid-cols-xl mx-5 mt-1 flex w-full grid-flow-row auto-rows-auto grid-cols-1 gap-y-16 p-5 md:grid md:w-auto">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default TopBarGrid;
