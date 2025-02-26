"use client"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import ImageCustom from "../ImageCustom/ImageCustom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import NavLink from "../NavLink/NavLink";
import { usePathname } from "next/navigation";
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
export default function MenuMobile() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const path = usePathname()
  useEffect(() => {
    if (isOpen) {
      onClose()
    }
  }, [path])
  return (
    <>
      <Button isIconOnly onPress={onOpen} className="bg-dark-c rounded-md text-right">
        <HiOutlineMenuAlt3 className="text-green-50 text-2xl" />
      </Button>
      <Drawer className="w-1/2 bg-main" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                <ImageCustom
                  alt={"logo"}
                  src={"/logo.png"}
                  width={100}
                  height={100}
                />
              </DrawerHeader>
              <DrawerBody>
                <div className="flex flex-col gap-5" dir="rtl">
                  {nameLink.map((i, index) => (
                    <NavLink name={i.name} url={i.url} key={index} />
                  ))}
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
