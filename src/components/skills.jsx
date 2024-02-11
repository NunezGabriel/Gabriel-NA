import { FaReact, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiJest,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { DiRuby } from "react-icons/di";

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
        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9b2f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9b2f]"></span>
          </span>
          <FaReact
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9b2f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9b2f]"></span>
          </span>
          <SiNextdotjs
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9b2f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9b2f]"></span>
          </span>
          <RiJavascriptFill
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9b2f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9b2f]"></span>
          </span>
          <SiTailwindcss
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9b2f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9b2f]"></span>
          </span>
          <SiHtml5
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9b2f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9b2f]"></span>
          </span>
          <SiCss3
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9b2f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9b2f]"></span>
          </span>
          <FaGitAlt
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9b2f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9b2f]"></span>
          </span>
          <FaGithub
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9b2f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9b2f]"></span>
          </span>
          <SiPostgresql
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9b2f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9b2f]"></span>
          </span>
          <SiJest
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9b2f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9b2f]"></span>
          </span>
          <DiRuby
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9b2f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9b2f]"></span>
          </span>
          <SiPython
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#902fff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#902fff]"></span>
          </span>
          <FaNodeJs
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#242424] rounded-2xl">
          <span className="relative left-[95px] top-3 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#902fff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#902fff]"></span>
          </span>
          <SiTypescript
            color="#8992af"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
