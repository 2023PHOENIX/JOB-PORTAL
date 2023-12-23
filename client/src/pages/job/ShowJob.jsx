import React from "react";
import styles from "./show.job.module.css";
import JobHeader from "../../components/job.header/JobHeader";
function ShowJob(props) {
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
            <div className={styles.uploadTime}>1w ago.</div>
            <div className={styles.jobType}> Full Time</div>
          </div>
          {/*put some ttime and full time  */}
          <div className={styles.jobHeading}>WordPress Development </div>
          <div className={styles.location}>Bangalore | India </div>
        </div>

                  <div className={styles.stipendDuration}>
                      
                      <div className={styles.stipendDurationStyler}>
                          <div>Stipend</div>
                          <div>Rs 25000 per month</div>
                      </div>
                      <div className={styles.stipendDurationStyler}>
                          <div>Duration</div>
                          <div>5 months</div>
                      </div>
        </div>

        <div className={styles.details}>
          <div className={styles.about}>
            <h1>About Company</h1>
            <p>
              We provide technology-based services to help businesses and
              organizations achieve their goals. We offer a wide range of
              services, including software development, system integration,
              network and security services, cloud computing, and data
              analytics. Our primary focus is on leveraging technology to
              streamline business processes, improve productivity, and enhance
              overall efficiency.
            </p>
          </div>
          <div className={styles.aboutJob}>
            <h1>About the job/intership</h1>
            <p>
              We are looking for a responsible PHP/WordPress/Laravel/Shopify
              Developer. He/She will be liable for managing services and
              therefore the interchange of knowledge between the server and the
              users. The candidate's primary focus is going to be the event of
              all server-side logic, definition, and maintenance of the central
              database and ensuring high performance and responsiveness to
              requests from the front end. Selected intern's day-to-day
              responsibilities include: 1. Work on the development of theme
              customization, liquid programming language, and corresponding apps
              2. Implement system integrations that are crucial to our success
              3. Contribute to the development of HTML5/CSS/JavaScript and
              standard web technologies integral to building seamless
              multi-channel experiences 4. Work on speed optimization and making
              a mobile-friendly website
            </p>
          </div>
          <div className={styles.skillWrapper}>
            <span>js</span>
            <span>js</span>
            <span>js</span>
          </div>
          <div className={styles.extraInfo}>
            <h1>Addition Infomation</h1>
            <p>
              Stipend structure: This is a performance-based internship. In
              addition to the minimum-assured stipend, you will also be paid a
              performance-linked incentive (₹ 2500 per design).
            </p>
          </div>
        </div>
      </div>
          </div>
          </>
  );
}

export default ShowJob;
