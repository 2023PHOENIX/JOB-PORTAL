import styles from "./job.module.css";
import img from "./../../assets/addjobpic.png";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// TODO: add scroll feature in your input form. 
const AddJob = () => {
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
  const handleInputChange = (e) => {
    const { name, type } = e.target;
    let { value } = e.target;
    console.log(name);
    if (name == "skills") {
      value = value.split(",");
    }
    setJobData((prev) => ({
      ...prev,
      [name] : type === "checkbox" ? e.target.checked : value,
    }))
  } 
  const handleAddingJob = async () => {

    try {
      
      const token = localStorage.getItem("token");
      console.log(jobData);
      const response = await axios.post("http://localhost:8001/portal/addJob",jobData, {
        headers: {
          "Content-Type": "application/json",
          token: token, // Use your custom header here
        },
      });



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
      
      
        // console.log(response.data);
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
      console.error(e)
    }
      


  }
  return (
    <div className={styles.addJobWrapper}>
      <div className={styles.jobForm}>
        <h1>Add Job Description </h1>
        <div className={styles.gridJob}>
          <div className={styles.jobEntry}>
            <div>Company Name</div>
            <input type="text" name="companyName" onChange={handleInputChange} />
          </div>

          <div className={styles.jobEntry}>
            <div>Add url logo</div>
            <input type="text" name="companyLogo" onChange={handleInputChange} />
          </div>
          <div className={styles.jobEntry}>
            <div>Job position</div>
            <input type="text" name="jobPosition" onChange={handleInputChange} />
          </div>
          <div className={styles.jobEntry}>
            <div>Monthly Salary</div>
            <input type="text" name="monthlySalary" onChange={handleInputChange}/>
          </div>
          <div className={styles.jobEntry}>
            <div>Job Type</div>
            <select className={styles.jobOption}  name="jobType" onChange={handleInputChange}>
              <option value="fulltime">fulltime </option>

              <option value="parttime">parttime </option>
              <option value="intern">intern</option>
            </select>
          </div>
          <div className={styles.jobEntry}>
            <div>Remote/office</div>

            <select className={styles.jobOption} name="workType" onChange={handleInputChange}>
              <option value="remote">remote </option>
              <option value="office">office </option>
            </select>
          </div>
          <div className={styles.jobEntry}>
            <div>Location</div>
            <input type="text" name="location" onChange={handleInputChange}/>
          </div>
          <div className={`${styles.jobEntry} ${styles.textArea}`}>
            <div>Job Description</div>
            <input type="text" onChange={handleInputChange} name="jobDescription" />
          </div>
          <div className={`${styles.jobEntry} ${styles.textArea}`}>
            <div>About company</div>
            <input type="text" onChange={handleInputChange} name="aboutCompany" />
          </div>
          <div className={styles.jobEntry}>
            <div>Skills Required</div>
            <input type="text" onChange={handleInputChange} name="skills" />
          </div>
          <div className={styles.jobEntry}>
            <div>information</div>
            <input type="text" name="information" onChange={handleInputChange}/>
          </div>

          <div className={styles.buttons}>
            <button className={styles.cancle}>Cancle</button>
            <button className={styles.addJob} onClick={() => handleAddingJob()}>+ Add Job</button>
          </div>
        </div>
      </div>
      <img className={styles.image} src={img} />{" "}
    </div>
  );
};

export default AddJob;
