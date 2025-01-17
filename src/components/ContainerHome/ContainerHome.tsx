import React from "react";
import "./style.css";
import { Button } from "@nextui-org/react";
export default function ContainerHome() {
  return (
    <div className="container-home flex justify-center items-center">
      <div className="w-[800px] flex items-center flex-col z-10">
        <h2 className="text-[68px] text-white text-center">
          A Digital Product Studio that will Work
        </h2>
        <div className="bg-[#24242433] p-5 text-white backdrop-blur-sm flex gap-1 items-center rounded-xl border-custom">
          <span>For</span>
          <span className="bg-dark-c p-2 rounded-md">Startups</span>
          <span>,</span>
          <span className="bg-dark-c p-2 rounded-md">Enterprise leaders</span>
          <span>,</span>
          <span className="bg-dark-c p-2 rounded-md">Media & Publishers</span>
          <span>and</span>
          <span className="bg-dark-c p-2 rounded-md">Social Good</span>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <Button className="text-white backdrop-blur-sm bg-[#24242433] p-5 rounded-md border-custom">
            Our Works
          </Button>
          <Button className="bg-green-50 p-5 rounded-md">Contact Us</Button>
        </div>
      </div>
      <span className="bg-[#1A1A1A] absolute z-10 top-[95%] border-custom text-white left-1/2 transform -translate-x-1/2 py-4 px-6 rounded-full">Trusted By 250+ Companies</span>
    </div>
  );
}
