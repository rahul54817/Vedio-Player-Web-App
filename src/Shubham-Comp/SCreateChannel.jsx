import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SCreateChannel() {
  const [channelName, setChannelName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [bgImage, setBGImage] = useState("");
  const [clicked, isclicked] = useState(false);
  const profileImageRef = useRef(null);
  const bgImageRef = useRef(null);
  const navigation = useNavigate();

  const handleBGImageClicked = () => {
    bgImageRef.current.click();
  };

  const handleProfileImageClicked = () => {
    profileImageRef.current.click();
  };

  const handleSubmitButton = (event) => {
    event.preventDefault();
    let id = localStorage.getItem("_id");
    const formChannelData = new FormData();
    formChannelData.append("user_id", id);
    formChannelData.append("channel_name", channelName);
    formChannelData.append("cover_image", bgImage);
    formChannelData.append("profile_image", profileImage);
    axios
      .post("http://103.104.74.215:3003/api/create_channel", formChannelData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log("Error in creating channel", error));
    setChannelName("");
    setBGImage("");
    setProfileImage("");
    navigation("/");
  };  

  return (
    <div id="wrapper">
      <div className="single-channel-page" id="content-wrapper">
        <div className="single-channel-image">
          <input
            type="file"
            className="form-control-file"
            id="FormControlBGImageFile1"
            style={{ display: "none" }}
            ref={bgImageRef}
            accept="image/*"
            onChange={(event) => setBGImage(event.target.files[0])}
          />
          <img
            className="img-fluid"
            alt
            src="img/channel-banner.png"
            style={{ cursor: "pointer" }}
            onClick={handleBGImageClicked}
          />
          <div className="channel-profile">
            <input
              type="file"
              className="form-control-file"
              id="FormControlProfileImageFile2"
              style={{ display: "none" }}
              ref={profileImageRef}
              onChange={(event) => setProfileImage(event.target.files[0])}
            />
            <img
              className="channel-profile-img"
              alt
              src="img/s2.png"
              style={{ cursor: "pointer" }}
              onClick={handleProfileImageClicked}
            />
            <div className="social hidden-xs">
              Social &nbsp;
              <a className="fb mr-2 rounded" href="#">
                <i className="fa-brands fa-instagram text-warning" />
              </a>
              <a className="fb mr-2" href="#">
                <i className="fa-brands fa-facebook text-warning" />
              </a>
              <a className="tw mr-2" href="#">
                <i className="fa-brands fa-x-twitter text-warning" />
              </a>
              <a className="gp mr-2" href="#">
                <i className="fa-brands fa-linkedin-in text-warning" />
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <h1>Create Profile</h1>
          <h5 className="text-muted">
            for profile image and background kindly click on it ✌️
          </h5>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleChannelName" className="form-label">
                Channel Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleChannelName"
                aria-describedby="emailHelp"
                value={channelName}
                onChange={(event) => setChannelName(event.target.value)}
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onChange={() => isclicked(!clicked)}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              className={`btn btn-primary ${clicked ? "" : "disabled"}`}
              onClick={handleSubmitButton}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}