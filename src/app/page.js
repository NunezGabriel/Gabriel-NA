"use client";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

import Link from "next/link";
import Image from "next/image";
import About from "@/components/about";
import Skills from "@/components/skills";
import Proyects from "@/components/proyects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <section className="mt-[100px] grid py-3 px-6 gap-4 md:flex md:max-w-[1320px] md:justify-between  md:max-h-[684px] justify-center mx-auto lg:mt-[223px] mb-24 lg:mb-[300px] ">
        <div className="grid max-w-[900px] gap-4 lg:gap-14 md:flex md:flex-col relative">
          <p className=" text-[#ff9b2f] blur-in text-lg lg:text-[30px]">
            Hi, my name is
          </p>
          <h1 className=" text-[#cdd6f6] blur-in text-4xl lg:text-[120px] font-black">
            Gabriel Nuñez
          </h1>
          <h2 className=" text-[#8992af] blur-in text-2xl font-black lg:text-[50px] leading-tight">
            Full Stack Developer, writing code with passion.
          </h2>
          <section className="flex gap-7 mt-3 blur-in z-10 lg:gap-14">
            <Link href="https://github.com/NunezGabriel" target="_blank">
              <FiGithub
                color="#ff9b2f"
                fontSize={20}
                className="relative hover:-translate-y-1 ease-in duration-100 lg:scale-[2]"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gabriel-nu%C3%B1ez-arenas/"
              target="_blank"
            >
              <FiLinkedin
                color="#ff9b2f"
                fontSize={20}
                className="relative hover:-translate-y-1 ease-in duration-100 lg:scale-[2]"
              />
            </Link>
            <Link href="https://twitter.com/gabrielnunez_23" target="_blank">
              <FiTwitter
                color="#ff9b2f"
                fontSize={20}
                className="relative hover:-translate-y-1 ease-in duration-100 lg:scale-[2]"
              />
            </Link>
            <Link
              href="https://www.instagram.com/gabri3l_nun3z/"
              target="_blank"
            >
              <FiInstagram
                color="#ff9b2f"
                fontSize={20}
                className="relative hover:-translate-y-1 ease-in duration-100 lg:scale-[2]"
              />
            </Link>
          </section>
          <h1 className="text-[#ff9b2f] md:text-xl md:text-end">
            ---------- &nbsp;&nbsp;&nbsp;gabriel.nunez.arenas@gmail.com
          </h1>
        </div>
        <Image
          src="/img/new-face.png"
          width={330}
          height={300}
          className=""
          alt="profile picture"
        />
      </section>
      <About />
      <Skills />
      <Proyects />
      <Contact />
      <div className="p-6 grid gap-5 md:mx-auto  md:max-w-[1320px] mb-6 text-center lg:gap-12 ">
        <p className="text-gray-600 max-w-[366px] mx-auto">
          Application developed with passion ❤ by me, Gabriel N.A.
        </p>
      </div>
    </>
  );
}
