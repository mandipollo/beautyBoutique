"use client";
import Navbar from "./Navbar";
import usePathnamehook from "@/app/hooks/usePathnamehook";

const NavbarWrapper = () => {
	const isPathAbout = usePathnamehook();

	if (!isPathAbout) {
		return <Navbar />;
	}
};

export default NavbarWrapper;
