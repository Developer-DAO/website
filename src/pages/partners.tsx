import React, { useEffect } from "react";

type IPartnersPageProps = {};

const IPartnersPageDefaultProps = {};

const PartnersPage: React.FC<IPartnersPageProps> = (props) => {
  const {} = props;

  useEffect(() => {}, []);

  return <React.Fragment>Partners</React.Fragment>;
};

PartnersPage.defaultProps = IPartnersPageDefaultProps;

export default PartnersPage;
