// JobCard.js
import React from 'react';
import './App.css'

function JobCard({ job }) {
  if (!job) {
    return <div>Job data is not available</div>;
  }

  const { place, jobType, experience, feeCharged, qualification } = job;

  return (
    <div className="job-card-content">
      <p>Location: {place || 'N/A'}</p>
      <p>Job Type: {jobType || 'N/A'}</p>
      <p>Experience: {experience || 'N/A'}</p>
      <p>Fees Charged: {feeCharged || 'N/A'}</p>
      <p>Qualification: {qualification || 'N/A'}</p>
    </div>
  );
}

export default JobCard;
