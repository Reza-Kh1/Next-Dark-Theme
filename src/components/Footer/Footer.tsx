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
    url: "/work",
    name: "Work",
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
    icon: "/email.png",
    name: "hello@squareup.com",
  },
  {
    icon: "/phone.png",
    name: "+91 91813 23 2309",
  },
  {
    icon: "/location.png",
    name: "Somewhere in the World",
  },
];
export default function Footer() {
  return (
    <footer className="border-custom">
      <div className="py-8 main-class">
        <div className="flex items-center justify-between">
          <ImageCustom
            width={180}
            figureClass="w-1/6"
            className="w-40 h-14"
            height={70}
            src={"/Logo.png"}
            alt={"logo"}
          />
          <ul className="flex gap-3">
            {nameLink.map((i, index) => (
              <li key={index}>
                <Link className="text-white" href={i.url}>
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-3 rounded-md flex gap-2 border-custom items-center">
            <span className="text-white">Stay Connected</span>
            <Link href={"facebook.com"}>
              <Image
                alt="icon"
                className="p-3 w-10 bg-icon rounded-md"
                src={"/facebook.png"}
                width={40}
                height={40}
              />
            </Link>
            <Link href={"twitter.com"}>
              <Image
                alt="icon"
                className="p-3 w-10 bg-icon rounded-md"
                src={"/twitter.png"}
                width={40}
                height={40}
              />
            </Link>
            <Link href={"instagram.com"}>
              <Image
                alt="icon"
                className="p-3 w-10 bg-icon rounded-md"
                src={"/instagram.png"}
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
        <span className="border block my-8 border-dark-c w-full"></span>
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            {contact.map((i, index) => (
              <Link
                key={index}
                className="border-b border-dark-c pb-2 flex items-center gap-1"
                href={"#"}
              >
                <Image
                  alt="icon"
                  className="p-2 w-9  rounded-md"
                  src={i.icon}
                  width={40}
                  height={40}
                />
                <span className="text-gray-300">{i.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-gray-300 text-sm">
            © 2023 SquareUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
