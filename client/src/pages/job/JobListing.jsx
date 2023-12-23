import axios from "axios";
import React, { useEffect, useState } from "react";
import JobHeader from "../../components/job.header/JobHeader";
import JobCard from "../../components/jobCard/JobCard";

function JobListing(props) {
  const [jobs, setJobs] = useState(null);
  const fetchJobPosts = async () => {
    const response = await axios.get("http://localhost:8001/portal");

    setJobs(response.data);

    // console.log(response.data);
  };

  useEffect(() => {
    fetchJobPosts();
  }, []);
  return (
    <div>
      <JobHeader />
      <div style={{ paddingTop: "20px" }}>
        {jobs &&
          jobs.map((j, i) => {
            return <JobCard details={j} key={i} />;
          })}
      </div>
    </div>
  );
}

export default JobListing;
