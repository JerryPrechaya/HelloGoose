import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className="flex h-fit bg-[#FFF3E5] justify-between pt-6 pb-6 pl-12 pr-12 items-center gap-5 w-screen">
      <h1 className="text-orange font-bold">LOGO</h1>
      <div className="flex items-center justify-between gap-5 p-3 rounded-full bg-[#F6AB4F]">
        <div className="flex items-center rounded sm:ml-2 h-9">
          <input
            type="text"
            className="px-2 py-2 sm:min-w-[16rem] w-[800px] bg-[#F6AB4F] onfocus:bg-primary-200 focus:outline-none placeholder-gray-500"
            placeholder="Search in Market Place"
          />
        </div>
        <button className="p-3 rounded-full bg-white">
          <IoIosSearch />
        </button>
      </div>
      <div className="flex justify-end gap-4">
        <FaRegHeart size={30} color={"black"} />
        <FiShoppingBag size={30} color={"black"} />
        <CgProfile size={30} color={"black"} />
      </div>
    </div>
  );
};


export default NavBar;
