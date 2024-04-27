import about from "../assets/about.webp";
export default function About() {
  return (
    <section className="text-gray-600 lg:px-20">
      <div className="container mx-auto flex px-2 py-12 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="text-4xl   lg:text-6xl font-bold text-gray-900 mb-4">
            Mission statement
          </h1>
          <p className="mb-4 text-lg leading-relaxed p-2">
            At Yume Jobs, our mission is to empower job seekers to achieve their
            full potential by providing access to comprehensive job listings,
            career resources, and networking events. We strive to create a
            welcoming community that fosters growth and development, and our
            commitment to excellence ensures a positive experience for every
            member of our community. Join us and discover your dream job today.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-3/4 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={about}
          />
        </div>
      </div>
    </section>
  );
}
