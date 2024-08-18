import React from 'react'

const SVideoCart = ({object}) => {
  return (
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
          {object?.data?.[0]?.video?.[1]?.filename ? (
            <img
              src={`http://103.104.74.215:3003/uploads/${object?.data[0]?.image[1]?.filename}`}
              className="img-fluid mr-2"
              alt=""
              style={{
                width: "1.9rem",
                height: "1.9rem",
                borderRadius: "50%",
              }}
            />
          ) : (
            <img
              className="img-fluid"
              src="img/youtubelogo.png"
              alt=""
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
  )
}

export default SVideoCart
