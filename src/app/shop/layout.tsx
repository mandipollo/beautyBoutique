import React, { FC } from "react";
import { Metadata } from "next";

import ShopFilter from "@/components/shop/ShopFilter";

export const metadata: Metadata = {
	title: "Shop",
	description: "Shop lotions",
};

const layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<main className="flex flex-col w-full h-full p-2 space-y-4 ">
			<ShopFilter />
			<div>{children}</div>
		</main>
	);
};

export default layout;
