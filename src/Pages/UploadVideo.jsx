import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UploadVideo = () => {
  const[videoname, setVideoName]=useState('');
  const[desc, setDesc]= useState('');
  const[thumbnailImg, setThumbnailImg]=useState('');
  const[vedioFile, setVedioFile]=useState('');
  const[categoryTtype, setCategoryTtype] = useState('');
  const[timeZone, setTimeZone] = useState('');
  const[progress, setProgress] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const currentTime = new Date();
    const formattedTime = currentTime.toISOString();
    setTimeZone(formattedTime);
  }, [0]);


  const uploadDataHandler = (event) => {
    event.preventDefault();
    let id = localStorage.getItem("_id");
    let channel_id = localStorage.getItem("channel_id");
    let channelName = localStorage.getItem("channel-name");

    const formVideoData = new FormData();
    formVideoData.append("user_id", id);
    formVideoData.append("channel_id", channel_id);
    formVideoData.append("channel_name", channelName);
    formVideoData.append("video_name", videoname);
    formVideoData.append("desc", desc);
    formVideoData.append("category_type", categoryTtype);
    formVideoData.append("user_video", vedioFile);
    formVideoData.append("video_thumbnail", thumbnailImg);
    formVideoData.append("time_zone", timeZone);

    axios
    .post("http://103.104.74.215:3003/api/upload_video", formVideoData,{
      onUploadProgress : (progress) => {
       setProgress(progress);
      }
    })
    .then((res)=>{
       console.log(res.data.msg);
       if (res.data.data.result === "false") {
        toast.error(res.data.data.msg);
      } else {
        toast.success(res.data.data.msg);
        setTimeout(()=>{
          navigate("/");
        },3000)
      }
     })
     .catch((err)=>{
       console.log(err);
     })

    
  }

  console.log(progress);





  
  return (
    <>
        <ToastContainer />
    <div id="wrapper">
    <div id="content-wrapper">
      <div className="container-fluid upload-details">
        <form >
          {/* {/ row-1 /} */}
          <div className="row">
            {/* {/ form titile /} */}
            <div className="col-lg-12">
              <div className="main-title">
                <h6>Video Upload</h6>
              </div>
            </div>

            {/* {/ video image /} */}
            <div className="col-lg-2">
              <div className="imgplace" />
            </div>

            {/* {/ uploading bar /} */}
            <div className="col-lg-10">
              <div className="osahan-title">
                Contrary to popular belief, Lorem Ipsum (2020) is not.
              </div>
              <div className="osahan-size">
                102.6 MB . 2:13 MIN Remaining
              </div>
              <div className="osahan-progress">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "75%" }}
                  />
                </div>
                <div className="osahan-close">
                  <a href="#">
                    <i className="fas fa-times-circle" />
                  </a>
                </div>
              </div>
              <div className="osahan-desc">
                Your Video is still uploading, please keep this page open
                until it's done.
              </div>
            </div>
          </div>
          <hr />
          {/* {/ row-2 /} */}
          <div className="row">
            <div className="col-lg-12">
              <div className="osahan-form">
                <div className="row">
                  {/* {/ video desc /} */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        placeholder="Description"
                        rows={3}
                        className="form-control"
                        id="description"
                        required
                        onChange={(e)=>setDesc(e.target.value)}
                       
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="video-name">Video Name</label>
                      <input
                        type="text"
                        placeholder="e.g video-name"
                        className="form-control"
                        id="video-name"
                        required
                        onChange={(e)=>setVideoName(e.target.value)}
                        
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <label htmlFor="category">Video Type</label>
                    <select
                      className="form-control"
                      required
                      id="category"
                      onChange={(e)=>setCategoryTtype(e.target.value)}
                    >
                      <option className="text-center">
                        --Choose Category--
                      </option>
                      <option value="Tutorial">Tutorial</option>
                      <option value="Product">Product Demonstration</option>
                      <option value="Riview">Testimonial</option>
                      <option value="Promotions">Promotions</option>
                      <option value="Entertainment">Entertainment</option>
                    </select>
                  </div>


               
                  <div className="col-lg-6">
                    <label htmlFor="upload-video">Video Thumbnail</label>
                    <div className="custom-file">
                   
                      <input
                        type="file"
                        className="custom-file-input"
                        id="validatedCustomFile"
                        required
                        accept='Image/*'
                        onChange={(e)=>setThumbnailImg(e.target.files[0])}
                        
                       
                      />
                       <label
                        className="custom-file-label"
                        htmlFor="validatedCustomFile"
                      >
                        {thumbnailImg ? thumbnailImg.name : "Browse file..."} 
                      </label>
                      
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <label htmlFor="upload-video">Upload Video</label>
                    <div className="custom-file">
                   
                      <input
                        type="file"
                        className="custom-file-input"
                        id="validatedCustomFile"
                        required
                        accept='Video/*'
                        onChange={(event) =>
                          setVedioFile(event.target.files[0])
                        }
                        
                       
                      />
                       <label
                        className="custom-file-label"
                        htmlFor="validatedCustomFile"
                      >
                        {vedioFile ? vedioFile.name : "Browse file..."} 
                      </label>
                      
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <label htmlFor="timeZone">Current Timezone</label>
                    <div className="custom-file">
                      <input
                        type="text"
                        id="timeZone"
                        placeholder="2024-03-12T13:59:51.183Z"
                        className="form-control"
                        value={timeZone}
                        
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="osahan-area text-center mt-3">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ background: "#000080", borderRadius: 4 }}
                  onClick={(e)=>uploadDataHandler(e)}
                >
                  Upload{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    </>


  )
}

export default UploadVideo
