import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const UserSignup = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    name:""
  });
 
  const navigate = useNavigate();

  function handleOnChange(e) {
    let { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://dlbackend.onrender.com/user/register",details).then((res) =>{
        console.log(res)
        alert("Registered")
        navigate('/userlogin')
    })
  };
 function handleUserLogin(){
  navigate("/userlogin")
 }
  return (
    <div className="login-page">
      <h1>User Signup</h1>
      <form className="form"  onSubmit={handleSubmit}>
      <div>
          <label>
            <input
              type="text"
              name="name"
              onChange={handleOnChange}
              placeholder="name"
            />
          </label>
        </div>
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
          <button
            type="submit"
          >
            SUBMIT
          </button>
        </div>
        <div>
          <button onClick={handleUserLogin}>Already Registered?</button>
        </div>
      </form>
    </div>
  );
};
