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

export const proyects = [
  {
    name: "Get That Home",
    linkGitHub: "https://github.com/NunezGabriel/get-that-home-frontend",
    LinkDeployed: "https://get-that-home-frontend.vercel.app/",
    description: "A Full Stack web application to buy and sell homes",
    tecnologies: ["React", "Emotion", "Vite"],
  },
  {
    name: "Pokedex",
    linkGitHub: "https://github.com/NunezGabriel/pokedex",
    LinkDeployed: "https://pokedex-beta-pied.vercel.app/",
    description: "A copy of a pokedex from the pokemon anime",
    tecnologies: ["React", "Emotion", "PokeAPI"],
  },
  {
    name: "Eatable Fillters",
    linkGitHub: "https://github.com/NunezGabriel/eatable-fillters",
    LinkDeployed: "/",
    description: "An e-comerce food app with login and signup",
    tecnologies: ["React", "REST API", "Emotion"],
  },
  {
    name: "Keepable",
    linkGitHub: "https://github.com/NunezGabriel/Keepable",
    LinkDeployed: "https://keepable.vercel.app/",
    description:
      "A web application to create notes with all the functionalities",
    tecnologies: ["JavaScript", "Html", "Css"],
  },
  {
    name: "CLINboards",
    linkGitHub: "https://github.com/NunezGabriel/CLINboards",
    LinkDeployed: "/",
    description:
      "A Backend App to create as many Boards as you like. Each board can have as many lists and each list as many cards as you want.",
    tecnologies: ["Ruby", "Shell"],
  },
  {
    name: "Clivia Generator",
    linkGitHub: "https://github.com/NunezGabriel/Clivia_ruby",
    LinkDeployed: "/",
    description:
      "A backend application that generates trivia questions consumed from an API",
    tecnologies: ["Ruby", "Shell"],
    component: <p>hola</p>,
  },
];

export const skills = [
  {
    icon: (
      <FaReact
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: true,
  },
  {
    icon: (
      <SiNextdotjs
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: true,
  },
  {
    icon: (
      <RiJavascriptFill
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: true,
  },
  {
    icon: (
      <SiTailwindcss
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: true,
  },
  {
    icon: (
      <SiHtml5
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: true,
  },
  {
    icon: (
      <SiCss3
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: true,
  },
  {
    icon: (
      <FaGitAlt
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: true,
  },
  {
    icon: (
      <FaGithub
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: true,
  },
  {
    icon: (
      <SiPostgresql
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: true,
  },
  {
    icon: (
      <SiJest
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: true,
  },

  {
    icon: (
      <DiRuby
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: true,
  },
  {
    icon: (
      <SiPython
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: true,
  },
  {
    icon: (
      <FaNodeJs
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: false,
  },
  {
    icon: (
      <SiTypescript
        color="#8992af"
        fontSize={70}
        className="absolute top-[50%] bottom-[50%] right-[50%] left-[50%] transCenter"
      />
    ),
    full: false,
  },
];
