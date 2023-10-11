import { useEffect, useState } from "react";

const useWindowWidth = (): number => {
  // Using a useState hook with an initial value
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0 // Providing a default value when window is not available
  );

  useEffect(() => {
    // Only run this effect client-side
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Handle the resize event
      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty array means this useEffect runs once when component mounts

  return windowWidth;
};

export default useWindowWidth;
