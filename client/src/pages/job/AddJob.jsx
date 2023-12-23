import styles from "./job.module.css";

import img from "./../../assets/addjobpic.png";
const AddJob = () => {
  return (
    <div className={styles.addJobWrapper}>
      <div className={styles.jobForm}>
        <h1>Add Job Description </h1>
        <div className={styles.gridJob}>
          <div className={styles.jobEntry}>
            <div>Company Name</div>
            <input type="text" />
          </div>

          <div className={styles.jobEntry}>
            <div>Add url logo</div>
            <input type="text" />
          </div>
          <div className={styles.jobEntry}>
            <div>Job position</div>
            <input type="text" />
          </div>
          <div className={styles.jobEntry}>
            <div>Monthly Salary</div>
            <input type="text" />
          </div>
          <div className={styles.jobEntry}>
            <div>Job Type</div>
            <select className={styles.jobOption}>
              <option>full time </option>
              <option>part time </option>
              <option>intership</option>
            </select>
          </div>
          <div className={styles.jobEntry}>
            <div>Remote/office</div>

            <select className={styles.jobOption}>
              <option>Remote </option>
              <option>office </option>
            </select>
          </div>
          <div className={styles.jobEntry}>
            <div>Location</div>
            <input type="text" />
          </div>
          <div className={`${styles.jobEntry} ${styles.textArea}`}>
            <div>Job Description</div>
            <input type="text" />
          </div>
          <div className={`${styles.jobEntry} ${styles.textArea}`}>
            <div>About company</div>
            <input type="text" />
          </div>
          <div className={styles.jobEntry}>
            <div>Skills Required</div>
            <input type="text" />
          </div>
          <div className={styles.jobEntry}>
            <div>information</div>
            <input type="text" />
          </div>

          <div className={styles.buttons}>
            <button className={styles.cancle}>Cancle</button>
            <button className={styles.addJob}>+ Add Job</button>
          </div>
        </div>
      </div>
      <img className={styles.image} src={img} />{" "}
    </div>
  );
};

export default AddJob;
