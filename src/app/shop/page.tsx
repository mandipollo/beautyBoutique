"use client";

import Lenis from "lenis";
import { FC, useEffect } from "react";

import ShopContent from "@/components/shop/ShopContent";
const ShopPage: FC = () => {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);
	return (
		<main className="flex flex-col w-full h-full p-2 space-y-4 ">
			<ShopContent />
		</main>
	);
};

export default ShopPage;
