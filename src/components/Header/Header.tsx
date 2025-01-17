import React from "react";
import ImageCustom from "../ImageCustom/ImageCustom";
import NavLink from "../NavLink/NavLink";
import { Button } from "@nextui-org/react";
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
export default function Header() {
  return (
    <header className="border-custom">
      <div className="flex main-class items-center py-8">
        <ImageCustom
          width={180}
          figureClass="w-1/6"
          className="w-44 h-16"
          height={70}
          src={"/Logo.png"}
          alt={"logo"}
        />
        <div className="flex w-4/6 justify-center gap-5 items-center">
          {nameLink.map((i, index) => (
            <NavLink name={i.name} url={i.url} key={index} />
          ))}
        </div>
        <div className="w-1/6">
          <Button className="bg-green-50 p-5 rounded-md">Contact Us</Button>
        </div>
      </div>
    </header>
  );
}
