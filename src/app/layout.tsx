import Footer from "@/components/footer/Footer";
import { FC } from "react";
import { Metadata } from "next";
import "@/app/globals.css";
import StoreProvider from "@/store/StoreProvider";
import NavbarWrapper from "@/components/navbar/NavbarWrapper";

export const metadata: Metadata = {
	title: "Beauty ",
	description: "Your one stop beauty center!",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<html lang="en">
			<body className=" bg-primaryWhite relative  flex flex-col font-manrope font-extralight text-primaryDarkText ">
				<StoreProvider>
					<NavbarWrapper />
					<main className="flex-grow"> {children}</main>
					<footer>
						<Footer />
					</footer>
				</StoreProvider>
			</body>
		</html>
	);
};

export default RootLayout;
