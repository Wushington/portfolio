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
				<section
					id="about"
					className="panel surface-panel surface-panel--content hero-panel"
				>
					<About />
				</section>
			)}
			{activeSection === "projects" && (
				<section
					id="projects"
					className="panel surface-panel surface-panel--content"
				>
					<Projects />
				</section>
			)}
			{activeSection === "skills" && (
				<section
					id="skills"
					className="panel surface-panel surface-panel--content"
				>
					<Skills />
				</section>
			)}
			{activeSection === "certificates" && (
				<section
					id="certificates"
					className="panel surface-panel surface-panel--content"
				>
					<Certificates />
				</section>
			)}
			{activeSection === "feedback" && (
				<section
					id="feedback"
					className="panel surface-panel surface-panel--content"
				>
					<Feedback />
				</section>
			)}
			{/* contact section removed - contact info moved to profile */}
		</div>
	);
}

export default Content;
