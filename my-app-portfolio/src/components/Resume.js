import React from "react";
import { FaFileDownload } from "react-icons/fa";

function Resume() {
  return (
    <div className="columns container p-4 mb-5">
      <h1 className="titleheader">Resume</h1> <br></br>
      <a
        className="button m-3"
        href={process.env.PUBLIC_URL + "/assets/ResumeLinkedIn_blair-millet.pdf"}
        target="_blank" rel="noopener noreferrer">
        <FaFileDownload />
        <p>Download My Resume</p>
      </a>
      <hr />
      <h1 className="content is-medium titleheader mb-4">Skills</h1>


      asd;faksd;f asdf Node.js, Express.js <br></br>
      MySQL, MongoDB <br></br>
      HTML, CSS, Javascript <br></br>
      React <br></br>
      Markdown <br></br>
      Git <br></br>
      Github Repo Management


    </div>
  );
}

export default Resume;