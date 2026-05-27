import React from "react";

const SKILL_GROUPS = [
	{
		title: "Languages",
		items: [
			"Java",
			"Python",
			"C",
			"C++",
			"JavaScript",
			"CSS",
			"HTML",
			"SQL",
			"ARM Assembly",
			"MIPS Assembly",
			"OCaml",
			"PowerShell",
		],
	},
	{
		title: "Libraries & Frameworks",
		items: [
			"Pandas",
			"NumPy",
			"Matplotlib",
			"Scikit-learn",
			"Hugging Face",
			"React",
			"Node.js",
			"Vite",
			"React Native",
			"Expo",
		],
	},
	{
		title: "Other Tools",
		items: [
			"Git",
			"GitHub",
			"GitHub Desktop",
			"PostgreSQL",
			"Docker",
			"VS Code",
			"Cursor",
		],
	},
	{
		title: "Video Game Development",
		items: ["Unreal Engine"],
	},
];

function Skills() {
	return (
		<div className="content">
			<p className="section-kicker eyebrow">skills</p>
			<h2>Technical skills</h2>
			<span className="divider" />
			<div className="skill-grid">
				{SKILL_GROUPS.map((group) => (
					<article key={group.title} className="panel-card surface-card">
						<h3>{group.title}</h3>
						<div className="skill-pill-list">
							{group.items.map((item) => (
								<span key={item} className="skill-pill pill">
									{item}
								</span>
							))}
						</div>
					</article>
				))}
			</div>
		</div>
	);
}

export default React.memo(Skills);
