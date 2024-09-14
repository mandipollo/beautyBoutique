"use client";
import React, { FC } from "react";
import { ProductProps } from "./DataTypes";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/features/cart/cartSlice";

const AddToCartButton: FC<{ product: ProductProps }> = ({ product }) => {
	const cart = useAppSelector(state => state.cart.cart) as ProductProps[];

	const dispatch = useAppDispatch();

	const addToCartHandler = (product: ProductProps) => {
		dispatch(addToCart(product));
	};

	if (cart.find(cartItem => cartItem.id === product.id))
		return (
			<button className="border text-white bg-[#4D3D30]  px-2 rounded-xl ">
				ADDED TO CART
			</button>
		);
	return (
		<button
			onClick={() => addToCartHandler(product)}
			className="border border-borderColorDark px-2 rounded-xl "
		>
			ADD TO CART
		</button>
	);
};

export default AddToCartButton;
