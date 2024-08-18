import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";  
import { useNavigate } from "react-router-dom";

const WatchLaterVideos = () => {
  const [watchLaterList, setWatchLaterList] = useState([]);

  const navigate = useNavigate();
  const playVedio = (id) => {
    localStorage.setItem("video-id", id);
    navigate("/vedio-play");
  };
  const getSingleChannelById = (id) =>{
    localStorage.setItem("single-channel-id",id)
    navigate("/single-channel-page")

  }

  const getWatchLater = () => {
    let data = {
      user_id: localStorage.getItem("_id"),
      channel_id: localStorage.getItem("channel_id"),
    };

    axios
      .post("http://103.104.74.215:3003/api/get_save_watch_later", data)
      .then((response) => {
        setWatchLaterList(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteWachListVideoById = (id) =>{


  }
  useEffect(() => {
    getWatchLater();
  }, [0]);

  return (
    <div className="container-fluid">
      <div className="video-block section-padding">
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
                  Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item">
                    <i className="fas fa-fw fa-star" /> &nbsp; Top Rated
                  </a>
                  <a className="dropdown-item">
                    <i className="fas fa-fw fa-signal" /> &nbsp; Viewed
                  </a>
                  <a className="dropdown-item">
                    <i className="fas fa-fw fa-times-circle" />
                    &nbsp; Close
                  </a>
                </div>
              </div>
              <h6>Videos</h6>
            </div>
          </div>
          {watchLaterList.map((object) => (
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="video-card">
                <div
                  className="video-card-image"
                  style={{ cursor: "pointer" }}
                  onClick={() => playVedio(object.video_id)}
                >
                  <a className="play-icon">
                    <i className="fas fa-play-circle" />
                  </a>
                  <a>
                    <img
                      className="img-fluid"
                      src={`http://103.104.74.215:3003/${object?.video_data[0].video[1]?.path}`}
                      alt
                      style={{ width: "100%", height: "10rem" }}
                    />
                  </a>
                  <div className="time">3:50</div>
                </div>
                <div className="video-card-body">
                  <div className="d-flex justify-content-between ">
                    <div className="video-title">
                      <a>{object.video_data[0].video_name}</a>
                    </div>
                    <div className="dropdown myDropdown dropdown myDropdown text-color-black d-flex justify-content-end ">
                      <a
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <BsThreeDotsVertical
                          className="align-items-end"
                          style={{ cursor: "pointer" }}
                        />
                      </a>
                      <div
                        className="dropdown-menu shadow rounded"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a className="dropdown-item text-dark">
                          <i className="fa-solid fa-bars-staggered" />
                          &nbsp;&nbsp;Add to queue
                        </a>
                        <a className="dropdown-item text-dark">
                          <i className="fa-regular fa-clock" />
                          &nbsp;&nbsp;Save to Watch Later
                        </a>
                        <a className="dropdown-item text-dark">
                          <i className="fa-solid fa-list-ol" /> &nbsp;&nbsp;Save
                          to Playlist
                        </a>
                        <a className="dropdown-item text-dark">
                          <i className="fa-solid fa-arrow-down" />
                          &nbsp;&nbsp; Download
                        </a>
                        <a className="dropdown-item text-dark">
                          <i className="fa-solid fa-share" />
                          &nbsp;&nbsp;Share
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="video-page text-success">
                    <a
                      to="single-channel-page"
                      onClick={() => getSingleChannelById(object.video_data[0].channel_id)}
                      style={{cursor: 'pointer'}}
                    >
                     {object.video_data[0].channel_name} &nbsp;
                    </a>

                    <div className="dropdown myDropdown dropdown myDropdown text-color-black d-flex justify-content-end col-2">
                          <a
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{cursor : 'pointer'}}
                          >
                            <BsThreeDotsVertical className="align-items-end" />
                          </a>
                          <div
                            className="dropdown-menu shadow rounded"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <a className="dropdown-item text-dark" style={{cursor : 'pointer'}}>
                              <i className="fa-solid fa-bars-staggered" />
                              &nbsp;&nbsp;Add to queue
                            </a>
                            <a className="dropdown-item text-dark" style= {{cursor : 'pointer'}}>
                              <i className="fa-regular fa-clock" />
                              &nbsp;&nbsp;Save to Watch Later
                            </a>
                            <a className="dropdown-item text-dark" style= {{cursor : 'pointer'}}>
                              <i className="fa-solid fa-list-ol" />{" "}
                              &nbsp;&nbsp;Save to Playlist
                            </a>
                            <a className="dropdown-item text-dark" style= {{cursor : 'pointer'}}>
                              <i className="fa-solid fa-arrow-down" />
                              &nbsp;&nbsp; Download
                            </a>
                            <a className="dropdown-item text-dark" style= {{cursor : 'pointer'}}>
                              <i className="fa-solid fa-share" />
                              &nbsp;&nbsp;Share
                            </a>
                            <a className="dropdown-item text-dark" style= {{cursor : 'pointer'}} onClick={()=>deleteHistory(item.video_id)}>
                            <MdDelete />
                              &nbsp;&nbsp; Delete
                            </a>
                          </div>
                        </div>
                  </div>
                  <div className="video-view">
                    {object.video_data[0].video_views} &nbsp; viwes &nbsp;
                    <i className="fas fa-calendar-alt" /> &nbsp; 11 Months ago
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center pagination-sm mb-0">
            <li className="page-item disabled">
              <a tabIndex={-1} className="page-link">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link">1</a>
            </li>
            <li className="page-item">
              <a className="page-link">2</a>
            </li>
            <li className="page-item">
              <a className="page-link">3</a>
            </li>
            <li className="page-item">
              <a className="page-link">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default WatchLaterVideos;
