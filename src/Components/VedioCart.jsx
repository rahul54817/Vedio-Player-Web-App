import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";


const VedioCart = ({ object }) => {
  const navigate = useNavigate();
  const getVideoById = (id) => {
    localStorage.setItem("video-id", id);
    navigate("/vedio-play");
  };

  const getSingleChannelById = (id) => {
    localStorage.setItem("single-channel-id", id);
  
  }

  const saveToWatchLater = (id) =>{
    let data = {
      user_id : localStorage.getItem("_id"),
      channel_id : localStorage.getItem("channel_id"),
      video_id : id
    }

    axios
   .post('http://103.104.74.215:3003/api/save_watch_later',data)
   .then((response)=>{
    if(response.data.msg===false){
      console.log("response",response.data.msg)
    }
    else{
      console.log("response",response.data.msg)

    }
   })

  }

  return (
    <div className="col-xl-3 col-sm-6 mb-3">
    <div className="video-card history-video shadow rounded">
      <div
        className="video-card-image"
        onClick={() => getVideoById(object?._id)}
        style={{ cursor: "pointer" }}
      >
        <a className="play-icon" >
          <i className="fas fa-play-circle"
           style={{cursor:'pointer'}}/>
        </a>
        <a >
          {object?.video[1]?.filename ? (
            <img
              className="img-fluid"
              src={`http://103.104.74.215:3003/uploads/${object?.video[1]?.filename}`}
              alt
              style={{
                width: "100%",
                height: "10rem",
         
              }}
            />
          ) : (
            <img
              className="img-fluid"
              src="https://i.pinimg.com/originals/45/f9/b6/45f9b6f3b8a165ca74b9b212cb703d97.jpg"
              alt
              style={{
                width: "100%",
                height: "10rem",
             
              }}
            />
          )}
        </a>
        <div className="time">3:50</div>
      </div>
      <div className="video-card-body">
        <div className=" d-flex  justify-content-between ">
       
       <div className="video-title">
          <a  style={{ width: "170px" }}>
            {object?.video_name?.slice(0,20)}
          </a>
       </div>


          <div className="dropdown myDropdown  text-color-black  ">
            <a
             
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
            <BsThreeDotsVertical className="align-items-end" style={{cursor : 'pointer'}}/>
              
            </a>
            <div
              className="dropdown-menu shadow rounded"
              aria-labelledby="dropdownMenuLink"
            >
              <a className="dropdown-item text-dark" style={{cursor : 'pointer'}} >
                <i className="fa-solid fa-bars-staggered" />
                &nbsp;&nbsp;Add to queue
              </a>
              <a className="dropdown-item text-dark" style={{cursor : 'pointer'}} onClick={()=>saveToWatchLater(object?._id)} >
                <i className="fa-regular fa-clock" />
                &nbsp;&nbsp;Save to Watch Later
              </a>
              <a className="dropdown-item text-dark" style={{cursor : 'pointer'}} >
                <i className="fa-solid fa-list-ol" />{" "}
                &nbsp;&nbsp;Save to Playlist
              </a>
              <a className="dropdown-item text-dark" style={{cursor : 'pointer'}} >
                <i className="fa-solid fa-arrow-down" />
                &nbsp;&nbsp; Download
              </a>
              <a className="dropdown-item text-dark" style={{cursor : 'pointer'}} >
                <i className="fa-solid fa-share" />
                &nbsp;&nbsp;Share
              </a>
            </div>
          </div>
        </div>
        <div
          className="video-page text-success"
          
        >
        <Link to="single-channel-page"
        onClick={()=> getSingleChannelById(object?.channel_id)}
        >
        {object.channel_name} &nbsp;

        </Link>
         
          <a
            title
            data-placement="top"
            data-toggle="tooltip"
            
            data-original-title="Verified"
          >
            <i className="fas fa-check-circle text-success" />
          </a>
        </div>
        <div
          className="video-view"
         
        >
         
          <span className="">{object.video_views} views</span>
          &nbsp;
          <i className="fas fa-calendar-alt" /> 11 Months ago
        </div>
      </div>
    </div>
  </div>
  );
};

export default VedioCart;
