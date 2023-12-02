import cx from 'classnames';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AccountAvatar } from './AccountAvatar';

type D_D_IPeopleProps = {
  community?: {
    Name: string,
    Appear: boolean,
    ENS: string,
    avatar?: string,
    name?: string,
    Image?: any,
  }[],
  avatarSize?: number,
  elementClassName?: string,
  showCount?: number,
  className?: string, // Added prop for additional class names
  stylesData?: object, // Added prop for additional class names
};

const D_D_People: React.FC<D_D_IPeopleProps> = (props) => {
  const {
    community,
    avatarSize = 80,
    showCount,
    className,
    stylesData,
    elementClassName,
  } = props;
  const displayedCommunity = showCount ? community?.slice(0, showCount) : community;

  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  // Reset state when the community prop changes
  useEffect(() => {
    setLoadedImagesCount(0);
    setAllImagesLoaded(false);
  }, [community]);

  useEffect(() => {
    if (loadedImagesCount === displayedCommunity?.length) {
      setAllImagesLoaded(true);
    }
  }, [loadedImagesCount, displayedCommunity]);

  const handleImageLoad = () => {
    setLoadedImagesCount((prevCount) => prevCount + 1);
  };

  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={`flex ${className}`}>
      {displayedCommunity?.map((person, index) => (
        person.Appear && person.Image && person.Image[0]?.url && (
          <motion.div
            key={index}
            className={cx('rounded-full', allImagesLoaded && elementClassName)}
            style={{ height: avatarSize, width: avatarSize }}
            initial="hidden"
            animate={allImagesLoaded ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay: index * 0.05 }}
          >
            <AccountAvatar
              ensImage={person.Image[0].url}
              address={person.name}
              size={avatarSize}
              onLoad={handleImageLoad}
            />
          </motion.div>
        )
      ))}
    </section>
  );
};
export default D_D_People;

