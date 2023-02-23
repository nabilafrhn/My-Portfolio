import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-20 py-10 rounded-3xl items-center">
        <div className="items-center lg:items-start gap-5">
          <div className="font-semibold md:text-left text-center text-2xl">IM NABILA</div>
          <p className="text-center lg:text-start">
                Komplek Jatayu 3 No 31 RT 04 RW Malang, Jawa Timur
          </p>
        </div>
        <div className="flex flex-row md:ml-96 justify-center gap-8">
          <Link href={"#values"} className="text-base">
            About
          </Link>
          <Link href={"#product"} className="text-base">
            Portofolio
          </Link>
          <Link href={"#contact"} className="text-base">
            Contact
          </Link>
        </div>
        <div className="flex justify-end gap-5 mx-auto md:mx-0 md:right-24 md:absolute">
          <a href="https://github.com/nabilafrhn"><BsGithub className="text-3xl text-gray-500" /></a>
          <a href="https://www.linkedin.com/in/nabilafrhn/"><BsLinkedin className="text-3xl text-gray-500" /></a>
          <a href="https://instagram.cohttps://instagram.com/nabilafrhn_?igshid=ZDdkNTZiNTM="><BsInstagram className="text-3xl text-gray-500" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;