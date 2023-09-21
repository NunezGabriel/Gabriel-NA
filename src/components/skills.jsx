import { FaReact, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiJest,
  SiPython,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { DiRuby } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/Bi";

const Skills = () => {
  return (
    <div className="p-6 grid gap-12 md:mx-auto  md:max-w-[1320px] mb-8 lg:mb-28">
      <h1 className="text-[#cdd6f6] text-2xl ">
        <span className="text-[#59e0cd]">02 - </span>Skills
      </h1>
      <div className="w-full flex flex-wrap gap-12 p-[10px] md:justify-center">
        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59e0cd] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#59e0cd]"></span>
          </span>
          <FaReact
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59e0cd] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#59e0cd]"></span>
          </span>
          <SiNextdotjs
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59e0cd] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#59e0cd]"></span>
          </span>
          <RiJavascriptFill
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59e0cd] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#59e0cd]"></span>
          </span>
          <SiTailwindcss
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59e0cd] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#59e0cd]"></span>
          </span>
          <SiHtml5
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59e0cd] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#59e0cd]"></span>
          </span>
          <SiCss3
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59e0cd] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#59e0cd]"></span>
          </span>
          <FaGitAlt
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59e0cd] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#59e0cd]"></span>
          </span>
          <FaGithub
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59e0cd] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#59e0cd]"></span>
          </span>
          <SiPostgresql
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59e0cd] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#59e0cd]"></span>
          </span>
          <SiJest
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59e0cd] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#59e0cd]"></span>
          </span>
          <DiRuby
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59e0cd] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#59e0cd]"></span>
          </span>
          <SiPython
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#efff64] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#efff64]"></span>
          </span>
          <FaNodeJs
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>

        <div className="h-32 w-32 relative  bg-[#0c2247b3] rounded-2xl">
          <span class="relative left-[95px] top-3 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#efff64] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-[#efff64]"></span>
          </span>
          <BiLogoTypescript
            color="#59e0cd"
            fontSize={70}
            className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
