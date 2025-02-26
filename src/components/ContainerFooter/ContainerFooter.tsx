import { Button } from "@nextui-org/react";
import React from "react";
import ImageCustom from "../ImageCustom/ImageCustom";

export default function ContainerFooter() {
  return (
    <section className="border-custom p-6 md:p-12">
      <div className="flex flex-col md:flex-row gap-5 items-center mb-10">
        <ImageCustom
          width={90}
          figureClass="p-5 shadow-insert bg-green-50 rounded-xl inline-block"
          alt={"logo"}
          height={90}
          src={"/logo-alone.png"}
        />
        <div className="flex flex-col gap-4">
          <span className="text-white">
            Today, SquareUp Continues to Thrive as a Leading Digital Product
            Agency.....
          </span>
          <p className="text-p">
            Combining the power of design, engineering, and project management
            to create transformative digital experiences. They invite you to
            join them on their journey and discover how they can help bring your
            digital ideas to life.
          </p>
        </div>
      </div>
      <div className="bg-black/20 flex md:flex-row flex-col gap-5 md:gap-0 justify-between rounded-xl items-center p-4 md:p-8 border-custom">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0">
          <span className="text-p">Welcome to SquareUp</span>
          <span className="bg-dark-c text-white md:ml-3 rounded-md p-3 inline-block">
            Where collaboration, Expertise, and Client-Centricity Intersect to
            Shape the Future of Digital Innovation.
          </span>
        </div>
        <Button className="bg-green-50 p-4 rounded-md">Start Project</Button>
      </div>
    </section>
  );
}
