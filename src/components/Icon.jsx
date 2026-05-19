import React from "react";

function Icon({ src, alt, size = "normal" }) {
	const sizeMap = {
		small: "0.8rem",
		normal: "1.1rem",
		large: "1.5rem",
	};

	return (
		<img
			src={src}
			alt={alt}
			className="icon"
			style={{
				width: sizeMap[size],
				height: sizeMap[size],
			}}
		/>
	);
}

export default Icon;
