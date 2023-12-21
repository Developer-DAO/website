import navigation from '@/constants/navigation.json';
import {
  ArrowTopRightIcon,
  Body3,
  Button,
  Card,
  DDLogoIcon,
  HamburguerIcon,
  StarIcon,
  ThunderIcon,
} from '@gordo-d/d-d-ui-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import navData from '../../constants/navigation.json';

const TopBarGrid = ({children}: any) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`fixed left-0 top-0 z-50 w-screen  border-neutral-900 transition-all duration-300 
                  ${
                    isScrolled
                      ? 'shadow-b-s, border-b border-neutral-900   bg-neutral-800/70 backdrop-blur-md'
                      : 'bg-transparent'
                  }`}>
      <div className="flex w-full justify-center">
        <div className="lg:grid-cols-lg lg:gap-lg xl:grid-cols-xl mx-5 mt-1 flex w-full grid-flow-row auto-rows-auto grid-cols-1 gap-y-16 p-5 lg:grid lg:w-auto">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export const TopBar = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const handleHashNavigation = () => {
    // Ensure this function is running on client side
    if (typeof window !== 'undefined') {
      const {hash} = window.location;

      if (hash) {
        document.querySelector(hash)?.scrollIntoView({behavior: 'smooth'});
      }
    }
  };

  useEffect(() => {
    // Ensure useEffect is running on client side
    if (typeof window !== 'undefined') {
      handleHashNavigation();

      window.addEventListener('hashchange', handleHashNavigation, false);

      return () => {
        window.removeEventListener('hashchange', handleHashNavigation, false);
      };
    }
  }, []);
  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };
  const router = useRouter(); // Hook to get the current route
  const isPartnersRoute = router.pathname === '/partners';
  return (
    <TopBarGrid>
      <div className="col-start-1 col-end-13 flex w-full items-center justify-between">
        <div className="relative flex w-full items-center justify-between gap-8">
          <div className="flex items-center gap-10">
            <Link href={'/'}>
              <DDLogoIcon className="h-[40px] w-[40px] lg:h-[70px] lg:w-[70px]" />
            </Link>
            <ul className="font-paragraph hidden gap-8 lg:flex">
              {navData.navigation.map((navEl, i) => (
                <a
                  className="flex gap-2"
                  key={i}
                  href={navEl.link}
                  target={navEl.external ? '_blank' : '_self'}
                  rel="noreferrer">
                  <Body3
                    color="neutral-500 p-0"
                    className="hover:text-primary-white transition-colors">
                    {navEl.name}
                  </Body3>
                  {navEl.external && (
                    <ArrowTopRightIcon className="mb-1 opacity-70 hover:opacity-100" />
                  )}
                </a>
              ))}
            </ul>
          </div>

          {isOverlayVisible && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: isOverlayVisible ? 1 : 0}}
              transition={{duration: 0.2}}
              className="fixed left-0 top-0 h-screen w-screen bg-neutral-800 bg-opacity-70 backdrop-blur-sm"
              onClick={toggleOverlay}>
              <motion.div
                className="absolute top-16 z-20 w-full p-5"
                initial={{y: '100%'}}
                animate={{y: isOverlayVisible ? '0%' : '100%'}}
                transition={{delay: 0.0, duration: 0.1}}>
                <Card
                  blur={10}
                  className="w-full border border-neutral-700 bg-neutral-700 bg-opacity-50 lg:hidden">
                  <ul className="font-paragraph flex flex-col gap-8 p-5">
                    {navData.navigation.map((navEl, i) => (
                      <Link
                        className="flex w-full gap-2 rounded-full"
                        key={i}
                        href={navEl.link}
                        target={navEl.external ? '_blank' : '_self'}
                        onClick={toggleOverlay}>
                        <Body3
                          color="neutral-500"
                          className="text-primary-white transition-colors">
                          {navEl.name}
                        </Body3>
                        {navEl.external && (
                          <ArrowTopRightIcon className="mb-1 opacity-70 hover:opacity-100" />
                        )}
                      </Link>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </motion.div>
          )}

          <div
            className="flex h-10 w-10 items-center justify-center rounded-full border-neutral-700 bg-neutral-800 lg:hidden"
            onClick={toggleOverlay}>
            <HamburguerIcon className="h-7 w-7" />
          </div>
        </div>

        <div className="hidden gap-4 lg:flex">
          {isPartnersRoute ? (
            <Button
              icon={<ThunderIcon className="h-6 w-6" />}
              className="font-paragraph font-semibold tracking-wider transition-all hover:drop-shadow-[10px_0_20px_rgba(254,254,254,0.472)]">
              Get in touch
            </Button>
          ) : (
            <>
              <Link href={navigation.ctas.handbook} target="_blank">
                <Button
                  icon={<StarIcon className="h-5 w-5" />}
                  className="font-paragraph font-semibold tracking-wider transition-all hover:drop-shadow-[10px_0_20px_rgba(254,254,254,0.472)]">
                  Get involved
                </Button>
              </Link>
              <Link href={'/partners'}>
                <Button
                  className="font-paragraph font-semibold tracking-wider"
                  variant="secondary">
                  Partner with us
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </TopBarGrid>
  );
};
