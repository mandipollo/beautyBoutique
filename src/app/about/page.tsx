import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About",
	description: "Decades of experience",
};
const About = () => {
	return (
		<main className="flex relative flex-row w-full h-full">
			<section className="flex relative flex-col w-1/2  p-2">
				<Link
					href="/"
					className="sticky top-10 rounded-full p-2 bg-primary h-10 w-10"
				>
					<Image
						src="/svg/back.svg"
						alt="back to home"
						width={20}
						height={20}
					/>
				</Link>
				<article className="sticky p-10 top-1/3 left-1/2 text-black justify-center  flex flex-col">
					<p className="text-xs">WHO WE ARE</p>
					<p className="text-2xl md:text-6xl font-medium text-primaryDarkText">
						Founded in 2000, our company has been a pioneer in sun protection
						for over a century.
					</p>
				</article>
			</section>
			<section className="w-1/2 h-full overflow-auto flex flex-col">
				<div className="flex w-full relative min-h-screen">
					<Image
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						src="/images/teamImg.webp"
						alt="team image"
						fill
						className="object-cover "
					/>
				</div>
				<article className="flex space-y-4 flex-col p-10 bg-white w-full relative min-h-screen justify-center ">
					<p> In 2000,</p>
					<p>
						nestled in a small coastal town, a passionate botanist and a chemist
						set out to harness the power of nature to create gentle yet
						effective skincare solutions.
					</p>
					<p>
						Inspired by the sea&apos;s natural elements and local flora, they
						crafted nourishing products using only the purest ingredients. Their
						simple, handcrafted formulas quickly gained a loyal following,
						passed down through generations.
					</p>
					<p>
						Today, their legacy lives on in a skincare line that blends
						time-honored traditions with modern science, delivering the same
						commitment to natural beauty and skin health that began over a
						century ago.
					</p>
				</article>
			</section>
		</main>
	);
};

export default About;
