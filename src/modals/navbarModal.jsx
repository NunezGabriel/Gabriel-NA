import Link from "next/link";

const NavBarModal = ({ displayOption }) => {
  return (
    <div
      style={{
        display: `${displayOption}`,
        position: "absolute",
        top: "50px",
        right: "-150px",
        gap: "20px",
        backgroundColor: "rgb(20, 20, 20)",
        width: "300px",
        padding: "20px",
        border: "1px solid #ff9b2f",
        borderRadius: "10px",
      }}
    >
      <Link href="#about" className="text-[#cdd6f6] hover:text-[#ff9b2f]">
        <span className="text-[#ff9b2f]">01 ---- </span>
        About
      </Link>
      <Link href="#skills" className="text-[#cdd6f6] hover:text-[#ff9b2f]">
        <span className="text-[#ff9b2f]">02 ---- </span>
        Skills
      </Link>
      <Link href="#projects" className="text-[#cdd6f6] hover:text-[#ff9b2f]">
        <span className="text-[#ff9b2f]">03 ---- </span>
        Projects
      </Link>
      <Link href="#contact" className="text-[#cdd6f6] hover:text-[#ff9b2f]">
        <span className="text-[#ff9b2f]">04 ---- </span>
        Contact
      </Link>
      <Link
        href="https://drive.google.com/file/d/1nZyMBSMRqlAQK6scr9ftqEq9ZTKDnqfT/view?usp=sharing"
        target="_blank"
      >
        <div className="text-[#ff9b2f] py-1 px-3 border border-[#ff9b2f] rounded-lg">
          RESUME
        </div>
      </Link>
    </div>
  );
};

export default NavBarModal;
