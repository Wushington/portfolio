import React from "react";

function Feedback() {
	return (
		<div className="content">
			<p className="section-kicker eyebrow">feedback</p>
			<h2>Leave a comment</h2>
			<p className="content-subtitle">
				I would love to hear your feedback on my website! If you have any
				suggestions for improvement, please feel free to comment below or reach
				out to me via email.
			</p>
			<span className="divider" />
			<p>
				This section is a work in progress, but I am planning to implement a
				live feedback feature in the future. Stay tuned!
			</p>
		</div>
	);
}

export default React.memo(Feedback);
