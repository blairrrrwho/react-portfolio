import React from 'react';
let techBlogPhoto = "/assets/TechBlog.png";
let abmrPhoto = "/assets/ABMR.png";
let noteTakerExpressPhoto = "/assets/NoteTakerExpress.png";
let employeeTrackerPhoto = "/assets/EmployeeTracker.png";
let socialNetworkAPIPhoto = "/assets/SocialNetworkAPI.png";
let eCommerceBackendPhoto = "/assets/ECommerceBackend.png";
let astrnmyPhoto = "/assets/astrnmy.png";
let weatherDashboardPhoto = "/assets/WeatherDashboard.png"
let pwGeneratorPhoto = "/assets/PasswordGenerator.png";


export default function Portfolio() {
  return (
    <div className="container p-4">
      <h1>Portfolio</h1>
      <section id="projects" className="pb-5">
        <div className="container">
          <h5 className="section-title h2">My Projects</h5>
          <div className="row">

            {/* MVC Tech Blog */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside card-body">
                    <img className="img-fluid card card-body" src={process.env.PUBLIC_URL + techBlogPhoto}
                      alt="Tech Blog"></img>
                    <h4 className="card-title">Tech Blog</h4>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Tech Blog</h4>
                        <p className="card-text">
                          <br></br>
                          This is a MySQL database and CMS-style (content management system) blog that follows the
                          Model-View-Controller (MVC) paradigm in its architectural structure, using Handlebars.js as the
                          templating language, Sequelize as the ORM (Object-Relational Mapping), and the express-session npm
                          package for authentication.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="https://another-mvc-tech-blog.herokuapp.com/" className="btn btn-dark m-1"
                              target="_blank" rel="noopener noreferrer">
                              Live Site</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="https://github.com/blairrrrwho/mvc-tech-blog" className="btn btn-warning m-1"
                              target="_blank" rel="noopener noreferrer">
                              Code</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Another Bad Music Review */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside card-body">
                    <img className="img-fluid card card-body" src={process.env.PUBLIC_URL + abmrPhoto}
                      alt="Another Bad Music Review"></img>
                    <h4 className="card-title">Another Bad Music Review</h4>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Another Bad Music Review</h4>
                        <p className="card-text">
                          <br></br>
                          Full-stack web application -- a music blog that allows users to view, post,
                          and comment on blogs all of which are tailored to the music world.
                        </p><br></br>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="https://another-bad-music-review-woo.herokuapp.com/"
                              target="_blank" rel="noopener noreferrer" className="btn btn-dark m-1">
                              Live Site</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="https://github.com/blairrrrwho/employee-tracker-mysql"
                              target="_blank" rel="noopener noreferrer" className="btn btn-warning m-1">
                              Code</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note Taker Express */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside card-body">
                    <img className="img-fluid card card-body" src={process.env.PUBLIC_URL + noteTakerExpressPhoto}
                      alt="Note Taker Express" ></img>
                    <h4 className="card-title">Note Taker Express</h4>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Note Taker Express</h4>
                        <p className="card-text">
                          <br></br>
                          This is a web-based application that uses Node.js and Express.js to create a note taking
                          app that lets the user create, store, and delete notes.
                        </p><br></br>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="https://incredible-note-taker-express.herokuapp.com/"
                              target="_blank" rel="noopener noreferrer" className="btn btn-dark m-1">
                              Live Site</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="https://github.com/blairrrrwho/note-taker-express"
                              target="_blank" rel="noopener noreferrer" className="btn btn-warning m-1">
                              Code</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note Taker Express */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside card-body">
                    <img className="img-fluid card card-body" src={process.env.PUBLIC_URL + employeeTrackerPhoto}
                      alt="EmployeeTracker"></img>
                    <h4 className="card-title">Employee Tracker</h4>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Employee Tracker (Back-End)</h4>
                        <p className="card-text">
                          <br></br>
                          This application is a back-end solution for managing a company's employees using
                          Node.js, inquirer, and MySQL.
                        </p><br></br>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="https://github.com/blairrrrwho/employee-tracker-mysql"
                              target="_blank" rel="noopener noreferrer" className="btn btn-warning m-1">
                              Code</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network API */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside card-body">
                    <img className="img-fluid card card-body" src={process.env.PUBLIC_URL + socialNetworkAPIPhoto}
                      alt="SocialNetworkAPI"></img>
                    <h4 className="card-title">Social Network API</h4>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Social Network API (Back-End)</h4>
                        <p className="card-text">
                          <br></br>
                          This is a social network backend that utilizes MongoDB, Mongoose ORM and Express.js
                          to CRUD and define relationships between collections stored in the mongodb and then
                          served by a Express.js server.
                        </p><br></br>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="https://github.com/blairrrrwho/neat-social-network-api"
                              target="_blank" rel="noopener noreferrer" className="btn btn-warning m-1">
                              Code</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-Commerce Back-End */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside card-body">
                    <img className="img-fluid card card-body" src={process.env.PUBLIC_URL + eCommerceBackendPhoto}
                      alt="ECommerceBackend"></img>
                    <h4 className="card-title">E-Commerce Back-End</h4>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">E-Commerce Back-End</h4>
                        <p className="card-text">
                          <br></br>
                          Object-Relational Mapping (ORM): E-Commerce Back-End - This is a MySQL database and
                          application back-end built for an e-commerce website.
                          It was built using MySQL2, Express.js, Sequelize and dotenv.
                          This project focuses on routes and making changes to a MySQL database using POST, PUT,
                          and DELETE requests.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="https://github.com/blairrrrwho/orm-e-commerce-backend"
                              target="_blank" rel="noopener noreferrer" className="btn btn-warning m-1">
                              Code</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* astRnMy */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside card-body">
                    <img className="img-fluid card card-body" src={process.env.PUBLIC_URL + astrnmyPhoto}
                      alt="astRnMy" ></img>
                    <h4 className="card-title">astRnMy</h4>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">astRnMy</h4>
                        <p className="card-text">
                          <br></br>
                          This is a fun astronomy photo of the day application that simultaneously shows you
                          the DNA of a Rick and Morty character that has visited the respected area in space!
                        </p> <br></br>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="https://blairrrrwho.github.io/astrnmy/"
                              target="_blank" rel="noopener noreferrer" className="btn btn-dark m-1">
                              Live Site</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="https://github.com/blairrrrwho/astrnmy"
                              target="_blank" rel="noopener noreferrer" className="btn btn-warning m-1">
                              Code</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Dashboard */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside card-body">
                    <img className="img-fluid card card-body" src={process.env.PUBLIC_URL + weatherDashboardPhoto}
                      alt="Weather Dashboard" ></img>
                    <h4 className="card-title">Weather Dashboard</h4>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Weather Dashboard</h4>
                        <p className="card-text">
                          <br></br>
                          This is a basic application that allows the user to input any city and receive information
                          about the current weather, as well as a predicted five-day weather forecast.
                        </p> <br></br>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="https://blairrrrwho.github.io/another-api-weather-dashboard/"
                              target="_blank" rel="noopener noreferrer" className="btn btn-dark m-1">
                              Live Site</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="https://github.com/blairrrrwho/another-api-weather-dashboard"
                              target="_blank" rel="noopener noreferrer" className="btn btn-warning m-1">
                              Code</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Friendly Zebra Password Generator */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside card-body">
                    <img className="img-fluid card card-body" src={process.env.PUBLIC_URL + pwGeneratorPhoto}
                      alt="Password Generator"></img>
                    <h4 className="card-title">Password Generator</h4>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Password Generator</h4>
                        <p className="card-text">
                          <br></br>
                          This JavaScript web application serves the purpose of generating a random password based
                          off of the criteria chosen by the user via alerts, prompts and confirms that pop up on the page.
                          The complexity of the password is strictly determined by the user's preferences.
                        </p><br></br>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="https://blairrrrwho.github.io/the-friendly-zebra-password-generator/"
                              target="_blank" rel="noopener noreferrer" className="btn btn-dark m-1">
                              Live Site</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="https://github.com/blairrrrwho/the-friendly-zebra-password-generator"
                              target="_blank" rel="noopener noreferrer" className="btn btn-warning m-1">
                              Code</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>

  );
}