import React from "react";
import emailLogo from "../assets/email-logo.jpg";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.webp";

const CONTACT_LINKS = [
	{
		label: "Email",
		href: "mailto: jtzw21@gmail.com",
		logo: emailLogo,
		alt: "Email logo",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/wushington/",
		logo: linkedinLogo,
		alt: "LinkedIn logo",
	},
	{
		label: "GitHub",
		href: "https://github.com/Wushington",
		logo: githubLogo,
		alt: "GitHub logo",
	},
];

function Contact() {
	return (
		<div className="contact">
			<h1>Contact</h1>
			<p className="contact-subtitle">
				Feel free to reach out through any of the following platforms:
			</p>
			<div className="contact-links">
				{/* {CONTACT_LINKS.map((contact) => (
					
				))} */}
			</div>
		</div>
	);
}

export default Contact;