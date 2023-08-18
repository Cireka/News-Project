import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="mb-[64px] mt-[40px] flex items-center justify-between">
      <div>
        <span className="text-[white]  items-center rounded text-[18px] font-[700] w-[56px] p-[8px] custom-shadow custom-bg">
          News
        </span>
        <span className="pl-[6px] text-[18px] font-[700]">Portal</span>
      </div>
      <div>
        <BsSearch className="w-[26px] h-[34px] hover:cursor-pointer text-[#505050]" />
      </div>
    </nav>
  );
};

export default Navbar;
