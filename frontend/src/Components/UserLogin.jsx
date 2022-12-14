import React, { useContext, useState } from 'react'
import axios from 'axios';
import { ReportContext } from './Context/ReportContext';
import { useNavigate } from 'react-router-dom';

export const UserLogin = () => {
    const {setUserAuth,setUserToken,userAuth} = useContext(ReportContext)
    const [details, setDetails] = useState({
      email: "",
      password: "",
    });
  
    const navigate = useNavigate();
    function handleOnChange(e) {
      let { name, value } = e.target;
  
      setDetails({ ...details, [name]: value });
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios
        .post("https://dlbackend.onrender.com/user/login", details)
        .then((res) => {
          // console.log(res,'login');
          setUserToken(res.data.token)
          localStorage.setItem("userToken",res.data.token)
          if (res.data === "Please Register") {
            alert("please Register")
            navigate("/usersignup");
          } else {
            setUserAuth(true);
          }
        });
    };
   if(userAuth){
      navigate("/user")
   }
    return (
      <div className="login-page">
        <h1>User Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                onChange={handleOnChange}
                type="email"
                name="email"
                placeholder="email"
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="password"
                name="password"
                onChange={handleOnChange}
                placeholder="password"
              />
            </label>
          </div>
          <div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    );
}
