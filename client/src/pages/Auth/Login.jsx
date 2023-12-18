import React, { useState } from "react";
import sideImage from "../../assets/sideImage.png";
import styles from "./auth.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const [userinfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const fetchMyUser = async () => {
    try {
      console.log(userinfo);
      const response = await axios.post(
        "http://localhost:8001/auth/login",
        userinfo,
      );
      return response.data;
    } catch (e) {
      console.log("error", e.response.data.message);
      toast.error(e.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const handleInputChange = (e) => {
    setUserInfo({ ...userinfo, [e.target.name]: e.target.value });
  };
  //^ something need to be done handle the json web token for home page.
  const handleSubmit = async (e) => {
    console.log("hit");
    e.preventDefault();
    const data = await fetchMyUser();
    console.log(data);
    if (data.token) {
      toast.success("Login successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
    } else {
      toast.error("Json web token problem went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    //   ! something need to be done here.
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <div className={styles.loginQuote}>
          <h1> Already have an account?</h1>
          <p>Your personal job finder is here</p>
        </div>
        <div className={styles.inputForm}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={userinfo.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userinfo.password}
              onChange={handleInputChange}
            />
            <button type="submit">Sign in</button>
          </form>
        </div>

        <div className={styles.footer}>
          Don't have an account?
          <Link to="/register">
            <span>Sign Up</span>
          </Link>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img src={sideImage} className={styles.img} alt="img" />
      </div>
    </div>
  );
}

export default Login;
