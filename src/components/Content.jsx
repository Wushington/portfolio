import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

function Content() {
	return (
		<div className="container content">
			<Routes>
				<Route path="/" element={<Navigate to="/home" replace />} />
				<Route path="/home" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credits" element={<Credits />} />
				<Route path="*" element={<div>Page not found</div>} />
			</Routes>
		</div>
	);
}

export default Content;
