import React from "react";
import { FaFileDownload } from "react-icons/fa";
import "../index.css"

function Resume() {
  return (
    <div className="columns container p-4 mb-5">
      <h1>Resume:</h1> <br></br>
      <a
        className="button resume m-3"
        href={process.env.PUBLIC_URL + "/assets/Blair Millet - Resume.pdf"}
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
        JavaScript ES6+<br></br>
        React <br></br>
        jQuery <br></br>
        Responsive / Mobile First Web Design <br></br>
        Bootstrap, Tailwind, Bulma, Handlebars <br></br>
      </p> <br></br>

      <h3>Back-End Proficiencies</h3>
      <p>
        Web APIs, Third-Party APIs <br></br>
        Server-Side APIs, REST APIs <br></br>
        Node.js <br></br>
        Express.js <br></br>
        SQL, NoSQL, <br></br>
        MySQL, Sequelize <br></br>
        MongoDB, Mongoose ODM, MongoDB Atlas <br></br>
        Apollo Server, GraphSQL <br></br>
        Data Structures <br></br>
      </p> <br></br>

      <h3>Full-Stack Proficiencies</h3>
      <p>
        MERN Stack<br></br>
        Asynchronous Programming
        Model-View-Controller - MVC <br></br>
        Object-Oriented Programming - OOP <br></br>
        Object-Relational Mapping - ORM <br></br>
        Content Management Systems - CMS <br></br>
        Agile Project Management <br></br>
      </p> <br></br>

      <h3>Other</h3>
      <p>
        Git <br></br>
        GitFlow <br></br>
        Technical Documentation, Markdown <br></br>
        GitHub, GitHub Pages <br></br>
        Heroku <br></br>
        NPM <br></br>
      </p>

    </div>
  );
}

export default Resume;