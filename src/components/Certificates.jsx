import React, { useState } from "react";

function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  const certList = [
    {
      id: 1,
      title: "IR4.0 Technologies Certification",
      platform: "Microsoft, SAP & Edunet Foundation",
      date: "(2024-25)",
      image: "/certificates/IR4.0.jpg",
    },
    {
      id: 2,
      title: "AMCAT 2025 - Result",
      platform: "Saville and Holdsworth Limited (SHL)",
      date: "(2025)",
      image: "/certificates/amcat_25.jpg",
    },
    {
      id: 3,
      title: "Successful completion of a Life Skills Development Program",
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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4 py-8 overflow-auto">
          <div className="relative bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-4 shadow-xl">
            <button
              onClick={() => setActiveCertificate(null)}
              className="absolute top-2 right-4 text-3xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <img
              src={activeCertificate.image}
              alt={activeCertificate.title}
              className="w-full max-h-[80vh] object-contain mx-auto"
            />
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold text-gray-800">{activeCertificate.title}</h2>
              <p className="text-sm text-gray-600">
                {activeCertificate.platform} | {activeCertificate.date}
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
