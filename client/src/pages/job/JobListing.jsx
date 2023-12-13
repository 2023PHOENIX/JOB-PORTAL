import axios from 'axios';
import React, { useEffect } from 'react';
import JobHeader from '../../components/job.header/JobHeader';
import JobCard from '../../components/jobCard/JobCard';

function JobListing(props) {

    const fetchJobPosts = async () => {
        const response = await axios.get('http://localhost:8001/portal');
        console.log(response.data);
        return response.data;
    }

    // useEffect(() => {
    //     fetchJobPosts();
    // }, []);
    return (
        <div>
            <JobHeader />
            <div style={{ paddingTop: "20px" }}>

            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            </div>
        </div>
    );
}

export default JobListing;