import axios from "axios";
import { useContext, useEffect, useState } from "react";
import JobHeader from "../../components/job.header/JobHeader";
import JobCard from "../../components/jobCard/JobCard";
import JobFilter from "../../components/jobFilter/JobFilter";
import { searchJobContext } from "../../context/SearchJobProvider";

function JobListing(props) {
  const [jobs, setJobs] = useState(null);

  const { jobListKey } = useContext(searchJobContext);

  const fetchFilteredPosts = async () => {
    try {
      
      const response = await axios.post(
        "http://localhost:8001/portal/filteredPost/",
        {
          skills: jobListKey,
        }
      );

      setJobs(response.data.data);


    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log(jobListKey);
    if (jobListKey.length === 0) {
      
      fetchJobPosts();
      return;
    }
    fetchFilteredPosts();
  },[jobListKey]);

  const fetchJobPosts = async () => {
    const response = await axios.get("http://localhost:8001/portal");

    setJobs(response.data);
  };

  useEffect(() => {
    fetchJobPosts();
  }, []);
  return (
    <div>
      <JobHeader />

      <JobFilter />
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
