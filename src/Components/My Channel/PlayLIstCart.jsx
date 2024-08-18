import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';



const PlayLIstCart = () => {
    const navigate = useNavigate();
    const [playlist,setPlaylist] = useState([]);

    const getPlayList = () => {
       

        let data = {
            user_id : localStorage.getItem('_id'),
            channel_id : localStorage.getItem('channel-id'),
        }

        axios
        .post('http://103.104.74.215:3003/api/get_my_playlist',data)
        .then((response)=>{
            if(response.data.msg===false){
                console.log("response",response.data.msg)
            }
            else{
                console.log("response",response.data.data)
                setPlaylist(response.data.data);

            }
        })
       

    }

    useEffect(()=>{
        getPlayList();
    },[0])
   
    
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
        {
            playlist.map((item)=>(

          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="video-card" >
              <div className="video-card-image" style={{cursor: 'pointer'}}   >
                <a className="play-icon" >
                  <i className="fas fa-play-circle" />
                </a>
                <a >
            
                    <img
                      className="img-fluid"
                     
                      src= {`http://103.104.74.215:3003/uploads/${item.image.filename}`}
                      alt
                      style={{ width: "100%", height: "10rem" }}
                    />
                 
                </a>
                <div className="time">5 videos</div>
              </div>
              <div className="video-card-body">
              
              <div className="d-flex justify-content-btween ">

                <div className="video-title ">
                  <a >{item.name}</a>
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
               
                <div className="video-view">
                 Public : Playlist 
                 
                </div>
                
              </div>
            </div>
          </div>
            ))
        }

    

      
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

export default PlayLIstCart
