import React from 'react';
let aboutMePhoto = "/assets/AboutMePhoto.png";

export default function About() {
  return (
    <div className="container p-4">
      <h1>About</h1>
      <img className='imgOfMe' src={process.env.PUBLIC_URL + aboutMePhoto} alt="Blair Millet" 
      height={250}></img> <br></br>
      <p className="p-4 mb-2">
        Hi! My name is Blair Millet.  
        I've been in Atlana, Georgia the last five years and recently moved back home to Louisiana.
        I'm attending a Full Stack Web Development Bootcamp through the Georgia Institute of Technology and 
        will be starting my job search with my new career as a Full Stack Developer. <br></br>
        <br></br>
        This site is my portfolio, built with react. By using the navbar, you will find an about me section,
        a collection of projects I've completed, a resume section with the option to download my resume and a skills section, 
        a contact form to send a message directly to my email, 
        and various ways to get in contact with me - listed in the footer. 
      </p>
    </div>
  );
}