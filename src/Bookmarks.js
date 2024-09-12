import React from 'react';

function Bookmarks({ bookmarkedJobs }) {
  return (
    <div>
      <h1>Bookmarked Jobs</h1>
      {bookmarkedJobs.length === 0 ? (
        <p>No jobs bookmarked yet.</p>
      ) : (
        bookmarkedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p>Location: {job.place}</p>
            <p>Job Type: {job.jobType}</p>
            <p>Experience: {job.experience}</p>
            <p>Fees Charged: {job.feeCharged}</p>
            <p>Qualification: {job.qualification}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Bookmarks;
