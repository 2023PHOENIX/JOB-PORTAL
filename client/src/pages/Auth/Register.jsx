import React, { useState } from "react";
import sideImage from "../../assets/sideImage.png";
import styles from "./auth.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
function Register(props) {
  const navigate = useNavigate();
  const [userinfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });
  const createNewUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8001/auth/signup",
        userinfo,
      );
      return response.data;
    } catch (e) {
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
    const { type } = e.target;

    const newValue = type === "checkbox" ? e.target.checked : e.target.value;

    setUserInfo({ ...userinfo, [e.target.name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userinfo);
    if (userinfo.terms) {
      const data = await createNewUser();
      if (data) {
        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log("data from signup", data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.username);
        navigate("/");
      } else {
        toast.warn("something went wrong");
      }
    } else {
      toast.warn("please accept the T&C", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    //   ! something need to be done here.
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <div className={styles.loginQuote}>
          <h1> Create an account</h1>
          <p>Your personal job finder is here</p>
        </div>
        <div className={styles.inputForm}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={userinfo.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={userinfo.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={userinfo.mobile}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userinfo.password}
              onChange={handleInputChange}
            />

            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="terms"
                checked={userinfo.terms}
                onChange={handleInputChange}
              />
              By creating an account, I agree to our terms of use and privacy
              policy
            </label>
            <button type="submit">Create Account</button>
          </form>
        </div>

        <div className={styles.footer}>
          Don't have an account?
          <Link to="/login">
            <span>Sign In</span>
          </Link>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img src={sideImage} className={styles.img} alt="img" />
      </div>
    </div>
  );
}

export default Register;
