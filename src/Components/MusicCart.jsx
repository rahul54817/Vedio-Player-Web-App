import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

const MusicCart = ({ musicInfo }) => {
  const navigate = useNavigate();

  const playMusic = (music_id) => {
    localStorage.setItem("music-id", music_id);
    navigate("/music-page");
  };

  return (
    <div className="col-xl-3 col-sm-6 mb-3">
      <div
        className="video-card history-video shadow"
        style={{
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      >
        <div
          className="video-card-image"
          style={{ cursor: "pointer" }}
          onClick={() => playMusic(musicInfo._id)}
        >
          <a className="play-icon">
            <i className="fas fa-play-circle" style={{ cursor: "pointer" }} />
          </a>
          <a>
            <img
              className="img-fluid"
              src={`http://103.104.74.215:3003/${musicInfo.music[1].path}`}
              alt
              style={{ width: "100%", height: "10rem" }}
            />
          </a>
          <div className="time">3:50</div>
        </div>

        <div className="video-card-body">
          <div className="d-flex justify-content-between  ">
            <div className=" video-title">
              <a style={{ width: "170px" }}>
                {musicInfo?.music_title?.slice(0, 20)}
              </a>
            </div>

            <div className="dropdown myDropdown dropdown myDropdown text-color-black d-flex justify-content-end col-2">
              <a
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <BsThreeDotsVertical className="align-items-end" />
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
                  <i className="fa-solid fa-list-ol" /> &nbsp;&nbsp;Save to
                  Playlist
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
            Education{" "}
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
            1.8M views &nbsp;
            <i className="fas fa-calendar-alt" /> 11 Months ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCart;
