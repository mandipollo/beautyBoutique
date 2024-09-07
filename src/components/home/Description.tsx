import React, { useRef } from "react";
import Image from "next/image";
import avocadoimg from "@/assets/avocado.jpg";
import orangeImg from "@/assets/oranges.jpg";
import { useScroll, useTransform, motion } from "framer-motion";

const Description = () => {
	// parralex animation
	const avocadoContainer = useRef(null);

	// define when animation start and end to the viewport
	const { scrollYProgress: avocadoY } = useScroll({
		target: avocadoContainer,
		offset: ["start start", "end start"],
	});

	const avY = useTransform(avocadoY, [0, 1], ["0vh", "50vh"]);
	const orangeContainer = useRef(null);

	const { scrollYProgress } = useScroll({
		target: orangeContainer,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0vh", "80vh"]);
	return (
		<section className="flex h-screen flex-row px-10">
			<div className="flex w-2/5 h-full relative justify-center ">
				<motion.div style={{ y: avY }} className="relative h-60 w-60">
					<Image src={avocadoimg} objectFit="contain" alt="avocado" fill />
				</motion.div>
				<motion.div style={{ y: y }} className="relative h-40 w-40">
					<Image src={orangeImg} objectFit="contain" alt="avocado" fill />
				</motion.div>
			</div>
			<article className="flex gap-6 flex-col w-3/5 text-primaryDarkText">
				<h2 className="tracking-widest text-3xl ">
					WELCOME TO OUR FURNITURE SHOP, WHERE TIMELESS AND STYLISH DESIGNS MEET
					STORYTELLING.
				</h2>
				<p className="text-sm w-60">
					Every piece of furniture in our collection tells a personal story.
					Custom-designed and personalized to enhance your home's aesthetics.
				</p>
			</article>
		</section>
	);
};

export default Description;
