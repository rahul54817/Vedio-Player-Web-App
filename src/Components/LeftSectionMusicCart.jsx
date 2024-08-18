import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LeftSectionMusicCart = ({music}) => {
    const navigate = useNavigate();

    const getMusicByID = (id) => {
      localStorage.setItem("music-id", id);
     
     
    };
    return (
        <div className="video-card video-card-list">
          <div className="video-card-image">
            <a className="play-icon" style={{ cursor: "pointer" }}
            onClick={()=>getMusicByID(music._id)}
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
                <i className="fa fa-ellipsis-v" aria-hidden="true" />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item">
                  <i className="fas fa-fw fa-star" /> &nbsp; Top Rated
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-fw fa-signal" /> &nbsp; Viewed
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-fw fa-times-circle" /> &nbsp; Close
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
              <i className="fas fa-calendar-alt" /> 11 Months ago
            </div>
          </div>
        </div>
      );
}

export default LeftSectionMusicCart
