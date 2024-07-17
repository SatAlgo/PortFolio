import React from "react";
import work from "../../public/work.png";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: work,
      name: "work",
    },
    {
      id: 2,
      logo: work,
      name: "work",
    },
    {
      id: 3,
      logo: work,
      name: "work",
    },
    {
      id: 4,
      logo: work,
      name: "work",
    },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="">Featured Experience of Satyam Madhav Gaikead</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full p-1 md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name} </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
