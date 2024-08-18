import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const [profile_img, setProfile_img] = useState("");
  const profile_ref = useRef();

  useEffect(() => {
    let user_id = localStorage.getItem("_id");

    const id = {
      _id: user_id,
    };

    axios
      .post("http://103.104.74.215:3003/api/view_profile", id)
      .then((res) => {
        console.log(res.data.data);
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const uploadProfileImage = (e) =>{
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("user_id", localStorage.getItem("_id"));
    formdata.append("profile_image", profile_img);

    axios
    .post('http://103.104.74.215:3003/api/upload_user_profile', formdata)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
       console.log(err);
     })

  }
  return (
    <div className="single-channel-page" id="content-wrapper">
      <div className="single-channel-image">
        <img className="img-fluid" alt src="img/channel-banner.png" />
        <div className="channel-profile">
          <img
            className="channel-profile-img"
            alt
            src={`http://103.104.74.215:3003/uploads/${userData.profile_image?.filename}`}
          />
          <input
            type="file"
            style={{ display: "none" }}
            ref={profile_ref}
            onChange={(e) => setProfile_img(e.target.files[0])}
            accept="Image/*"
          />
          <i
            style={{
              fontSize: 20,
              color: "black",
              marginLeft: "-55px",
              marginTop: "-55px",
              cursor: "pointer",
            }}
            className="fa fa-edit"
            onClick={() => {
              profile_ref.current.click();
              uploadProfileImage();
            }}
          />
          <div className="social hidden-xs">
            <NavLink to="settings">
              <i
                style={{ fontSize: 35, color: "white" }}
                className="fa fa-gear"
              />
            </NavLink>

            <a href>
              <i
                style={{ fontSize: 35, color: "white" }}
                className="fa fa-edit"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="single-channel-nav">
        <a className="channel-brand" href="#">
          {userData.username}&nbsp;{" "}
          <span
            title
            data-placement="top"
            data-toggle="tooltip"
            data-original-title="Verified"
          >
            <i className="fas fa-check-circle text-success" />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Tabs>
              <TabList>
                <Tab>Videos</Tab>
                <Tab>Like Videos</Tab>
                <Tab>History</Tab>
              </TabList>
            </Tabs>
            <form className="form-inline my-2 my-lg-0">
              &nbsp;&nbsp;&nbsp;{" "}
              <button className="btn-danger" type="button">
                Subscribe <strong>1.4M</strong>
              </button>
            </form>
          </div>
        </nav>
        {/* <a href="settings.html">
              <i style="font-size: 25px; color: black;"
              class="fa fa-gear"></i></a>
              <a href="">
                  <i style="font-size: 25px; color: black; margin-left: 50px;"
                  class="fa fa-edit"></i></a> */}
      </div>
      <div className="container-fluid">
        <div className="video-block section-padding">
          <div className="tab-content" id="ex1-content">
            <div
              className="tab-pane fade show active"
              id="ex1-tabs-1"
              role="tabpanel"
              aria-labelledby="ex1-tab-1"
            >
              <div className="row">
                <div
                  className="col-xl-3 col-sm-6 mb-3"
                  style={{ paddingLeft: 10, paddingRight: 0 }}
                >
                  <div className="video-card">
                    <div
                      className="video-card-image"
                      style={{ borderRadius: 15 }}
                    >
                      <a className="play-icon" href="video-page.html">
                        <i className="fas fa-play-circle" />
                      </a>
                      <a href="video-page.html">
                        <img className="img-fluid" src="img/v1.png" alt />
                      </a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">
                          There are many variations of passages of Lorem
                        </a>
                      </div>
                      <div
                        className="single-video-author box mb-3"
                        style={{ paddingLeft: 0, paddingRight: 0 }}
                      >
                        <div className="float-right">
                          <p>
                            <i className="fas fa-eye" /> 10.4M
                          </p>
                          <p>
                            <i className="fa fa-thumbs-up" /> 131K
                          </p>
                        </div>
                        <a href="viewprofile.html">
                          {" "}
                          <img className="img-fluid" src="img/s4.png" alt />
                        </a>
                        <p>
                          <a href="viewprofile.html">
                            <strong>History</strong>
                          </a>{" "}
                          <span
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            data-original-title="Verified"
                          >
                            <i className="fas fa-check-circle text-success" />
                          </span>
                        </p>
                        <p>3 Months ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-sm-6 mb-3"
                  style={{ paddingLeft: 10, paddingRight: 0 }}
                >
                  <div className="video-card">
                    <div
                      className="video-card-image"
                      style={{ borderRadius: 15 }}
                    >
                      <a className="play-icon" href="video-page.html">
                        <i className="fas fa-play-circle" />
                      </a>
                      <a href="video-page.html">
                        <img className="img-fluid" src="img/v2.png" alt />
                      </a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">
                          There are many variations of passages of Lorem
                        </a>
                      </div>
                      <div
                        className="single-video-author box mb-3"
                        style={{ paddingLeft: 0, paddingRight: 0 }}
                      >
                        <div className="float-right">
                          <p>
                            <i className="fas fa-eye" /> 10.4M
                          </p>
                          <p>
                            <i className="fa fa-thumbs-up" /> 131K
                          </p>
                        </div>
                        <a href="viewprofile.html">
                          {" "}
                          <img className="img-fluid" src="img/s4.png" alt />
                        </a>
                        <p>
                          <a href="viewprofile.html">
                            <strong>History</strong>
                          </a>{" "}
                          <span
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            data-original-title="Verified"
                          >
                            <i className="fas fa-check-circle text-success" />
                          </span>
                        </p>
                        <p>3 Months ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-sm-6 mb-3"
                  style={{ paddingLeft: 10, paddingRight: 0 }}
                >
                  <div className="video-card">
                    <div
                      className="video-card-image"
                      style={{ borderRadius: 15 }}
                    >
                      <a className="play-icon" href="video-page.html">
                        <i className="fas fa-play-circle" />
                      </a>
                      <a href="video-page.html">
                        <img className="img-fluid" src="img/v3.png" alt />
                      </a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">
                          There are many variations of passages of Lorem
                        </a>
                      </div>
                      <div
                        className="single-video-author box mb-3"
                        style={{ paddingLeft: 0, paddingRight: 0 }}
                      >
                        <div className="float-right">
                          <p>
                            <i className="fas fa-eye" /> 10.4M
                          </p>
                          <p>
                            <i className="fa fa-thumbs-up" /> 131K
                          </p>
                        </div>
                        <a href="viewprofile.html">
                          {" "}
                          <img className="img-fluid" src="img/s4.png" alt />
                        </a>
                        <p>
                          <a href="viewprofile.html">
                            <strong>History</strong>
                          </a>{" "}
                          <span
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            data-original-title="Verified"
                          >
                            <i className="fas fa-check-circle text-success" />
                          </span>
                        </p>
                        <p>3 Months ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-sm-6 mb-3"
                  style={{ paddingLeft: 10, paddingRight: 0 }}
                >
                  <div className="video-card">
                    <div
                      className="video-card-image"
                      style={{ borderRadius: 15 }}
                    >
                      <a className="play-icon" href="video-page.html">
                        <i className="fas fa-play-circle" />
                      </a>
                      <a href="video-page.html">
                        <img className="img-fluid" src="img/v4.png" alt />
                      </a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">
                          There are many variations of passages of Lorem
                        </a>
                      </div>
                      <div
                        className="single-video-author box mb-3"
                        style={{ paddingLeft: 0, paddingRight: 0 }}
                      >
                        <div className="float-right">
                          <p>
                            <i className="fas fa-eye" /> 10.4M
                          </p>
                          <p>
                            <i className="fa fa-thumbs-up" /> 131K
                          </p>
                        </div>
                        <a href="viewprofile.html">
                          {" "}
                          <img className="img-fluid" src="img/s4.png" alt />
                        </a>
                        <p>
                          <a href="viewprofile.html">
                            <strong>History</strong>
                          </a>{" "}
                          <span
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            data-original-title="Verified"
                          >
                            <i className="fas fa-check-circle text-success" />
                          </span>
                        </p>
                        <p>3 Months ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="ex1-tabs-2"
              role="tabpanel"
              aria-labelledby="ex1-tab-2"
            >
              <div className="row">
                <div
                  className="col-xl-3 col-sm-6 mb-3"
                  style={{ paddingLeft: 10, paddingRight: 0 }}
                >
                  <div className="video-card">
                    <div
                      className="video-card-image"
                      style={{ borderRadius: 15 }}
                    >
                      <a className="play-icon" href="video-page.html">
                        <i className="fas fa-play-circle" />
                      </a>
                      <a href="video-page.html">
                        <img className="img-fluid" src="img/v1.png" alt />
                      </a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">
                          There are many variations of passages of Lorem
                        </a>
                      </div>
                      <div
                        className="single-video-author box mb-3"
                        style={{ paddingLeft: 0, paddingRight: 0 }}
                      >
                        <div className="float-right">
                          <p>
                            <i className="fas fa-eye" /> 10.4M
                          </p>
                          <p>
                            <i className="fa fa-thumbs-up" /> 131K
                          </p>
                        </div>
                        <a href="viewprofile.html">
                          {" "}
                          <img className="img-fluid" src="img/s4.png" alt />
                        </a>
                        <p>
                          <a href="viewprofile.html">
                            <strong>History</strong>
                          </a>{" "}
                          <span
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            data-original-title="Verified"
                          >
                            <i className="fas fa-check-circle text-success" />
                          </span>
                        </p>
                        <p>3 Months ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-sm-6 mb-3"
                  style={{ paddingLeft: 10, paddingRight: 0 }}
                >
                  <div className="video-card">
                    <div
                      className="video-card-image"
                      style={{ borderRadius: 15 }}
                    >
                      <a className="play-icon" href="video-page.html">
                        <i className="fas fa-play-circle" />
                      </a>
                      <a href="video-page.html">
                        <img className="img-fluid" src="img/v2.png" alt />
                      </a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">
                          There are many variations of passages of Lorem
                        </a>
                      </div>
                      <div
                        className="single-video-author box mb-3"
                        style={{ paddingLeft: 0, paddingRight: 0 }}
                      >
                        <div className="float-right">
                          <p>
                            <i className="fas fa-eye" /> 10.4M
                          </p>
                          <p>
                            <i className="fa fa-thumbs-up" /> 131K
                          </p>
                        </div>
                        <a href="viewprofile.html">
                          {" "}
                          <img className="img-fluid" src="img/s4.png" alt />
                        </a>
                        <p>
                          <a href="viewprofile.html">
                            <strong>History</strong>
                          </a>{" "}
                          <span
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            data-original-title="Verified"
                          >
                            <i className="fas fa-check-circle text-success" />
                          </span>
                        </p>
                        <p>3 Months ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-sm-6 mb-3"
                  style={{ paddingLeft: 10, paddingRight: 0 }}
                >
                  <div className="video-card">
                    <div
                      className="video-card-image"
                      style={{ borderRadius: 15 }}
                    >
                      <a className="play-icon" href="video-page.html">
                        <i className="fas fa-play-circle" />
                      </a>
                      <a href="video-page.html">
                        <img className="img-fluid" src="img/v3.png" alt />
                      </a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">
                          There are many variations of passages of Lorem
                        </a>
                      </div>
                      <div
                        className="single-video-author box mb-3"
                        style={{ paddingLeft: 0, paddingRight: 0 }}
                      >
                        <div className="float-right">
                          <p>
                            <i className="fas fa-eye" /> 10.4M
                          </p>
                          <p>
                            <i className="fa fa-thumbs-up" /> 131K
                          </p>
                        </div>
                        <a href="viewprofile.html">
                          {" "}
                          <img className="img-fluid" src="img/s4.png" alt />
                        </a>
                        <p>
                          <a href="viewprofile.html">
                            <strong>History</strong>
                          </a>{" "}
                          <span
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            data-original-title="Verified"
                          >
                            <i className="fas fa-check-circle text-success" />
                          </span>
                        </p>
                        <p>3 Months ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-sm-6 mb-3"
                  style={{ paddingLeft: 10, paddingRight: 0 }}
                >
                  <div className="video-card">
                    <div
                      className="video-card-image"
                      style={{ borderRadius: 15 }}
                    >
                      <a className="play-icon" href="video-page.html">
                        <i className="fas fa-play-circle" />
                      </a>
                      <a href="video-page.html">
                        <img className="img-fluid" src="img/v4.png" alt />
                      </a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">
                          There are many variations of passages of Lorem
                        </a>
                      </div>
                      <div
                        className="single-video-author box mb-3"
                        style={{ paddingLeft: 0, paddingRight: 0 }}
                      >
                        <div className="float-right">
                          <p>
                            <i className="fas fa-eye" /> 10.4M
                          </p>
                          <p>
                            <i className="fa fa-thumbs-up" /> 131K
                          </p>
                        </div>
                        <a href="viewprofile.html">
                          {" "}
                          <img className="img-fluid" src="img/s4.png" alt />
                        </a>
                        <p>
                          <a href="viewprofile.html">
                            <strong>History</strong>
                          </a>{" "}
                          <span
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            data-original-title="Verified"
                          >
                            <i className="fas fa-check-circle text-success" />
                          </span>
                        </p>
                        <p>3 Months ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="ex1-tabs-3"
              role="tabpanel"
              aria-labelledby="ex1-tab-3"
            >
              <div
                className="col-xl-3 col-sm-6 mb-3"
                style={{ paddingLeft: 10, paddingRight: 0 }}
              >
                <div className="video-card">
                  <div
                    className="video-card-image"
                    style={{ borderRadius: 15 }}
                  >
                    <a className="play-icon" href="video-page.html">
                      <i className="fas fa-play-circle" />
                    </a>
                    <a href="video-page.html">
                      <img className="img-fluid" src="img/v1.png" alt />
                    </a>
                    <a href="video-page.html">
                      <div className="time" style={{ bottom: 0, right: 0 }}>
                        <h3 style={{ position: "relative", top: 35, left: 25 }}>
                          10
                        </h3>
                        <svg
                          viewBox="0 0 24 24"
                          preserveAspectRatio="xMidYMid meet"
                          focusable="false"
                          className="style-scope yt-icon"
                          style={{
                            pointerEvents: "none",
                            display: "block",
                            width: 100,
                            height: 120,
                          }}
                        >
                          <g className="style-scope yt-icon">
                            sddfdf
                            <path
                              d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z"
                              className="style-scope yt-icon"
                            />
                          </g>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="video-card-body">
                    <div className="video-title">
                      <a href="video-page.html">
                        There are many variations of passages of Lorem
                      </a>
                    </div>
                    <div
                      className="single-video-author box mb-3"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      <div className="float-right">
                        <p>
                          <i className="fas fa-eye" /> 10.4 asasM
                        </p>
                        <p>
                          <i className="fa fa-thumbs-up" /> 131K
                        </p>
                      </div>
                      <a href="viewprofile.html">
                        {" "}
                        <img className="img-fluid" src="img/s4.png" alt />
                      </a>
                      <p>
                        <a href="viewprofile.html">
                          <strong>History</strong>
                        </a>{" "}
                        <span
                          title
                          data-placement="top"
                          data-toggle="tooltip"
                          data-original-title="Verified"
                        >
                          <i className="fas fa-check-circle text-success" />
                        </span>
                      </p>
                      <p>3 Months ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="ex1-tabs-4"
              role="tabpanel"
              aria-labelledby="ex1-tab-3"
            >
              Tab 4 content
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center pagination-sm mb-0">
              <li className="page-item disabled">
                <a tabIndex={-1} href="#" className="page-link">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  3
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
