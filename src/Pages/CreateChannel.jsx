import React, { useEffect, useRef, useState } from 'react'

const CreateChannel = () => {
    const [bgImg, setBGImg] = useState('');
    const [profileImg, setProfileImg] = useState('');
     const BGImgRef = useRef();
    const ProfileImgRef = useRef();

    const BGImgChange = () =>{
        BGImgRef.current.click();
    }
    const ProfileImgChange = () =>{
        BGImgRef.current.click();
    }
    useEffect(()=>{
        localStorage.setItem('bgImg',bgImg);
    },[profileImg])
  return (
    <div id="wrapper">
    <div className="single-channel-page" id="content-wrapper">
      <div className="single-channel-image">
        <input
          type="file"
          className="form-control-file"
          id="FormControlBGImageFile1"
          style={{ display: "none" }}
          ref={BGImgRef}
          onChange={(event) => setBGImg(event.target.files[0])}
         
        />
        <img
          className="img-fluid"
          alt
          src="img/channel-banner.png"
          style={{ cursor: "pointer" }}
          onClick={BGImgChange}
         
        />
        <div className="channel-profile">
          <input
            type="file"
            className="form-control-file"
            id="FormControlProfileImageFile2"
            style={{ display: "none" }}
            ref={ProfileImgRef}
            onChange={(event) => setProfileImg(event.target.files[0])}
       
          />
          <img
            className="channel-profile-img"
            alt
            src="img/s2.png"
            style={{ cursor: "pointer" }}
            onClick={ProfileImgChange}
    
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

            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"

            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className='btn btn-primary'

          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default CreateChannel
