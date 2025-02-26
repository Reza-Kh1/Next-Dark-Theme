import React from "react";
import "./style.css";
import { Button } from "@heroui/button";
import ImageCustom from "../ImageCustom/ImageCustom";
type ContainerFooterType = {
  name: string;
  text: string;
  isLogo?: boolean;
  isButton?: boolean;
  image?: string;
  height?:number
};
export default function ContainerHead({
  name,
  text,
  isButton,
  isLogo,
  image,
  height
}: ContainerFooterType) {
  return (
    <div className="container-footer flex justify-evenly flex-col items-center" style={{height:height || 500}}>
      {isLogo && (
        <ImageCustom
          src={"/logo-alone.png"}
          className="p-3 w-14 mx-auto  shadow-insert bg-green-50 rounded-md"
          alt="logo"
          width={50}
          height={50}
        />
      )}
      <div className="text-center w-4/5 md:w-2/3">
        <span className="text-xl md:text-3xl font-semibold text-white">{name}</span>
        <p className="text-sm text-p mt-3">{text}</p>
      </div>
      {isButton && (
        <Button className="bg-green-50 p-4 rounded-md">Start Project</Button>
      )}
      <span
        className="bg-img"
        style={{
          background: `linear-gradient(rgb(0 0 0 / 62%), rgb(2 13 2 / 73%)),
        url(${image || "/imgfooter.webp"})`,
        }}
      ></span>
    </div>
  );
}
