import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div id="wrapper">
      <ul className="sidebar navbar-nav">
  <li className="nav-item">

  <NavLink to= '/' className="nav-link">
    <i className="fas fa-fw fa-home" />
    <span>Home</span>
  </NavLink>
    
  </li>
  {
    localStorage.getItem('_id') 
    ?
    <>

  <li className="nav-item">
  <NavLink to= '/chenals' className="nav-link">
    <i className="fas fa-fw fa-users" />
    <span>Channels</span>
  </NavLink>
    
  </li>
  <li className="nav-item">
  <NavLink to= '/single-channel-page' className="nav-link">
    <i className="fas fa-fw fa-user-alt" />
    <span>Single Channel</span>
  </NavLink>
   
  </li>

  <li className="nav-item">
  <NavLink to= '/vedio-play' className="nav-link">
    <i className="fas fa-fw fa-video" />
    <span>Vedio Page</span>
  </NavLink>
  </li>

  <li className="nav-item">
  <NavLink to= '/musics' className="nav-link">
    <i className="fas fa-fw fa-music" />
    <span>Musics</span>
  </NavLink>
  </li>
  
  <li className="nav-item">
  <NavLink to= '/upload' className="nav-link">
    <i className="fas fa-fw fa-home" />
    <span>Upload Vedios</span>
  </NavLink>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="fas fa-fw fa-folder" />
      <span>Pages</span>
    </a>
    <div className="dropdown-menu">
      <h6 className="dropdown-header">Login Screens:</h6>

      <NavLink to= '/login'
      className="dropdown-item" >
      Login
      </NavLink>

      <NavLink to= '/registration'
      className="dropdown-item" >
      Registration
      </NavLink>

      <NavLink to= '/forget-pass'
      className="dropdown-item" >
      Forgot Password
      </NavLink>

      <div className="dropdown-divider" />
      <h6 className="dropdown-header">Other Pages:</h6>

      <NavLink to= '/page-not-found'
      className="dropdown-item" >
      404 Page
      </NavLink>
     
      <a className="dropdown-item" href="blank.html">Blank Page</a>
    </div>
  </li>
    </>
    :
    <></>

  }
  <li className="nav-item">
  <NavLink to= '/history' className="nav-link">
    <i className="fas fa-fw fa-history" />
    <span>History Page</span>
  </NavLink>
  
  </li>
  <li className="nav-item dropdown">
    <NavLink to=  '/categories' 
    className="nav-link dropdown-toggle" href="categories.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="fas fa-fw fa-list-alt" />
      <span>Categories</span>
      
    </NavLink>
  
    <div className="dropdown-menu">

      <NavLink to=  '/movies' 
      className="dropdown-item">
      Movie
      </NavLink>
      <NavLink to=  '/musics' 
      className="dropdown-item">
      Musics
      </NavLink>
      <NavLink to=  '/television'  
      className="dropdown-item">
      Television
      </NavLink>
     
    </div>
  </li>
  {
    localStorage.getItem('_id') 
    ?
    <>
  <li className="nav-item channel-sidebar-list">
    <h6>SUBSCRIPTIONS</h6>
    <ul>
      <li>
        <a href="subscriptions.html">
          <img className="img-fluid" alt src="img/s1.png" /> Your Life
        </a>
      </li>
      <li>
        <a href="subscriptions.html">
          <img className="img-fluid" alt src="img/s2.png" /> Unboxing <span className="badge badge-warning">2</span>
        </a>
      </li>
      <li>
        <a href="subscriptions.html">
          <img className="img-fluid" alt src="img/s3.png" /> Product / Service
        </a>
      </li>
      <li>
        <a href="subscriptions.html">
          <img className="img-fluid" alt src="img/s4.png" /> Gaming
        </a>
      </li>
    </ul>
  </li>
  

    </>
    :
    <></>
  }
