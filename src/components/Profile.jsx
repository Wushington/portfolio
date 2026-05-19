import React from "react";
import profileImage from "../assets/Jonathan_Wu-1.jpg";
import {
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineDownload,
} from "react-icons/ai";

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
			<div className="profile-content">
				<h1>Jonathan Wu</h1>
				<p className="profile-role">Developer</p>
				<div className="social-icons">
					<a
						href="https://github.com/Wushington"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<AiFillGithub className="icon-light" size={24} aria-hidden="true" />
					</a>
					<a
						href="https://www.linkedin.com/in/wushington/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<AiFillLinkedin
							className="icon-light"
							size={24}
							aria-hidden="true"
						/>
					</a>
				</div>
				<p>Email: jtzw21@gmail.com</p>
				<p>Phone: +1 (631)-637-0034</p>
				<a
					className="profile-button"
					href="./Resume_Software.pdf"
					download="jonathan_wu_resume.pdf"
				>
					Resume
					<AiOutlineDownload className="icon-light" aria-hidden="true" />
				</a>
			</div>
		</section>
	);
}

export default React.memo(Profile);
