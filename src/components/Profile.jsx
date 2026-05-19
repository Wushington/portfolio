import React from "react";
import profileImage from "../assets/Jonathan_Wu-1.jpg";
import githubLogo from "../assets/github-logo.webp";
import linkedinLogo from "../assets/linkedin-logo.png";
import emailLogo from "../assets/link-icon.png";

function Profile() {
	return (
		<section className="profile-card">
			<div className="profile-image-container">
				<img
					src={profileImage}
					alt="Portrait of Jonathan Wu"
					className="profile-image"
				/>
			</div>
			<div className="profile-copy">
				<h1>Jonathan Wu</h1>
				<p className="profile-role">Developer</p>
				<p className="profile-summary">
					Building sharp, high-contrast web experiences with a focus on fast
					interfaces and clear structure.
				</p>
				<div className="social-icons">
					<a
						href="https://github.com/Wushington"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<img src={githubLogo} alt="" aria-hidden="true" />
					</a>
					<a
						href="https://www.linkedin.com/in/wushington/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<img src={linkedinLogo} alt="" aria-hidden="true" />
					</a>
					<a href="mailto:jtzw21@gmail.com" aria-label="Email">
						<img src={emailLogo} alt="" aria-hidden="true" />
					</a>
				</div>
				<a
					className="profile-button"
					href="/Resume_Software.pdf"
					download="resume.pdf"
				>
					Download Resume
				</a>
			</div>
		</section>
	);
}

export default React.memo(Profile);
