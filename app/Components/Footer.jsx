import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="shadow">
      <div className="w-90% mx-auto p-4 max-w-[1800px]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image
              width={80}
              height={80}
              src="/assets/Logo.png"
              alt="Logo.png"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-secondary">
              Priyansu
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <Link href="/About" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link href="/Pricing" className="mr-4 hover:underline md:mr-6">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/Projects" className="mr-4 hover:underline md:mr-6 ">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto  lg:my-4" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023 Priyansu Chowdhury . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
