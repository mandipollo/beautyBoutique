"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/sun-svgrepo-com.svg";
import account from "@/assets/account-customize-man-svgrepo-com.svg";

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
		<header className=" flex flex-col text-sm  flex-1 w-full items-center">
			<section className="flex p-2 w-full h-12 bg-primaryWhite">
				<section className="flex w-1/4 flex-row gap-2 items-center">
					<Image src={logo} alt="logo" className="h-8 w-8" />
					<p className="text-md text-primary underline underline-offset-2 decoration-[#D39032]">
						Beauty Boutique.
					</p>
				</section>

				<section className="flex w-1/2 justify-center items-center flex-1">
					<button
						onClick={handleOpen}
						className="flex  justify-center items-center gap-2"
					>
						<div className=" flex relative  justify-center items-center gap-1">
							<span
								className={`${
									isOpen ? "-rotate-45 -translate-y-1  " : ""
								} transition-transform duration-700 absolute top-1 right-1 h-1 border-b  w-6 border-black`}
							></span>
							<span
								className={`${
									isOpen ? "rotate-45 translate-x-1 translate-y-1 " : ""
								} transition-transform duration-700 absolute -top-1 right-1 h-1 border-b  w-6 border-black`}
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
					<Image src={account} alt="account svg" className="h-8 w-8" />
				</motion.section>
			</section>

			<AnimatePresence mode="wait">
				{isOpen && <Nav handleOpen={handleOpen} isOpen={isOpen} />}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
