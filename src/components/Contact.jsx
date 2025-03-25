import React from "react";

function Contact(props) {
    return (
      <div className="container contact">
        <h1>Contact Me</h1>
        <p>
          If you'd like to get in touch, please reach out via email or LinkedIn.
        </p>
        <ul>
          <li>
            Email:
            <a href="mailto: jtzw21@gmail.com" target="_blank">
              Jtzw21@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:
            <a href="https://www.linkedin.com/in/wushington/" target="_blank">
              Wushington
            </a>
          </li>
          <li>
            GitHub:
            <a href="https://github.com/Wushington" target="_blank">
              Wushington
            </a>
          </li>
        </ul>
      </div>
    );
}

export default Contact;