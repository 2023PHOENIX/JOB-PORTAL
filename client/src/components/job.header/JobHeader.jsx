import React, { useState } from "react";
import styles from "./job.header.module.css";

// IMG
import userProfileImg from "../../assets/recuriter.png";
import ImgLeftBottom from "../../assets/leftbottom.png";
import ImgMiddleTop from "../../assets/middleTop.png";
import ImgRight from "../../assets/right.png";
import { useNavigate } from "react-router-dom";
function JobHeader(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser("");
  }
  return (
    <div className={styles.headerWrapper}>
      <img src={ImgLeftBottom} className={styles.leftImg} />
      <img src={ImgMiddleTop} className={styles.middleImg} />
      <img src={ImgRight} className={styles.rightImg} />

      <div className={styles.leftSide}>Job Finder</div>
      <div className={styles.rightSide}>
        {localStorage.getItem("user") ? (
          <div className={styles.user}>
            <div onClick={handleLogout}>Logout</div>
            <span> Hello {user}</span> <img src={userProfileImg} />
          </div>
        ) : (
          <>
            <button className={styles.login} onClick={() => navigate("/login")}>
              Login
            </button>
            <button
              className={styles.register}
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default JobHeader;
