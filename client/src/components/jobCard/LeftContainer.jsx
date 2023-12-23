import React from "react";
import styles from "./JobCard.module.css";

import Companylogo from "../../assets/logo.png";
import GroupIcon from "../../assets/groupIcon.png";
import MoneyIcon from "../../assets/moneyIcon.svg";
import CountryIcon from "../../assets/countryIcon.svg";
function LeftContainer({ details }) {
  console.log(details);
  return (
    <div className={styles.leftside}>
      <div className={styles.companyLogo}>
        <img src={details.companyLogo} alt="logo" />
      </div>
      <div className={styles.jobDetails}>
        <div className={styles.title}>{details.jobPosition}</div>
        <div className={styles.info}>
          <div className={styles.detailInfo}>
            <img src={GroupIcon} height="14" width="20" />
            <span>11-</span>
            <span>50</span>
          </div>
          <div className={styles.detailInfo}>
            <img src={MoneyIcon} height="15" width="20" />
            <span>50000</span>
          </div>
          <div className={styles.detailInfo}>
            <img src={CountryIcon} height="30" width="30" />
            <span>{details.location}</span>
          </div>
        </div>
        <div className={styles.extraDetails}>
          <div>{details.workType}</div>
          <div>{details.jobType}</div>
        </div>
      </div>
    </div>
  );
}

export default LeftContainer;
