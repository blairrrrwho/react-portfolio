import React from 'react';
import { FaGithub } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
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


      <section id="projects" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">My Projects</h5>
          <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside card-body">
                    <img className=" img-fluid card card-body" src={process.env.PUBLIC_URL + techBlogPhoto}
                      alt="Tech Blog"></img>
                    <h4 className="card-title">Another Tech Blog</h4>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Another Tech Blog</h4>
                        <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            Code: <a href="https://github.com/blairrrrwho/mvc-tech-blog"
                              target="_blank" rel="noopener noreferrer">
                              <FaGithub className="m-3" size={42} />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="https://another-mvc-tech-blog.herokuapp.com/" className="btn btn-dark m-1">
                              Live Site</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="https://github.com/blairrrrwho/mvc-tech-blog" className="btn btn-warning m-1">
                              Code</a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-google"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"
                          alt="card"></img></p>
                        <h4 className="card-title">Sunlimetech</h4>
                        <p className="card-text">This is basic card with image on top, title, description and button.</p>
                        <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Sunlimetech</h4>
                        <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-skype"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-google"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png"
                          alt="card"></img></p>
                        <h4 className="card-title">Sunlimetech</h4>
                        <p className="card-text">This is basic card with image on top, title, description and button.</p>
                        <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Sunlimetech</h4>
                        <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-skype"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-google"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg"
                          alt="card "></img></p>
                        <h4 className="card-title">Sunlimetech</h4>
                        <p className="card-text">This is basic card with image on top, title, description and button.</p>
                        <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Sunlimetech</h4>
                        <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-skype"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-google"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png"
                          alt="card"></img></p>
                        <h4 className="card-title">Sunlimetech</h4>
                        <p className="card-text">This is basic card with image on top, title, description and button.</p>
                        <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Sunlimetech</h4>
                        <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-skype"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-google"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg"
                          alt="card"></img></p>
                        <h4 className="card-title">Sunlimetech</h4>
                        <p className="card-text">This is basic card with image on top, title, description and button.</p>
                        <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Sunlimetech</h4>
                        <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-skype"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-google"></i>
                            </a>
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






      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="https://another-mvc-tech-blog.herokuapp.com/"
                target="_blank" rel="noopener noreferrer">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src={process.env.PUBLIC_URL + techBlogPhoto} alt="Tech Blog" />
                    </div>
                    <div className="text-container">
                      <h6>Another Tech Blog</h6>
                      <p><a href="https://github.com/blairrrrwho/mvc-tech-blog" className="btn btn-success m-1"
                        target="_blank" rel="noopener noreferrer">
                        Code</a></p>
                    </div>
                  </div>
                </div>
              </a>
              Code: <a href="https://github.com/blairrrrwho/mvc-tech-blog"
                target="_blank" rel="noopener noreferrer">
                <FaGithub className="m-3" size={22} />
                <a href="https://github.com/blairrrrwho/mvc-tech-blog" className="btn btn-success m-1"
                  target="_blank" rel="noopener noreferrer">
                  Code</a>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg" alt="" />
                    </div>
                    <div className="text-container">
                      <h6>Title 02</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png" alt="" />
                    </div>

                    <div className="text-container">
                      <h6>Title 03</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg" alt="" />
                    </div>
                    <div className="text-container">
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




      {/* <!-- Topic Cards --> */}
      {/* <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="https://another-mvc-tech-blog.herokuapp.com/" alt="" />
                    </div>
                    <div className="text-container">
                      <h6>Title 01</h6>
                      <p></p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg" alt="" />
                    </div>
                    <div className="text-container">
                      <h6>Title 02</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png" alt="" />
                    </div>

                    <div className="text-container">
                      <h6>Title 03</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg" alt="" />
                    </div>
                    <div className="text-container">
                      <h6>Title 04</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className='container'>
        <div className="card">
          <a href="https://another-mvc-tech-blog.herokuapp.com/"
            target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + techBlogPhoto} alt="Tech Blog" height={400}></img> Tech Blog</a>
          <img src={techBlogPhoto} alt="First Class Painting LLC"></img>
          <h2>
            <strong>Tech Blog</strong>
          </h2>

          Code:
          <a href="https://github.com/blairrrrwho/mvc-tech-blog"
            target="_blank" rel="noopener noreferrer">
            <FaGithub className="m-3" size={22} />
          </a>
          <div className="buttons">
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://another-mvc-tech-blog.herokuapp.com/"
              >
                Site
              </a>
            </button>
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/blairrrrwho/mvc-tech-blog"
              >
                Code
              </a>
            </button>
          </div>
        </div>
      </div> */}

      {/* 
      <Card style={{ width: '20rem' }}>
      <a href="https://another-bad-music-review-woo.herokuapp.com/"
        target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + abmrPhoto} alt="ABMR" height={350}></img>
        Another Bad Music Review
      </a>
      <a href="https://github.com/blairrrrwho/another-bad-music-review"
        target="_blank" rel="noopener noreferrer">
        <FaGithub className="m-3" size={22} />
      </a>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + techBlogPhoto} />

      </Card> <br></br> */}

      {/* MVC Tech Blog */}
      {/* <div className='card border-success text-bg-warning' style={{ width: '20rem' }}>
        <a href="https://another-mvc-tech-blog.herokuapp.com/"
          target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + techBlogPhoto}
            style={{ width: '20rem', borderRadius: '6px' }}
            className='card-img'
            alt="Tech Blog" height={400}></img>
        </a>
        <p>
          Live Site: <a href="https://another-mvc-tech-blog.herokuapp.com/"
          target="_blank" rel="noopener noreferrer">
          Tech Blog</a> <hr></hr>
          Code:
          <a href="https://github.com/blairrrrwho/mvc-tech-blog"
            target="_blank" rel="noopener noreferrer">
            <FaGithub className="m-3" size={22} />
          </a>
        </p>
      </div> */}

      <div className="card">
        <img src={process.env.PUBLIC_URL + techBlogPhoto} />
        <div className="card-body">
          <h2>Tech Blog</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

        </div>
      </div>

      <div className='row'>
        <div className='col-sm-6'>

          <div className="card border-dark mb-3" style={{ width: '22rem' }}>

            <a href="https://another-mvc-tech-blog.herokuapp.com/" className="">
              <img src={process.env.PUBLIC_URL + techBlogPhoto}
                className="card-img-top" alt="Tech Blog"></img></a>

            <img src={process.env.PUBLIC_URL + techBlogPhoto}
              className="card-img-top" alt="Tech Blog"></img>
            <div className="card-body">
              <a href="https://another-mvc-tech-blog.herokuapp.com/" className="btn btn-dark m-1">
                Live Site</a>
              <a href="https://github.com/blairrrrwho/mvc-tech-blog" className="btn btn-success m-1">
                Code</a>
            </div>
          </div>

        </div>
      </div>


      <div className='row'>
        <div className='col-sm-6'>
          <a href="https://another-mvc-tech-blog.herokuapp.com/" className="overlay">
            <div className="card border-dark mb-3" style={{ width: '22rem' }}>
              <img src={process.env.PUBLIC_URL + techBlogPhoto}
                className="card-img-top" alt="Tech Blog"></img>
              {/* <a href="https://another-mvc-tech-blog.herokuapp.com/" className="btn btn-dark m-1">
                Live Site</a> */}
              <a href="https://github.com/blairrrrwho/mvc-tech-blog" className="btn btn-success m-1">
                Code</a>

            </div>
          </a>

        </div>
      </div>

      <div className='row'>
        <div className='col-sm-6'>
          <a href="https://another-mvc-tech-blog.herokuapp.com/" className="">

            <div className="card border-dark mb-3" style={{ width: '22rem' }}>
              <img src={process.env.PUBLIC_URL + techBlogPhoto}
                className="card-img-top" alt="Tech Blog"></img>
              <div className="card-body">
                <a href="https://another-mvc-tech-blog.herokuapp.com/"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-dark m-1">
                  Live Site</a>
                <a href="https://github.com/blairrrrwho/mvc-tech-blog"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-success m-1">
                  Code</a>
              </div>
            </div>
            Tech Blog
          </a>

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