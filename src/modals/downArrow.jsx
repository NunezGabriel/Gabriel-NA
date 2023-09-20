import { BiDownArrow } from "react-icons/bi";

const DownArrow = () => {
  return (
    <div className="hidden md:block absolute bottom-[-90px]">
      <BiDownArrow color="#59e0cd" fontSize={80} className="floating" />
    </div>
  );
};

export default DownArrow;
