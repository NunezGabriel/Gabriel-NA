import Link from "next/link";
import { CiFolderOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOutBold } from "react-icons/pi";
import { proyects } from "@/data";

const ProyectsPage = () => {
  return (
    <div className="mt-[100px] p-6 grid gap-12 md:mx-auto  md:max-w-[1320px] mb-8 lg:mb-28">
      <div className="w-full flex flex-wrap gap-12 p-[10px] md:justify-center">
        {proyects.map((proyect, index) => {
          return (
            <div
              key={index}
              className="h-[305px] w-[315px] square p-8 lg:hover:-translate-y-2 ease-in duration-150"
            >
              <div className="flex w-full justify-between items-center ">
                <CiFolderOn fontSize={50} color="#00ffc9" />
                <div className="flex gap-4 items-center">
                  <Link href={proyect.linkGitHub} target="_blank">
                    <FiGithub fontSize={20} className={`changer`} />
                  </Link>
                  <Link href={proyect.LinkDeployed} target="_blank">
                    <PiArrowSquareOutBold
                      fontSize={25}
                      className={`changer ${
                        proyect.LinkDeployed == "/" ? "hidden" : true
                      }`}
                    />
                  </Link>
                </div>
              </div>
              <div className="grid mt-5 gap-5">
                <h1 className="text-2xl font-black text-[#cdd6f6] maintext">
                  {proyect.name}
                </h1>
                <p className="text-[#8992af] ">{proyect.description}</p>
                <div className="flex gap-4 text-[#515667] text-sm">
                  {proyect.tecnologies.map((tecnology, index) => {
                    return <p key={index}>{tecnology}</p>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProyectsPage;
