"use client";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { MdOutlineSegment } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="h-[80px] md:h-[100px] sticky md:relative z-20 backdrop-blur-3xl top-0 mb-8 lg:mb-16 flex justify-between items-center p-4 md:p-7 max-w-[1440px] mx-auto">
        <Image
          src="/img/rainder.png"
          width={60}
          height={30}
          className="h-20 md:ml-4 lg:ml-10"
        />
        <MdOutlineSegment fontSize={50} color="#59e0cd" className="md:hidden" />
        <div>
          <Link href="/">About</Link>
          <Link href="/">Skills</Link>
          <Link href="/">Proyects</Link>
          <Link href="/">Contact</Link>
        </div>
      </nav>
      <section className="grid py-3 px-6 gap-4 md:flex md:max-w-[1320px] md:justify-between  md:max-h-[684px] justify-center mx-auto lg:mt-[123px]">
        <div className="grid gap-4 lg:gap-14 md:flex md:flex-col ">
          <p className=" text-[#59e0cd] blur-in text-lg lg:text-[30px]">
            Hi, my name is
          </p>
          <h1 className=" text-[#cdd6f6] blur-in text-4xl lg:text-[120px] font-black">
            Gabriel Nunez
          </h1>
          <h2 className=" text-[#8992af] blur-in text-2xl font-black lg:text-[50px]">
            Full Stack Developer, writing code with passion.
          </h2>
          <section className="flex gap-7 mt-3 blur-in z-10 lg:gap-10">
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
        </div>
        <Image
          src="/img/faceng.png"
          width={320}
          height={320}
          className=" grayscale lg:scale-150"
        />
      </section>
    </>
  );
}
