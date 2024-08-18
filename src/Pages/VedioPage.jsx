import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const VedioPage = () => {
  const [videoInfo, setVideoInfo] = useState({});
  const [path, setPath] = useState("");
  const [upcommingVideo, setUpcommingVideo] = useState([]);
  const [videoID, setVideoID] = useState(() => {
    let videoID = localStorage.getItem("video-id");
    if (videoID) {
      return videoID;
    } else {
      return null;
    }
  });

  const navigate = useNavigate();

  const getVideoByID = (id) => {
    localStorage.setItem("video-id", id);
    setVideoID(id);
    navigate("/vedio-play");
  };

  const getVideoDetails = () => {
    let getVideo = {
      video_id: videoID,
    };
    axios
      .post("http://103.104.74.215:3003/api/get_single_video", getVideo)
      .then((res) => {
        setPath(res.data.data.video[0].path);
        setVideoInfo(res.data.data);
        createHistory();
        viewsCount();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUpcommingVideo = () => {
    axios
      .get("http://103.104.74.215:3003/api/get_top_video")
      .then((response) => {
        setUpcommingVideo(response.data.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  const createHistory = () => {
    let data = {
      user_id: localStorage.getItem("_id"),
      channel_id: localStorage.getItem("channel_id"),
      video_id: videoID,
    };
    if (data) {
      axios
        .post("http://103.104.74.215:3003/api/create_history", data)
        .then((res) => {
          console.log(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const viewsCount = () =>{
    let data = {
      video_id : videoID
    }
    axios
    .post('http://103.104.74.215:3003/api/video_views', data)
    .then((response)=>{
       console.log(response.data.msg)
      
     })
     .catch((error)=>{
     console.log('your video views not count',error)
     })
  }
  useEffect(() => {
    if (videoID) {
      getVideoDetails();
    }
    getUpcommingVideo();
  }, [videoID]);

  return (
    <div id="wrapper">
      <div id="content-wrapper">
        <div className="container-fluid pb-0">
          <div className="video-block section-padding">
            <div className="row">
              <div className="col-md-8">
                <div className="single-video-left">
                  <div className="single-video">
                    <ReactPlayer
                      url={`http://103.104.74.215:3003/${path}`}
                      width="100%"
                      height={315}
                      controls="true"
                      playing="true"
                    />

                    {/* <iframe width="100%" height={315} src="https://www.youtube-nocookie.com/embed/8LWZSGNjuF0?rel=0&controls=0&showinfo=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen /> */}
                  </div>
                  <div className="single-video-title box mb-3">
                    <h2>{videoInfo.video_name}</h2>
                    <p className="mb-0">
                      <i className="fas fa-eye" /> {videoInfo.video_views} views
                    </p>
                  </div>
                  <div className="single-video-author box mb-3">
                    <div className="float-right">
                      <button className="btn btn-danger" type="button">
                        Subscribe
                        <strong>1.4M</strong>
                      </button>{" "}
                      <button
                        className="btn btn btn-outline-danger"
                        type="button"
                      >
                        <i className="fas fa-bell" />
                      </button>
                    </div>
                    <img className="img-fluid" src="img/s4.png" alt />
                    <p>
                      <a>
                        <strong>{videoInfo.channel_name}</strong>
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
                    <small>Published on Aug 10, 2020</small>
                  </div>
                  <div className="single-video-info-content box mb-3">
                    <h6>Title:</h6>
                    <p>{videoInfo.video_name}</p>
                    <h6>Category :</h6>
                    <p>{videoInfo.category_type}</p>
                    <h6>Description :</h6>
                    <p>{videoInfo.description}</p>
                    <h6>Tags :</h6>
                    <p className="tags mb-0">
                      <span>
                        <a>Uncharted 4</a>
                      </span>
                      <span>
                        <a>Playstation 4</a>
                      </span>
                      <span>
                        <a>Gameplay</a>
                      </span>
                      <span>
                        <a>1080P</a>
                      </span>
                      <span>
                        <a>ps4Share</a>
                      </span>
                      <span>
                        <a>+ 6</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-video-right">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="main-title">
                        <div className="btn-group float-right right-action">
                          <a
                            className="right-action-link text-gray"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Sort by{" "}
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item">
                              <i className="fas fa-fw fa-star" />
                              &nbsp; Top Rated
                            </a>
                            <a className="dropdown-item">
                              <i className="fas fa-fw fa-signal" /> &nbsp;
                              Viewed
                            </a>
                            <a className="dropdown-item">
                              <i className="fas fa-fw fa-times-circle" /> &nbsp;
                              Close
                            </a>
                          </div>
                        </div>
                        <h6>Up Next</h6>
                      </div>
                    </div>
                    <div
                      className="col-md-12"
                      style={{
                        overflowY: "auto",
                        maxHeight: "45rem",
                      }}
                    >
                      {upcommingVideo?.map((video) =>
                        video.video && video.video.length > 1 ? (
                          <div className="video-card video-card-list">
                            <div className="video-card-image">
                              <a
                                className="play-icon"
                                style={{ cursor: "pointer" }}
                                onClick={() => getVideoByID(video._id)}
                              >
                                <i className="fas fa-play-circle" />
                              </a>
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src={`http://103.104.74.215:3003/${video.video[1].path}`}
                                  alt
                                />
                              </a>
                              <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                              <div className="btn-group float-right right-action">
                                <a
                                  href="#"
                                  className="right-action-link text-gray"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i
                                    className="fa fa-ellipsis-v"
                                    aria-hidden="true"
                                  />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item">
                                    <i className="fas fa-fw fa-star" /> &nbsp;
                                    Top Rated
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fas fa-fw fa-signal" /> &nbsp;
                                    Viewed
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fas fa-fw fa-times-circle" />{" "}
                                    &nbsp; Close
                                  </a>
                                </div>
                              </div>
                              <div className="video-title">
                                <a>{video.video_name}</a>
                              </div>
                              <div className="video-page text-success">
                                {video.channel_name} &nbsp;&nbsp;
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
                                {video.video_views} views &nbsp;
                                <i className="fas fa-calendar-alt" /> 11 Months
                                ago
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedioPage;
