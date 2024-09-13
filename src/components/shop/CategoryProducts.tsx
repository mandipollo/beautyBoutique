import React, { FC } from "react";
import { Dummy_Data } from "./Dummy-data";
import CategoryIndividualProduct from "./CategoryIndividualProduct";

const ShopCategory: FC<{ category: string }> = ({ category }) => {
	const categoryProducts = Dummy_Data.filter(
		product => product.category === category
	);

	return (
		<section className="flex flex-col gap-4 justify-center items-center w-full h-full overflow-x-hidden">
			<h2 className="text-4xl flex justify-center items-center">
				SHOP {category.toUpperCase()}
			</h2>
			<ul className="flex justify-center items-center space-x-2 h-full w-full overflow-auto">
				{categoryProducts.map(product => (
					<CategoryIndividualProduct key={product.id} product={product} />
				))}
			</ul>
		</section>
	);
};

export default ShopCategory;
