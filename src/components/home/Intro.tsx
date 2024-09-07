"use client";
import React, { useRef } from "react";
import Image from "next/image";
import introImg from "@/assets/intro-high-res.jpg";

import { useScroll, useTransform, motion } from "framer-motion";

const Intro = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
	return (
		<section className="h-screen flex justify-center items-center relative w-screen overflow-hidden">
			<h1 className="absolute top-10 left-10 z-10 text-8xl text-white">
				SUN KISSED
			</h1>
			<motion.div
				style={{ y: y }}
				className="flex min-h-screen w-screen relative "
			>
				<Image
					src={introImg}
					objectFit="cover"
					fill
					alt="lotion showcase"
				></Image>
			</motion.div>
		</section>
	);
};

export default Intro;
