/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";
export default function JobCard({ job }) {
  const dateString = job.publication_time || "2024-12-01T00:00:00Z"; //by default
  const date = new Date(dateString);
  const formattedDate = formatDistanceToNow(date, { addSuffix: true });
  const salary =
    (job.salary &&
      job.salary.min_salary +
        job.salary.currency +
        " - " +
        job.salary.max_salary +
        job.salary.currency) ||
    "Not specified";
  return (
    <div className="md:w-3/4 w-full rounded-lg  flex flex-col justify-center items-center bg-white  hover:shadow-lg border-b-2 border-gray-200">
      <div className="bg-[#4F46E5] rounded-t-lg  h-16 w-full flex justify-center items-center text-lg font-bold text-white uppercase">
        {job.company_name}
      </div>
      <div className="px-4 py-3">
        <div className="flex items-center text-green-500 mb-2 text-lg font-bold tracking-widest">
          {job.employment_hour_type}
          <span className="border-2 border-gray-200 rounded-full w-7 h-7 flex items-center justify-center ml-4 bg-green-500 bg-opacity-50 text-white ">
            {job.employment_hour_type.charAt(0).toUpperCase()}
          </span>
        </div>
        <p className="mb-2">Role: {job.title}</p>
        <p className=" mb-2">Location: {job.location}</p>
        <p className="mb-2">Salary: {salary}</p>
        <p className="text-green-500 mb-4">Posted on {formattedDate}</p>
        <a
          href={job.application_url}
          className="w-full text-center cursor-pointer bg-blue-500 py-2 px-4 rounded-md text-white hover:bg-blue-600"
        >
          Apply
        </a>
      </div>
    </div>
  );
}
