import React, { useState } from "react";

function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  const certList = [
    {
      id: 1,
      title: "Privacy and Security in Online Social Media",
      platform: "NPTEL, Skill India",
      date: "Jul-Oct 2025",
      image: "/certificates/Privacy_and_Security_in_OSM_NPTEL.png",
    },
    {
      id: 2,
      title: "IR4.0 Technologies Certification",
      platform: "Microsoft, SAP & Edunet Foundation",
      date: "(2024-25)",
      image: "/certificates/IR4.0.jpg",
    },
    {
      id: 3,
      title: "Technology Job Simulation - Coding Development",
      platform: "Deloitte (via Forage)",
      date: "July 7th, 2025",
      image: "/certificates/Deloitte_TJS.png",
    },
    {
      id: 4,
      title: "Virtual Internship Program in Networking",
      platform: "Cisco",
      date: "June – August 2025",
      image: "/certificates/Networking_Cisco.png",
    },
    {
      id: 5,
      title: "Basic Introduction to Linux Course",
      platform: "Simplilearn",
      date: "Nov 25th, 2023",
      image: "/certificates/Basics_of_Linux_Simplilearn.png",
    },
    {
      id: 6,
      title: "Cybersecurity",
      platform: "Infosys, Srtingboard",
      date: "August 20, 2024",
      image: "/certificates/Cybersecurity_Infosys.png",
    },
    {
      id: 7,
      title: "JavaScript",
      platform: "Infosys, Srtingboard",
      date: "Nov 06, 2025",
      image: "/certificates/Javascript_Infosys.png",
    },
    {
      id: 8,
      title: "ReactJS",
      platform: "Infosys, Springboard",
      date: "Oct 30, 2025",
      image: "/certificates/ReactJS_Infosys.png",
    },
    {
      id: 9,
      title: "Networking and Security Professional",
      platform: "L&T EduTech",
      date: "(2025)",
      image: "/certificates/Networking_and_Security_Professional_LT.png",
    },
    {
      id: 10,
      title: "Mastering the Linux",
      platform: "L&T EduTech",
      date: "(2025)",
      image: "/certificates/Mastering_the_Linux_LT.png",
    },
    {
      id: 11,
      title: "Life Skills Development Program",
      platform: "Skill Matrix",
      date: "(10th Jan, 2025 - 25th Jan, 2025)",
      image: "/certificates/LifeSkills.png",
    },
    
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-3xl text-sky-600 font-mono tracking-wider mb-6">Certificates</h1>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {certList.map((cert) => (
          <div
            key={cert.id}
            className="relative border py-8 px-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white flex flex-col justify-between h-[170px]"
          >
            <div>
              <h3 className="text-sm font-bold text-gray-800 mb-1 line-clamp-2">{cert.title}</h3>
              <p className="text-xs text-gray-600 mb-1">{cert.platform}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
            </div>

            <button
              onClick={() => setActiveCertificate(cert)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md hover:from-purple-600 hover:to-indigo-700 hover:scale-105 transition-all duration-300"
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {activeCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4 py-8">
          {/* Background Overlay - clicking this also closes the modal */}
          <div 
            className="absolute inset-0" 
            onClick={() => setActiveCertificate(null)}
          ></div>

          <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col shadow-2xl z-10">
            
            {/* Close Button - Using "Hot Pink" or "Amber" to contrast most corporate certs */}
            <button
              onClick={() => setActiveCertificate(null)}
              className="absolute top-3 right-4 z-20 bg-pink-600 hover:bg-pink-700 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg transition-colors"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Image Container with Padding and Background Contrast */}
            <div className="p-6 bg-gray-100 flex-grow flex items-center justify-center overflow-auto">
              <img
                src={activeCertificate.image}
                alt={activeCertificate.title}
                /* Added border, shadow, and rounded corners to the image itself */
                className="max-w-full max-h-[70vh] object-contain shadow-2xl border border-gray-300 rounded-sm bg-white"
              />
            </div>

            {/* Footer Info */}
            <div className="text-center p-6 bg-white border-t border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">{activeCertificate.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {activeCertificate.platform} <span className="mx-2 text-gray-300">|</span> {activeCertificate.date}
              </p>
            </div>
          </div>
        </div>
      )}
      <hr className="border-gray-300 my-8" />
    </div>
  );
}

export default Certificates;
