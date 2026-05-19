import React from "react";

function About() {
	return (
		<div className="about">
			<p className="section-kicker">about me</p>
			<div className="hero-meta">24 years / New York, USA</div>
			<h2 className="hero-title">A rough red-and-black portfolio template.</h2>
			<div className="about-copy">
				<p>
					Prolific, full stack web developer with a passion for sharp visuals,
					structured layouts, and clean, practical interfaces. This is the rough
					template layer for the portfolio, designed to be customized later.
				</p>
			</div>
			<div className="services-grid">
				<article className="service-card">
					<div className="service-icon">▢</div>
					<h3>Development</h3>
					<p>
						Fast, custom builds for portfolio pages, product sites, and internal
						tools.
					</p>
				</article>
				<article className="service-card">
					<div className="service-icon">↗</div>
					<h3>Iteration</h3>
					<p>
						Placeholder structure that is easy to replace with your own copy and
						visuals later.
					</p>
				</article>
			</div>
		</div>
	);
}

export default React.memo(About);
