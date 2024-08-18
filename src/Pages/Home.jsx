import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VedioCart from "../Components/VedioCart";

const Home = () => {
  const [vedios, setVedios] = useState([]);


  const getAllVideos = () => {
    axios
      .get("http://103.104.74.215:3003/api/get_top_video")
      .then((response) => {
        setVedios(response.data.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllVideos();
  }, [0]);

  

  return (
    <div id="wrapper">
      <div id="content-wrapper">
        <div className="container-fluid pb-0">
          <div className="video-block section-padding">
            <div className="row">
              <div className="col-md-12">
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
                      <i className="fa fa-caret-down" aria-hidden="true" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-fw fa-star" /> &nbsp; Top Rated
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-fw fa-signal" /> &nbsp; Viewed
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-fw fa-times-circle" />
                        &nbsp; Close
                      </a>
                    </div>
                  </div>
                  <h6>Top Vedios </h6>
                </div>
              </div>
              {vedios.map((object) =>
              object.video ?
                 (
                  <VedioCart object={object} />
                )
                : 
                ("") 
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
