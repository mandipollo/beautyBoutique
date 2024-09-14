import React, { FC } from "react";
import { Dummy_Data } from "@/components/shop/Dummy-data";
import Image from "next/image";
import { Metadata } from "next";
import Button from "@/components/Button";
import CategoryProducts from "@/components/shop/CategoryProducts";
import AddToCartButton from "@/components/cart/AddToCartButton";

export const metadata: Metadata = {
	title: "Product",
	description: "Show selected products",
};
const ProductPage: FC<{ params: { id: string } }> = ({ params }) => {
	const parsedId = parseInt(params.id, 10);
	const product = Dummy_Data.find(product => product.id === parsedId);

	if (!product) {
		return null;
	}
	return (
		<main className="flex flex-col w-screen  py-4 px-2 gap-4">
			<section className="flex md:flex-row flex-col">
				<div className="flex justify-center md:w-1/2">
					<div className="flex h-96 w-96 relative  ">
						<Image
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							loading="lazy"
							src={product.image}
							alt={product.title}
							fill
							className="object-cover"
						/>
					</div>
				</div>
				<article
					key={product.id}
					className="flex flex-col md:w-1/2 space-y-4 relative"
				>
					<h2 className="text-2xl">
						{product.category.toUpperCase()} - {product.title}
					</h2>
					<p>
						Please note that this is not a real project but a demo designed
						solely to showcase our skills and expertise in web development,
						design, and UX copywriting. The product is intended for
						demonstration purposes only and should not be construed as a fully
						functional or operational e-commerce website. Thank you for your
						understanding.
					</p>
					<p className="text-xl">£{product.price}</p>
					<div className="w-60">
						<AddToCartButton product={product} />
					</div>
				</article>
			</section>

			<CategoryProducts category={product.category} />
		</main>
	);
};

export default ProductPage;
