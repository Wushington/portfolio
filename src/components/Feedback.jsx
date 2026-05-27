import React from "react";

function Feedback() {
    return (
        <div className="feedback">
            <p className="section-kicker">feedback</p>
            <h2>Feedback</h2>
            <p className="feedback-subtitle">
                I would love to hear your feedback on my website! If you have any
                suggestions for improvement, please feel free to reach out to me via
                email or through my social media channels. Your feedback is greatly
                appreciated and will help me make my website better for everyone.
            </p>
        </div>
    );
}

export default React.memo(Feedback);