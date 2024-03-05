"use client";
import { MdOutlineSegment } from "react-icons/md";
import { useState, useEffect } from "react";
import NavBarModal from "@/modals/navbarModal";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBarComponet = () => {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        // Hacer scroll hacia abajo, ocultar el navbar
        setScrolling(true);
      } else {
        // Hacer scroll hacia arriba, mostrar el navbar
        setScrolling(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  let modal = "none";

  const [trigger, setTrigger] = useState(false);

  if (trigger == true) {
    modal = "grid";
  } else {
    modal = "none";
  }
  return (
    <div
      className={`bg-[#242424] h-[80px] md:h-[70px] fixed z-20 top-0 mb-8 lg:mb-16 flex justify-between items-center p-4 md:p-7  mx-auto ${
        scrolling ? "hidden" : ""
      }`}
      style={{ width: "100%", left: 0, right: 0 }}
    >
      {pathname == "/" ? (
        <nav
          className={`h-[80px] md:h-[70px] fixed z-20 top-0 mb-8 lg:mb-16 flex justify-between items-center p-4 md:p-7 max-w-[1440px] mx-auto ${
            scrolling ? "hidden" : ""
          }`}
          style={{ width: "100%", left: 0, right: 0 }}
        >
          <Link href="/">
            <h1 className=" text-hard-color text-4xl font-bold md:ml-4 lg:ml-10">
              {"<"}GNA{"/>"}
            </h1>
          </Link>
          <div className="relative">
            <NavBarModal displayOption={modal} />
          </div>
          <MdOutlineSegment
            fontSize={50}
            color="#00ffc9"
            className="md:hidden"
            onClick={() => {
              setTrigger(!trigger);
            }}
          />
          <div className="hidden md:flex gap-12 text-lg items-center">
            <Link
              href="#about"
              className="text-[#cdd6f6] hover:text-hard-color"
            >
              <span className="text-hard-color">01 - </span>
              About
            </Link>
            <Link
              href="#skills"
              className="text-[#cdd6f6] hover:text-hard-color"
            >
              <span className="text-[#00ffc9]">02 - </span>
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-[#cdd6f6] hover:text-hard-color"
            >
              <span className="text-hard-color">03 - </span>
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-[#cdd6f6] hover:text-hard-color"
            >
              <span className="text-hard-color">04 - </span>
              Contact
            </Link>
            <Link
              href="https://docs.google.com/document/d/1fxqUvIFCQfU-u28RBJ2MPSykJOcatSnT/edit?usp=sharing&ouid=101144408028302736209&rtpof=true&sd=true"
              target="_blank"
            >
              <div className="text-hard-color py-1 px-3 border border-[#00ffc9] rounded-lg ">
                RESUME
              </div>
            </Link>
          </div>
        </nav>
      ) : (
        <nav
          className={`h-[80px] md:h-[70px] fixed z-20 top-0 mb-8 lg:mb-16 flex justify-between items-center p-4 md:p-7 max-w-[1440px] mx-auto ${
            scrolling ? "hidden" : ""
          }`}
          style={{ width: "100%", left: 0, right: 0 }}
        >
          <Link href="/">
            <h1 className=" text-hard-color text-4xl font-bold md:ml-4 lg:ml-10">
              {"<"}GNA{"/>"}
            </h1>
          </Link>
          <Link href="/">
            <div className="text-hard-color py-1 px-3 border border-[#00ffc9] rounded-lg ">
              Go Back
            </div>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default NavBarComponet;
