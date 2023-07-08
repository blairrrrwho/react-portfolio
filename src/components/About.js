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
        I just completed the Full Stack Flex Web Development Coding Bootcamp through Georgia Institute of Technology and 
        have officially began my new career as a Full Stack Developer. <br></br>
        <br></br>
        Welcome to my react portfolio! By using the navbar, you will find an about me section,
        a collection of projects I've completed, a resume section where you can download my resume
        and view a list of my current skills, and a contact section which includes a form to contact me directly. 
        If you'd like to reach out on your own, the footer contains various ways to find me. 
      </p>
    </div>
  );
}