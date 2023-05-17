import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaStackOverflow, FaSpotify, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="footer rows">
        <div className="content has-text-centered">
          <hr />

          <div class="row-is-full content has-text-centered">
            &copy; 2023 blair's big band
          </div>

          <div>
            <a href="mailto:blair10324@gmail.com" title="Email"
              target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>

            <a href="https://github.com/blairrrrwho" title="GitHub Profile"
              target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="www.linkedin.com/in/blair-millet" title="LinkedIn Profile"
              target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://stackoverflow.com/users/20580971/blair-millet" title="Stack Overflow"
              target="_blank" rel="noopener noreferrer">
              <FaStackOverflow />
            </a>

            <a href="https://open.spotify.com/user/blairrrr4?si=05783944e8694dc7" title="Spotify Profile"
              target="_blank" rel="noopener noreferrer">
              <FaSpotify />
            </a>

            <a href="https://twitter.com/blairrrrwho" title="Twitter Profile"
              target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>

            <a href="https://www.instagram.com/blairrrrwho/" title="Instagram Profile"
              target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>

          <hr />

        </div>
      </footer>
    </div >
  );
}
