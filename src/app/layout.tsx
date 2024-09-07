import Navbar from "@/components/navbar/Navbar";
import { FC } from "react";

export const metadata = {
	title: "Beauty ",
	description: "Your one stop beauty center!",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<html lang="en">
			<body className="bg-primaryWhite relative flex flex-col font-manrope font-extralight text-primaryDarkText ">
				<header className="fixed top-0 left-0 right-0 z-40">
					<Navbar />
				</header>

				<main className="flex flex-1 mt-12"> {children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
