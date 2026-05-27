import React from "react";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Certificates from "./Certificates.jsx";
import Feedback from "./Feedback.jsx";

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
			{activeSection === "certificates" && (
				<section id="certificates" className="panel section-panel">
					<Certificates />
				</section>
			)}
			{activeSection === "feedback" && (
				<section id="feedback" className="panel section-panel">
					<Feedback />
				</section>
			)}
			{/* contact section removed - contact info moved to profile */}
		</div>
	);
}

export default Content;
