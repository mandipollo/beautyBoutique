import React, { FC } from "react";

const Overlay: FC<{ handleOpen: () => void }> = ({ handleOpen }) => {
	return (
		<div
			onClick={handleOpen}
			className="flex flex-1 justify-center items-center h-full transition-transform z-10 bg-white/0 shadow-sm ring-black/5 backdrop-blur-sm  w-full p-6 flex-row "
		>
			<h1>Overlay</h1>
		</div>
	);
};

export default Overlay;
