import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MusicPage = () => {
  const [upcomingMusic, setUpcomingMusic] = useState([]);
  const [musicInfo, setMusicInfo] = useState(null);
  const [thumbnailPath, setThumbnailPath] = useState("");
  const [musicPath, setMusicPath] = useState("");
  const [musicID, setMusicID] = useState(() => {
    let musicID = localStorage.getItem("music-id");
    if (musicID) {
      return musicID;
    } else {
      return null;
    }
  });

  const navigate = useNavigate();

  const getMusicByID = (id) => {
    localStorage.setItem("music-id", id);
    setMusicID(id);
    navigate("/music-page");
  };

  const getMusicDetails = () => {
    let getMusic = {
      _id: musicID,
    };
    axios
      .post("http://103.104.74.215:3003/api/get_single_music", getMusic)
      .then((res) => {
        console.log(res.data.data.music);
        setMusicPath(res.data.data.music[0].path);
        setThumbnailPath(res.data.data.music[1].path);
        setMusicInfo(res.data.data);
      });
  };

  const getUpcommingMusic = () => {
    axios
      .get("http://103.104.74.215:3003/api/get_music")
      .then((response) => {
        setUpcomingMusic(response.data.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    if (musicID) {
      getMusicDetails();
      getUpcommingMusic();
    }
   
  }, [musicID]);

  return (
    <div id="wrapper">
      <div id="content-wrapper">
        <div className="container-fluid pb-0">
          <div className="video-block section-padding">
            <div className="row">
              <div className="col-md-8">
                <div className="single-video-left">
                  <div className="single-video">
                    <img
                      src={`http://103.104.74.215:3003/${thumbnailPath}`}
                      alt="Video"
                      style={{
                        width: "100%",
                        height: "15rem",
                      }}
                    />
                    <ReactPlayer
                      url={`http://103.104.74.215:3003/${musicPath}`}
                      width="100%"
                      height={40}
                      controls="true"
                      playing="true"
                    />
                    {/* <iframe width="100%" height={315} src="https://www.youtube-nocookie.com/embed/8LWZSGNjuF0?rel=0&controls=0&showinfo=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen /> */}
                  </div>
                  <div className="single-video-title box mb-3">
                    <h2>
                      <a href="#">{musicInfo?.music_title}</a>
                    </h2>
                    <p className="mb-0">
                      <i className="fas fa-eye" /> 2,729,347 views
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
                      <a href="#">
                        <strong>Osahan Channel</strong>
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
                    <p>
                      Nathan Drake , Victor Sullivan , Sam Drake , Elena Fisher
                    </p>
                    <h6>Category :</h6>
                    <p>Gaming , PS4 Exclusive , Gameplay , 1080p</p>
                    <h6>Description :</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved overVarious versions have evolved
                      over the years, sometimes{" "}
                    </p>
                    <h6>Tags :</h6>
                    <p className="tags mb-0">
                      <span>
                        <a href="#">Uncharted 4</a>
                      </span>
                      <span>
                        <a href="#">Playstation 4</a>
                      </span>
                      <span>
                        <a href="#">Gameplay</a>
                      </span>
                      <span>
                        <a href="#">1080P</a>
                      </span>
                      <span>
                        <a href="#">ps4Share</a>
                      </span>
                      <span>
                        <a href="#">+ 6</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-video-right">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="adblock">
                        <div className="img">
                          Google AdSense
                          <br />
                          336 x 280
                        </div>
                      </div>
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
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              <i className="fas fa-fw fa-star" />
                              &nbsp; Top Rated
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fas fa-fw fa-signal" /> &nbsp;
                              Viewed
                            </a>
                            <a className="dropdown-item" href="#">
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
                        maxHeight: "35rem",
                      }}
                    >
                      {upcomingMusic.map((music) =>
                        music.music &&
                        music.music.length > 1 &&
                        music.music[1]?.filename ? (
                          <div className="video-card video-card-list">
                            <div className="video-card-image">
                              <a
                                className="play-icon"
                                style={{ cursor: "pointer" }}
                                onClick={() => getMusicByID(music._id)}
                              >
                                <i className="fas fa-play-circle" />
                              </a>
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src={`http://103.104.74.215:3003/${music.music[1].path}`}
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
                                <a>{music.music_title}</a>
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
                                {music.audio_views} views &nbsp;
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
                    <div className="adblock">
                      <div className="img">
                        Google AdSense
                        <br />
                        336 x 280
                      </div>
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

export default MusicPage;
