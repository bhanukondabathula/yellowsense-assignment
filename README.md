##Job Listing and Bookmarking App##

This React application displays job listings from an external API and allows users to bookmark jobs. The bookmarks are saved to local storage, making them accessible offline. The app features infinite scroll for job listings and supports navigating to detailed job pages.

Features
Job Listing: Fetches jobs from an API and displays them in a card format.
Infinite Scroll: Loads more job listings as the user scrolls down the page.
Job Details: Clicking on a job card redirects the user to a detailed page with the job's full information.
Bookmarking: Users can bookmark jobs by clicking the bookmark button on each job card.
Local Storage: Bookmarked jobs are stored in the browser's local storage so that they remain available even after refreshing the page or going offline.
Bookmarks Page: Displays a list of all bookmarked jobs, which can be accessed even offline.

Components
Jobs: Displays the list of jobs with infinite scrolling and bookmark functionality.
JobCard: Displays the job details in a card format and is clickable to view more information.
Bookmarks: Shows the list of bookmarked jobs stored in local storage.

Setup Instructions
Prerequisites
Node.js (v12.x or higher)
NPM or Yarn
Installation
Clone the repository:

```bash```
git clone https://github.com/yourusername/job-bookmark-app.git
cd job-bookmark-app
Install dependencies:

```bash````
npm install
Start the development server:

```bash```

npm start
Open the app in the browser at http://localhost:3000.

API Usage
The app fetches job data from the following API:

arduino

https://testapi.getlokalapp.com/common/jobs
The job details shown in the app include:

Title
Place
Job Type
Experience
Fees Charged
Qualification
Local Storage
Bookmarked jobs are saved in the browser's local storage under the key bookmarkedJobs. When the app is loaded, bookmarked jobs are retrieved from local storage and displayed in the "Bookmarks" page. Even if the page is refreshed, the bookmarks persist.

Functionality Overview

Jobs Component
Fetches job data from the API.
Displays the job data in a list format using infinite scrolling.
The bookmark button on each job card saves the job to local storage.

JobCard Component
Displays individual job information.
Bookmarks Component
Displays all bookmarked jobs.
Retrieves bookmarked jobs from local storage and displays them.
If no jobs are bookmarked, shows a message indicating that no jobs have been bookmarked yet.

##deployment link
https://yellowsense-assignment.netlify.app/

