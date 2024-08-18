import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const GetMyVideos = ({myChannelVedios}) => {
    const navigate = useNavigate();
    const playVedio =(id)=>{
        localStorage.setItem("video-id",id)
        navigate('/vedio-play');


    }

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
                Sort by{" "}
                <i className="fa fa-caret-down" aria-hidden="true" />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" >
                  <i className="fas fa-fw fa-star" /> &nbsp; Top Rated
                </a>
                <a className="dropdown-item" >
                  <i className="fas fa-fw fa-signal" /> &nbsp; Viewed
                </a>
                <a className="dropdown-item" >
                  <i className="fas fa-fw fa-times-circle" />
                  &nbsp; Close
                </a>
              </div>
            </div>
            <h6>Videos</h6>
          </div>
        </div>
        {myChannelVedios?.map((object) => (
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="video-card" >
              <div className="video-card-image" style={{cursor: 'pointer'}} onClick={()=> playVedio(object?._id)}  >
                <a className="play-icon" >
                  <i className="fas fa-play-circle" />
                </a>
                <a >
                  {object.video[0].filename ? (
                    <img
                      className="img-fluid"
                      src={`http://103.104.74.215:3003/uploads/${object.video[1]?.filename}`}
                      // src="https://static.thenounproject.com/png/1077596-200.png"
                      alt
                      style={{ width: "100%", height: "10rem" }}
                    />
                  ) : (
                    <img
                      className="img-fluid"
                      src="https://www.kindpng.com/picc/m/736-7369205_play-button-png-pic-video-default-transparent-png.png"
                      alt
                      style={{ width: "100%", height: "10rem" }}
                    />
                  )}
                </a>
                <div className="time">3:50</div>
              </div>
              <div className="video-card-body">
              
              <div className="d-flex justify-content-btween ">

                <div className="video-title ">
                  <a >{object.video_name}</a>
                </div>
                <div className="dropdown myDropdown text-color-black col">
                      <a  
                        
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <BsThreeDotsVertical className="align-items-end" style={{cursor:'pointer'}} />
                      </a>
                      <div
                        className="dropdown-menu shadow rounded"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a
                          className="dropdown-item text-dark"
                          
                        >
                          <i className="fa-solid fa-bars-staggered" />
                          &nbsp;&nbsp;Add to queue
                        </a>
                        <a
                          className="dropdown-item text-dark"
                          
                        >
                          <i className="fa-regular fa-clock" />
                          &nbsp;&nbsp;Save to Watch Later
                        </a>
                        <a
                          className="dropdown-item text-dark"
                          
                        >
                          <i className="fa-solid fa-list-ol" />{" "}
                          &nbsp;&nbsp;Save to Playlist
                        </a>
                        <a
                          className="dropdown-item text-dark"
                          
                        >
                          <i className="fa-solid fa-arrow-down" />
                          &nbsp;&nbsp; Download
                        </a>
                        <a
                          className="dropdown-item text-dark"
                          
                        >
                          <i className="fa-solid fa-share" />
                          &nbsp;&nbsp;Share
                        </a>
                      </div>
                </div>
              </div>
                <div className="video-page text-success">
                  {localStorage.getItem("channel-name")}
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
        ))}

      
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center pagination-sm mb-0">
          <li className="page-item disabled">
            <a tabIndex={-1}  className="page-link">
              Previous
            </a>
          </li>
          <li className="page-item active">
            <a  className="page-link">
              1
            </a>
          </li>
          <li className="page-item">
            <a  className="page-link">
              2
            </a>
          </li>
          <li className="page-item">
            <a  className="page-link">
              3
            </a>
          </li>
          <li className="page-item">
            <a  className="page-link">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  )
}

export default GetMyVideos
