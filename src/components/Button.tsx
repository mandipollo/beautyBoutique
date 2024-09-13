import React, { FC } from "react";

const Button: FC<{
	text: string;
	borderVisible: boolean;
}> = ({ text, borderVisible }) => {
	return (
		<button
			className={` ${
				borderVisible
					? "border-borderColorDark border rounded-3xl h-10  "
					: "h-10 w-24 text-xs"
			}  flex group w-full relative overflow-hidden `}
		>
			<span className="absolute inset-0 flex justify-center items-center transform transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
				{text}
			</span>
			<span className=" absolute inset-0 flex justify-center items-center transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
				{text}
			</span>
		</button>
	);
};

export default Button;
