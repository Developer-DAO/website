import React, { useEffect } from "react";

type D_D_IPeopleProps = {};

const D_D_IPeopleDefaultProps = {};

const D_D_People: React.FC<D_D_IPeopleProps> = (props) => {
  const {} = props;

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      {/* PEOPLE */}
      <section className="p-10 my-20 flex flex-wrap gap-4 justify-center items-center">
        <div className="rounded-full bg-white h-20 w-20"></div>
        <div className="rounded-full bg-white h-20 w-20"></div>
        <div className="rounded-full bg-white h-20 w-20"></div>
        <div className="rounded-full bg-white h-20 w-20"></div>
        <div className="rounded-full bg-white h-20 w-20"></div>
        <div className="rounded-full bg-white h-20 w-20"></div>
        <div className="rounded-full bg-white h-20 w-20"></div>
      </section>
    </React.Fragment>
  );
};

D_D_People.defaultProps = D_D_IPeopleDefaultProps;

export default D_D_People;
