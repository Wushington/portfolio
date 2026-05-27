import React from "react";
import CERTIFICATES from "../data/certificates.js";

function Certificates() {
	return (
		<div className="content">
			<p className="section-kicker eyebrow">certificates</p>
			<h2>Certifications</h2>
			<span className="divider" />
			<div className="certificate-list">
				{CERTIFICATES.map((certificate) => {
					const CertificateIcon = certificate.icon;

					return (
						<article className="panel-card surface-card" key={certificate.name}>
							<div className="certificate-card-header">
								<div
									className="certificate-icon-wrap surface-icon"
									aria-hidden="true"
								>
									<CertificateIcon className="certificate-icon" />
								</div>
								<div className="certificate-card-copy">
									<p className="certificate-card-type eyebrow">
										{certificate.type}
									</p>
									<h3>{certificate.name}</h3>
									{certificate.dateAcquired ?
										<p className="certificate-card-date">
											Acquired{" "}
											<time dateTime={certificate.dateAcquired}>
												{new Date(
													certificate.dateAcquired,
												).toLocaleDateString()}
											</time>
										</p>
									:	null}
								</div>
							</div>
							<a
								className="link action-link"
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
