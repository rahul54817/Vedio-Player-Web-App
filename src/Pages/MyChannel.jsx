import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ChenalPage from "./ChenalPage";
import axios from "axios";
import GetMyVideos from "../Components/My Channel/GetMyVideos";
import GetMyMusic from "../Components/My Channel/GetMyMusic.jsx";
import PlayLIstCart from "../Components/My Channel/PlayLIstCart.jsx";
import WatchLaterVideos from "../Components/My Channel/WatchLaterVideos.jsx";

const MyChannel = () => {
  const [channelData, setChannelData] = useState({});
  const [myChannelVedios, setmyChannelVedios] = useState([]);
  const [myChannelMusic, setmyChannelMusic] = useState([]);

  const [profileImg, setProfileImg] = useState("");

  const getMyChannelData = () =>{
    const userID = {
      user_id: localStorage.getItem("_id"),
    };
    axios
      .post("http://103.104.74.215:3003/api/get_my_channel", userID)
      .then((res) => {
        setChannelData(res.data.data[0]);
        setProfileImg(res.data.data[0].image[0].filename);
        localStorage.setItem("channel-name", res.data.data[0].channel_name);

        localStorage.setItem("channel_id", res.data.data[0]._id);
      })
      .catch((err) => {
        console.log(err);
      });

  }
  const getMyChannelVedios = () =>{
    const myChannel = {
      user_id: localStorage.getItem("_id"),
      channel_id: localStorage.getItem("channel_id"),
    };
    axios
      .post("http://103.104.74.215:3003/api/get_my_channel_video", myChannel)
      .then((res) => {
        setmyChannelVedios(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getMyChannelMusic = () =>{
    const myChannel = {
      user_id: localStorage.getItem("_id"),
      channel_id: localStorage.getItem("channel_id"),
    };
    axios
      .post("http://103.104.74.215:3003/api/get_my_channel_audio", myChannel)
      .then((res) => {
        setmyChannelMusic(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }
  
  useEffect(() => {
    getMyChannelData();
    getMyChannelVedios();
    getMyChannelMusic();
    
    
  }, [0]);



  

  return (
    <div className="single-channel-page" id="content-wrapper">
      <div className="single-channel-image">
        <img className="img-fluid" alt src="img/channel-banner.png" />
        <div className="channel-profile">
          <img
            className="channel-profile-img"
            alt
            src={`http://103.104.74.215:3003/uploads/${profileImg}`}
          />
          <div className="social hidden-xs">
            Social &nbsp;
            <a className="fb" href="#">
              Facebook
            </a>
            <a className="tw" href="#">
              Twitter
            </a>
            <a className="gp" href="#">
              Google
            </a>
          </div>
        </div>
      </div>
      <div className="single-channel-nav">
        <a className="channel-brand" href="#">
          {channelData.channel_name}{" "}
          <span
            title
            data-placement="top"
            data-toggle="tooltip"
            data-original-title="Verified"
          >
            <i className="fas fa-check-circle text-success" />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <Tabs className={"mt-2"}>
          <TabList>
            <Tab>Videos</Tab>
            <Tab>Music</Tab>
            <Tab>Playlist</Tab>
            <Tab>Watch later</Tab>
            <Tab>About</Tab>
          </TabList>
          <TabPanel>
           <GetMyVideos myChannelVedios = {myChannelVedios} />
          </TabPanel>
          

          <TabPanel>
           <GetMyMusic myChannelMusic = {myChannelMusic}  />
          </TabPanel>
          
          <TabPanel>
           <PlayLIstCart />
          </TabPanel>
          <TabPanel>
          <WatchLaterVideos />
           
          </TabPanel>
          <TabPanel>
            <h2>About</h2>
          </TabPanel>
        </Tabs>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Videos <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Playlist</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Channels</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Discussion</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Donate
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control form-control-sm mr-sm-1" type="search" placeholder="Search" aria-label="Search" /><button className="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit"><i className="fas fa-search" /></button> &nbsp;&nbsp;&nbsp; <button className="btn btn-outline-danger btn-sm" type="button">Subscribe
            <strong>1.4M</strong></button>
        </form>
      </div> */}
      </div>
    </div>
  );
};

export default MyChannel;
