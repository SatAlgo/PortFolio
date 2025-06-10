import React, { useState } from "react";

function About() {
  // State to manage the visibility of the education section
  const [showEducation, setShowEducation] = useState(false);

  // Function to toggle the visibility of the education section
  const toggleEducation = () => {
    setShowEducation(!showEducation);
  };

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-5">About</h1>
      <p>
        I am a third-year Computer Engineering student with a strong passion for full-stack web development, problem-solving, and continuous skill enhancement. My journey in engineering has been shaped by a deep curiosity for technology and a dedication to turning ideas into impactful solutions.
        <br />
        <br />
        With hands-on experience in full-stack development, I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have worked extensively with HTML, CSS, JavaScript, and MySQL to build scalable and user-centric web applications. I am also proficient in core programming languages including C, C++, Python, and Java, which I leverage for algorithmic problem-solving and software development.
        <br />
        <br />
        As I progress through my academic and professional journey, I remain committed to staying updated with the latest industry trends and technologies. I aim to contribute meaningfully to real-world projects, collaborate with like-minded professionals, and drive innovation in the tech ecosystem.
      </p>
      <br />

      <button
        onClick={toggleEducation}
        className="text-gray-500 font-semibold text-xl py-1 px-2 border border-yellow-600 rounded"
      >
        {showEducation ? "Hide Education" : "Education"}
      </button>

      {showEducation && (
        <div>
          <h1 className="text-pink-600 font-semibold text-2xl pt-6 pb-1">
            Education
          </h1>
          <h1 className="font-semibold text-xl pt-2 italic text-gray-400">
            BTech in Computer Engineering
          </h1>
          <h1 className="text-rose-500 font-semibold text-xl">
            MIT Academy of Engineering, Alandi, Pune
          </h1>
          <span>
            Degree Pursuing: BTech in Computer Engineering
            <br />
            Expected Graduation Year: [2027]
          </span>
          <br />
          <br />
          <h1 className="font-semibold text-xl pt-2 italic text-gray-400">
            HSC College
          </h1>
          <h1 className="text-rose-500 font-semibold text-xl">
            Dayanand Science Junior College, Latur
          </h1>
          <span>
            HSC (Percentage: 68.00)
            <br />
            Passing Year: [2022]
            <br />
            MHT-CET (Percentile: 93.40)
          </span>
          <br />
          <br />
          <h1 className="font-semibold text-xl pt-2 italic text-gray-400">
            SSC School
          </h1>
          <h1 className="text-rose-500 font-semibold text-xl">
            Shri Sant Goroba Kaka Vidyalaya, Saundana
          </h1>
          <span>
            SSC (Percentage: 93.40)
            <br />
            Passing Year: [2020]
          </span>
          <br />
          <br />
        </div>
      )}
      <hr className="border-gray-300 my-8" />
    </div>
  );
}

export default About;
