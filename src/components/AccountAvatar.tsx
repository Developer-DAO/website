import Image from "next/image";
import { useState } from "react";

export const AccountAvatar = ({ address, ensImage, size, onLoad, onError }:any) => {
  const [avatarLoadError, setAvatarLoadError] = useState(false);

  const handleAvatarError = (event: any) => {
    event.currentTarget.onerror = null; // Remove the error handler after the first error
    setAvatarLoadError(true);
    // onError();
  };

  const handleImageLoad = () => {
    if (onLoad) {
      onLoad(); // Call the onLoad function when the image has loaded
    }
  };

  return ensImage && !avatarLoadError ? (
    <div className="flex items-center justify-center grayscale" style={{ width: size + "px", height: size + "px", position: 'relative' }}>
      <Image
        onError={handleAvatarError}
        onLoad={handleImageLoad}
        src={ensImage}
        alt="ENS Avatar"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  ) : (
    <></>
  );
};
