import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../cart/AddToCartButton";
import { ProductProps } from "../cart/DataTypes";

const Product: FC<{
	product: ProductProps;
}> = ({ product }) => {
	return (
		<li key={product.id} className="flex flex-col space-y-4 h-96 text-sm">
			<Link
				href={`/shop/${product.id}`}
				className="flex justify-center items-center h-full w-full"
			>
				<div
					key={product.id}
					className=" grid h-full w-full  relative bg-primary"
				>
					<Image
						sizes="(max-width: 640px) 100vw,
                (max-width: 768px) 300, 
                (max-width: 1024px) 350  
                "
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
				<AddToCartButton product={product} />
			</article>
		</li>
	);
};

export default Product;
