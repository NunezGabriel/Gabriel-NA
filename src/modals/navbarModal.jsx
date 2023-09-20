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
        backgroundColor: "#0f172a",
        width: "300px",
        padding: "20px",
        border: "1px solid #59e0cd",
        borderRadius: "10px",
      }}
    >
      <Link href="/" className="text-[#cdd6f6] hover:text-[#59e0cd]">
        <span className="text-[#59e0cd]">01 ---- </span>
        About
      </Link>
      <Link href="/" className="text-[#cdd6f6] hover:text-[#59e0cd]">
        <span className="text-[#59e0cd]">02 ---- </span>
        Skills
      </Link>
      <Link href="/" className="text-[#cdd6f6] hover:text-[#59e0cd]">
        <span className="text-[#59e0cd]">03 ---- </span>
        Projects
      </Link>
      <Link href="/" className="text-[#cdd6f6] hover:text-[#59e0cd]">
        <span className="text-[#59e0cd]">04 ---- </span>
        Contact
      </Link>
      <Link href="/">
        <div className="text-[#59e0cd] py-1 px-3 border border-[#59e0cd] rounded-lg">
          RESUME
        </div>
      </Link>
    </div>
  );
};

export default NavBarModal;
