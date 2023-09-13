import React from "react";

type IFooterProps = object;

const IFooterDefaultProps = {};

const Footer: React.FC<IFooterProps> = (props) => {
	return <React.Fragment>Footer</React.Fragment>;
};

Footer.defaultProps = IFooterDefaultProps;

export default Footer;
