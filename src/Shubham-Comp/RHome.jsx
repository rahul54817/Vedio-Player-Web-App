import React, { useEffect, useState } from "react";
import axios from "axios";

const RHome = () => {
  const [vedios, setVedios] = useState([]);

  useEffect(() => {
    axios
      .get("http://103.104.74.215:3003/api/get_top_video")
      .then((response) => {
        setVedios(response.data.data);
        console.log("Vedio List from R-Home", response.data.data[0].data[0].image[1].filename);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [0]);

  function handlePlayVedio(videoId) {
    localStorage.setItem("videoId", videoId);
    navigate("/svedios");
  }
  vedios.map((object)=>{

    object.data[0]?.image[1]?.filename ? 

    console.log("profile name  :  ",object.data[0]?.image[1]?.filename)
    :
    console.log("profile name  name nahi hai   ")
  })

  return (
    <div id="wrapper">
      <div id="content-wrapper">
        <div className="container-fluid pb-0">
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
                  <h6>Top Vedios </h6>
                </div>
              </div>
              {vedios.map((object) => (
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="video-card history-video shadow rounded">
                    <div
                      className="video-card-image"
                      onClick={() => handlePlayVedio(object?._id)}
                      style={{ height: "135px" }}
                    >
                      <a className="play-icon" href="#">
                        <i className="fas fa-play-circle" />
                      </a>
                      <a href="#">
                        {object?.video[1]?.filename ? (
                          <img
                            className="img-fluid"
                            src={`http://103.104.74.215:3003/uploads/${object?.video[1]?.filename}`}
                            alt
                            style={{
                              width: "100%",
                              height: "10rem",
                              borderRadius: "15px",
                            }}
                          />
                        ) : (
                          <img
                            className="img-fluid"
                            src="https://i.ytimg.com/vi/J4MQy9qZUMM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsuN7sl0D1Ag1y_jKoWhKffdu_uQ"
                            alt
                            style={{
                              width: "100%",
                              height: "10rem",
                              borderRadius: "15px",
                            }}
                          />
                        )}
                      </a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title d-flex align-items-center justify-content-between ">
                        {object.data[0]?.image[1]?.filename ? (
                          <img
                          
                            src={`http://103.104.74.215:3003/uploads/${object.data[0]?.image[1]?.filename}`}
                            className="img-fluid mr-2"
                            alt="channel-IMG"
                            style={{
                              width: "1.9rem",
                              height: "1.9rem",
                              borderRadius: "50%",
                            }}
                          />
                        ) : (
                          <img
                            className="img-fluid"
                            src={`http://103.104.74.215:3003/uploads/${object.data[0]?.image[0]?.filename}`}
                            alt="channel-img"
                            style={{
                              width: "1.9rem",
                              height: "1.9rem",
                              borderRadius: "50%",
                            }}
                          />
                        )}

                        <a href="#" style={{ width: "170px" }}>
                          {object.video_name}
                        </a>

                        <div className="dropdown myDropdown">
                          <a
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <img
                              className="threedot"
                              src="img/threedot.svg"
                              alt=""
                            />
                          </a>
                          <div
                            className="dropdown-menu shadow rounded"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <a className="dropdown-item text-dark" href="#">
                              <i className="fa-solid fa-bars-staggered" />
                              &nbsp;&nbsp;Add to queue
                            </a>
                            <a className="dropdown-item text-dark" href="#">
                              <i className="fa-regular fa-clock" />
                              &nbsp;&nbsp;Save to Watch Later
                            </a>
                            <a className="dropdown-item text-dark" href="#">
                              <i className="fa-solid fa-list-ol" />{" "}
                              &nbsp;&nbsp;Save to Playlist
                            </a>
                            <a className="dropdown-item text-dark" href="#">
                              <i className="fa-solid fa-arrow-down" />
                              &nbsp;&nbsp; Download
                            </a>
                            <a className="dropdown-item text-dark" href="#">
                              <i className="fa-solid fa-share" />
                              &nbsp;&nbsp;Share
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="video-page text-success"
                        style={{ marginLeft: "2.2rem" }}
                      >
                        <a href="">{object.channel_name}</a>{" "}
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
                      <div
                        className="video-view"
                        style={{ marginLeft: "2.2rem" }}
                      >
                        <img
                          style={{ width: "17px" }}
                          src="img/view.png"
                          alt=""
                        />
                        <span className="mx-2">{object.video_views}</span>
                        &nbsp;
                        <i className="fas fa-calendar-alt" /> 11 Months ago
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-xl-3 col-sm-6 mb-3">
          <div className="video-card">
            <div className="video-card-image">
              <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
              <a href="#"><img className="img-fluid" src="img/v6.png" alt /></a>
              <div className="time">3:50</div>
            </div>
            <div className="video-card-body">
              <div className="video-title">
                <a href="#">There are many variations of passages of Lorem</a>
              </div>
              <div className="video-page text-danger">
                Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger" /></a>
              </div>
              <div className="video-view">
                1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="video-card">
            <div className="video-card-image">
              <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
              <a href="#"><img className="img-fluid" src="img/v7.png" alt /></a>
              <div className="time">3:50</div>
            </div>
            <div className="video-card-body">
              <div className="video-title">
                <a href="#">There are many variations of passages of Lorem</a>
              </div>
              <div className="video-page text-success">
                Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
              </div>
              <div className="video-view">
                1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="video-card">
            <div className="video-card-image">
              <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
              <a href="#"><img className="img-fluid" src="img/v8.png" alt /></a>
              <div className="time">3:50</div>
            </div>
            <div className="video-card-body">
              <div className="video-title">
                <a href="#">There are many variations of passages of Lorem</a>
              </div>
              <div className="video-page text-success">
                Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
              </div>
              <div className="video-view">
                1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
              </div>
            </div>
          </div>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RHome;
