import React from "react";
import { DiAtom } from "react-icons/di";

import { AGE } from "../data/age.js";

function About() {
	return (
		<div className="about">
			<p className="section-kicker">about me</p>
			<div className="hero-meta"> {AGE} years old / New York, USA</div>
			<h2 className="hero-title">Welcome to my website! Still WIP</h2>
			<div className="about-copy">
				<p>Describe what I do... A little about myself (hobbies, interests, etc.)...</p>
			</div>
			<div className="services-grid">
				{/* placeholder service card */}
				<article className="service-card">
					<div className="service-icon">
						<DiAtom size={32} />
					</div>
					<h3>Placeholder</h3>
					<p>Placeholder</p>
				</article>
			</div>
		</div>
	);
}

export default React.memo(About);
