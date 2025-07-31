import React, { useState } from "react";
import "@fontsource/inter";

function About() {
  const [activeSection, setActiveSection] = useState(""); // "education" | "resume" | ""

  const toggleEducation = () => {
    setActiveSection((prev) => (prev === "education" ? "" : "education"));
  };

  const toggleResume = () => {
    setActiveSection((prev) => (prev === "resume" ? "" : "resume"));
  };

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-5">About</h1>
      <p className="text-md leading-7 text-gray-700">
        I am a third-year Computer Engineering student with a strong passion for full-stack web development, problem-solving, and continuous skill enhancement. My journey in engineering has been shaped by a deep curiosity for technology and a dedication to turning ideas into impactful solutions.
        <br /><br />
        With hands-on experience in full-stack development, I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have worked extensively with HTML, CSS, JavaScript, and MySQL to build scalable and user-centric web applications. I am also proficient in core programming languages including C, C++, Python, and Java, which I leverage for algorithmic problem-solving and software development.
        <br /><br />
        As I progress through my academic and professional journey, I remain committed to staying updated with the latest industry trends and technologies. I aim to contribute meaningfully to real-world projects, collaborate with like-minded professionals, and drive innovation in the tech ecosystem.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 font-sans">
        <button
          onClick={toggleEducation}
          className="w-full sm:w-auto sm:min-w-[160px] text-center bg-gradient-to-r from-blue-500 to-violet-600 hover:from-violet-600 hover:to-blue-500 text-white font-semibold text-lg px-6 py-2 rounded-md shadow-md transition duration-300"
        >
          {activeSection === "education" ? "Hide Education" : "View Education"}
        </button>

        {/* <button
          onClick={toggleResume}
          className="w-full sm:w-auto sm:min-w-[160px] text-center bg-gradient-to-r from-green-600 to-teal-500 hover:from-teal-500 hover:to-green-600 text-white font-semibold text-lg px-6 py-2 rounded-md shadow-md transition duration-300"
        >
          {activeSection === "resume" ? "Hide Resume" : "View Resume"}
        </button> */}

        <a
          href="../public/resume.html"
          className="w-full sm:w-auto sm:min-w-[160px] text-center bg-gradient-to-r from-green-600 to-teal-500 hover:from-teal-500 hover:to-green-600 text-white font-semibold text-lg px-6 py-2 rounded-md shadow-md transition duration-300"
        >
          View Resume
        </a>

      </div>


      {activeSection === "education" && (
        <div className="mt-8 bg-white rounded-xl p-8 shadow-xl border border-gray-100 font-sans">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">Education</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-600 italic">
              BTech in Computer Engineering
            </h3>
            <p className="text-xl text-rose-500 font-bold">
              MIT Academy of Engineering, Alandi, Pune
            </p>
            <p className="text-gray-700 mt-1">
              Degree Pursuing: BTech in Computer Engineering
              <br />
              Expected Graduation Year: <span className="font-semibold">2027</span>
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-600 italic">
              HSC College
            </h3>
            <p className="text-xl text-rose-500 font-bold">
              Dayanand Science Junior College, Latur
            </p>
            <p className="text-gray-700 mt-1">
              HSC (Percentage: <span className="font-semibold">68.00%</span>)
              <br />
              Passing Year: <span className="font-semibold">2022</span>
              <br />
              MHT-CET (Percentile: <span className="font-semibold">93.40</span>)
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-600 italic">
              SSC School
            </h3>
            <p className="text-xl text-rose-500 font-bold">
              Shri Sant Goroba Kaka Vidyalaya, Saundana
            </p>
            <p className="text-gray-700 mt-1">
              SSC (Percentage: <span className="font-semibold">93.40%</span>)
              <br />
              Passing Year: <span className="font-semibold">2020</span>
            </p>
          </div>
        </div>
      )}

      {activeSection === "resume" && (
        <div className="mt-8">
          {/* <h2 className="text-3xl font-bold text-green-700 mb-4">Resume</h2> */}
          <div className="w-full h-[600px] border rounded-xl shadow-md overflow-hidden">
            <iframe
              src="/resume.pdf"
              title="My Resume"
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}

      <hr className="border-gray-300 my-8" />
    </div>
  );
}

export default About;
