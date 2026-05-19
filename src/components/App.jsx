import React, { useState } from "react";
import NavItem from "./NavItem.jsx";
import Profile from "./Profile.jsx";
// import Credits from "./Credits.jsx";
import Content from "./Content.jsx";

const NAV_ITEMS = [
	{ id: "about", label: "About" },
	{ id: "projects", label: "Projects" },
	{ id: "skills", label: "Skills" },
];

function App() {
	const [active, setActive] = useState("about");

	return (
		<>
			<div className="page-shell">
				<div className="page-frame">
					<aside className="profile-column">
						<Profile />
					</aside>
					<main className="content-column">
						<Content activeSection={active} />
					</main>
					<nav className="nav-rail" aria-label="Section navigation">
						<ul className="nav-list">
							<NavItem
								key="about"
								onClick={() => setActive("about")}
								isActive={active === "about"}
								label="About"
								index={1}
							/>
							<NavItem
								key="projects"
								onClick={() => setActive("projects")}
								isActive={active === "projects"}
								label="Projects"
								index={2}
							/>
							<NavItem
								key="skills"
								onClick={() => setActive("skills")}
								isActive={active === "skills"}
								label="Skills"
								index={3}
							/>
						</ul>
					</nav>
				</div>
			</div>
			{/* <footer className="container page-footer">
				<Credits />
			</footer> */}
		</>
	);
}

export default App;
