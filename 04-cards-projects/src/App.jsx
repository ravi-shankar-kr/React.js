import React from "react";
import Card from "./components/card";

function App() {

  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_N_logo.svg",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Gurgaon, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/en/2/21/Nvidia_logo.svg",
      companyName: "NVIDIA",
      datePosted: "2 months ago",
      post: "AI Research Intern",
      tag1: "Part Time",
      tag2: "Internship",
      pay: "$40/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Adobe_Corporate_Logo.png",
      companyName: "Adobe",
      datePosted: "6 days ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "New Delhi, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
      companyName: "Tesla",
      datePosted: "10 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      companyName: "OpenAI",
      datePosted: "3 days ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$88/hr",
      location: "Remote"
    }
  ];
  

  return (
    <>
      <div className="parent">
        {jobOpenings.map(function(elem, idx){
          return <div key={idx}>
            <Card company={elem.companyName} logo={elem.brandLogo} post={elem.post} date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
          </div>
        })}
      </div>
    </>
  );
}

export default App;
