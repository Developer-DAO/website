import { AvatarComponent } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useState } from "react";

export const AccountAvatar: AvatarComponent = ({ address, ensImage, size }) => {
  const [avatarLoadError, setAvatarLoadError] = useState<boolean>(false);

  const handleAvatarError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.onerror = null;
    setAvatarLoadError(true);
  };

  return ensImage && !avatarLoadError ? (
    <Image
      onError={handleAvatarError}
      src={ensImage}
      width={size}
      height={size}
      alt="ENS Avatar"
      className={`rounded-full`}
    />
  ) : (
    <></>
  );
};
