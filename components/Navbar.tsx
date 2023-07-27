"use client";

import { motion } from "framer-motion";
import { BsBag } from "react-icons/bs";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { getTransition } from "@/utls/getTransition";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={getTransition(0.6)}
      className="h-[5rem] fixed left-0 right-0 top-0 bg-light/90 border-b border-dark/10 backdrop-blur-lg shadow z-[100]"
    >
      <div className="wrapper w-full h-full flex justify-between items-center">
        {/* NAV LEFT */}
        <nav>
          <Link href="/" className="text-xl font-semibold link-item">
            Dazzle Mart
          </Link>
        </nav>
        {/* NAV MID  */}
        <nav>
          <ul className="flex gap-3 items-center">
            <li>
              <Link href="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Products" className="link-item">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* NAV RIGHT  */}
        <nav className="flex gap-5 items-center">
          <Link href="/cart" className="relative text-[1.5rem]">
            <BsBag />
            <span className="absolute -bottom-2 text-light -right-1 bg-dark flex items-center justify-center p-[0.625rem] rounded-full h-3 w-3 text-[0.625rem]">
              10
            </span>
          </Link>
          <Button href="/login" placeholder="login" />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
