import ContainerFooter from "@/components/ContainerFooter/ContainerFooter";
import ContainerHead from "@/components/ContainerHead/ContainerHead";
import ImageCustom from "@/components/ImageCustom/ImageCustom";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
const aboutData = [
  {
    num: "01",
    name: "Design",
    text: "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
  },
  {
    num: "02",
    name: "Engineering",
    text: "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.",
  },
  {
    num: "03",
    name: "Project Management",
    text: "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
  },
  {
    num: "04",
    name: "Collaboration",
    text: "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
  },
  {
    num: "05",
    name: "Client-Centric Approach",
    text: "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
  },
  {
    num: "06",
    name: "Driving Success",
    text: "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
  },
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
      <div className="p-16 border-custom flex items-center gap-16 justify-evenly">
        <div className="w-1/2">
          <h1 className="text-4xl text-white font-semibold">About SquareUp</h1>
          <p className="text-p mt-5 text-justify">
            SquareUp is a digital product agency that is passionate about
            crafting exceptional digital experiences. We specialize in design,
            engineering, and project management, helping businesses thrive in
            the digital landscape. At SquareUp, we follow a structured and
            collaborative process to ensure the successful delivery of
            exceptional digital products. Our process combines industry best
            practices, creative thinking, and a client-centric approach.
          </p>
        </div>
        <div className="w-1/2 container-footer h-[500px] flex justify-center items-center">
          <figure className="p-5 inline-block rounded-xl bg-green-50 shadow-insert">
            <Image
              className="w-12"
              src={"/logo-alone.png"}
              alt="logo"
              width={150}
              height={150}
            />
          </figure>
          <span
            className="bg-img"
            style={{
              background: `linear-gradient(rgb(0 0 0 / 62%), rgb(2 13 2 / 73%)),
        url(/about-sequare.webp)`,
            }}
          ></span>
          <span className="absolute w-1/2 transform -translate-x-0 -translate-y-1/2 left-0 top-1/2 bg-gradient-to-l  to-green-50/10 from-green-50 z-[-1] h-[1px]"></span>
          <span className="absolute w-1/2 transform translate-x-1 -translate-y-1/2 right-0 top-1/2 bg-gradient-to-r to-green-50/10 from-green-50 z-[-1] h-[1px]"></span>
          <span className="absolute h-1/2 transform translate-x-1/2 -translate-y-0 right-1/2 top-0 bg-gradient-to-t to-green-50/10 from-green-50 z-[-1] w-[1px]"></span>
          <span className="absolute h-1/2 transform translate-x-1/2 translate-y-1 right-1/2 bottom-0 bg-gradient-to-b to-green-50/10 from-green-50 z-[-1] w-[1px]"></span>
          <span></span>
        </div>
      </div>
      <h2 className="py-16 pl-8 text-white text-3xl font-semibold border-custom">
        Our Story
      </h2>
      <div className="grid grid-cols-2">
        {aboutData.map((i, index) => (
          <div key={index} className="px-10 pt-8 pb-16 h-full border-custom">
            <div className="flex items-end gap-2">
              <div className="text-[#D8FF99] text-[100px] font-semibold h-28">
                {i.num}
              </div>
              <h3 className="text-2xl block w-full text-[#D8FF99] border-b border-dark-c pb-4 font-semibold">
                {i.name}
              </h3>
            </div>
            <p className="text-p mt-8 text-justify">{i.text}</p>
          </div>
        ))}
      </div>
      <ContainerFooter />
    </div>
  );
}
