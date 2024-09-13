import React, { useRef } from "react";

import ProductCard from "./ProductCard";
import { useScroll, useTransform, motion } from "framer-motion";
import Button from "../Button";
const Products = () => {
	const cards = [
		{
			id: 1,
			title: " SPF 50",
			image: "/images/sunscreen.jpg",
		},
		{
			id: 2,
			title: " SPF 40",
			image: "/images/sunscreen-besoma.jpg",
		},
		{
			id: 3,
			title: " Mousteriser ",
			image: "/images/misola.jpg",
		},
		{
			id: 4,
			title: "Facewash ",
			image: "/images/cream-anua.jpg",
		},
		{
			id: 5,
			title: "Garnier",
			image: "/images/garnier.jpg",
		},
	];
	const targetRef = useRef<HTMLElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["10%", "-85%"]);
	return (
		<section ref={targetRef} className="relative top-0 h-[300vh] ">
			<div className="sticky  top-0 flex h-screen justify-start items-center overflow-hidden">
				<motion.div
					style={{ x }}
					className="flex justify-center items-center gap-10"
				>
					<div className="flex-col space-y-10">
						<h2 className="md:text-8xl text-4xl">Product Line</h2>
						<p className="text-sm">
							Transform your skincare routine with our curated collection of
							best-selling products. <br></br> From gentle cleansers to
							luxurious serums, each formula is designed to nourish, protect,
							and reveal glowing, healthy skin.
						</p>
						<div></div>
						<Button borderVisible={true} text="View Collection" />
					</div>

					{cards.map(card => {
						return <ProductCard card={card} key={card.id} />;
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Products;
