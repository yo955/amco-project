"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  title: string;
  href: string;
  items: { title: string; href: string }[];
  setMenuOpen?: (isOpen: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  href,
  items,
  setMenuOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = (href: string) => {
    if (href && setMenuOpen) {
      setMenuOpen(false);
    }
  };
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-2 cursor-pointer p-2 hover:bg-black_gray md:hover:bg-gray hover:text-white">
        <Link href={href} onClick={() => handleLinkClick(href)}>
          <h1 className="text-menu_color md:text-orange  font-almarai font-bold text-lg md:text-xl lg:text-2xl ">
            {title}
          </h1>
        </Link>
        <FaChevronDown
          className={`text-menu_color md:text-orange  transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="md:absolute top-full left-0 mt-0 w-full bg-white md:shadow-md md:text-center text-menu_color md:text-orange py-2 px-1 md:w-40"
          >
            {items.map((item) => (
              <li
                onClick={() => handleLinkClick(href)}
                key={item.title}
                className="hover:bg-black_gray md:hover:bg-orange py-2 px-3 hover:bg-gray-200  hover:text-white"
              >
                <Link href={item.href}>
                  <h2 className="text-gray-700 font-almarai text-base md:text-lg ">
                    {item.title}
                  </h2>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Dropdown;
