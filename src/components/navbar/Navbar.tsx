"use client";
import Image from "next/image";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";

const Navbar = () => {
	// handle menu state
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	// opacity

	const opacity = {
		initial: {
			opacity: 0,
		},
		open: {
			opacity: 1,
			transition: { duration: 0.7 },
		},
		closed: {
			opacity: 0,
			transition: { duration: 0.7 },
		},
	};

	return (
		<header className="  fixed top-0 left-0 right-0 z-40 flex flex-col text-sm  flex-1 w-full items-center border border-b border-gray-400 border-opacity-25">
			<section className="bg-white flex p-2 w-full h-12  text-primaryDarkText">
				<section className="flex w-1/4 flex-row gap-2 items-center">
					<Image
						loading="lazy"
						src="/svg/logo.svg"
						width={10}
						height={10}
						alt="logo"
						className="h-8 w-8 "
					/>
					<p className="text-md  underline underline-offset-2 decoration-[#D39032]">
						Beauty Boutique.
					</p>
				</section>

				<section className=" flex w-1/2 justify-center items-center flex-1">
					<button
						onClick={handleOpen}
						className="flex  justify-center items-center gap-2"
					>
						<div className=" flex relative  justify-center items-center gap-1">
							<span
								className={`${
									isOpen ? "-rotate-45 -translate-y-1  " : ""
								} transition-transform duration-700 absolute top-[2px] right-1 h-1 border-b  w-6 border-borderColorDark`}
							></span>
							<span
								className={`${
									isOpen ? "rotate-45 translate-x-1 translate-y-1 " : ""
								} transition-transform duration-700 absolute -top-[6px] right-1 h-1 border-b  w-6 border-borderColorDark `}
							></span>
						</div>

						<div className="flex relative font-extralight  bg-gray-400">
							<motion.p
								className="flex absolute -top-2"
								variants={opacity}
								animate={isOpen ? "closed" : "open"}
							>
								MENU
							</motion.p>
							<motion.p
								className="flex absolute -top-2"
								variants={opacity}
								animate={isOpen ? "open" : "closed"}
							>
								CLOSE
							</motion.p>
						</div>
					</button>
				</section>

				<motion.section
					variants={opacity}
					animate={isOpen ? "closed" : "open"}
					className="flex items-center gap-2 justify-end w-1/4"
				>
					<p className="font-extralight">SHOP</p>
				</motion.section>
			</section>

			<AnimatePresence mode="wait">
				{isOpen && <Nav handleOpen={handleOpen} isOpen={isOpen} />}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
