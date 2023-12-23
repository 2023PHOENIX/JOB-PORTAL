import React from "react";
import styles from "./job.header.module.css";

// IMG
import ImgLeftBottom from "../../assets/leftbottom.png";
import middleTop from "../../assets/middleTop.png";
import Right from "../../assets/right.png";
function JobHeader(props) {
  return (
    <div className={styles.wrapper}>
      <img src={ImgLeftBottom} className={styles.lbimg} />
      <img src={middleTop} className={styles.midT} />
      <img src={Right} className={styles.R} />

      <div className={styles.navBar}>
        <div className={styles.jobFinder}>JOB FINDER</div>
        <div className={styles.auth}>
          <div
            className={`${styles.login} ${styles.centerElement}`}
            onClick={() => {
              console.log("hello");
            }}
          >
            Login
          </div>
          <div className={`${styles.register} ${styles.centerElement}`}>
            Register
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobHeader;
