"use client";

import React from "react";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { ProductProps } from "@/components/cart/DataTypes";
import Button from "@/components/Button";

import RemoveFromCartButton from "@/components/cart/RemoveFromCartButton";

import Link from "next/link";
const CartPage = () => {
	const cartItems = useAppSelector(state => state.cart.cart) as ProductProps[];

	const totalPrice = cartItems.reduce(
		(accumulator, product) => accumulator + product.price,
		0
	);

	if (cartItems.length === 0) {
		return (
			<main className="h-screen flex justify-center items-center ">
				<h1 className="text-2xl">Cricketsss..</h1>
			</main>
		);
	}
	return (
		<main className="flex h-screen flex-col w-full gap-4 justify-center items-center pt-12 p-4">
			<h2 className="text-4xl">ORDER SUMMARY</h2>
			<section className="flex flex-col h-full w-full">
				<ul className="grid md:grid-cols-2 grid-cols-1 gap-4">
					{cartItems.map((product: ProductProps) => (
						<li
							key={product.id}
							className="flex flex-row bg-primary p-2 gap-2 rounded-md"
						>
							<div className="relative h-40 w-40">
								<Image
									loading="lazy"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									fill
									className="object-cover"
									src={product.image}
									alt={product.title}
								/>
							</div>

							<div className="flex flex-row justify-between w-full">
								<div className="flex flex-col justify-between">
									<h6 className="text-2xl">{product.title}</h6>
									<p>£{product.price}</p>
								</div>
								<RemoveFromCartButton productId={product.id} />
							</div>
						</li>
					))}
				</ul>
			</section>
			<section className="flex w-full  justify-between">
				<h2>TOTAL PRICE - £{totalPrice.toFixed(2)}</h2>
				<Link href="/contact" className="w-60 h-10">
					<Button text="PROCEED TO CHECKOUT" />
				</Link>
			</section>
		</main>
	);
};

export default CartPage;
