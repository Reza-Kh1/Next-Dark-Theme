import AccordionBox from "@/components/AccordionBox/AccordionBox";
import ContainerFooter from "@/components/ContainerFooter/ContainerFooter";
import ContainerHead from "@/components/ContainerHead/ContainerHead";
import FormContact from "@/components/FormContact/FormContact";
import ImageCustom from "@/components/ImageCustom/ImageCustom";
import React from "react";
const firstBanner = [
  { title: "hello@squareup.com", image: "/icon/email.png" },
  { title: "+91 91813 23 2309", image: "/icon/phone.png" },
  { title: "Get Location", image: "/icon/location.png" },
];
export default function page() {
  return (
    <div>
      <ContainerHead
        image="/ourServices.webp"
        name="About Us"
        height={300}
        text="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
      />
      <div className="flex gap-4 justify-center py-10 border-custom">
        {firstBanner.map((i, index) => (
          <div
            key={index}
            className="flex bg-dark-c rounded-md p-3 items-center gap-3"
          >
            <ImageCustom
              figureClass="w-auto"
              alt={i.title}
              src={i.image}
              width={25}
              height={25}
            />
            <span className="text-white">{i.title}</span>
          </div>
        ))}
      </div>
      <div className="border-custom">
        <FormContact />
      </div>
      <div className="flex">
        <div className="border-custom py-10 pr-16 w-1/2 flex items-center justify-end gap-5">
          <span className="text-white">Operating Days</span>
          <span className="bg-dark-c rounded-md p-3 text-white">
            Monday to Friday
          </span>
        </div>
        <div className="border-custom py-10 pl-16 w-1/2 flex items-center justify-start">
          <div className="border-custom p-4 flex gap-6 items-center  rounded-xl">
            <span className="text-white">Stay Connected</span>
            <ImageCustom
              alt={"facebook"}
              src={"/icon/facebook.png"}
              icon
              width={68}
              classPlus="!w-12"
              height={68}
              figureClass="w-auto"
            />
            <ImageCustom
              alt={"twitter"}
              src={"/icon/twitter.png"}
              icon
              width={68}
              classPlus="!w-12"
              height={68}
              figureClass="w-auto"
            />
            <ImageCustom
              alt={"linkdin"}
              src={"/icon/instagram.png"}
              icon
              width={68}
              classPlus="!w-12"
              height={68}
              figureClass="w-auto"
            />
          </div>
        </div>
      </div>
      <ContainerHead
        image="/ourServices.webp"
        name="Frequently Asked Questions"
        height={300}
        text="Still you have any questions? Contact our Team via hello@squareup.com"
      />
      <AccordionBox />
      <ContainerFooter />
    </div>
  );
}
