import React from "react";
import { FaFileDownload } from "react-icons/fa";
import "../index.css"

function Resume() {
  return (
    <div className="columns container p-4 mb-5">
      <h1>Resume:</h1> <br></br>
      <a
        className="button resume m-3"
        href={process.env.PUBLIC_URL + "/assets/ResumeLinkedIn_blair-millet.pdf"}
        target="_blank" rel="noopener noreferrer">
        <FaFileDownload />
        <p className="resume">Download My Resume</p>
      </a>
      <hr />
      <h1 className="content is-medium titleheader mb-4">Skills:</h1><br></br>

      <h3>Front-End Proficiencies</h3>
      <p>
        HTML <br></br>
        CSS <br></br>
        JavaScript <br></br>
        jQuery <br></br>
        Responsive Design <br></br>
        React <br></br>
        Bootstrap, Tailwind, Bulma <br></br>
      </p> <br></br>

      <h3>Back-End Proficiencies</h3>
      <p>
        Web APIs, Third-Party APIs, Server-Side APIs, REST APIs <br></br>
        Node.js <br></br>
        Express.js <br></br>
        MySQL, Sequelize <br></br>
        MongoDB, Mongoose <br></br>
        GraphSQL <br></br>
      </p> <br></br>

      <h3>Full-Stack Proficiencies</h3>
      <p>
        MERN <br></br>
      </p> <br></br>

      <h3>Other</h3>
      <p>
        Git <br></br>
        Markdown <br></br>
        GitHub Pages <br></br>
        Heroku <br></br>
        NPM <br></br>
      </p>

    </div>
  );
}

export default Resume;