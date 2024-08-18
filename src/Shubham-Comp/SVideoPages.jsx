import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
export default function SVideoPages() {
  const [currVedioData, setCurrVedioData] = useState(null);
  const [upComingVideoData, setUpComingVideoData] = useState([]);
  let videoID = localStorage.getItem("videoId");
  // console.log(videoID+"this is video id from topp")
  useEffect(() => {
    handleVedioID(videoID);
    axios
      .get("http://103.104.74.215:3003/api/get_top_video")
      .then((response) => {
        // console.log();
        setUpComingVideoData(response.data.data);
      })
      .catch((error) => console.log("RequestedVideoNotFound", error));
  }, [0]);

  const handleVedioID = (id) => {
    localStorage.setItem('videoId',id)
    let data = {
      video_id: id,
    };
    axios
      .post("http://103.104.74.215:3003/api/get_single_video", data)
      .then((response) => {
        console.log(response.data);
        setCurrVedioData(response.data.data);
        createHistoryEntry()
        ViewsCount()
      })
      .catch((error) => console.log("RequestedVideoNotFound", error));

  };
  
  const createHistoryEntry = () => {
    let videoId = localStorage.getItem('videoId');
    let userId = localStorage.getItem('_id');
    let channelId = localStorage.getItem('channel_id');
    // console.log(videoId,"videoId")
    // console.log(userId,"userId")
    // console.log(channelId,"channeld")

    if (userId && channelId && videoId) {
      let historydata = {
        user_id: userId,
        channel_id: channelId,
        video_id: videoId,
      };

      axios
        .post("http://103.104.74.215:3003/api/create_history", historydata)
        .then((response) => {
          console.log("History created successfully", response);
        })
        .catch((error) => {
          console.log("Failed to create history", error);
        });
    } else {
      console.log("Required parameters are missing to create history");
    }
  };

  function ViewsCount(){
    let videoId= localStorage.getItem("videoId")

    let data ={
      video_id:videoId
    }

    axios.post("http://103.104.74.215:3003/api/video_views",data)
    .then((response)=>{
      console.log(response)
      alert('succuess')
    })
   .catch((error)=>{
    console.log('your video views not count',error)
   })
  }



  return (
    <div id="wrapper">
      <div id="content-wrapper">
        <div class="container-fluid pb-0">
          <div className="video-block section-padding">
            <div className="row">
              {/* {/ column 1 /} */}
              <div className="col-md-8">
                <div className="single-video-left">
                  <div className="single-video">
                    <ReactPlayer
                      url={`http://103.104.74.215:3003/uploads/${currVedioData?.video[0]?.filename}`}
                      width="100%"
                      height={315}
                      controls="true"
                      playing="true"
                    />
                  </div>
                  <div className="single-video-title box mb-3">
                    <h2>
                      <a href="#">{currVedioData?.video_name}</a>
                    </h2>
                    <p className="mb-0">
                      <i className="fas fa-eye" />{" "}
                      {currVedioData?.video_views
                        ? `${currVedioData?.video_views}`
                        : "2"}{" "}
                      views
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

                    <img
                      className="img-fluid" style={{width:"2rem",height:"2rem",borderRadius:"30px"}}
                      src={
                        currVedioData?.channel_data[0]?.image[1]?.filename
                          ? `http://103.104.74.215:3003/uploads/${currVedioData?.channel_data[0]?.image[1]?.filename}`
                          : "img/s4.png"
                      }
                      alt
                    />
                    <p>
                      <a href="#">
                        <strong>
                          {currVedioData?.channel_name
                            ? `${currVedioData?.channel_name}`
                            : "Osahan Channel"}
                        </strong>
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
                    <small>
                      Published on{" "}
                      {currVedioData?.current_date
                        ? `${currVedioData?.current_date}`
                        : "Aug 10, 2020"}
                    </small>
                  </div>
                  <div className="single-video-info-content box mb-3">
                    <h6>Title:</h6>
                    <p>
                      {/* {/ Nathan Drake , Victor Sullivan , Sam Drake , Elena Fisher /} */}
                      {currVedioData?.video_name}
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
                  <div className="single-video-info-content box mb-3">
                    <h6>Comments:</h6>
                  </div>
                </div>
              </div>

              {/* {/ column 2 /} */}
              <div className="col-md-4">
                <div className="single-video-right">
                  <div className="row">
                    {/* {/ advertisements column /} */}
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

                    {/* {/ list of upcoming vedios column /} */}
                    <div
                      className="col-md-12"
                      style={{
                        maxHeight: "50rem",
                        overflowY: "auto",
                        scrollbarWidth: "thin",
                      }}
                    >
                      {upComingVideoData.map((data, index) =>
                        data?.video[1]?.filename ? (
                          <div className="video-card video-card-list">
                            <div
                              className="video-card-image"
                              onClick={() => handleVedioID(data._id)}
                            >
                              <a className="play-icon" href="#">
                                <i className="fas fa-play-circle" />
                              </a>
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src={`http://103.104.74.215:3003/uploads/${data?.video[1]?.filename}`}
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
                                  <a className="dropdown-item" href="#">
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
                                <a href="#">
                                  {data?.video_name
                                    ? `${data?.video_name}`
                                    : "There are many variations of passages of Lorem"}
                                </a>
                              </div>
                              <div className="video-page text-success">
                                {data?.channel_name
                                  ? `${data?.channel_name}`
                                  : "Education"}{" "}
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
                                {data?.video_views} views &nbsp;
                                <i className="fas fa-calendar-alt" />{" "}
                                {data?.current_date}
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
}