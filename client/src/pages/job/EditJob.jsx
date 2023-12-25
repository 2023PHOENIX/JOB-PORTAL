import styles from "./job.module.css";
import img from "./../../assets/addjobpic.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
// TODO: add scroll feature in your input form.
const EditJob = () => {
  const location = useLocation();

  const [jobData, setJobData] = useState({
    companyName: "",
    companyLogo: "",
    jobPosition: "",
    monthlySalary: "",
    jobType: "",
    workType: "",
    location: "",
    jobDescription: "",
    aboutCompany: "",
    skills: "",
    information: "",
  });

  const fetchDetailsForPost = async () => {
    try {
      const url =
        "https://job-portal-g8u7.onrender.com/portal/fetchPost/" +
        location.state.id;
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
      if (response) {
        setJobData(response.data);
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchDetailsForPost();
  }, []);
  const handleInputChange = (e) => {
    const { name, type } = e.target;
    let { value } = e.target;
    console.log(name);
    if (name == "skills") {
      value = value.split(",");
    }
    setJobData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };
  const handleAddingJob = async () => {
    try {
      if (!jobData._id || !jobData.postedBy) {
        console.error("Job data is incomplete.");
        return;
      }
      const details = {
        postedBy: jobData.postedBy,
        _id: jobData._id,

        updates: jobData,
      };
      const response = await axios.put(
        "https://job-portal-g8u7.onrender.com/portal/updateJobPost",
        details,
        {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        }
      );
      if (response) {
        toast.success(response.data.message, {
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
      console.error(e);
      console.log(e.message);
    }
  };
  return (
    <div className={styles.addJobWrapper}>
      <div className={styles.jobForm}>
        <h1>Add Job Description </h1>
        <div className={styles.gridJob}>
          <div className={styles.jobEntry}>
            <div>Company Name</div>
            <input
              type="text"
              name="companyName"
              value={jobData.companyName}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.jobEntry}>
            <div>Add url logo</div>
            <input
              type="text"
              name="companyLogo"
              value={jobData.companyLogo}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.jobEntry}>
            <div>Job position</div>
            <input
              type="text"
              name="jobPosition"
              value={jobData.jobPosition}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.jobEntry}>
            <div>Monthly Salary</div>
            <input
              type="text"
              name="monthlySalary"
              value={jobData.monthlySalary}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.jobEntry}>
            <div>Job Type</div>
            <select
              className={styles.jobOption}
              name="jobType"
              value={jobData.jobType}
              onChange={handleInputChange}
            >
              <option value="fulltime">fulltime </option>

              <option value="parttime">parttime </option>
              <option value="intern">intern</option>
            </select>
          </div>
          <div className={styles.jobEntry}>
            <div>Remote/office</div>

            <select
              className={styles.jobOption}
              name="workType"
              onChange={handleInputChange}
            >
              <option value="remote">remote </option>
              <option value="office">office </option>
            </select>
          </div>
          <div className={styles.jobEntry}>
            <div>Location</div>
            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleInputChange}
            />
          </div>
          <div className={`${styles.jobEntry} ${styles.textArea}`}>
            <div>Job Description</div>
            <input
              type="text"
              onChange={handleInputChange}
              name="jobDescription"
              value={jobData?.jobDescription}
            />
          </div>
          <div className={`${styles.jobEntry} ${styles.textArea}`}>
            <div>About company</div>
            <input
              type="text"
              onChange={handleInputChange}
              name="aboutCompany"
              value={jobData?.aboutCompany}
            />
          </div>
          <div className={styles.jobEntry}>
            <div>Skills Required</div>
            <input
              type="text"
              value={jobData?.skills}
              onChange={handleInputChange}
              name="skills"
            />
          </div>
          <div className={styles.jobEntry}>
            <div>information</div>
            <input
              type="text"
              name="information"
              value={jobData?.information}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.buttons}>
            <button className={styles.cancle}>Cancle</button>
            <button
              className={styles.addJob}
              onClick={handleAddingJob}
              style={{ color: "white" }}
            >
              update Job
            </button>
          </div>
        </div>
      </div>
      <img className={styles.image} src={img} />{" "}
    </div>
  );
};

export default EditJob;
