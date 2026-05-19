import React from "react";
import { DiAtom } from "react-icons/di";

function About() {
	return (
		<div className="about">
			<p className="section-kicker">about me</p>
			<div className="hero-meta">24 years / New York, USA</div>
			<h2 className="hero-title">No idea what to put here but it looks cool</h2>
			<div className="about-copy">
				<p>Describe what I do...</p>
			</div>
			<div className="services-grid">
				<article className="service-card">
					<div className="service-icon">
						{/* placeholder icon */}
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
