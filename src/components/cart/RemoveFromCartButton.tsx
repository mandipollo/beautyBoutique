"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/store/hooks";
import { removeFromCart } from "@/store/features/cart/cartSlice";

const RemoveFromCartButton: FC<{ productId: number }> = ({ productId }) => {
	// remove item from basket
	const dispatch = useAppDispatch();
	const handleRemoveItem = (productId: number) => {
		dispatch(removeFromCart(productId));
		console.log(productId);
	};

	return (
		<button
			onClick={() => handleRemoveItem(productId)}
			className="flex text-md"
		>
			<Image src="/svg/cross.svg" alt="remove" width={20} height={20} />
		</button>
	);
};

export default RemoveFromCartButton;
