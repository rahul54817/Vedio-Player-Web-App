import React, { useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdFileUpload } from "react-icons/md";
import { RiVideoUploadFill } from "react-icons/ri";
import { TbMusicShare } from "react-icons/tb";
import axios from "axios";

const Navbar = () => {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const user = {
      _id: localStorage.getItem("_id"),
    };
    axios
      .post("http://103.104.74.215:3003/api/view_profile", user)
      .then((res) => {
        setUserData(res.data.data);
      });
  }, []);

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("_id");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
        &nbsp;&nbsp;
        <button
          className="btn btn-link btn-sm text-secondary order-1 order-sm-0"
          id="sidebarToggle"
        >
          <i className="fas fa-bars" />
        </button>{" "}
        &nbsp;&nbsp;
        <a className="navbar-brand mr-1" href="index.html">
          <img className="img-fluid" alt src="img/logo.png" />
        </a>
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
            />
            <div className="input-group-append">
              <button className="btn btn-light" type="button">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
        <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
          <li className="nav-item dropdown no-arrow mx-1">
          <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa-solid fa-upload"></i>
            &nbsp; Upload
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="messagesDropdown"
            >
              <NavLink  to = 'upload_video' className="dropdown-item" >
              <RiVideoUploadFill /> &nbsp; Upload video
              </NavLink>
              <NavLink  to = 'upload_music' className="dropdown-item" >
              <TbMusicShare /> &nbsp; Upload music
              </NavLink>
            
              
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-bell fa-fw" />
              <span className="badge badge-danger">9+</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="alertsDropdown"
            >
              <a className="dropdown-item" href="#">
                <i className="fas fa-fw fa-edit " /> &nbsp; Action
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Another
                action
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                <i className="fas fa-fw fa-star " /> &nbsp; Something else here
              </a>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-envelope fa-fw" />
              <span className="badge badge-success">7</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="messagesDropdown"
            >
              <a className="dropdown-item" href="#">
                <i className="fas fa-fw fa-edit " /> &nbsp; Action
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Another
                action
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                <i className="fas fa-fw fa-star " /> &nbsp; Something else here
              </a>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
            <a
              className="nav-link dropdown-toggle user-dropdown-link"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {localStorage.getItem("_id") ? (
                <>
                  <img alt="Avatar" src={`http://103.104.74.215:3003/uploads/${userData.profile_image?.filename}`} />
                  &nbsp; &nbsp;{userData.username}
                </>
              ) : (
                <>
                  <img alt="Avatar" src="img/user.png" />
                  &nbsp;&nbsp;Guest User
                </>
              )}
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="userDropdown"
            >
              <NavLink to="profile" className="dropdown-item">
                <i className="fas fa-fw fa-user-circle" /> &nbsp; My Profile
              </NavLink>
              <NavLink to="my-channel" className="dropdown-item">
              <FaChalkboardUser /> &nbsp; My Channel
              </NavLink>

              <NavLink to="profile-update" className="dropdown-item">
                <i className="fas fa-fw fa-user-circle" /> &nbsp; Update Profile
              </NavLink>

              <NavLink to="create-channel" className="dropdown-item">
                <FaChalkboardUser /> &nbsp; Create Channel
              </NavLink>

              <NavLink to="downloads" className="dropdown-item">
                <i className="fa fa-download" /> &nbsp; Downloads
              </NavLink>

              <a className="dropdown-item" href="subscriptions.html">
                <i className="fa fa-thumbs-up" /> &nbsp; My Liked Video
              </a>

              <NavLink to="/history" className="dropdown-item">
                <i className="fa fa-history" /> &nbsp; History
              </NavLink>

              <div className="dropdown-divider" />

              {localStorage.getItem("_id") ? (
                <button
                  className="dropdown-item"
                  data-toggle="modal"
                  data-target="#logoutModal"
                  onClick={logoutHandler}
                >
                  <i className="fas fa-fw fa-sign-out-alt" /> &nbsp; Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="dropdown-item"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  <i className="fas fa-fw fa-sign-in-alt" /> &nbsp; Login
                </NavLink>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
