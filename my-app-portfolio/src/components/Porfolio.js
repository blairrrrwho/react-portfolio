import React from 'react';
import { FaGithub } from "react-icons/fa";


export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
      </p>
      <br></br>

      <a href="https://another-mvc-tech-blog.herokuapp.com/"
        target="_blank" rel="noopener noreferrer">
        <div className="overlay"><span>Tech Blog</span></div>
      </a>
      <a href="https://github.com/blairrrrwho/mvc-tech-blog"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br>
      <br></br>

      <a href="https://blairrrrwho.github.io/astrnmy/"
        target="_blank" rel="noopener noreferrer">
        <div className="overlay"><span>astRnMy</span></div>
      </a>
      <a href="https://github.com/blairrrrwho/astrnmy"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br> <br></br>

      <a href="https://another-bad-music-review-woo.herokuapp.com/"
        target="_blank" rel="noopener noreferrer">
        <div className="overlay"><span>Another Bad Music Review</span></div>
      </a>
      <a href="https://github.com/blairrrrwho/another-bad-music-review"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br><br></br>

      <a href="     https://github.com/blairrrrwho/employee-tracker-mysql"
        target="_blank" rel="noopener noreferrer">
        <div className="overlay"><span>Employee Tracker</span></div>
      </a>
      <a href="https://github.com/blairrrrwho/employee-tracker-mysql"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br><br></br>

      <a href="https://incredible-note-taker-express.herokuapp.com/"
        target="_blank" rel="noopener noreferrer">
        <div className="overlay"><span>Note Taker Express</span></div>
      </a>
      <a href="https://github.com/blairrrrwho/note-taker-express"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br><br></br>

      <a href="https://github.com/blairrrrwho/neat-social-network-api"
        target="_blank" rel="noopener noreferrer">
        <div className="overlay"><span>Social Network API - Backend with MongoDB</span></div>
      </a>
      <a href="https://github.com/blairrrrwho/neat-social-network-api"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} /></a>
      <br></br><br></br>

      <a href="https://github.com/blairrrrwho/orm-e-commerce-backend"
        target="_blank" rel="noopener noreferrer">
        <div className="overlay"><span>E-Commerce Backend - ORM</span></div>
      </a>
      <a href="https://github.com/blairrrrwho/orm-e-commerce-backend"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br><br></br>

      <a href="https://blairrrrwho.github.io/the-friendly-zebra-password-generator/"
        target="_blank" rel="noopener noreferrer">
        <div className="overlay"><span>Password Generator</span></div>
      </a>
      <a href="https://github.com/blairrrrwho/the-friendly-zebra-password-generator"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br><br></br>
    </div>

  );
}