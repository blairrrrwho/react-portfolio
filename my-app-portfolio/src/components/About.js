import React from 'react';
let aboutMePhoto = "/assets/aboutMePhoto.jpg";

export default function About() {
  return (
    <div className="container p-4">
      <h1 className="titleheader">About</h1>
      <img className='imgOfMe' src={process.env.PUBLIC_URL+aboutMePhoto} alt="About Me Photo" height={250}></img> <br></br>
      <p className="p-4 mb-5">
        Hi! My name is Blair Millet.  
        I've been in Atlana, Georgia the last five years and recently moved back home to Louisiana.
        I'm attending a Full Stack Web Development Bootcamp through the Georgia Institute of Technology and 
        will be starting my job search with my new career as a Full Stack Developer. <br></br>
        <br></br>
        This site is my portfolio, built with react. Here and by using the navbar, you will find 
        a collection of projects I have completed, those currently in progress, the option to download my resume, 
        various ways to get in contact, and a form to send a message if you'd like. 
      </p>
    </div>
  );
}