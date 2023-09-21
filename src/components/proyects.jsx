import { CiFolderOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOutBold } from "react-icons/pi";

const Proyects = () => {
  return (
    <div className="p-6 grid gap-12 md:mx-auto  md:max-w-[1320px] mb-8 lg:mb-28">
      <h1 className="text-[#cdd6f6] text-2xl ">
        <span className="text-[#59e0cd]">03 - </span>Some Things I’ve Built
      </h1>

      <div className="w-full flex flex-wrap gap-12 p-[10px] md:justify-center">
        <div className="h-[305px] w-[315px] bg-[#0c2247b3] square p-8 lg:hover:-translate-y-2 ease-in duration-150">
          <div className="flex w-full justify-between items-center ">
            <CiFolderOn fontSize={50} color="#59e0cd" />
            <div className="flex gap-4 items-center">
              <FiGithub fontSize={20} className="changer" />
              <PiArrowSquareOutBold fontSize={25} className="changer" />
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

        <div className="h-[305px] w-[315px] bg-[#0c2247b3] square p-8 lg:hover:-translate-y-2 ease-in duration-150">
          <div className="flex w-full justify-between items-center ">
            <CiFolderOn fontSize={50} color="#59e0cd" />
            <div className="flex gap-4 items-center">
              <FiGithub fontSize={20} className="changer" />
              <PiArrowSquareOutBold fontSize={25} className="changer" />
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

        <div className="h-[305px] w-[315px] bg-[#0c2247b3] square p-8 lg:hover:-translate-y-2 ease-in duration-150">
          <div className="flex w-full justify-between items-center ">
            <CiFolderOn fontSize={50} color="#59e0cd" />
            <div className="flex gap-4 items-center">
              <FiGithub fontSize={20} className="changer" />
              <PiArrowSquareOutBold fontSize={25} className="changer" />
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

        <div className="h-[305px] w-[315px] bg-[#0c2247b3] square p-8 lg:hover:-translate-y-2 ease-in duration-150">
          <div className="flex w-full justify-between items-center ">
            <CiFolderOn fontSize={50} color="#59e0cd" />
            <div className="flex gap-4 items-center">
              <FiGithub fontSize={20} className="changer" />
              <PiArrowSquareOutBold fontSize={25} className="changer" />
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
      </div>
    </div>
  );
};

export default Proyects;
