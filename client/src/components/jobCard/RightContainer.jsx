import React from "react";
import styles from "./JobCard.module.css";
import { useNavigate } from "react-router-dom";
function RightContainer({ details }) {
  const { skills } = details;
  const navigate = useNavigate();
  const handleViewDetails = () => {
    console.log(details._id)
    navigate("/showJob", { state: { id: details._id } }); 
  };
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
        <div
          className={`${styles.viewDetails} ${styles.button}`}
          onClick={handleViewDetails}
        >
          View Details
        </div>
      </div>
    </div>
  );
}

export default RightContainer;
