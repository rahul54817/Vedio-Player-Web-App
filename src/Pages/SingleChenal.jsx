import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ChenalPage from "./ChenalPage";
import axios from "axios";

const SingleChenal = () => {
  const [channelData, setChannelData] = useState({});
  const URL = "http://103.104.74.215:3003/";
  const getChannelData = (id) => {
    let data = {
      _id: localStorage.getItem("single-channel-id"),
    };

    axios
      .post("http://103.104.74.215:3003/api/get_single_channel", data)
      .then((response) => {
        if (response.data.result === false) {
          console.log(response.data.msg);
        } else {
          console.log(response.data.data);
          setChannelData(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getChannelData();
  }, [0]);
  return (
    <div className="single-channel-page" id="content-wrapper">
      <div className="single-channel-image">
        <img
          className="img-fluid"
          alt
          style={{height : '21rem'}}
          src={
            channelData && channelData.image && channelData.image.length > 1
              ? `${URL}${channelData.image[0].path}`
              : "img/channel-banner.png"
          }
        />
        <div className="channel-profile">
          <img
            className="channel-profile-img"
            alt
            src={
              channelData && channelData.image && channelData.image.length > 1
                ? `${URL}${channelData.image[1].path}`
                : "https://preview.redd.it/h68mdg17af661.png?width=250&format=png&auto=webp&s=bb3134dc9579554d2f38d20d927bf7ffe3cfe7c6"
            }
          />
          <div className="social hidden-xs">
            Social &nbsp;
            <a className="fb" href="#">
              Facebook
            </a>
            <a className="tw" href="#">
              Twitter
            </a>
            <a className="gp" href="#">
              Google
            </a>
          </div>
        </div>
      </div>
      <div className="single-channel-nav">
        <a className="channel-brand" href="#">
          {channelData.channel_name} &nbsp;
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

        <Tabs className={"mt-2"}>
          <TabList>
            <Tab>Videos</Tab>
            <Tab>Playlist</Tab>
            <Tab>Channels</Tab>
            <Tab>Discussion</Tab>
            <Tab>About</Tab>
          </TabList>
          <TabPanel>
            <div className="container-fluid">
              <div className="video-block section-padding">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title">
                      <div className="btn-group float-right right-action">
                        <a
                          href="#"
                          className="right-action-link text-gray"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Sort by{" "}
                          <i className="fa fa-caret-down" aria-hidden="true" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-fw fa-star" /> &nbsp; Top Rated
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-fw fa-signal" /> &nbsp; Viewed
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-fw fa-times-circle" />
                            &nbsp; Close
                          </a>
                        </div>
                      </div>
                      <h6>Videos</h6>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="video-card">
                      <div className="video-card-image">
                        <a className="play-icon" href="#">
                          <i className="fas fa-play-circle" />
                        </a>
                        <a href="#">
                          <img className="img-fluid" src="img/v1.png" alt />
                        </a>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <a href="#">
                            There are many variations of passages of Lorem
                          </a>
                        </div>
                        <div className="video-page text-success">
                          Education{" "}
                          <a
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            href="#"
                            data-original-title="Verified"
                          >
                            <i className="fas fa-check-circle text-success" />
                          </a>
                        </div>
                        <div className="video-view">
                          1.8M views &nbsp;
                          <i className="fas fa-calendar-alt" /> 11 Months ago
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <button
                              type="button"
                              className="btn btn-danger mt-2 btn-sm"
                            >
                              delete
                            </button>
                          </div>
                          <div className="mt-3">
                            <BsThreeDotsVertical />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="video-card">
                      <div className="video-card-image">
                        <a className="play-icon" href="#">
                          <i className="fas fa-play-circle" />
                        </a>
                        <a href="#">
                          <img className="img-fluid" src="img/v2.png" alt />
                        </a>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <a href="#">
                            There are many variations of passages of Lorem
                          </a>
                        </div>
                        <div className="video-page text-success">
                          Education{" "}
                          <a
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            href="#"
                            data-original-title="Verified"
                          >
                            <i className="fas fa-check-circle text-success" />
                          </a>
                        </div>
                        <div className="video-view">
                          1.8M views &nbsp;
                          <i className="fas fa-calendar-alt" /> 11 Months ago
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <button
                              type="button"
                              className="btn btn-danger mt-2 btn-sm"
                            >
                              delete
                            </button>
                          </div>
                          <div className="mt-3">
                            <BsThreeDotsVertical />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="video-card">
                      <div className="video-card-image">
                        <a className="play-icon" href="#">
                          <i className="fas fa-play-circle" />
                        </a>
                        <a href="#">
                          <img className="img-fluid" src="img/v3.png" alt />
                        </a>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <a href="#">
                            There are many variations of passages of Lorem
                          </a>
                        </div>
                        <div className="video-page text-danger">
                          Education{" "}
                          <a
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            href="#"
                            data-original-title="Unverified"
                          >
                            <i className="fas fa-frown text-danger" />
                          </a>
                        </div>
                        <div className="video-view">
                          1.8M views &nbsp;
                          <i className="fas fa-calendar-alt" /> 11 Months ago
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <button
                              type="button"
                              className="btn btn-danger mt-2 btn-sm"
                            >
                              delete
                            </button>
                          </div>
                          <div className="mt-3">
                            <BsThreeDotsVertical />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="video-card">
                      <div className="video-card-image">
                        <a className="play-icon" href="#">
                          <i className="fas fa-play-circle" />
                        </a>
                        <a href="#">
                          <img className="img-fluid" src="img/v4.png" alt />
                        </a>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <a href="#">
                            There are many variations of passages of Lorem
                          </a>
                        </div>
                        <div className="video-page text-success">
                          Education{" "}
                          <a
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            href="#"
                            data-original-title="Verified"
                          >
                            <i className="fas fa-check-circle text-success" />
                          </a>
                        </div>
                        <div className="video-view">
                          1.8M views &nbsp;
                          <i className="fas fa-calendar-alt" /> 11 Months ago
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <button
                              type="button"
                              className="btn btn-danger mt-2 btn-sm"
                            >
                              delete
                            </button>
                          </div>
                          <div className="mt-3">
                            <BsThreeDotsVertical />
                          </div>
                        </div>
                      </div>
                    </div>
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
          </TabPanel>

          <TabPanel>
            <h2>PlayLists</h2>
          </TabPanel>
          <TabPanel>
            <ChenalPage />
          </TabPanel>
          <TabPanel>
            <h2>Discussion</h2>
          </TabPanel>
          <TabPanel>
            <h2>About</h2>
          </TabPanel>
        </Tabs>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Videos <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Playlist</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Channels</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Discussion</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Donate
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control form-control-sm mr-sm-1" type="search" placeholder="Search" aria-label="Search" /><button className="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit"><i className="fas fa-search" /></button> &nbsp;&nbsp;&nbsp; <button className="btn btn-outline-danger btn-sm" type="button">Subscribe
            <strong>1.4M</strong></button>
        </form>
      </div> */}
      </div>
    </div>
  );
};

export default SingleChenal;
