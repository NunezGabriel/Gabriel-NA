import Link from "next/link";
import { SiPlatzi, SiUdemy, SiCoursera } from "react-icons/si";

const About = () => {
  return (
    <div
      id="about"
      className="sections p-6 grid gap-4 md:px-6 md:max-w-[1320px] md:mx-auto lg:flex md:items-center md:gap-12 mb-8 lg:mb-28"
    >
      <div className=" grid gap-12 md:max-w-4xl">
        <h1 className="text-[#cdd6f6] text-2xl">
          <span className="text-hard-color">01 - </span>About Me
        </h1>
        <div className="grid gap-2 text-lg">
          <p className="text-[#8992af] leading-6 mb-3">
            Hello, my name is{" "}
            <span className="text-hard-color leading-6 mb-3">
              GABRIEL EMILIO NUÑEZ ARENAS
            </span>
            . Let's get to know us better. I'm a full-stack developer with a
            soft spot for React and related technologies, so I lean towards the
            Frontend.
          </p>
          <p className="text-[#8992af] leading-6 mb-3">
            I like to work as a team to learn new things from my colleagues and
            also support them in topics that are not known to them in the best
            possible way.
          </p>
          <p className="text-[#8992af] leading-6 mb-3">
            I studied half of my Computer Science degree at the{" "}
            <Link href="https://ucsp.edu.pe/" className="text-hard-color">
              San Pablo Catholic University ( Arequipa - Peru )
            </Link>
            , for personal reasons I had to leave it, but I complemented my
            studies with a fullstack development bootcamp in{" "}
            <Link href="https://www.codeable.la/" className="text-hard-color">
              Codeable
            </Link>
            , it was a challenging and very educational experience both in
            programming as well as in social.
          </p>
          <p className="text-[#8992af] leading-6 mb-3">
            I also have certificates of web development courses from different
            platforms such as{" "}
            <Link href="https://platzi.com/" className="text-hard-color">
              Platzi
            </Link>
            ,&nbsp;
            <Link href="https://www.udemy.com/" className="text-hard-color">
              Udemy
            </Link>
            ,&nbsp;
            <Link
              href="https://www.aluracursos.com/"
              className="text-hard-color"
            >
              Alura&nbsp;
            </Link>
            and{" "}
            <Link href="https://www.coursera.org/" className="text-hard-color">
              Coursera.
            </Link>
          </p>
        </div>
      </div>
      <div className="h-[300px] relative ">
        <SiPlatzi
          fontSize={100}
          color="#00ffc9"
          className="absolute top-3 left-4 vibrate"
        />
        <SiUdemy
          fontSize={80}
          color="#00ffc9"
          className="absolute top-[130px] left-[235px] vibrate2"
        />
        <SiCoursera
          fontSize={90}
          color="#00ffc9"
          className="absolute top-[200px] left-5 vibrate2"
        />
        <h1 className="text-5xl font-black absolute text-hard-color top-[80px] left-[145px] vibrate2">
          {"{ca}"}
        </h1>
        <h1 className="text-5xl font-black absolute text-hard-color top-[240px] left-[155px] vibrate">
          {"UCSP"}
        </h1>
      </div>
    </div>
  );
};

export default About;
