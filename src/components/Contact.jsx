import React from "react";
import emailLogo from "../assets/link-icon.png";
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
			<h1>Contact Me</h1>
			<p className="contact-subtitle">
				Feel free to reach out through any of the following platforms
			</p>
			<div className="contact-grid">
				{CONTACT_LINKS.map((contact) => (
					<a
						key={contact.label}
						href={contact.href}
						target={contact.label === "Email" ? undefined : "_blank"}
						rel={contact.label === "Email" ? undefined : "noopener noreferrer"}
						className="contact-card"
						title={contact.label}
					>
						<div className="contact-card-logo">
							<img
								src={contact.logo}
								alt={contact.alt}
								className="contact-icon"
							/>
						</div>
						<div className="contact-card-copy">
							<p className="contact-card-label">{contact.label}</p>
							<p className="contact-card-value">
								{contact.label === "Email" ?
									"jtzw21@gmail.com"
								: contact.label === "LinkedIn" ?
									"linkedin.com/in/wushington"
								:	"github.com/Wushington"}
							</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}

export default Contact;
