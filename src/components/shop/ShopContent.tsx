"use client";
import React from "react";
import { Dummy_Data } from "./Dummy-data";
import Product from "./Product";
import { useAppSelector } from "@/store/hooks";

const ShopContent = () => {
	const filterType = useAppSelector(state => state.filter.filter);

	const filteredData =
		filterType === "all"
			? Dummy_Data
			: Dummy_Data.filter(products => products.category === filterType);
	return (
		<section className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 h-full w-full ">
			{filteredData.map(product => (
				<Product key={product.id} product={product} />
			))}
		</section>
	);
};

export default ShopContent;
