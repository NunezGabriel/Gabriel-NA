"use client";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { MdOutlineSegment } from "react-icons/md";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import DownArrow from "@/modals/downArrow";
import NavBarModal from "@/modals/navbarModal";
import About from "@/components/about";
import Skills from "@/components/skills";
import Proyects from "@/components/proyects";
import Contact from "@/components/contact";

export default function Home() {
  let modal = "none";

  const [trigger, setTrigger] = useState("false");

  if (trigger == true) {
    modal = "grid";
  } else {
    modal = "none";
  }
  return (
    <>
      <nav className="h-[80px] md:h-[100px] sticky  z-20 backdrop-blur-3xl top-0 mb-8 lg:mb-16 flex justify-between items-center p-4 md:p-7 max-w-[1440px] mx-auto">
        <Image
          src="/img/rainder.png"
          width={60}
          height={30}
          className="h-20 md:ml-4 lg:ml-10"
        />
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
          <Link href="/" className="text-[#cdd6f6] hover:text-[#59e0cd]">
            <span className="text-[#59e0cd]">01 - </span>
            About
          </Link>
          <Link href="/" className="text-[#cdd6f6] hover:text-[#59e0cd]">
            <span className="text-[#59e0cd]">02 - </span>
            Skills
          </Link>
          <Link href="/" className="text-[#cdd6f6] hover:text-[#59e0cd]">
            <span className="text-[#59e0cd]">03 - </span>
            Projects
          </Link>
          <Link href="/" className="text-[#cdd6f6] hover:text-[#59e0cd]">
            <span className="text-[#59e0cd]">04 - </span>
            Contact
          </Link>
          <Link href="/">
            <div className="text-[#59e0cd] py-1 px-3 border border-[#59e0cd] rounded-lg ">
              RESUME
            </div>
          </Link>
        </div>
      </nav>
      <section className="grid py-3 px-6 gap-4 md:flex md:max-w-[1320px] md:justify-between  md:max-h-[684px] justify-center mx-auto lg:mt-[123px] mb-24 lg:mb-[300px] ">
        <div className="grid gap-4 lg:gap-14 md:flex md:flex-col relative">
          <p className=" text-[#59e0cd] blur-in text-lg lg:text-[30px]">
            Hi, my name is
          </p>
          <h1 className=" text-[#cdd6f6] blur-in text-4xl lg:text-[120px] font-black">
            Gabriel Nuñez
          </h1>
          <h2 className=" text-[#8992af] blur-in text-2xl font-black lg:text-[50px] leading-tight">
            Full Stack Developer, writing code with passion.
          </h2>
          <section className="flex gap-7 mt-3 blur-in z-10 lg:gap-14">
            <Link href="https://github.com/NunezGabriel">
              <FiGithub
                color="#59e0cd"
                fontSize={20}
                className="relative hover:-translate-y-1 ease-in duration-100 lg:scale-[2]"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/gabriel-nu%C3%B1ez-arenas/">
              <FiLinkedin
                color="#59e0cd"
                fontSize={20}
                className="relative hover:-translate-y-1 ease-in duration-100 lg:scale-[2]"
              />
            </Link>
            <Link href="https://twitter.com/gabrielnunez_23">
              <FiTwitter
                color="#59e0cd"
                fontSize={20}
                className="relative hover:-translate-y-1 ease-in duration-100 lg:scale-[2]"
              />
            </Link>
            <Link href="https://www.instagram.com/gabri3l_nun3z/">
              <FiInstagram
                color="#59e0cd"
                fontSize={20}
                className="relative hover:-translate-y-1 ease-in duration-100 lg:scale-[2]"
              />
            </Link>
          </section>
          <h1 className="text-[#59e0cd] md:text-xl md:text-end">
            ---------- &nbsp;&nbsp;&nbsp;gabriel.nunez.arenas@gmail.com
          </h1>
        </div>
        <Image
          src="/img/faceng.png"
          width={320}
          height={320}
          className=" grayscale lg:scale-150 "
        />
      </section>
      <About />
      <Skills />
      <Proyects />
      <Contact />
      <div className="p-6 grid gap-5 md:mx-auto  md:max-w-[1320px] mb-6 text-center lg:gap-12 ">
        <p className="text-[#4d5161] hover:text-[#59e0cd] max-w-[366px] mx-auto">
          © 2023 - Created and designed by Gabriel Nuñez
          <br /> taking inspiration from Brittanny Chiang ♥
        </p>
      </div>
    </>
  );
}
