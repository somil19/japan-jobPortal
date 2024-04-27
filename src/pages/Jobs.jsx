/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
import JobList from "../components/JobList";
const apiKey = import.meta.env.VITE_SOME_KEY;
const apiHost = import.meta.env.VITE_SOME_HOST;
// console.log(apiKey, apiHost);
export default function Jobs() {
  const [jobListings, setJobListings] = useState([
    {
      // Demo job data
      key: Date.now(),
      title: "Frontend Developer",
      company_name: "Microsoft",
      employment_hour_type: "Full-time",
      location: "Minato City",
      url: "https://www.microsoft.com/jobs/us-en/job/minato-city/frontend-developer/1000",
      publication_time: "2022-12-01T00:00:00Z",
    },
  ]);
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");

  const [noJobs, setNoJobs] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  async function fetchJobListings() {
    const url = `https://job-search-api1.p.rapidapi.com/v1/job-description-search?q=${encodeURIComponent(
      profile
    )}&page=1&country=us&city=${location}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
    };

    try {
      setIsLoading(true);
      setError(false);
      const response = await fetch(url, options);
      const result = await response.text();
      const data = JSON.parse(result);
      // console.log(data.jobs);
      if (data.jobs.length === 0) {
        setNoJobs(true);
        setNoJobs(true);
        setIsLoading(false);
        return;
      }
      setJobListings(data.jobs);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { profile, location });
    fetchJobListings();
  };

  return (
    <div className="h-full max-w-7xl mx-auto px-4 md:px-10 py-8  flex flex-col justify-center items-center space-y-5">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center p-6 rounded-lg shadow-xl bg-white">
        <p className="text-3xl font-bold mb-6 text-blue-600">Search Jobs</p>
        <form
          className="flex flex-col md:flex-row md:justify-between w-full gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex-1 mb-2 md:mb-0">
            <label
              htmlFor="profile"
              className="block text-gray-800 text-sm font-medium mb-2"
            >
              Profile:
            </label>
            <input
              type="text"
              id="profile"
              placeholder="software engineer"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            />
          </div>
          <div className="flex-1 mb-2 md:mb-0">
            <label
              htmlFor="location"
              className="block text-gray-800 text-sm font-medium mb-2"
            >
              Location:
            </label>
            <input
              type="text"
              id="location"
              placeholder="Osaka"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex py-4 md:mt-4 justify-center md:justify-center md:flex-1">
            <button className="px-4 py-2 w-full bg-[#4F46E5] text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Search
            </button>
          </div>
        </form>
      </div>
      {error ? (
        <p className="text-red-500 text-center text-xl font-semibold">
          Facing some issues, please try again!
        </p>
      ) : (
        <JobList
          jobListings={jobListings}
          isLoading={isLoading}
          noJobs={noJobs}
        />
      )}
    </div>
  );
}
