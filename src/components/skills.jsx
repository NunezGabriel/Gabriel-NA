"use client";

import { skills } from "@/data";
let component;
const Skills = () => {
  return (
    <div
      id="skills"
      className="sections p-6 grid gap-12 md:mx-auto  md:max-w-[1320px] mb-8 lg:mb-28"
    >
      <h1 className="text-[#cdd6f6] text-2xl ">
        <span className="text-[#ff9b2f]">02 - </span>Skills
      </h1>
      <div className="w-full flex flex-wrap gap-12 p-[10px] md:justify-center">
        {skills.map((skill) => {
          return (
            <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
              <span className="relative left-[95px] top-3 flex h-4 w-4">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full  ${
                    skill.full ? "bg-[#ff9b2f]" : "bg-[#8d30ff]"
                  } opacity-75`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-4 w-4 ${
                    skill.full ? "bg-[#ff9b2f]" : "bg-[#8d30ff]"
                  }`}
                ></span>
              </span>
              <div className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter">
                {skill.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
