"use client";
import React, { useEffect } from "react";
import "./globals.css";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Lenis from "lenis";
import Description from "@/components/home/Description";

const page = () => {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);
	return (
		<main className="h-full w-full flex-col flex  gap-20 ">
			<Intro />
			<Description />

			<Hero />
		</main>
	);
};

export default page;
