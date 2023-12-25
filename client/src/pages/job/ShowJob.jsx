import React, { useEffect, useState } from "react";
import styles from "./show.job.module.css";
import JobHeader from "../../components/job.header/JobHeader";
import money from "../../assets/moneyFill.svg";
import calendar from "../../assets/calender.svg";
import { useLocation } from "react-router-dom";
import axios from "axios";
function ShowJob(props) {

  const [data, setData] = useState(null);

  
  const location = useLocation();
  const { id } = location.state;

  const fetchDetails = async () => {

    try {
      
      const url = "https://job-portal-g8u7.onrender.com/portal/fetchPost/" + id;
      const token = localStorage.getItem("token");
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'token': token
        }
      });
      setData(response.data);
    } catch (e) {
      console.error(e);
    }
  } 
  useEffect(() => {
    fetchDetails();
  }, [])
  
  if (data === null) {
    return <div>Loading...</div>
  }
  return (
    <>
      <JobHeader />

      
      <div className={styles.Infowrapper}>
        <div className={styles.ad}>
          WordPress Development work from home job/internship at Adyaka Infosec
          Private Limited
        </div>

        <div className={styles.jobDetails}>
          <div className={styles.updatedJob}>
            <div className={styles.smallDetails}>
              <div className={styles.uploadTime}>1w ago</div>
              <div>.</div>
              <div className={styles.jobType}>{data?.jobType }</div>
            </div>
            {/*put some ttime and full time  */}
            <div className={styles.jobHeading}>{data?.jobPosition} </div>
            <div className={styles.location}>{data?.location}</div>
          </div>

          <div className={styles.stipendDuration}>
            <div className={styles.stipendDurationStyler}>
              <div className={styles.stipendImg}>
                <img src={money} /> Stipend
              </div>
              <div>Rs 25000 per month</div>
            </div>
            <div className={styles.stipendDurationStyler}>
              <div className={styles.stipendImg}>
                {" "}
                <img src={calendar} />
                Duration
              </div>
              <div>5 months</div>
            </div>
          </div>

          <div className={styles.details}>
            <div className={styles.about}>
              <h1>About Company</h1>
              <p>
               {data?.aboutCompany}
              </p>
            </div>
            <div className={styles.about}>
              <h1>About the job/intership</h1>
              <p>
              {data?.jobDescription} 
              </p>
            </div>
            <div className={styles.about}>
              <h1>Skill(s) required</h1>

              <div className={styles.skillSpan}>
                {data?.skills.map(s => <span>{s}</span>)}
              </div>
            </div>
            <div className={styles.about}>
              <h1>Addition Infomation</h1>
              <p>
                {data?.information}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowJob;
