import Link from "next/link";
import { CiFolderOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOutBold } from "react-icons/pi";

const Proyects = () => {
  return (
    <div
      id="projects"
      className="sections p-6 grid gap-12 md:mx-auto  md:max-w-[1320px] mb-8 lg:mb-28"
    >
      <h1 className="text-[#cdd6f6] text-2xl ">
        <span className="text-[#ff9b2f]">03 - </span>Some Things I’ve Built
      </h1>

      <div className="w-full flex flex-wrap gap-12 p-[10px] md:justify-center">
        <div className="h-[305px] w-[315px] square p-8 lg:hover:-translate-y-2 ease-in duration-150">
          <div className="flex w-full justify-between items-center ">
            <CiFolderOn fontSize={50} color="#ff9b2f" />
            <div className="flex gap-4 items-center">
              <Link
                href="https://github.com/NunezGabriel/get-that-home-frontend "
                target="_blank"
              >
                <FiGithub fontSize={20} className="changer" />
              </Link>
              <Link
                href="https://get-that-home-frontend.vercel.app/"
                target="_blank"
              >
                <PiArrowSquareOutBold fontSize={25} className="changer" />
              </Link>
            </div>
          </div>
          <div className="grid mt-5 gap-5">
            <h1 className="text-2xl font-black text-[#cdd6f6] maintext">
              Get That Home
            </h1>
            <p className="text-[#8992af] ">
              A Full Stack web application to buy and sell homes{" "}
            </p>
            <div className="flex gap-4 text-[#515667] text-sm">
              <p>React</p>
              <p>Emotion</p>
              <p>Vite</p>
            </div>
          </div>
        </div>

        <div className="h-[305px] w-[315px] square p-8 lg:hover:-translate-y-2 ease-in duration-150">
          <div className="flex w-full justify-between items-center ">
            <CiFolderOn fontSize={50} color="#ff9b2f" />
            <div className="flex gap-4 items-center">
              <Link
                href="https://github.com/NunezGabriel/pokedex"
                target="_blank"
              >
                <FiGithub fontSize={20} className="changer" />
              </Link>
              <Link
                href="https://pokedex-beta-pied.vercel.app/"
                target="_blank"
              >
                <PiArrowSquareOutBold fontSize={25} className="changer" />
              </Link>
            </div>
          </div>
          <div className="grid mt-5 gap-5">
            <h1 className="text-2xl font-black text-[#cdd6f6] maintext">
              Pokedex
            </h1>
            <p className="text-[#8992af] ">
              A copy of a pokedex from the pokemon anime{" "}
            </p>
            <div className="flex gap-4 text-[#515667] text-sm">
              <p>React</p>
              <p>Emotion</p>
              <p>React Icons</p>
            </div>
          </div>
        </div>

        <div className="h-[305px] w-[315px] square p-8 lg:hover:-translate-y-2 ease-in duration-150">
          <div className="flex w-full justify-between items-center ">
            <CiFolderOn fontSize={50} color="#ff9b2f" />
            <div className="flex gap-4 items-center">
              <Link
                href="https://github.com/NunezGabriel/eatable-fillters"
                target="_blank"
              >
                <FiGithub fontSize={20} className="changer" />
              </Link>
            </div>
          </div>
          <div className="grid mt-5 gap-5">
            <h1 className="text-2xl font-black text-[#cdd6f6] maintext">
              Eatable Fillters
            </h1>
            <p className="text-[#8992af] ">
              An e-comerce food app with login and signup
            </p>
            <div className="flex gap-4 text-[#515667] text-sm">
              <p>React</p>
              <p>CSS</p>
              <p>HTML</p>
              <p>API fetch</p>
            </div>
          </div>
        </div>

        <div className="h-[305px] w-[315px] square p-8 lg:hover:-translate-y-2 ease-in duration-150">
          <div className="flex w-full justify-between items-center ">
            <CiFolderOn fontSize={50} color="#ff9b2f" />
            <div className="flex gap-4 items-center">
              <Link
                href="https://github.com/NunezGabriel/Keepable"
                target="_blank"
              >
                <FiGithub fontSize={20} className="changer" />
              </Link>
              <Link href="https://keepable.vercel.app/" target="_blank">
                <PiArrowSquareOutBold fontSize={25} className="changer" />
              </Link>
            </div>
          </div>
          <div className="grid mt-5 gap-5">
            <h1 className="text-2xl font-black text-[#cdd6f6] maintext">
              Keepable
            </h1>
            <p className="text-[#8992af] ">
              A web application to create notes with all the functionalities{" "}
            </p>
            <div className="flex gap-4 text-[#515667] text-sm">
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
        </div>

        <div className="h-[305px] w-[315px] square p-8 lg:hover:-translate-y-2 ease-in duration-150">
          <div className="flex w-full justify-between items-center ">
            <CiFolderOn fontSize={50} color="#ff9b2f" />
            <div className="flex gap-4 items-center">
              <Link
                href="https://github.com/NunezGabriel/CLINboards"
                target="_blank"
              >
                <FiGithub fontSize={20} className="changer" />
              </Link>
            </div>
          </div>
          <div className="grid mt-5 gap-5">
            <h1 className="text-2xl font-black text-[#cdd6f6] maintext">
              CLINboards
            </h1>
            <p className="text-[#8992af] ">
              A Backend App to create as many Boards as you like. Each board can
              have as many lists and each list as many cards as you want.{" "}
            </p>
            <div className="flex gap-4 text-[#515667] text-sm">
              <p>Ruby</p>
              <p>Shell</p>
            </div>
          </div>
        </div>

        <div className="h-[305px] w-[315px] square p-8 lg:hover:-translate-y-2 ease-in duration-150">
          <div className="flex w-full justify-between items-center ">
            <CiFolderOn fontSize={50} color="#ff9b2f" />
            <div className="flex gap-4 items-center">
              <Link
                href="https://github.com/NunezGabriel/Clivia_ruby"
                target="_blank"
              >
                <FiGithub fontSize={20} className="changer" />
              </Link>
            </div>
          </div>
          <div className="grid mt-5 gap-5">
            <h1 className="text-2xl font-black text-[#cdd6f6] maintext">
              Clivia Generator
            </h1>
            <p className="text-[#8992af] ">
              A backend application that generates trivia questions consumed
              from an API{" "}
            </p>
            <div className="flex gap-4 text-[#515667] text-sm">
              <p>Ruby</p>
              <p>Shell</p>
            </div>
          </div>
        </div>
      </div>
      {/*Cuando tengas mas proyectos activa este boton */}
      {/* <button className="w-[200px] h-[50px] border border-[#ff9b2f] rounded-xl changer mx-auto">
        Show more
      </button> */}
    </div>
  );
};

export default Proyects;
