/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import homeImage from "../assets/Designer.png";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-orange-100 ">
      <section className=" max-w-7xl mx-auto px-4  lg:px-8  rounded">
        <div className=" mx-auto max-w-7xl px-4  lg:px-8  flex flex-col lg:flex-row justify-center lg:justify-between items-center py-6">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              <span className="block leading-tight">
                Empower Your Career in Japan
              </span>
              <span className="block text-indigo-600">with Yume Jobs</span>
            </h1>
            <p className="mt-8 text-base text-gray-500">
              Yume Jobs is a community-driven job search portal connecting job
              seekers with opportunities in Japan. We provide comprehensive job
              listings, career resources, and networking events to help you land
              your dream job.
            </p>
            {/* Button Section */}
            <div className="mt-5 flex justify-center lg:justify-start">
              <button
                onClick={() => navigate("/jobs")}
                className="w-full md:w-1/2 flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600"
              >
                Get started
              </button>
            </div>
            {/* End of Button Section */}
          </div>
          {/* Image Section */}
          <div className="flex justify-center mt-6 lg:mt-0 w-full md:w-1/2 lg:ml-4">
            <img
              className="h-auto lg:h-[85%] w-full rounded"
              src={homeImage}
              alt="Japan"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
