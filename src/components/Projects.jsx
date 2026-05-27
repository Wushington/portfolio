import React, { useState } from "react";
import { PROJECTS, CATEGORY_ORDER } from "../data/projects.js";

function Projects() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredProjects = PROJECTS.filter((project) => {
		return selectedCategory === "All" || project.type === selectedCategory;
	});

	return (
		<div className="content">
			<p className="section-kicker eyebrow">selected works</p>
			<h2>Personal projects</h2>
			<p className="content-subtitle">
				This collection of personal projects does not include school or
				professional work
			</p>
			<span className="divider" />
			<div
				className="project-types"
				role="tablist"
				aria-label="Project categories"
			>
				{CATEGORY_ORDER.map((category) => (
					<button
						key={category}
						type="button"
						className={`project-type-button action-button action-button--chip ${selectedCategory === category ? "is-selected" : ""}`}
						onClick={() => setSelectedCategory(category)}
						aria-pressed={selectedCategory === category}
					>
						{category}
					</button>
				))}
			</div>

			<div className="project-grid">
				{filteredProjects.map((project) => (
					<article className="panel-card surface-card" key={project.title}>
						<p className="project-card-type eyebrow">{project.type}</p>
						<h2>{project.title}</h2>
						<p>{project.description}</p>
						<p className="project-card-tech">{project.tech}</p>
						<div className="project-card-links">
							{project.githubUrl ?
								<a
									className="link action-link"
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
							:	null}
							{project.liveURL ?
								<a
									className="link action-link"
									href={project.liveURL}
									target="_blank"
									rel="noopener noreferrer"
								>
									View
								</a>
							:	null}
						</div>
					</article>
				))}
			</div>
			{filteredProjects.length === 0 ?
				<p className="projects-empty">No projects match this filter yet.</p>
			:	null}
		</div>
	);
}

export default Projects;
