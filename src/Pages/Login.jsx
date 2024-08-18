import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    }

    axios.post('http://103.104.74.215:3003/api/login', user)
    .then((res)=>{
      if(res.data.result === 'false'){
        toast(res.data.msg,{
          position: "top-center",
        });
      }
      else{
        localStorage.setItem("_id", res.data.data._id);

        toast(res.data.msg,{
          position: "top-center"
        
        });
        setTimeout(()=>{
          navigate('/');

        },3000)
        
      }
      
    })
    .catch((err)=>{
      console.log(err)
    })
   

  };


  return (
    <>
     <ToastContainer />

    <section className="login-main-wrapper">
      <div className="container-fluid pl-0 pr-0">
        <div className="row no-gutters">
          <div className="col-md-12 p-5 bg-white full-height">
            <div className="login-main-left">
              <div className="text-center mb-5 login-main-left-header pt-4">
                <img src="img/favicon.png" className="img-fluid" alt="LOGO" />
                <h5 className="mt-3 mb-3">Login</h5>
                {/* <p>It is a long established fact that a reader <br> will be distracted by the readable.</p> */}
              </div>
              <form action="#">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-outline btn-block btn-lg"
                        style={{
                          backgroundColor: "#000080",
                          color: "white",
                          borderRadius: 20,
                        }}
                        onClick={(e) => loginHandler(e)}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center mt-5">
                <p className="light-gray">
                  <a href="#">Forgot Password</a>
                </p>
                <p className="light-gray">
                  Don’t have an account? <a href="register.html">Sign Up</a>
                </p>
              </div>
            </div>
            <a
              className="oauth-container btn darken-4 white black-text"
              href="#"
              style={{
                position: "relative",
                left: 320,
                marginBottom: 2,
                marginRight: 8,
                textTransform: "none",
              }}
            >
              <div className="left">
                <img
                  width="20px"
                  alt="Google sign-in"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                />{" "}
                Login with Google
              </div>
            </a>
            {/* <div>
                      <a class="hollow button primary" href="#">
                          <img width="15px" style="margin-bottom:3px; margin-right:5px" alt="Google login"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                          Sign in with Google
                      </a>
                  </div> */}
            <a
              className="oauth-container btn darken-4 white black-text"
              href="#"
              style={{ position: "relative", left: 420, textTransform: "none" }}
            >
              <div className="left">
                <img
                  width="30px"
                  style={{ marginBottom: 2, marginRight: 2 }}
                  alt="Google sign-in"
                  src="img/facebook.png"
                />
                Login with Facebook
              </div>
            </a>
          </div>
          {/* <div class="col-md-7">
<div class="login-main-right bg-white p-5 mt-5 mb-5">
<div class="owl-carousel owl-carousel-login">
<div class="item">
<div class="carousel-login-card text-center">
<img src="img/login.png" class="img-fluid" alt="LOGO">
<h5 class="mt-5 mb-3">​Watch videos offline</h5>
<p class="mb-4">when an unknown printer took a galley of type and scrambled<br> it to make a type specimen book. It has survived not <br>only five centuries</p>
</div>
</div>
<div class="item">
<div class="carousel-login-card text-center">
<img src="img/login.png" class="img-fluid" alt="LOGO">
<h5 class="mt-5 mb-3">Download videos effortlessly</h5>
<p class="mb-4">when an unknown printer took a galley of type and scrambled<br> it to make a type specimen book. It has survived not <br>only five centuries</p>
</div>
</div>
<div class="item">
<div class="carousel-login-card text-center">
<img src="img/login.png" class="img-fluid" alt="LOGO">
<h5 class="mt-5 mb-3">Create GIFs</h5>
<p class="mb-4">when an unknown printer took a galley of type and scrambled<br> it to make a type specimen book. It has survived not <br>only five centuries</p>
</div>
</div>
</div>
</div>
</div> */}
        </div>
      </div>
    </section>
    </>
  );
};

export default Login;
