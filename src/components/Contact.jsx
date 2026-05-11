import React from "react";
import emailLogo from "../assets/email-logo.jpg";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.webp";

const CONTACT_LINKS = [
	{
		label: "Email",
		href: "mailto:jtzw21@gmail.com",
		type: "email",
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
		<div className="container contact">
			<h1>Contact Me</h1>
			<p className="contact-intro">
				If you'd like to get in touch, here are the fastest ways to reach me.
			</p>

			<div className="contact-grid">
				{CONTACT_LINKS.map((contact) => (
					<a
						key={contact.label}
						className={`contact-card contact-card-${contact.type || "social"}`}
						href={contact.href}
						target={contact.type === "email" ? undefined : "_blank"}
						rel={contact.type === "email" ? undefined : "noopener noreferrer"}
					>
						<div className="contact-card-logo" aria-hidden="true">
							<img src={contact.logo} alt={contact.alt} />
						</div>
						<div className="contact-card-copy">
							<p className="contact-card-label">{contact.label}</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}

export default Contact;
