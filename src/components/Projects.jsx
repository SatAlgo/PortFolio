import React, { useState } from "react";
import kitup from "../../public/kitup.png";
import AutoSnakeGame from "../../public/AutoSnakeGame.png";
import SnakeGame from "../../public/SnakeGame.png";
import tictactoe from "../../public/tictactoe.jpeg";
import noutrify from "../../public/noutrify.png";
import video from "../../public/Project_lms.mp4";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredBtnId, setHoveredBtnId] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const cardItem = [
    {
      id: 1,
      logo: kitup,
      name: "Student Resource Hub",
      description: "MERN Stack Project",
      projectLink: "https://kitup.netlify.app/",
      sourceLink: "https://github.com/SatAlgo/SetUp",
      reviewLink: "https://www.linkedin.com/feed/update/urn:li:activity:7230963266670256128/",
      details:
        "KitUp is a full-stack MERN platform designed to simplify student life by centralizing essential resources. It allows students to access personalized timetables, browse and upload study notes, search for hostels and flats, explore academic project opportunities, find compatible roommates, and buy or sell everyday gadgets. Built with a simple, useful, and accessible UI and smooth page navigation, KitUp offers a seamless experience tailored for student needs.",
    },
    {
      id: 2,
      video: video,
      name: "Library Management System",
      description: "Built with PHP, MySQL, HTML, CSS, and JavaScript",
      projectLink:
        "",
      sourceLink: "https://github.com/SatAlgo",
      details:
        "A DBMS project Library Management System built with PHP, MySQL, HTML, CSS, and JavaScript, designed for a college library using real data. It includes role-based dashboards for Admin, Staff, and Students, secure access controls, automated fine calculations, real-time announcements, student borrowing history, and efficient SQL query optimization for smooth library management.",
    },
    {
      id: 3,
      logo: AutoSnakeGame,
      name: "Automated Snake Game",
      description: "Using Tkinter Python.",
      projectLink:"",
      sourceLink: "https://github.com/SatAlgo/Snake-Game",
      reviewLink: "https://www.linkedin.com/posts/satyam-gaikwad-27a7a724b_python-automation-gamedevelopment-activity-7218149338466705408-QmFg",
      details:
        "Auto Snake Game uses a self-playing algorithm that navigates without hitting walls or its own body using logic-based decisions.",
    },
    {
      id: 4,
      logo: SnakeGame,
      name: "Snake Game",
      description: "Using Tkinter Python.",
      projectLink:
        "https://www.linkedin.com/posts/satyam-gaikwad-27a7a724b_python-tkinter-projects-activity-7216086482913009664-bqJy",
      sourceLink: "https://github.com/SatAlgo/Snake-Game",
      details:
        "Classic snake game where user controls direction, implemented in Python Tkinter with score tracking and collision detection.",
    },
    {
      id: 5,
      logo: tictactoe,
      name: "Tic-Tac-Toe Game",
      description: "Using Tkinter Python",
      reviewLink:
        "https://www.linkedin.com/posts/satyam-gaikwad-27a7a724b_python-tkinter-coding-activity-7216079181275623424-Bghz",
      sourceLink: "https://github.com/SatAlgo/Tic-Tac-Toe-Game",
      projectLink: "",
      details:
        "2-player game made in Python using Tkinter GUI. Simple interface, win detection, and replay options implemented.",
    },
    {
      id: 6,
      logo: noutrify,
      name: "NoutriFy",
      description: "Using HTML",
      projectLink: "",
      sourceLink: "https://github.com/SatAlgo/NutriFy",
      details:
        "NoutriFy is a basic HTML site with health and nutrition tips, meal plans, and diet suggestions for different body types.",
    },
  ];

  const openModal = (project) => setActiveProject(project);
  const closeModal = () => {
    setActiveProject(null);
    setShowAlert(false);
  };

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <span className="text-violet-600 underline font-semibold">
        Featured projects
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
        {cardItem.map((project) => (
          <div
            key={project.id}
            className="group relative border-[2px] rounded-lg shadow-lg p-3 hover:scale-105 duration-300 cursor-pointer flex flex-col justify-between"
            onClick={() => openModal(project)}
          >
            <div className="relative">
              {project.video ? (
                <video
                  src={project.video}
                  className="w-full h-[150px] object-cover rounded-md border-[2px]"
                  muted
                  autoPlay
                  loop
                />
              ) : (
                <img
                  src={project.logo}
                  className="w-full h-[150px] object-cover rounded-md border-[2px]"
                  alt={project.name}
                />
              )}

              <div
                className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-opacity rounded-md pointer-events-none ${
                  hoveredBtnId === project.id
                    ? "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <small className="mt-1 text-white text-xs font-light tracking-wide select-none ">
                  Tap to view more
                </small>
              </div>
            </div>

            <div className="mt-2">
              <div className="font-bold text-xl mb-1">{project.name}</div>
              <p className="text-gray-700 text-sm">{project.description}</p>
            </div>

            <div className="flex space-x-2 mt-3 justify-between">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => setHoveredBtnId(project.id)}
                onMouseLeave={() => setHoveredBtnId(null)}
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold px-3 py-1 rounded border-2 border-blue-700">
                  Explore
                </button>
              </a>
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => setHoveredBtnId(project.id)}
                onMouseLeave={() => setHoveredBtnId(null)}
              >
                <button className="bg-green-500 hover:bg-green-700 text-gray-800 font-bold px-3 py-1 rounded border-2 border-green-700">
                  Code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4 py-8 overflow-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-5 text-3xl font-bold text-gray-600 hover:text-black"
              onClick={closeModal}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-violet-800 mb-1">
              {activeProject.name}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              {activeProject.description}
            </p>

            {activeProject.video ? (
              <video
                src={activeProject.video}
                className="w-full h-[300px] object-cover rounded-md border"
                controls
              />
            ) : (
              <img
                src={activeProject.logo}
                className="w-full h-[300px] object-cover rounded-md border"
                alt={activeProject.name}
              />
            )}

            <p className="text-gray-800 mt-4 mb-2">{activeProject.details}</p>

            {showAlert && (
              <p className="text-red-600 font-medium mb-2">
                Project is not deployed yet.
              </p>
            )}

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => {
                  if (!activeProject.projectLink) {
                    setShowAlert(true);
                    setTimeout(() => setShowAlert(false), 2000);
                  } else {
                    window.open(activeProject.projectLink, "_blank");
                  }
                }}
                className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded"
              >
                Visit Project
              </button>
              <a
                href={activeProject.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded">
                  Source Code
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
      <hr className="border-gray-300 my-8" />
    </div>
  );
}

export default Projects;
