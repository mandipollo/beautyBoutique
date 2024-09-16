"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const usePathnamehook = () => {
	const pathname = usePathname();
	const [isPathname, setIsPathname] = useState<boolean>(false);

	useEffect(() => {
		if (pathname == "/about") {
			setIsPathname(true);
		} else {
			setIsPathname(false);
		}
	}, [pathname]);

	return isPathname;
};

export default usePathnamehook;
