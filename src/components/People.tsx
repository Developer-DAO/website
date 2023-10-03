import React, { useEffect } from "react";
import { AccountAvatar } from "./AccountAvatar";

type D_D_IPeopleProps = {
  ensImages?: string[];
};

const D_D_IPeopleDefaultProps = {};

const D_D_People: React.FC<D_D_IPeopleProps> = (props) => {
  const { ensImages } = props;

  useEffect(() => {}, []);

  return (
    <>
      {/* PEOPLE */}
      <section className="mb-20 flex flex-wrap items-center justify-center gap-4 p-10">
        {ensImages?.map((ens: any, i) => (
          <div key={i} className="h-20 w-20 rounded-full">
            <AccountAvatar
              ensImage={ens.avatar}
              address={ens.name}
              size={80}
            />
          </div>
        ))}
      </section>
    </>
  );
};

D_D_People.defaultProps = D_D_IPeopleDefaultProps;

export default D_D_People;
