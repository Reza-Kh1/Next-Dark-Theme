import AccordionBox from "@/components/AccordionBox/AccordionBox";
import CheckBox from "@/components/CheckBox/CheckBox";
import ContainerHead from "@/components/ContainerHead/ContainerHead";
import ContainerHome from "@/components/ContainerHome/ContainerHome";
import FormContact from "@/components/FormContact/FormContact";
import RangeForm from "@/components/RangeForm/RangeForm";
import { Button } from "@nextui-org/react";
import Image from "next/image";
const dataServices = [
  {
    icon: "/icon/iconServices3.png",
    name: "Design",
    text: "  At Squareup, our design team is passionate about creating stunning,user-centric designs that captivate your audience and elevate yourbrand. We believe that great design is not just about aesthetics; it'sabout creating seamless and intuitive user experiences.",
    src: "#",
  },
  {
    icon: "/icon/iconServices2.png",
    name: "Engineering",
    text: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    src: "#",
  },
  {
    icon: "/icon/iconServices1.png",
    name: "Project Management",
    text: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    src: "#",
  },
];
const iconText = [
  "/logoBanner/text.png",
  "/logoBanner/text2.png",
  "/logoBanner/text3.png",
  "/logoBanner/text4.png",
  "/logoBanner/text5.png",
  "/logoBanner/text6.png",
];
const dataSequare = [
  {
    icon: "/icon/IconSquare1.png",
    name: "Expertise",
    text: "Our team consists of highly skilled professionals who have a deepunderstanding of the digital landscape. We stay updated with thelatest industry trends and best practices to deliver cutting-edgesolutions.",
  },
  {
    icon: "/icon/IconSquare2.png",
    name: "Client-Centric Approach",
    text: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
  },
  {
    icon: "/icon/IconSquare3.png",
    name: "Results-Driven Solutions",
    text: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
  },
  {
    icon: "/icon/IconSquare4.png",
    name: "Collaborative Partnership",
    text: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
  },
];
const dataASked = [
  {
    title:
      "SquareUp has been Instrumental in Transforming our Online Presence.",
    text: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    profile: "/profile/Profile1.png",
    name: "John Smith",
    job: "CEO of Chic Boutique",
  },
  {
    title: "Working with SquareUp was a breeze.",
    text: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
    profile: "/profile/Profile2.png",
    name: "Sarah Johnson",
    job: "Founder of HungryBites.",
  },
  {
    title:
      "SquareUp developed a comprehensive booking and reservation system for our event management company",
    text: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
    profile: "/profile/Profile3.png",
    name: "Mark Thompson",
    job: "CEO of EventMasters",
  },
  {
    title: "ProTech Solutions turned to SquareUp to automate our workflow",
    text: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
    profile: "/profile/Profile4.png",
    name: "Laura Adams",
    job: "COO of ProTech Solutions.",
  },
  {
    title:
      "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
    text: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
    profile: "/profile/Profile5.png",
    name: "Michael Anderson",
    job: "Founder of Dream Homes Realty.",
  },
  {
    title:
      "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
    text: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
    profile: "/profile/Profile6.png",
    name: "Emily Turner",
    job: "CEO of FitLife Tracker",
  },
];

export default function Home() {
  return (
    <div className="border-custom">
      <ContainerHome />
      <div className="border-custom grid overflow-auto items-center text-center grid-cols-3 md:grid-cols-6 gap-5 py-12 px-2 w-full">
        {iconText.map((i, index) => (
          <figure key={index} className="w-full block ">
            <Image
              width={200}
              height={100}
              loading="lazy"
              alt="text"
              className="w-20 mx-auto table"
              src={i}
            />
          </figure>
        ))}
      </div>
      <div>
        <Image
          className="w-full"
          alt="services"
          src={"/ourServices.webp"}
          width={1280}
          height={270}
        />
        <div className="grid md:grid-cols-3 grid-cols-1">
          {dataServices.map((i, index) => (
            <section
              key={index}
              className="p-4 md:p-8 border-custom h-[410px] flex flex-col justify-between"
            >
              <Image
                alt="icon"
                className="p-3 w-14 bg-icon rounded-md"
                src={i.icon}
                width={40}
                height={40}
              />
              <h3 className="text-gray-200">{i.name}</h3>
              <p className="text-gray-500 text-sm">{i.text}</p>
              <Button className="bg-dark-c text-white rounded-md w-full mx-auto">
                Learn More
              </Button>
            </section>
          ))}
        </div>
      </div>
      <div>
        <Image
          className="w-full"
          alt="services"
          src={"/sequareUp.png"}
          width={1280}
          height={270}
        />
        <div className="grid gap-5 md:gap-0 grid-cols-1 md:grid-cols-2">
          {dataSequare.map((i, index) => (
            <section key={index} className="p-4 md:p-12  border-custom">
              <div className="flex items-center gap-5 mb-6">
                <Image
                  alt="icon"
                  className="p-3 w-14 bg-icon rounded-md"
                  src={i.icon}
                  width={40}
                  height={40}
                />
                <span className="text-gray-200">{i.name}</span>
              </div>
              <p className="text-gray-400 text-sm">{i.text}</p>
            </section>
          ))}
        </div>
      </div>
      <div>
        <Image
          className="w-full"
          alt="aboutus"
          src={"/aboutus.png"}
          width={1280}
          height={270}
        />
        <div className="grid gap-5 grid-cols-1 md:gap-5 md:grid-cols-2">
          {dataASked.map((i, index) => (
            <section
              key={index}
              className="p-6 md:p-12 border-custom flex flex-col justify-between gap-3 md:gap-5"
            >
              <span className="text-[#D8FF99] text-lg">{i.title}</span>
              <p className="text-sm text-gray-500">{i.text}</p>
              <div className="p-3 border-custom justify-between flex gap-2 rounded-md">
                <div className="flex gap-2">
                  <Image
                    alt="profile"
                    src={i.profile}
                    className="w-10 h-auto"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-200 text-xs md:text-sm">{i.name}</span>
                    <span className="text-gray-200 text-xs md:text-sm">{i.job}</span>
                  </div>
                </div>
                <Button className="rounded-md p-4 text-white bg-dark-c">
                  Open Website
                </Button>
              </div>
            </section>
          ))}
        </div>
      </div>
      <div>
        <Image
          className="w-full"
          alt="aboutus"
          src={"/asked.png"}
          width={1280}
          height={270}
        />
        <div>
          <AccordionBox />
        </div>
      </div>
      <div>
        <ContainerHead
          isButton
          isLogo
          name="Thank you for your Interest in SquareUp."
          text="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        />
        <FormContact />
      </div>
    </div>
  );
}
