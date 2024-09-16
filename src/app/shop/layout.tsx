import React, { FC } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Shop",
	description: "Shop lotions",
};

const layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<main className="flex flex-col pt-12 w-full h-full space-y-4 ">
			<div>{children}</div>
		</main>
	);
};

export default layout;
