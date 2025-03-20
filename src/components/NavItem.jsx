import React from "react";

function NavItem(props) {
    return (
      <li className="nav-item">
        <a href={props.href} className={`nav-link ${props.active ? 'active' : ''}`}>
          {props.text}
        </a>
      </li>
    );
}

export default NavItem;