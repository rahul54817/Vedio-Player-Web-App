import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProfileUpdate = () => {
  const [userData, setUserData] = useState({});
  const [profile_img, setProfile_img] = useState("");
  
  const profile_ref = useRef();

  useEffect(() => {
    getdata();
  }, [0]);

let getdata = () =>{
  let user_id = localStorage.getItem("_id");

    const id = {
      _id: user_id,
    };

    axios
      .post("http://103.104.74.215:3003/api/view_profile", id)
      .then((res) => {
        console.log(res.data.data);
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
}

  const uploadProfileImage = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append("_id", localStorage.getItem("_id"));
    formdata.append("profile_image", profile_img);

   

    axios
      .post("http://103.104.74.215:3003/api/upload_user_image", formdata)
      .then((res) => {
        getdata();
        console.log("profile update ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="single-channel-page" id="content-wrapper">
      <div className="single-channel-image">
        <img className="img-fluid" alt src="img/channel-banner.png" />
        <div className="channel-profile">
          <form>
            <input
              type="file"
              style={{ display: "none" }}
              ref={profile_ref}
              onChange={(e) => setProfile_img(e.target.files[0])}
              accept="Image/*"
            />

            <img
              className="channel-profile-img"
              style={{ cursor: "pointer" }}
              alt="profile"
              src={`http://103.104.74.215:3003/uploads/${userData?.profile_image?.filename}`}
              onClick={() => {
                profile_ref.current.click();
              }}
            />

            <div className="social">
              <button
                type="button"
                className="btn btn-success"
                onClick={uploadProfileImage}
              >
                Save Changes
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
