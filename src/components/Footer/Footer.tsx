import React from "react";
import ImageCustom from "../ImageCustom/ImageCustom";
import Link from "next/link";
import Image from "next/image";
const nameLink = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/services",
    name: "Services",
  },
  {
    url: "/works",
    name: "Works",
  },
  {
    url: "/process",
    name: "Process",
  },
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/careers",
    name: "Careers",
  },
];
const contact = [
  {
    icon: "/icon/email.png",
    name: "hello@squareup.com",
  },
  {
    icon: "/icon/phone.png",
    name: "+91 91813 23 2309",
  },
  {
    icon: "/icon/location.png",
    name: "Somewhere in the World",
  },
];
export default function Footer() {
  return (
    <footer className="border-custom px-3 md:px-16 xl:px-0">
      <div className="py-8 main-class">
        <div className="md:flex flex-col md:flex-row justify-center md:items-center md:justify-between">
          <ImageCustom
            width={180}
            figureClass="flex justify-center md:w-1/6"
            className="h-14 w-40 md:w-28 md:h-10 lg:w-44 lg:h-16"
            height={70}
            src={"/Logo.png"}
            alt={"logo"}
          />
          <span className="w-full block md:hidden h-[1px] bg-dark-c my-8 md:my-0"></span>
          <ul className="flex flex-wrap md:flex-row justify-evenly md:gap-3 lg:gap-5 my-8 md:my-0">
            {nameLink.map((i, index) => (
              <li key={index}>
                <Link
                  className="text-white md:text-sm lg:text-base"
                  href={i.url}
                >
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="py-4 md:p-4 justify-center flex lg:p-3 rounded-md flex-col md:flex-row md:gap-1 lg:gap-2 border-custom items-center">
            <span className="text-white md:text-xs lg:text-base mb-3 md:mb-0">
              Stay Connected
            </span>
            <div className="flex gap-1">
              <Link href={"facebook.com"}>
                <Image
                  alt="icon"
                  className="p-3 w-10 bg-icon rounded-md"
                  src={"/icon/facebook.png"}
                  width={40}
                  height={40}
                />
              </Link>
              <Link href={"twitter.com"}>
                <Image
                  alt="icon"
                  className="p-3 w-10 bg-icon rounded-md"
                  src={"/icon/twitter.png"}
                  width={40}
                  height={40}
                />
              </Link>
              <Link href={"instagram.com"}>
                <Image
                  alt="icon"
                  className="p-3 w-10 bg-icon rounded-md"
                  src={"/icon/instagram.png"}
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
        <span className="border hidden md:block my-8 border-dark-c w-full"></span>
        <div className="flex justify-between flex-col md:flex-row items-center mt-8 md:mt-0">
          <div className="flex w-full md:w-auto md:flex-row flex-col md:gap-2 lg:gap-5">
            {contact.map((i, index) => (
              <Link
                key={index}
                className="border-b w-full md:w-auto justify-center border-dark-c pb-3 mt-3 md:mt-0 md:pb-1 lg:pb-2 flex items-center lg:gap-1"
                href={"#"}
              >
                <Image
                  alt="icon"
                  className="p-2 w-9  rounded-md"
                  src={i.icon}
                  width={40}
                  height={40}
                />
                <span className="text-gray-300 text-base md:text-xs lg:text-base">
                  {i.name}
                </span>
              </Link>
            ))}
          </div>
          <p className="text-gray-300 text-base md:text-[10px] md:text-sm mt-5 md:mt-0">
            © 2023 SquareUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
