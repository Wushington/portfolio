import React from "react";
import { FaAws } from "react-icons/fa";

const CERTIFICATES = [
	{
		name: "AWS Certified Solutions Architect - Associate",
		type: "Amazon Web Services",
		badgeUrl: "https://www.credly.com/",
		icon: FaAws,
	},
];

function Certificates() {
	return (
		<div className="certificates">
			<p className="section-kicker">certificates</p>
			<h2>Certifications</h2>
			<p className="certificates-subtitle">
				Placeholder certification entries for now. Each card will eventually
				link to the badge URL.
			</p>
			<div className="certificate-grid">
				{CERTIFICATES.map((certificate) => {
					const CertificateIcon = certificate.icon;

					return (
						<article className="certificate-card" key={certificate.name}>
							<div className="certificate-card-header">
								<div className="certificate-icon-wrap" aria-hidden="true">
									<CertificateIcon size={28} />
								</div>
								<div className="certificate-card-copy">
									<p className="certificate-card-type">{certificate.type}</p>
									<h3>{certificate.name}</h3>
								</div>
							</div>
							<a
								className="certificate-card-link"
								href={certificate.badgeUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								View badge
							</a>
						</article>
					);
				})}
			</div>
		</div>
	);
}

export default React.memo(Certificates);
