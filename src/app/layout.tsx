import Navbar from "@/components/navbar/Navbar";

export const metadata = {
	title: "Beauty ",
	description: "Your one stop beauty center!",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className=" bg-primary">
				<header>
					<Navbar />
				</header>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
