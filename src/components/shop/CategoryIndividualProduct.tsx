import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
const CategoryIndividualProduct: FC<{
	product: { id: number; title: string; image: string; price: number };
}> = ({ product }) => {
	return (
		<li key={product.id} className="flex flex-col space-y-4 h-96 text-sm">
			<Link
				href={`/shop/${product.id}`}
				className="flex justify-center items-center h-full w-full"
			>
				<div
					key={product.id}
					className=" grid h-full w-60  relative bg-primary"
				>
					<Image
						loading="lazy"
						src={product.image}
						alt={product.title}
						fill
						className="object-cover"
					/>
				</div>
			</Link>

			<article className="flex justify-between">
				<p>
					{product.title} - £{product.price}
				</p>
			</article>
		</li>
	);
};

export default CategoryIndividualProduct;
