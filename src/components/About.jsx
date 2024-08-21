// import React from "react";

// function About() {
//   return (
//     <div
//       name="About"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
//     >
//       <h1 className="text-3xl font-bold mb-5">About</h1>
//       <p>
//         I am a second-year computer engineering student who is deeply passionate
//         about developing websites, solving coding challenges, and continuously
//         expanding my skill set. My journey in computer engineering has been
//         driven by a strong interest in technology and a commitment to learning
//         and applying new concepts.
//         <br />
//         <br />
//         As a full-stack web developer, I have hands-on experience with HTML,
//         CSS, JavaScript, and various frameworks, which I use to create dynamic
//         and user-friendly websites. My programming proficiency extends to
//         languages such as C, C++, Python, and Java, enabling me to tackle
//         complex problems and devise effective solutions.
//         <br />
//         <br />I am enthusiastic about leveraging my academic knowledge and
//         practical skills to contribute to innovative projects and make a
//         meaningful impact in the tech industry. My goal is to stay at the
//         forefront of technology, continually learn, and apply my expertise to
//         real-world challenges.
//       </p>
//       <br />

//       <div>
//         <h1 className="text-yellow-600 font-semibold text-2xl pt-6, pb-1">
//           Education
//         </h1>
//         <h1 className="text-yellow-600 font-semibold text-xl pt-2 italic text-gray-400">
//           BTech in Computer Engineering
//         </h1>
//         <h1 className="text-yellow-500 font-semibold text-xl">
//           MIT Academy of Engineering, Alandi, Pune
//         </h1>
//         <span>
//           Degree Pursuing: BTech in Computer Engineering
//           <br />
//           Expected Graduation Year: [2026-2027]
//         </span>
//         <br />
//         <br />
//         <h1 className="text-yellow-600 font-semibold text-xl pt-2 italic text-gray-400">
//           HSC College
//         </h1>
//         <h1 className="text-yellow-500 font-semibold text-xl">
//           Dayanand Science Junior College, Latur
//         </h1>
//         <span>
//           HSC (Percentage: 68.00)
//           <br />
//           Passing Year: [2022]
//           <br />
//           MHT-CET (Percentile: 93.40)
//         </span>
//         <br />
//         <br />
//         <h1 className="text-yellow-600 font-semibold text-xl pt-2 italic text-gray-400">
//           SSC School
//         </h1>
//         <h1 className="text-yellow-500 font-semibold text-xl">
//           Shri Sant Goroba Kaka Vidyalaya, Saundana
//         </h1>
//         <span>
//           SSC (Percentage: 93.40)
//           <br />
//           Passing Year: [2020]
//         </span>
//         <br />
//         <br />
//       </div>
//       <hr className="border-gray-300 my-8" />
//     </div>
//   ); 
// }

// export default About;



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
        I am a second-year computer engineering student who is deeply passionate
        about developing websites, solving coding challenges, and continuously
        expanding my skill set. My journey in computer engineering has been
        driven by a strong interest in technology and a commitment to learning
        and applying new concepts.
        <br />
        <br />
        As a full-stack web developer, I have hands-on experience with HTML, 
        CSS, JavaScript, and various frameworks. I am proficient in using 
        the MERN stack (MongoDB, Express.js, React.js, Node.js) to create 
        dynamic and user-friendly websites. My programming proficiency extends to
        languages such as C, C++, Python, and Java, enabling me to tackle
        complex problems and devise effective solutions.
        <br />
        <br />I am enthusiastic about leveraging my academic knowledge and
        practical skills to contribute to innovative projects and make a
        meaningful impact in the tech industry. My goal is to stay at the
        forefront of technology, continually learn, and apply my expertise to
        real-world challenges.
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
          <h1 className="text-yellow-600 font-semibold text-2xl pt-6 pb-1">
            Education
          </h1>
          <h1 className="font-semibold text-xl pt-2 italic text-gray-400">
            BTech in Computer Engineering
          </h1>
          <h1 className="text-yellow-500 font-semibold text-xl">
            MIT Academy of Engineering, Alandi, Pune
          </h1>
          <span>
            Degree Pursuing: BTech in Computer Engineering
            <br />
            Expected Graduation Year: [2026-2027]
          </span>
          <br />
          <br />
          <h1 className="font-semibold text-xl pt-2 italic text-gray-400">
            HSC College
          </h1>
          <h1 className="text-yellow-500 font-semibold text-xl">
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
          <h1 className="text-yellow-500 font-semibold text-xl">
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
