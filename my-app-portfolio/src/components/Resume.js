// import React from 'react';

// // WHEN I am presented with the Resume section
// // THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

// export default function Resume() {
//   return (
//     <div>
//       <h1>Resume Page</h1>
//       <p>
//         Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
//         Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
//         mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
//         lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
//         imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
//         in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
//       </p>
//     </div>
//   );
// }

// Link to a downloadable resume
// a list of the developer’s proficiencies

import React from "react";
import { FaFileDownload } from "react-icons/fa";

function Resume() {
  return (
    <div className="columns">
      <h1 className="">Resume</h1> <br></br>
      <a
        className="button is-primary"
        href={process.env.PUBLIC_URL + "/assets/ResumeLinkedIn_blair-millet.pdf"}
        target="_blank" rel="noopener noreferrer">
        <FaFileDownload />
        <p>Download My Resume</p>
      </a>
      <hr />
      <h1 className="content is-medium">Skills</h1>

      <ul>
        <li>HTML, CSS, Javascript</li>
        <li>asd;faksd;f asdf Node.js, Express.js</li>
        <li>MySQL, MongoDB</li>
        <li>React, </li>
        <li>Markdown</li>
        <li>Git</li>
        <li>Github Repo Management</li>
      </ul>

    </div>
  );
}

export default Resume;