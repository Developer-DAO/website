import { AvatarComponent } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useState } from "react";

export const AccountAvatar: AvatarComponent = ({ address, ensImage, size }) => {
  const [avatarLoadError, setAvatarLoadError] = useState<boolean>(false);

  const handleAvatarError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.onerror = null; // Remove the error handler after the first error
    setAvatarLoadError(true);
  };

  return ensImage && !avatarLoadError ? (
    <div className="flex items-center justify-center" style={{width: size + "px", height: size + "px", position: 'relative'}}>
      <Image
        onError={handleAvatarError}
        src={ensImage}
        alt="ENS Avatar"
        layout="fill"
        objectFit="cover" // or 'contain' based on your preference
        className="rounded-full"
      />
    </div>
  ) : (
    <></>
  );
};
