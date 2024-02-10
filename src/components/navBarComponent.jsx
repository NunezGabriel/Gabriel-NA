"use client";
import { MdOutlineSegment } from "react-icons/md";
import { useState, useEffect } from "react";
import NavBarModal from "@/modals/navbarModal";
import Link from "next/link";
import Image from "next/image";

const NavBarComponet = () => {
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
      className={`bg-[#242424] h-[80px] md:h-[100px] fixed z-20 top-0 mb-8 lg:mb-16 flex justify-between items-center p-4 md:p-7  mx-auto ${
        scrolling ? "hidden" : ""
      }`}
      style={{ width: "100%", left: 0, right: 0 }}
    >
      <nav
        className={`h-[80px] md:h-[100px] fixed z-20 top-0 mb-8 lg:mb-16 flex justify-between items-center p-4 md:p-7 max-w-[1440px] mx-auto ${
          scrolling ? "hidden" : ""
        }`}
        style={{ width: "100%", left: 0, right: 0 }}
      >
        <Link href="/">
          <Image
            src="/img/rainder.png"
            width={60}
            height={30}
            className="h-20 md:ml-4 lg:ml-10"
            alt="icon"
          />
        </Link>
        <div className="relative">
          <NavBarModal displayOption={modal} />
        </div>
        <MdOutlineSegment
          fontSize={50}
          color="#59e0cd"
          className="md:hidden"
          onClick={() => {
            setTrigger(!trigger);
          }}
        />
        <div className="hidden md:flex gap-12 text-lg items-center">
          <Link href="#about" className="text-[#cdd6f6] hover:text-[#59e0cd]">
            <span className="text-[#59e0cd]">01 - </span>
            About
          </Link>
          <Link href="#skills" className="text-[#cdd6f6] hover:text-[#59e0cd]">
            <span className="text-[#59e0cd]">02 - </span>
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-[#cdd6f6] hover:text-[#59e0cd]"
          >
            <span className="text-[#59e0cd]">03 - </span>
            Projects
          </Link>
          <Link href="#contact" className="text-[#cdd6f6] hover:text-[#59e0cd]">
            <span className="text-[#59e0cd]">04 - </span>
            Contact
          </Link>
          <Link
            href="https://drive.google.com/file/d/1nZyMBSMRqlAQK6scr9ftqEq9ZTKDnqfT/view?usp=sharing"
            target="_blank"
          >
            <div className="text-[#59e0cd] py-1 px-3 border border-[#59e0cd] rounded-lg ">
              RESUME
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBarComponet;
