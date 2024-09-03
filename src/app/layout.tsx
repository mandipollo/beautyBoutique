import Navbar from "@/components/navbar/Navbar";
import { FC } from "react";

export const metadata = {
	title: "Beauty ",
	description: "Your one stop beauty center!",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<html lang="en">
			<body className="bg-primary relative flex flex-col ">
				<header className="fixed top-0 left-0 right-0 z-10">
					<Navbar />
				</header>

				<main className="flex flex-1 mt-12"> {children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
