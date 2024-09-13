import React, { FC } from "react";
import Image from "next/image";
import Button from "../Button";
const Product: FC<{
	product: { id: number; title: string; image: string; price: number };
}> = ({ product }) => {
	return (
		<div className="flex flex-col space-y-4 h-96 text-sm">
			<div
				key={product.id}
				className="hover:scale-105 transition-transform transform ease-in-out duration-300 grid h-full w-full  relative bg-primary"
			>
				<Image
					loading="lazy"
					src={product.image}
					alt={product.title}
					fill
					className="object-cover"
				/>
			</div>
			<article className="flex justify-between">
				<p>
					{product.title} - {product.price}£
				</p>
				<button className="border border-borderColorDark px-2 rounded-xl ">
					ADD TO CART
				</button>
			</article>
		</div>
	);
};

export default Product;
