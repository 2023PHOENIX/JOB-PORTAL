import React from "react";
import styles from "./JobCard.module.css";

import Companylogo from "../../assets/logo.png";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
function JobCard({ details }) {
  return (
    <div className={styles.wrapper}>
      <LeftContainer details={details} />
      <RightContainer details={details} />
    </div>
  );
}

export default JobCard;
