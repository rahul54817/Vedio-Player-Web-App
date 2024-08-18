import React, { useEffect, useState } from "react";

import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";  

const Histroy = () => {
  const [historyList, setHistoryList] = useState([]);
  const navigate = useNavigate();

  const getHistory = () => {
    let user = {
      user_id: localStorage.getItem("_id"),
    };

    axios
      .post("http://103.104.74.215:3003/api/get_history", user)
      .then((response) => {
        setHistoryList(response.data.data);
        console.log(response.data.data[2].data[0].video[1].filename);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const playVideo = (id) => {
    localStorage.setItem("video-id", id);
    navigate("/vedio-play");
  };

  const deleteHistory = (id) =>{
    let data = {
      user_id : localStorage.getItem("_id"),
      video_id : id,
    }
    axios
    .post('http://103.104.74.215:3003/api/delete_history',data)
    .then((response)=>{
      if(response.data.msg===false){
        console.log("response",response.data.msg)
      }
      else{
        console.log("response",response.data.msg)
        getHistory()
      }
     })
     .catch((error)=>{
       console.log('your video views not count',error)
      })
  }

   const uploadTime = (time_zone) => {
    let time = historyList[0]?.data[0]?.time_zone.toString().slice(0,10);
    let uploadDate = new Date('2015-01-01');
    let date = new Date();
    let today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    // let days =  date.getDate() - uploadDate.getDate(); 
    let days =  date.getTime() - uploadDate.getTime(); 
    let diff = Math.round(days / (1000*3600*24))
    let months =  date.getMonth() - uploadDate.getMonth();
    let years =  date.getFullYear() - uploadDate.getFullYear();
    console.log("today date", today);
    
    console.log(`uplaoded :   ${Math.round(diff/30/12)} month ago`)

   }

  useEffect(() => {
    getHistory();
  }, [0]);





  // historyList.map((item) => {
  //   if (item.data && item.data[0] && item.data[0].video[1])
  //     console.log(item.video_id);
  // });

  return (
    <div id="wrapper">
      <div id="content-wrapper">
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
                      Sort by{" "}
                      <i className="fa fa-caret-down" aria-hidden="true" />
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
                  <h6>Watch History</h6>
                </div>
              </div>

              {historyList.map((item) =>
                item.data && item.data[0] && item.data[0].video[1] ? (
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="video-card history-video">
                      <div
                        className="video-card-image"
                        style={{ cursor: "pointer" }}
                        onClick={() => playVideo(item.video_id)}
                      >
                        <a className="play-icon">
                          <i className="fas fa-play-circle" />
                        </a>
                        <a>
                          <img
                            className="img-fluid"
                            src={`http://103.104.74.215:3003/uploads/${item.data[0]?.video[1]?.filename}`}
                            alt
                            style={{
                              width: "100%",
                              height: "10rem",
                            }}
                          />
                        </a>
                        <div className="time">3:50</div>
                      </div>

                      <div className="video-card-body">
                      <div className=" d-flex  justify-content-between ">

                        <div className="video-title">
                          <a>{item.data[0]?.video_name}</a>
                        </div>
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
                        <div className="video-page text-success">
                          {item?.data[0]?.channel_name}{" "}
                          <a
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            data-original-title="Verified"
                          >
                            <i className="fas fa-check-circle text-success" />
                          </a>
                        </div>
                        <div className="video-view">
                          {item?.data[0]?.video_views} &nbsp;
                          <i className="fas fa-calendar-alt" /> 11 Months ago
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center pagination-sm mb-0">
                <li className="page-item disabled">
                  <a className="page-link" tabIndex={-1}>
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
        <Footer />
      </div>
    </div>
  );
};

export default Histroy;
