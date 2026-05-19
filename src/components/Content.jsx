import React from "react";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";

function Content({ activeSection = "about" }) {
	return (
		<div className="content-panel">
			{activeSection === "about" && (
				<section id="about" className="panel hero-panel">
					<About />
				</section>
			)}
			{activeSection === "projects" && (
				<section id="projects" className="panel section-panel">
					<Projects />
				</section>
			)}
			{activeSection === "skills" && (
				<section id="skills" className="panel section-panel">
					<Skills />
				</section>
			)}
			{/* contact section removed - contact info moved to profile */}
		</div>
	);
}

export default Content;
