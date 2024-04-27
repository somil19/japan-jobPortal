/* eslint-disable react/prop-types */
import JobCard from "./JobCard";
import Loader from "../ui/Loader";
import NoJobs from "../ui/NoJobs";

export default function JobList({ jobListings, isLoading, noJobs }) {
  if (noJobs) {
    return (
      <div className="w-[90%] bg-gray-50 flex flex-col items-center md:px-20 px-10 py-3 space-y-5">
        <NoJobs />
      </div>
    );
  }
  return (
    <div className="w-[90%] bg-gray-50 flex flex-col items-center md:px-20 px-10 py-3 space-y-5">
      <p className="text-3xl font-bold mb-6 text-blue-600">Jobs</p>

      {isLoading ? (
        <Loader />
      ) : (
        jobListings?.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
}
