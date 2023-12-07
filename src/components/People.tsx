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
  }[];
  avatarSize?: number;
  elementClassName?: string;
  showCount?: number;
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

  const [loadedImagesCount, setLoadedImagesCount] = useState(0); // Number of images that have loaded
  const [allImagesLoaded, setAllImagesLoaded] = useState(false); // Flag indicating if all images have loaded

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

const isAnimationEnabled = allImagesLoaded && loadedImagesCount === displayedCommunity?.length; // Check if all images have loaded and the counter matches the number of avatars

  const avatarRefs:any = {};

  return (
    <section className={`flex ${className}`}>
{displayedCommunity?.map((person, index) => (
  person.Appear && person.Image && person.Image[0]?.url && (
<motion.div
      className={cx('rounded-full', elementClassName)}
      ref={(ref) => (avatarRefs[index] = ref)}
      style={{ height: avatarSize, width: avatarSize }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }} // Manually animate the entrance
      key={index} // Add a unique key to each element
      variants={{}} // Remove the `hidden` and `visible` variants
      transition={{
        duration: 0.75, // Set the animation duration to 0.75 seconds
        delay: index * 0.05, // Add a 0.05-second delay for each element
      }}
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
