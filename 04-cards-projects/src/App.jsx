import React from "react";
import Card from "./components/card";

function App() {

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Gurgaon, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "2 months ago",
      post: "AI Research Intern",
      tag1: "Part Time",
      tag2: "Internship",
      pay: "$40/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "6 days ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "New Delhi, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "10 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
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
        {jobOpenings.map(function(elem){
          return <Card company={elem.companyName} logo={elem.brandLogo} post={elem.post} date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
        })}
      </div>
    </>
  );
}

export default App;
