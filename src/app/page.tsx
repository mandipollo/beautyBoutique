"use client";

import React, { FC, useEffect } from "react";
import "./globals.css";
import Intro from "@/components/home/Intro";
import Lenis from "lenis";
import Description from "@/components/home/Description";
import Products from "@/components/home/Products";
import About from "@/components/home/About";

const HomePage: FC = () => {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);
	return (
		<main className="h-full w-full flex-col flex pt-12  gap-20">
			<Intro />
			<Description />
			<Products />
			<About />
		</main>
	);
};

export default HomePage;
