import { useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const useSectionAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const setRefs = (node: any) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref: setRefs, controls };
};

export default useSectionAnimation;
