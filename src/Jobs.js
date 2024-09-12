import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import './App.css'

function Jobs({ handleBookmark }) {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchJobs(page);
  }, [page]);

  const fetchJobs = async (pageNum) => {
    setLoading(true);
    setError(null);
    try {
      const apiUrl = `https://testapi.getlokalapp.com/common/jobs?page=${pageNum}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const fetchedData = await response.json();
      console.log('Fetched data:', fetchedData);

      if (Array.isArray(fetchedData.results)) {
        const updatedData = fetchedData.results.map((job) => {
          if (job.primary_details) {
            return {
              id: job.id,
              title: job.title || 'N/A',
              place: job.primary_details.Place || 'N/A',
              jobType: job.primary_details.Job_Type || 'N/A',
              experience: job.primary_details.Experience || 'N/A',
              feeCharged: job.primary_details.Fees_Charged || 'N/A',
              qualification: job.primary_details.Qualification || 'N/A',
            };
          } else {
            console.error('Missing primary_details for job:', job);
            return null;
          }
        }).filter(job => job !== null);

        setJobs((prevJobs) => [...prevJobs, ...updatedData]);
      } else {
        throw new Error('Unexpected data structure');
      }

    } catch (error) {
      console.error('Fetch error:', error);
      setError(`Error fetching jobs: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <>
      <h1 className='jobsheading'>JOBS</h1>
      <div className="jobs-container">
      {jobs.map((job) => (
        <div key={job.id} className="job-card" onClick={() => handleCardClick(job)}>
          <h1>{job.title}</h1>
          <JobCard job={job} />
          <button onClick={(e) => { e.stopPropagation(); handleBookmark(job); }}>Bookmark</button>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {selectedJob && (
        <div className="job-details">
          <h2>{selectedJob.title}</h2>
          <p>Location: {selectedJob.place}</p>
          <p>Job Type: {selectedJob.jobType}</p>
          <p>Experience: {selectedJob.experience}</p>
          <p>Fees Charged: {selectedJob.feeCharged}</p>
          <p>Qualification: {selectedJob.qualification}</p>
          <button onClick={() => setSelectedJob(null)}>Close</button>
        </div>
      )}
    </div>
    </>
    
  );
}

export default Jobs;
