import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [userfName, setUserFName] = useState("");
  const [userlName, setUserLName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  // const [users, setUsers] = useState(() => {
  //   let locaUsers = localStorage.getItem("users");
  //   if (locaUsers != null) {
  //     return JSON.parse(locaUsers);
  //   } else {
  //     return [];
  //   }
  // });


  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(users));
  // }, [users]);

  const navigate = useNavigate();

  const RegistrationHandler = (e) => {
    e.preventDefault();
    const user = {
      username: userfName + " " + userlName,
      email : userEmail,
      password: userPassword,
      confirm_password: confirmPassword,
      gender : gender

    }

    axios
    .post('http://103.104.74.215:3003/api/signup',user)
    .then((res)=>{
      console.log(res.data.msg);
      if(res.data.result === false){
        alert(res.data.msg)
      }
      else{
        alert("success")
        navigate('/login')
      }
     
    })
  }

  // const RegistrationHandler = (e) => {

  //   if (
  //     userfName != null &&
  //     userlName != null &&
  //     userPassword != null &&
  //     setUserPassword != null &&
  //     confirmPassword === userPassword
  //   ) {
  //     const newUser = {
  //       id: Date.now(),
  //       fname: userfName,
  //       lname: userlName,
  //       email: userEmail,
  //       password: userPassword,
  //     };
  //     setUsers((users) => [...users, newUser]);
  //     setUserFName("");
  //     setUserLName("");
  //     setUserEmail("");
  //     setUserPassword("");
  //     setConfirmPassword("");
  //     localStorage.setItem("users", JSON.stringify(users));
  //     alert("Success")
      
      
      
  //   }else{
  //     alert("Please fill all the fields correctly");
  //   }
    
    
  // };

  return (
    <section className="login-main-wrapper">
      <div className="container-fluid pl-0 pr-0">
        <div className="row no-gutters">
          <div className="col-md-12 p-5 bg-white full-height">
            <div className="login-main-left">
              <div className="text-center mb-5 login-main-left-header pt-4">
                <img src="img/favicon.png" className="img-fluid" alt="LOGO" />
                <h5 className="mt-3 mb-3">Welcome to Seven</h5>
                {/* <p>It is a long established fact that a reader <br> will be distracted by the readable.</p> */}
              </div>
              <form action>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter first name"
                    value={userfName}
                    onChange={(event) => setUserFName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter last name"
                    value={userlName}
                    onChange={(event) => setUserLName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={userEmail}
                    onChange={(event) => setUserEmail(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={userPassword}
                    onChange={(event) => setUserPassword(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="confirm Password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </div>
                <div className="form-group mt-4">
                  <select required className="form-control" value={gender} onChange={(event) => setGender(event.target.value)}>
                    <option className="text-center">--Select Gender--</option>
                    <option value="male">Male</option>
                    <option value="female">FeMale</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mt-4">
                  {/* <button type="submit" class="btn btn-outline-primary btn-block btn-lg">Sign Up</button> */}
                  <button
                    type="submit"
                    className="btn btn-outline btn-block btn-lg"
                    style={{
                      backgroundColor: "#000080",
                      color: "white",
                      borderRadius: 20,
                    }}
                    onClick={(e)=>RegistrationHandler(e)}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-center mt-5">
                <p className="light-gray">
                  Already have an Account? <a href="login.html">Sign In</a>
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
                Sign Up with Google
              </div>
            </a>
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
                Sign Up with Facebook
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
