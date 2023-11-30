import React, { useEffect } from "react";
import { AccountAvatar } from "./AccountAvatar";

type D_D_IPeopleProps = {
  community?: {
    Name: string;
    Appear: boolean;
    ENS: string;
    avatar?: string;
    name?: string;
    Image?: any
  }[];
  avatarSize?: number;
  showCount?: number;
  className?: string; // Added prop for additional class names
  stylesData?: object; // Added prop for additional class names
};

const D_D_People: React.FC<D_D_IPeopleProps> = (props) => {
  const { community, avatarSize = 80, showCount, className, stylesData } = props;
  const displayedCommunity = showCount
    ? community?.slice(0, showCount)
    : community;

  useEffect(() => {}, []);

  return (
    <>
      {/* PEOPLE */}
      <section className={`flex ${className}`}>
        {displayedCommunity?.map((p, i) => (
          <>{p.Appear && p.Image && p.Image[0]?.url && (
          <div
            key={i}
            className="rounded-full"
            style={{ height: avatarSize, width: avatarSize }}>
              {/* <p>{p.Name}</p> */}
              <AccountAvatar
                ensImage={p.Image[0].url}
                address={p.name ? p.name : ""}
                size={avatarSize}
              />
          </div>
            )}</>
        ))}
      </section>
    </>
  );
};

export default D_D_People;
