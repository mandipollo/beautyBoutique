import { FC } from "react";
import Image from "next/image";
import Button from "../Button";

import Link from "next/link";
const ProductCard: FC<{
	card: {
		title: string;
		id: number;
		image: string;
	};
}> = ({ card }) => {
	return (
		<div
			key={card.id}
			className=" relative flex flex-row justify-center items-center gap-2 md:h-[450px] h-60  overflow-hidden "
		>
			<div className="flex relative md:h-96 h-60 w-60 md:w-96">
				<Image
					loading="lazy"
					src={card.image}
					alt={card.title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover"
				/>
			</div>

			<div className="flex flex-col items-start w-full">
				<h2 className="md:text-4xl text-2xl text-primaryDarkText">
					{card.title}
				</h2>

				<Link href="shop" className="h-full w-full">
					<Button text={`SHOP`}></Button>
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
