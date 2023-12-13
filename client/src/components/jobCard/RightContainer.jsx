import React from "react";
import styles from "./JobCard.module.css";
function RightContainer(props) {
  return (
    <div className={styles.rightside}>
          <div className={styles.skills}>
              
              <div className={styles.skillcard}>JS</div>
              <div className={styles.skillcard}>nodejs</div>
              <div className={styles.skillcard}>react JS</div>
      </div>
      <div className={styles.manipulation}>
        <div className={`${styles.edit} ${styles.button}`}>Edit job</div>
        <div className={`${styles.viewDetails} ${styles.button}`}>View Details</div>
      </div>
    </div>
  );
}

export default RightContainer;
