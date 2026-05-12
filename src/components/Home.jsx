import React from "react";
import profileImage from "../assets/Jonathan_Wu-1.jpg";

function Home(props) {
	return (
		<div className="home">
			<div className="profile-image-container" style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
				<img src={profileImage} alt="Profile" className="profile-image" />
			</div>
			<h1>Jonathan Wu</h1>
			<p>This is a brief introduction about myself and my work.</p>
		</div>
	);
}

export default Home;
