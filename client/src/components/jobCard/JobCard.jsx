import React from "react";
import styles from "./JobCard.module.css";

import Companylogo from "../../assets/logo.png";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
function JobCard(props) {
  return (
    <div className={styles.wrapper}>
        <LeftContainer/>
        <RightContainer/>
    </div>
  );
}

export default JobCard;
