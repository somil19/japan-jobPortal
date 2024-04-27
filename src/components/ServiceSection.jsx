import jobListing from "../assets/joblisting.webp";
import career from "../assets/career.webp";
import network from "../assets/network.webp";
const ServicesSection = () => {
  return (
    <>
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-black text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">
            {/* Service 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md cursor-pointer transform hover:scale-105 transition duration-300">
              <img
                src={jobListing}
                alt="Job Search"
                className="w-11/12 h-60 mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
                Job Search Made Easy
              </h3>
              <p className="text-gray-600">
                Our platform provides a comprehensive database of job listings
                across various industries and job types, making your job search
                easier than ever.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md cursor-pointer transform hover:scale-105 transition duration-300 ">
              <img
                src={network}
                alt="Job Search"
                className="w-11/12 h-60 mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Networking Events
              </h3>
              <p className="text-gray-600">
                Our regular networking events and online community provide job
                seekers with opportunities to connect with potential employers
                and expand their professional network in Japan.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition duration-300">
              <img
                src={career}
                alt="Job Search"
                className="w-11/12  h-60 mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Career Resources
              </h3>
              <p className="text-gray-600">
                Our career resources are designed to help you prepare for your
                job search in Japan, offering resume building tips, interview
                techniques, career advice, and professional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
