import React from "react";

const DEFAULT_CREDITS = [
	{
		prefix: "Logos from",
		name: "Vecteezy",
		href: "https://www.vecteezy.com/",
		suffix: "used in certain project logos.",
	},
];

function Credits({ credits = DEFAULT_CREDITS }) {
	return (
		<div className="credits">
			<p className="credits-line">
				Credits:{" "}
				{credits.map((credit, index) => (
					<span key={`${credit.name}-${index}`}>
						{index > 0 ? " • " : ""}
						{credit.prefix ? `${credit.prefix} ` : ""}
						{credit.href ?
							<a
								href={credit.href}
								title={credit.name}
								target="_blank"
								rel="noopener noreferrer"
							>
								{credit.name}
							</a>
						:	credit.name}
						{credit.suffix ? ` ${credit.suffix}` : ""}
					</span>
				))}
			</p>
		</div>
	);
}

export default Credits;
