import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";

import { Avatar } from "../../assets/img";
import { Menus, signOutAction } from "../../utils/helpers";

function UserProfileDetails() {
  const user = useSelector((state) => state.user?.user);
  const role = useSelector((state) => state.role?.role);

  const [isMenu, setIsMenu] = useState(false);

  return (
    <div
      className="flex items-center justify-center w-full rounded-md px-4 py-2 text-sm text-gray-700  
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
    >
      <motion.div
        className="flex flex-row items-center cursor-pointer"
        onClick={() => setIsMenu(!isMenu)}
        whileTap={{ scale: 0.9 }}
      >
        <motion.img
          whileHover={{ scale: 1.2 }}
          src={user?.photoURL ? user?.photoURL : Avatar}
          alt="avatar"
          className="rounded-full w-10 h-10"
        />
        <button className="ml-2 hidden sm:inline">{user?.displayName}</button>
        <div className="p-4 rounded-md flex items-center justify-center cursor-pointer">
          <FaChevronDown className="text-white" />
        </div>
      </motion.div>
      <AnimatePresence>
        {isMenu && (
          <motion.div
            className=" absolute top-16 right-0 px-4 py-3 rounded-xl 
          shadow-md z-10 flex flex-col items-start justify-start gap-4 w-full 
          bg-white min-w-210"
          >
            <div className="space-y-4 w-full">
              {Menus &&
                Menus.map((menu) => (
                  <Link
                    to={menu.uri}
                    key={menu.id}
                    className="text-md flex flex-row justify-between text-gray-700 hover:bg-gray-100 
                    hover:text-gray-900 items-center w-full px-2 py-1 rounded-md"
                  >
                    <div className="flex flex-row gap-5">
                      <div className="text-2xl">{menu.icon}</div>
                      <button>{menu.name}</button>
                    </div>
                    <div className="text-xs">
                      <FaChevronRight />
                    </div>
                  </Link>
                ))}
              <motion.div
                onClick={signOutAction}
                whileTap={{ scale: 0.9 }}
                className="flex flex-row justify-between text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 items-center w-full px-2 py-1 rounded-md"
              >
                <button>Log out</button>
                <div className="text-xs ">
                  <FaChevronRight />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UserProfileDetails;
