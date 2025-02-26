import React from "react";
import ImageCustom from "../ImageCustom/ImageCustom";
import NavLink from "../NavLink/NavLink";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import MenuMobile from "../MenuMobile/MenuMobile";
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
export default function Header() {
  return (
    <header className="border-custom px-3 md:px-16 xl:px-0">
      <div className="flex main-class items-center justify-between py-4 md:py-8">
        <ImageCustom
          width={180}
          figureClass="w-2/6 md:w-1-/6"
          className="md:w-28 md:h-10 lg:w-44 lg:h-16"
          height={70}
          src={"/Logo.png"}
          alt={"logo"}
        />
        <div className="hidden md:flex w-4/6 justify-center md:gap-1 lg:gap-5 items-center">
          {nameLink.map((i, index) => (
            <NavLink name={i.name} url={i.url} key={index} />
          ))}
        </div>
        <div className="hidden md:flex w-1/6 text-right">
          <Link href={"/contact"}>
            <Button className="bg-green-50 lg:p-5 p-3 rounded-md">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="block md:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
