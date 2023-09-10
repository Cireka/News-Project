import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const goToHomePageHandller = () => {
    navigate("/");
  };
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [searchingWord, setSearchingWord] = useState("");

  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      width: 0, // Initially hidden and collapsed
    },
    visible: {
      opacity: 1,
      width: "280px", // Gradually expand the width
      transition: {
        duration: 0.5, // Animation duration
      },
    },
  };

  const iconAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5, // Animation duration
      },
    },
  };

  const searchHandller = (event) => {
    setSearchingWord(event.target.value);
  };
  const sarchNewsHandller = (event) => {
    if (searchingWord.length > 1) {
      event.preventDefault();
      navigate("/Search", { state: { searchingWord } });
    }
  };

  return (
    <nav className="px-[18px] mb-[64px] mt-[40px] flex items-center justify-between">
      <div onClick={goToHomePageHandller} className="hover:cursor-pointer">
        <span className="text-[white]  items-center rounded text-[18px] font-[700] w-[56px] p-[8px] custom-shadow custom-bg">
          News
        </span>
        <span className="pl-[6px] text-[18px] font-[700]">Portal</span>
      </div>
      <motion.div
        initial="hidden"
        animate={searchBarVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <form onSubmit={sarchNewsHandller} className="relative">
          <input
            onChange={searchHandller}
            className="rounded-md outline-none p-1 w-[100%] pl-[4pxs] "
            type="search"
            placeholder="Search"
          />
          <BsSearch
            onClick={sarchNewsHandller}
            className="w-[24px] h-[32px] hover:cursor-pointer text-[#505050] absolute right-2 top-0"
          />
        </form>
      </motion.div>
      <div onClick={toggleSearchBar}>
        <motion.div
          initial="hidden"
          animate={searchBarVisible ? "hidden" : "visible"}
          variants={iconAnimation}
        >
          <BsSearch
            className={`w-[26px] h-[34px] ${
              searchBarVisible ? "" : "hover:cursor-pointer"
            } text-[#505050]`}
          />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
