import React from "react";
import styles from "./JobCard.module.css";
function RightContainer({ details }) {
  const { skills } = details;
  // console.log(skills);
  return (
    <div className={styles.rightside}>
      <div className={styles.skills}>
        {skills.map((s, i) => (
          <div key={i} className={styles.skillcard}>
            {s}
          </div>
        ))}
      </div>
      <div className={styles.manipulation}>
        <div className={`${styles.edit} ${styles.button}`}>Edit job</div>
        <div className={`${styles.viewDetails} ${styles.button}`}>
          View Details
        </div>
      </div>
    </div>
  );
}

export default RightContainer;
