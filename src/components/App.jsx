import React from 'react'
import NavItem from "./NavItem.jsx";

function App() {
  return (
    <>
      <div className="container">
        <header class="d-flex justify-content-center py-3">
          <ul class="nav nav-pills">
            <NavItem href="#home" text="Home" active={1} />
            <NavItem href="#projects" text="Projects" active={0} />
            <NavItem href="#about" text="About" active={0} />
            <NavItem href="#contact" text="Contact" active={0} />
          </ul>
        </header>
      </div>
      <div>
        <h1>Jonathan Wu</h1>
        <h2>Wushington</h2>
      </div>
    </>
  );
}

export default App
