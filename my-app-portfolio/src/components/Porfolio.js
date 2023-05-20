import React from 'react';
import { FaGithub } from "react-icons/fa";
let techBlogPhoto = "/assets/TechBlog.png";
let abmrPhoto = "/assets/ABMR.png";
let employeeTrackerPhoto = "/assets/EmployeeTracker.png";
let noteTakerExpressPhoto = "/assets/NoteTakerExpress.png";
let astrnmyPhoto = "/assets/astrnmy.png";
let weatherDashboardPhoto = "/assets/WeatherDashboard.png"
let socialNetworkAPIPhoto = "/assets/SocialNetworkAPI.png";
let eCommerceBackendPhoto = "/assets/ECommerceBackend.png";
let pwGeneratorPhoto = "/assets/PasswordGenerator.png";


export default function Portfolio() {
  return (
    <div className="container">
      <h1 className="titleheader">Portfolio</h1>
      <p className="titleheader">

      </p>
      <br></br>

      {/* <!-- Topic Cards --> */}
      <div id="cards_landscape_wrap-2">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src="https://another-mvc-tech-blog.herokuapp.com/" alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Title 01</h6>
                      <p></p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src="https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg" alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Title 02</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src="https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png" alt="" />
                    </div>

                    <div class="text-container">
                      <h6>Title 03</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src="https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg" alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Title 04</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MVC Tech Blog */}
      <a href="https://another-mvc-tech-blog.herokuapp.com/"
        target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + techBlogPhoto} alt="Tech Blog" height={400}></img> Tech Blog</a>
      <a href="https://github.com/blairrrrwho/mvc-tech-blog"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br><br></br>

      {/* Another Bad Music Review */}
      <a href="https://another-bad-music-review-woo.herokuapp.com/"
        target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + abmrPhoto} alt="ABMR" height={350}></img>
        Another Bad Music Review
      </a>
      <a href="https://github.com/blairrrrwho/another-bad-music-review"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br>

      {/* Employee Tracker */}
      <a href="https://github.com/blairrrrwho/employee-tracker-mysql"
        target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + employeeTrackerPhoto} alt="Employee Tracker" height={350}></img>
        Employee Tracker</a>
      <a href="https://github.com/blairrrrwho/employee-tracker-mysql"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br><br></br>

      {/* Note Taker Express */}
      <a href="https://incredible-note-taker-express.herokuapp.com/"
        target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + noteTakerExpressPhoto} alt="Note Taker Express" height={350}></img>
        Note Taker Express
      </a>
      <a href="https://github.com/blairrrrwho/note-taker-express"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br><br></br>

      {/* astRnMy */}
      <br></br><br></br>
      <a href="https://blairrrrwho.github.io/astrnmy/"
        target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + astrnmyPhoto} alt="astRnMy" height={350}></img>
        astRnMy      </a>
      <a href="https://github.com/blairrrrwho/astrnmy"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br> <br></br>

      {/* Weather Dashboard */}
      <a href="https://blairrrrwho.github.io/another-api-weather-dashboard/"
        target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + weatherDashboardPhoto} alt="Weather Dashboard" height={350}></img>
        Weather Dashboard      </a>
      <a href="https://github.com/blairrrrwho/another-api-weather-dashboard"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br> <br></br>

      {/* Social Network API */}
      <a href="https://github.com/blairrrrwho/neat-social-network-api"
        target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + socialNetworkAPIPhoto} alt="Social Network API" height={350}></img>
        Social Network API      </a>
      <a href="https://github.com/blairrrrwho/neat-social-network-api"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} /></a>
      <br></br><br></br>

      {/* E-Commerce Backend */}
      <a href="https://github.com/blairrrrwho/orm-e-commerce-backend"
        target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + eCommerceBackendPhoto} alt="E-Commerce Backend" height={350}></img>
        E-Commerce Backend      </a>
      <a href="https://github.com/blairrrrwho/orm-e-commerce-backend"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br><br></br>

      {/* The Friendly Zebra Password Generator */}
      <a href="https://blairrrrwho.github.io/the-friendly-zebra-password-generator/"
        target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + pwGeneratorPhoto} alt="Password Generator" height={350}></img>
        Password Generator      </a>
      <a href="https://github.com/blairrrrwho/the-friendly-zebra-password-generator"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
      <br></br><br></br>
    </div>

  );
}