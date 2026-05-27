import React from "react";

function NavItem({ onClick, label, index, isActive = false }) {
	return (
		<li className="nav-item">
			<button
				type="button"
				className={`nav-link action-button action-button--nav ${isActive ? "is-active" : ""}`}
				onClick={onClick}
				aria-pressed={isActive}
				aria-label={label}
			>
				<span className="nav-index">0{index}</span>
				<span className="nav-label">{label}</span>
			</button>
		</li>
	);
}

export default React.memo(NavItem);
