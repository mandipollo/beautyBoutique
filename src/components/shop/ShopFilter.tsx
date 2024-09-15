"use client";
import { filterType } from "@/store/features/shopfilter/shopFilterSlice";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { Dummy_Data } from "./Dummy-data";
import React from "react";

const ShopFilter = () => {
	const dispatch = useAppDispatch();

	const filter = useAppSelector(state => state.filter.filter);

	const handleFilter = (e: string) => {
		dispatch(filterType(e));
	};
	return (
		<header className="flex w-full h-full gap-4 flex-col">
			<div className="flex w-full h-full items-center">
				<h2 className="md:text-8xl text-4xl">{filter.toUpperCase()}</h2>
				<span className="flex md:w-20 h-10 w-10 md:h-20 md:text-4xl text-2xl  rounded-full justify-center items-center border border-borderColorDark">
					{filter === "all"
						? Dummy_Data.length
						: Dummy_Data.filter(product => product.category === filter).length}
				</span>
			</div>

			<div className="grid">
				<ul className="flex flex-wrap text-sm gap-2">
					<li>
						<button
							onClick={e => handleFilter("all")}
							className=" px-2 border border-borderColorDark rounded-2xl"
						>
							ALL ({Dummy_Data.length})
						</button>
					</li>
					<li>
						<button
							onClick={e => handleFilter("sunscreen")}
							className=" px-2 border border-borderColorDark rounded-2xl"
						>
							SUNSCREEN (
							{
								Dummy_Data.filter(product => product.category === "sunscreen")
									.length
							}
							)
						</button>
					</li>
					<li>
						<button
							onClick={e => handleFilter("mousteriser")}
							className=" px-2 border border-borderColorDark rounded-2xl"
						>
							MOUSTERISER (
							{
								Dummy_Data.filter(product => product.category === "mousteriser")
									.length
							}
							)
						</button>
					</li>
					<li>
						<button
							onClick={e => handleFilter("facewash")}
							className=" px-2 border border-borderColorDark rounded-2xl"
						>
							FACEWASH (
							{
								Dummy_Data.filter(product => product.category === "facewash")
									.length
							}
							)
						</button>
					</li>
					<li>
						<button
							onClick={e => handleFilter("cream")}
							className=" px-2 border border-borderColorDark rounded-2xl"
						>
							CREAM (
							{
								Dummy_Data.filter(product => product.category === "cream")
									.length
							}
							)
						</button>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default ShopFilter;
