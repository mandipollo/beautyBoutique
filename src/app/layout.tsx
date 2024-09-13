import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { FC } from "react";
import { Metadata } from "next";
import "@/app/globals.css";
import StoreProvider from "@/store/StoreProvider";

export const metadata: Metadata = {
	title: "Beauty ",
	description: "Your one stop beauty center!",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<StoreProvider>
			<html lang="en">
				<body className=" relative flex flex-col font-manrope font-extralight text-primaryDarkText ">
					<Navbar />
					<main className="flex-grow pt-12"> {children}</main>
					<footer>
						<Footer />
					</footer>
				</body>
			</html>
		</StoreProvider>
	);
};

export default RootLayout;
