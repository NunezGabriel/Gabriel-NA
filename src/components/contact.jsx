import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="sections p-6 grid gap-5 md:mx-auto  md:max-w-[1320px] mb-10  text-center lg:gap-12"
    >
      <h1 className="text-lg lg:text-4xl text-hard-color">04 - What's Next?</h1>
      <h1 className=" text-4xl lg:text-9xl font-black text-[#cdd6f6]">
        Get In Touch
      </h1>
      <h1 className="text-xl lg:text-2xl text-[#8992af]">
        I'm looking for new opportunities and challenges so do not hesitate to
        write to me. my inbox is always open. Whether you have a question or
        just want to say hi.
      </h1>
      <button className="w-[200px] h-[50px] border border-[#00ffc9] rounded-xl changer mx-auto">
        <Link
          className="email-link"
          href="mailto:gabriel.nunez.arenas@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hello
        </Link>
      </button>
    </div>
  );
};

export default Contact;
