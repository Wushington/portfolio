import React from "react";
import NavItem from "./NavItem.jsx";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Credits from "./Credits.jsx";

function App() {
	return (
		<>
			<div className="container header">
				<header className="d-flex justify-content-center py-3">
					<ul className="nav nav-pills">
						<NavItem icon="" href="#home" text="Home" />
						<NavItem icon="" href="#projects" text="Projects" />
						<NavItem icon="" href="#contact" text="Contact" />
					</ul>
				</header>
			</div>
			<section id="home" className="container content">
				<Home />
			</section>
			<section id="projects" className="container content">
				<Projects />
			</section>
			<section id="contact" className="container content">
				<Contact />
			</section>
			<footer className="container page-footer">
				<Credits />
			</footer>
		</>
	);
}

export default App;
