import React from "react";

const SKILL_GROUPS = [
	{
		title: "Frontend",
		items: ["React", "JavaScript", "CSS", "Responsive layouts"],
	},
	{
		title: "Workflow",
		items: ["Vite", "Git", "Accessible UI", "Iteration"],
	},
	{
		title: "Next up",
		items: ["Motion", "Design polish", "Case studies", "CMS"],
	},
];

function Skills() {
	return (
		<div className="skills">
			<p className="section-kicker">skills</p>
			<h2>Technical Skills</h2>
			<div className="skill-grid">
				{SKILL_GROUPS.map((group) => (
					<article key={group.title} className="skill-group">
						<h3>{group.title}</h3>
						<div className="skill-pill-list">
							{group.items.map((item) => (
								<span key={item} className="skill-pill">
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
