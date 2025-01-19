"use client"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import ImageCustom from "../ImageCustom/ImageCustom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function MenuMobile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button isIconOnly onPress={onOpen} className="bg-dark-c rounded-md text-right">
        <HiOutlineMenuAlt3 className="text-green-50 text-2xl" />
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
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

              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
