import React from "react";

import ContactFooter from "./ContactFooter";
import InfoFooter from "./InfoFooter";

const Footer = () => {
	return (
		<main className="flex flex-col relative ">
			<ContactFooter />
			<InfoFooter />
		</main>
	);
};

export default Footer;
