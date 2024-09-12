import React, { useState } from 'react';
import Jobs from './Jobs';
import Bookmarks from './Bookmarks';
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('jobs');
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  const handleBookmark = (job) => {
    setBookmarkedJobs([...bookmarkedJobs, job]);
  };

  return (
    <div className="App">
      <div className="bottom-nav">
        <button onClick={() => setActiveTab('jobs')}>Jobs</button>
        <button onClick={() => setActiveTab('bookmarks')}>Bookmarks</button>
      </div>
      <div className="content">
        {activeTab === 'jobs' ? (
          <Jobs handleBookmark={handleBookmark} />
        ) : (
          <Bookmarks bookmarkedJobs={bookmarkedJobs} />
        )}
      </div>
    </div>
  );
}

export default App;
