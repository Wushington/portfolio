import React from "react";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
// import About from "./About.jsx";
import Contact from "./Contact.jsx";

// Define static components outside the Content component
const HomePage = React.memo(() => <Home />);
const ProjectsPage = React.memo(() => <Projects />);
// const AboutPage = React.memo(() => <div>About Me</div>);
const ContactPage = React.memo(() => <Contact />);

function Content(props) {
    // Map page names to components
    const pages = {
      Home: <HomePage />,
      Projects: <ProjectsPage />,
      // About: <About />,
      Contact: <Contact />,
    };

    return (
      <>
        <div className="container content">
          {/* Render the component based on the page prop */}
          {pages[props.page] || <div>Page not found</div>}
        </div>
      </>
    );
}

export default Content;
