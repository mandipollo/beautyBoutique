import React from "react";
import branchImg from "@/assets/branch.jpg";
import orangeImg from "@/assets/oranges.jpg";
import Image from "next/image";
const Features = () => {
	return (
		<section className="grid grid-cols-2 gap-2">
			<article className="grid justify-center items-center">
				<h5>Homemade</h5>
				<Image src={orangeImg} width={100} height={100} alt="homemade" />
			</article>
			<article>
				<Image src={branchImg} width={100} height={100} alt="branch"></Image>
			</article>
			<article className="grid">
				<Image src={orangeImg} width={100} height={100} alt="homemade" />
			</article>
			<article>
				<Image src={branchImg} width={100} height={100} alt="branch"></Image>
			</article>
		</section>
	);
};

export default Features;
