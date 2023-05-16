import React from 'react';
let aboutMePhoto = "/assets/aboutMePhoto.jpg";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img src={process.env.PUBLIC_URL+aboutMePhoto} alt="About Me Photo" height={250}></img>
      <p>
        Hi! My name is Blair Millet.  
        I lived in Atlana, Georgia the last five years and just moved back home to Baton Rouge, Louisiana - where I grew up.
        Recently, I began attending a Full Stack Web Development Bootcamp through Georgia Institute of Technology - Georgia Tech - and am on my last stretch to the
        finish line. From there, I will be starting my job search with a career as a Full Stack Developer. 
        This page is my portfolio. Here you can find multiple projects I have completed and those I'm currently working on, along with my resume and contact information. 
      </p>
    </div>
  );
}