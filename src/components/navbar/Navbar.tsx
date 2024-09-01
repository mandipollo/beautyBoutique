import Image from "next/image";
import React from "react";
import logo from "@/assets/sun-svgrepo-com.svg";
import account from "@/assets/account-customize-man-svgrepo-com.svg";
import Link from "next/link";
const Navbar = () => {
	return (
		<header className="flex p-2 flex-1 w-full items-center  h-20 border-b  border-opacity-30 border-gray-400">
			<section className="flex flex-row gap-2 justify-center items-center">
				<Image src={logo} alt="logo" className="h-10 w-10" />
				<p className="text-lg text-primary">Beauty Boutique.</p>
			</section>

			<nav className="flex w-full flex-1 justify-center items-center">
				<ul className="flex w-full items-center justify-center flex-1 flex-row gap-4 text-primary">
					<li>
						<Link href="/">HOME</Link>
					</li>
					<li>
						<Link href="/treatments">TREATMENTS</Link>
					</li>
					<li>
						<Link href="/products">PRODUCTS</Link>
					</li>
					<li>
						<Link href="/contact">CONTACT US</Link>
					</li>
					<li>
						<Link href="/book">BOOK NOW</Link>
					</li>
				</ul>
			</nav>
			<section>
				<Image src={account} alt="account svg" className="h-10 w-10" />
			</section>
		</header>
	);
};

export default Navbar;
