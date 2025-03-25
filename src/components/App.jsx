import React from 'react'
import NavItem from "./NavItem.jsx";
import Content from "./Content.jsx";

function App() {
  return (
    <>
      <div className="container header">
        <header class="d-flex justify-content-center py-3">
          <ul class="nav nav-pills">
            <NavItem icon="" href="#home" active={1} text="Home" />
            <NavItem icon="" href="#projects" active={0} text="Projects" />
            <NavItem icon="" href="#about" active={0} text="About" />
            <NavItem icon="" href="#contact" active={0} text="Contact" />
          </ul>
        </header>
      </div>
      <Content page="Home"></Content>
    </>
  );
}

export default App
