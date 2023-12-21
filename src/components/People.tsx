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
  const displayedCommunity = showCount
    ? community?.slice(0, showCount)
    : community;

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

  const avatarRefs: any = {};

  const list = (person:any, index:any) => <motion.div
  className={cx('rounded-full', elementClassName)}
  ref={(ref) => (avatarRefs[index] = ref)}
  style={{height: avatarSize, width: avatarSize}}
  initial={{y: 20, opacity: 0}}
  animate={{y: 0, opacity: 100}} 
  key={index}
  variants={{}} 
  transition={{
    duration: 0.75, 
    delay: index * 0.05,
  }}>
  <AccountAvatar
    ensImage={person.Image[0].localPath ? person.Image[0].localPath : person.Image[0].url}
    address={person.name}
    size={avatarSize}
    onLoad={handleImageLoad}
  />
</motion.div>

  return (
    <section className={`flex ${className}`}>
      {displayedCommunity?.map(
        (person:any, index:number) =>
          person.Appear &&
          person.Image &&
          person.Image[0]?.url && (
            list(person, index)
          )
      )}
    </section>
  );
};
export default D_D_People;
