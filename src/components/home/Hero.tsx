import React from "react";
import Image from "next/image";
import productImage from "@/assets/pexels-madalina-enache-1540051428-27357176 (1).jpg";
import sideImage from "@/assets/avocado.jpg";
import sunSvg from "@/assets/sun-svgrepo-com (1).svg";
import playSvg from "@/assets/play-circle-svgrepo-com.svg";
import leafSvg from "@/assets/leaf-svgrepo-com.svg";

const Hero = () => {
	return (
		<section className="flex w-full flex-row gap-4 p-10 ">
			<article className="flex xl:w-3/5 justify-between items-center gap-2">
				<div className="flex justify-center gap-10 items-cente flex-col">
					<h2 className="text-6xl">
						Dive Into <br></br> Nature's <br></br> Essence.
					</h2>
					<div className="flex justify-center gap-2 items-center">
						<button className="flex space-x-2 justify-center items-center p-2 w-52 h-10 rounded-2xl bg-sunny text-white">
							<p>Start Shopping</p>
							<Image
								className="hover:translate-x-2 duration-300"
								src={leafSvg}
								width={20}
								height={20}
								alt="leaf"
							/>
						</button>
						<button className="">
							<Image src={playSvg} alt="play demo" className="h-12 w-12" />
						</button>
						See Demo
					</div>
				</div>
				<div className="flex h-full  relative">
					<Image
						loading="lazy"
						width={350}
						alt="image"
						sizes="(max-width: 640px) 100vw,
                (max-width: 768px) 300, 
                (max-width: 1024px) 350  
                "
						src={productImage}
					/>
				</div>
			</article>
			<article className="flex items-center gap-2 flex-1 justify-center">
				<div className=" h-full justify-center flex w-1/2 flex-col items-center  gap-4">
					<button className="border border-gray-400 rounded-2xl w-40 p-2 h-10">
						Skincare by beauty
					</button>
					<Image
						width={200}
						height={200}
						loading="lazy"
						alt="image"
						src={sideImage}
					/>
				</div>

				<div className="flex w-1/2 h-full flex-col space-y-10  items-center justify-center gap-2">
					<Image src={sunSvg} alt="sun svg" height={100} />
					<h4>
						Natural skincare <br></br> is the best choice <br></br> for skin
					</h4>
					<button className="text-lg underline underline-offset-4">
						Read More
					</button>
				</div>
			</article>
		</section>
	);
};

export default Hero;
