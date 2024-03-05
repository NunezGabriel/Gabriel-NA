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
        border: "1px solid #00ffc9",
        borderRadius: "10px",
      }}
    >
      <Link href="#about" className="text-[#cdd6f6] hover:text-hard-color">
        <span className="text-hard-color">01 ---- </span>
        About
      </Link>
      <Link href="#skills" className="text-[#cdd6f6] hover:text-hard-color">
        <span className="text-hard-color">02 ---- </span>
        Skills
      </Link>
      <Link href="#projects" className="text-[#cdd6f6] hover:text-hard-color">
        <span className="text-hard-color">03 ---- </span>
        Projects
      </Link>
      <Link href="#contact" className="text-[#cdd6f6] hover:text-hard-color">
        <span className="text-hard-color">04 ---- </span>
        Contact
      </Link>
      <Link
        href="https://drive.google.com/file/d/1nZyMBSMRqlAQK6scr9ftqEq9ZTKDnqfT/view?usp=sharing"
        target="_blank"
      >
        <div className="text-hard-color py-1 px-3 border border-[#00ffc9] rounded-lg">
          RESUME
        </div>
      </Link>
    </div>
  );
};

export default NavBarModal;
