"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";

const NavLinks = ["Home", "About", "Services", "Projects", "Contact"];

const Header = () => {
  const [active, setActive] = React.useState(false);
  const pathName = usePathname();
  return (
    <section className="fixed left-0 right-0 top-0 border py-1 bg-slate-100 z-50">
      <div className="flex justify-between items-center w-90% mx-auto">
        <div>
          <Image width={80} height={80} src="/assets/Logo.png" alt="Logo.png" />
        </div>
        {/* Desktop nav */}
        <div>
          <ul className="flex space-x-6 py-4 max-lg:hidden">
            {NavLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={link === "Home" ? "/" : link}
                    className={
                      link === "Home"
                        ? pathName === `/`
                          ? "text-secondary duration-300"
                          : "hover:text-secondary duration-300"
                        : pathName === `/${link}`
                        ? "text-secondary duration-300"
                        : "hover:text-secondary duration-300"
                    }
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Desktop nav end */}
        {/* Laptop Nav */}
        <button
          className="lg:hidden text-3xl fixed z-50 right-[5%]"
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? <GrClose /> : <BiMenuAltRight />}
        </button>
        <AnimatePresence>
          {active && (
            <div>
              <motion.ul
                className="fixed top-0 left-0 bottom-0 right-0 bg-white z-40 flex flex-col justify-center items-center gap-6"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
              >
                {NavLinks.map((link, index) => {
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index / 3 }}
                    >
                      <Link
                        href={link === "Home" ? "/" : link}
                        onClick={() => {
                          setActive(false);
                        }}
                        className={
                          link === "Home"
                            ? pathName === `/`
                              ? " text-white w-20 py-2 flex justify-center items-center rounded-full  bg-secondary shadow-dropShadow duration-300"
                              : "hover:text-white text-secondary shadow-innerShadow w-20  justify-center items-center rounded-full flex py-2 hover:bg-secondary hover:shadow-dropShadow duration-300"
                            : pathName === `/${link}`
                            ? "text-white w-20 py-2 flex justify-center items-center rounded-full  bg-secondary shadow-dropShadow duration-300"
                            : "hover:text-white text-secondary shadow-innerShadow w-20  justify-center items-center rounded-full flex py-2 hover:bg-secondary hover:shadow-dropShadow duration-300"
                        }
                      >
                        {link}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          )}
        </AnimatePresence>
      </div>
      {/* Laptop Nav end */}
    </section>
  );
};

export default Header;
