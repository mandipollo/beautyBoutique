import React from "react";
import "./globals.css";
import Image from "next/image";
import mainImage from "@/assets/pexels-tillhub-6925914.jpg";

const page = () => {
	return (
		<main className="h-full w-full flex-col flex flex-1">
			<Image loading="lazy" alt="image" src={mainImage} />
		</main>
	);
};

export default page;