</ul>


        {/* <div id="content-wrapper">
          <div class="container-fluid pb-0">
            <div class="top-mobile-search">
              <div class="row">
                <div class="col-md-12">
                  <form class="mobile-search">
                    <div class="input-group">
                      <input
                        type="text"
                        placeholder="Search for..."
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <button type="button" class="btn btn-dark">
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="top-category section-padding mb-4">
              <div class="row">
                <div class="col-md-12">
                  <div class="main-title">
                    <h3>Just For You Gregory</h3>
                  </div>
                </div>
                <div class="col-md-12">
                  <div
                    class="gallery js-flickity"
                    data-flickity-options='{ "wrapAround": true }'
                  >
                    <div class="gallery-cell">
                      <div class="video-card">
                        <div class="video-card-image" id="video-card-image">
                          <a class="play-icon" href="#">
                            <i class="fas fa-play-circle"></i>
                          </a>
                          <a href="#">
                            <img class="img-fluid" src="img/v1.png" alt="" />
                          </a>
                          <div class="time" id="time">
                            3:50
                          </div>
                        </div>
                        <div class="video-card-body">
                          <div class="video-title" id="video-title">
                            <a href="#">
                              There are many variations of passages of Lorem
                            </a>
                          </div>
                          <div
                            class="single-video-author box mb-3"
                            style="font-size: 16px;"
                          >
                            <div class="float-right">
                              <button
                                class="btn btn-primary"
                                type="button"
                                id="btn"
                              >
                                Open{" "}
                              </button>
                            </div>
                            <div class="float-right" id="float-right">
                              <p>
                                <i class="fas fa-eye"></i> 10.4M
                              </p>
                              <p>
                                <i class="fa fa-thumbs-up"></i> 131K
                              </p>
                            </div>
                            <img class="img-fluid" src="img/s4.png" alt="" />
                            <p>
                              <a href="#">
                                <strong>History</strong>
                              </a>{" "}
                              <span
                                title=""
                                data-placement="top"
                                data-toggle="tooltip"
                                data-original-title="Verified"
                              >
                                <i class="fas fa-check-circle text-success"></i>
                              </span>
                            </p>
                            <p>3 Months ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="gallery-cell">
                      <div class="video-card">
                        <div class="video-card-image" id="video-card-image">
                          <a class="play-icon" href="#">
                            <i class="fas fa-play-circle"></i>
                          </a>
                          <a href="#">
                            <img class="img-fluid" src="img/v2.png" alt="" />
                          </a>
                          <div class="time" id="time">
                            3:50
                          </div>
                        </div>
                        <div class="video-card-body">
                          <div class="video-title" id="video-title">
                            <a href="#">
                              There are many variations of passages of Lorem
                            </a>
                          </div>
                          <div
                            class="single-video-author box mb-3"
                            style="font-size: 16px;"
                          >
                            <div class="float-right">
                              <button
                                class="btn btn-primary"
                                type="button"
                                id="btn"
                              >
                                Open{" "}
                              </button>
                            </div>
                            <div class="float-right" id="float-right">
                              <p>
                                <i class="fas fa-eye"></i> 10.4M
                              </p>
                              <p>
                                <i class="fa fa-thumbs-up"></i> 131K
                              </p>
                            </div>
                            <img class="img-fluid" src="img/s4.png" alt="" />
                            <p>
                              <a href="#">
                                <strong>History</strong>
                              </a>{" "}
                              <span
                                title=""
                                data-placement="top"
                                data-toggle="tooltip"
                                data-original-title="Verified"
                              >
                                <i class="fas fa-check-circle text-success"></i>
                              </span>
                            </p>
                            <p>3 Months ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="gallery-cell">
                      <div class="video-card">
                        <div class="video-card-image" id="video-card-image">
                          <a class="play-icon" href="#">
                            <i class="fas fa-play-circle"></i>
                          </a>
                          <a href="#">
                            <img class="img-fluid" src="img/v3.png" alt="" />
                          </a>
                          <div class="time" id="time">
                            3:50
                          </div>
                        </div>
                        <div class="video-card-body">
                          <div class="video-title" id="video-title">
                            <a href="#">
                              There are many variations of passages of Lorem
                            </a>
                          </div>
                          <div
                            class="single-video-author box mb-3"
                            style="font-size: 16px;"
                          >
                            <div class="float-right">
                              <button
                                class="btn btn-primary"
                                type="button"
                                id="btn"
                              >
                                Open{" "}
                              </button>
                            </div>
                            <div class="float-right" id="float-right">
                              <p>
                                <i class="fas fa-eye"></i> 10.4M
                              </p>
                              <p>
                                <i class="fa fa-thumbs-up"></i> 131K
                              </p>
                            </div>
                            <img class="img-fluid" src="img/s4.png" alt="" />
                            <p>
                              <a href="#">
                                <strong>History</strong>
                              </a>{" "}
                              <span
                                title=""
                                data-placement="top"
                                data-toggle="tooltip"
                                data-original-title="Verified"
                              >
                                <i class="fas fa-check-circle text-success"></i>
                              </span>
                            </p>
                            <p>3 Months ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="video-block section-padding">
              <div class="row">
                <div class="col-md-12">
                  <div class="main-title">
                    <h3>Business</h3>
                  </div>
                </div>
                <div class="col-md-12">
                  <div
                    id="recipeCarousel"
                    class="carousel slide"
                    data-bs-interval="false"
                  >
                    <div class="carousel-inner" role="listbox">
                      <div class="carousel-item active">
                        <div class="video-card" style="margin:5px">
                          <div
                            class="video-card-image"
                            style="border-radius: 15px;"
                          >
                            <a class="play-icon" href="video-page.html">
                              <i class="fas fa-play-circle"></i>
                            </a>
                            <a href="video-page.html">
                              <img class="img-fluid" src="img/v1.png" alt="" />
                            </a>
                            <div class="time">3:50</div>
                          </div>
                          <div class="video-card-body">
                            <div class="video-title">
                              <a href="video-page.html">
                                There are many variations of passages of Lorem
                              </a>
                            </div>
                            <div
                              class="single-video-author box mb-3"
                              style="padding-left: 0px;"
                            >
                              <div class="float-right">
                                <p>
                                  <i class="fas fa-eye"></i> 10.4M
                                </p>
                                <p>
                                  <i class="fa fa-thumbs-up"></i> 131K
                                </p>
                              </div>
                              <a href="viewprofile.html">
                                {" "}
                                <img
                                  class="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </a>
                              <p>
                                <a href="viewprofile.html">
                                  <strong>History</strong>
                                </a>{" "}
                                <span
                                  title=""
                                  data-placement="top"
                                  data-toggle="tooltip"
                                  data-original-title="Verified"
                                >
                                  <i class="fas fa-check-circle text-success"></i>
                                </span>
                              </p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="video-card" style="margin:5px">
                          <div
                            class="video-card-image"
                            style="border-radius: 15px;"
                          >
                            <a class="play-icon" href="video-page.html">
                              <i class="fas fa-play-circle"></i>
                            </a>
                            <a href="video-page.html">
                              <img class="img-fluid" src="img/v2.png" alt="" />
                            </a>
                            <div class="time">3:50</div>
                          </div>
                          <div class="video-card-body">
                            <div class="video-title">
                              <a href="video-page.html">
                                There are many variations of passages of Lorem
                              </a>
                            </div>
                            <div
                              class="single-video-author box mb-3"
                              style="padding-left: 0px;"
                            >
                              <div class="float-right">
                                <p>
                                  <i class="fas fa-eye"></i> 10.4M
                                </p>
                                <p>
                                  <i class="fa fa-thumbs-up"></i> 131K
                                </p>
                              </div>
                              <a href="viewprofile.html">
                                {" "}
                                <img
                                  class="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </a>
                              <p>
                                <a href="viewprofile.html">
                                  <strong>History</strong>
                                </a>{" "}
                                <span
                                  title=""
                                  data-placement="top"
                                  data-toggle="tooltip"
                                  data-original-title="Verified"
                                >
                                  <i class="fas fa-check-circle text-success"></i>
                                </span>
                              </p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="video-card" style="margin:5px">
                          <div
                            class="video-card-image"
                            style="border-radius: 15px;"
                          >
                            <a class="play-icon" href="video-page.html">
                              <i class="fas fa-play-circle"></i>
                            </a>
                            <a href="video-page.html">
                              <img class="img-fluid" src="img/v3.png" alt="" />
                            </a>
                            <div class="time">3:50</div>
                          </div>
                          <div class="video-card-body">
                            <div class="video-title">
                              <a href="video-page.html">
                                There are many variations of passages of Lorem
                              </a>
                            </div>
                            <div
                              class="single-video-author box mb-3"
                              style="padding-left: 0px;"
                            >
                              <div class="float-right">
                                <p>
                                  <i class="fas fa-eye"></i> 10.4M
                                </p>
                                <p>
                                  <i class="fa fa-thumbs-up"></i> 131K
                                </p>
                              </div>
                              <a href="viewprofile.html">
                                {" "}
                                <img
                                  class="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </a>
                              <p>
                                <a href="viewprofile.html">
                                  <strong>History</strong>
                                </a>{" "}
                                <span
                                  title=""
                                  data-placement="top"
                                  data-toggle="tooltip"
                                  data-original-title="Verified"
                                >
                                  <i class="fas fa-check-circle text-success"></i>
                                </span>
                              </p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="video-card" style="margin:5px">
                          <div
                            class="video-card-image"
                            style="border-radius: 15px;"
                          >
                            <a class="play-icon" href="video-page.html">
                              <i class="fas fa-play-circle"></i>
                            </a>
                            <a href="video-page.html">
                              <img class="img-fluid" src="img/v4.png" alt="" />
                            </a>
                            <div class="time">3:50</div>
                          </div>
                          <div class="video-card-body">
                            <div class="video-title">
                              <a href="video-page.html">
                                There are many variations of passages of Lorem
                              </a>
                            </div>
                            <div
                              class="single-video-author box mb-3"
                              style="padding-left: 0px;"
                            >
                              <div class="float-right">
                                <p>
                                  <i class="fas fa-eye"></i> 10.4M
                                </p>
                                <p>
                                  <i class="fa fa-thumbs-up"></i> 131K
                                </p>
                              </div>
                              <a href="viewprofile.html">
                                {" "}
                                <img
                                  class="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </a>
                              <p>
                                <a href="viewprofile.html">
                                  <strong>History</strong>
                                </a>{" "}
                                <span
                                  title=""
                                  data-placement="top"
                                  data-toggle="tooltip"
                                  data-original-title="Verified"
                                >
                                  <i class="fas fa-check-circle text-success"></i>
                                </span>
                              </p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="video-card" style="margin:5px">
                          <div
                            class="video-card-image"
                            style="border-radius: 15px;"
                          >
                            <a class="play-icon" href="video-page.html">
                              <i class="fas fa-play-circle"></i>
                            </a>
                            <a href="video-page.html">
                              <img class="img-fluid" src="img/v5.png" alt="" />
                            </a>
                            <div class="time">3:50</div>
                          </div>
                          <div class="video-card-body">
                            <div class="video-title">
                              <a href="video-page.html">
                                There are many variations of passages of Lorem
                              </a>
                            </div>
                            <div
                              class="single-video-author box mb-3"
                              style="padding-left: 0px;"
                            >
                              <div class="float-right">
                                <p>
                                  <i class="fas fa-eye"></i> 10.4M
                                </p>
                                <p>
                                  <i class="fa fa-thumbs-up"></i> 131K
                                </p>
                              </div>
                              <a href="viewprofile.html">
                                {" "}
                                <img
                                  class="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </a>
                              <p>
                                <a href="viewprofile.html">
                                  <strong>History</strong>
                                </a>{" "}
                                <span
                                  title=""
                                  data-placement="top"
                                  data-toggle="tooltip"
                                  data-original-title="Verified"
                                >
                                  <i class="fas fa-check-circle text-success"></i>
                                </span>
                              </p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev bg-transparent w-aut"
                      href="#recipeCarousel"
                      role="button"
                      data-bs-slide="prev"
                      style="width: 40px; height: 64px; top: 50px;"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                        style="width: 30px; height: 30px;"
                      ></span>
                    </a>
                    <a
                      class="carousel-control-next bg-transparent w-aut"
                      href="#recipeCarousel"
                      role="button"
                      data-bs-slide="next"
                      style="width: 40px; height: 64px; top: 50px;"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                        style="width: 30px; height: 30px;"
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr class="mt-0" />

            <footer class="sticky-footer">
              <div class="container">
                <div class="row no-gutters">
                  <div class="col-lg-6 col-sm-6">
                    <p class="mt-1 mb-0">
                      &copy; Copyright 2020{" "}
                      <strong class="text-dark">Vidoe</strong>. All Rights
                      Reserved
                      <br />
                      <small class="mt-0 mb-0">
                        Made with <i class="fas fa-heart text-danger"></i> by{" "}
                        <a
                          class="text-primary"
                          target="_blank"
                          href="https://askbootstrap.com/"
                        >
                          Ask Bootstrap
                        </a>
                      </small>
                    </p>
                  </div>
                  <div class="col-lg-6 col-sm-6 text-right">
                    <div class="app">
                      <a href="#">
                        <img alt="" src="img/google.png" />
                      </a>
                      <a href="#">
                        <img alt="" src="img/apple.png" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
