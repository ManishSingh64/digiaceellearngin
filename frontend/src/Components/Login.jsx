import { useContext, useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { ReportContext} from "./Context/ReportContext";

function Login() {
  const {setAdminToken,setAdminAuth,adminAuth} = useContext(ReportContext)
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
    console.log(details)
    axios
      .post("https://dlbackend.onrender.com/admin/login", details)
      .then((res) => {
        console.log(res,'login');
        setAdminToken(res.data.token)
        localStorage.setItem("adminToken",res.data.token)
        if (res.data === "Please Register") {
          alert('Please Register')
          navigate("/signup");
        } else {
            setAdminAuth(true);
        }
      });
  };
 if(adminAuth){
    navigate("/admin")
 }
  return (
    <div className="login-page">
      <h1>Admin Login</h1>
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
export default Login;
