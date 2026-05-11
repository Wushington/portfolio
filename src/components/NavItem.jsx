import React from "react";

function NavItem(props) {
	return (
		<li className="nav-item">
			<i className={`nav-icon ${props.icon}`}></i>
			<a href={props.href} className="nav-link">
				{props.text}
			</a>
		</li>
	);
}

export default NavItem;
