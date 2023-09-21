import { CiFolderOn } from "react-icons/ci";

const Proyects = () => {
  return (
    <div className="p-6 grid gap-12 md:mx-auto  md:max-w-[1320px] mb-8 lg:mb-28">
      <h1 className="text-[#cdd6f6] text-2xl ">
        <span className="text-[#59e0cd]">03 - </span>Some Things I’ve Built
      </h1>

      <div className="w-full flex flex-wrap gap-12 p-[10px] md:justify-center">
        <div className="h-[305px] w-[315px] bg-[#0c2247b3] p-8">
          <div className="flex w-full">
            <CiFolderOn fontSize={50} className="changer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
