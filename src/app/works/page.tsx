import ContainerHead from "@/components/ContainerHead/ContainerHead";
import ImageCustom from "@/components/ImageCustom/ImageCustom";
import SectionHead from "@/components/SectionHead/SectionHead";
import { Button } from "@heroui/button";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
const dataWorks = [
  {
    title: "E-Commerce Platform for Fashion Hub",
    img: "/works/ecommerce.png",
    name: "Chic Boutique",
    address: "htttps:/www.chicboutique.com",
    text: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
  {
    title: "Mobile App for Food Delivery Service",
    img: "/works/mobile.png",
    name: "HungryBites",
    address: "htttps:/www.hungrybites.com",
    text: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    title: "Booking and Reservation System for Event Management",
    img: "/works/site.png",
    name: "EventMasters",
    address: "htttps:/www.eventmasters.com",
    text: "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
  },
  {
    title: "Custom Software for Workflow Automation",
    img: "/works/site2.png",
    name: "ProTech Solutions",
    address: "htttps:/www.protechsolutions.com",
    text: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    title: "Web Portal for Real Estate Listings",
    img: "/works/car.png",
    name: "Dream Homes Realty",
    address: "htttps:/www.dreamhomesrealty.com",
    text: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
  },
  {
    title: "Mobile App for Fitness Tracking",
    img: "/works/mobile-app.png",
    name: "FitLife Tracker",
    address: "htttps:/www.fitlifetracker.com",
    text: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
  },
  {
    title: "Custom Software for Supply Chain Management",
    img: "/works/site3.png",
    name: "Global Logistics Solutions",
    address: "htttps:/www.globallogisticssolutions.com",
    text: "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
  },
  {
    title: "Educational Platform for Online Learning",
    img: "/works/site4.png",
    name: "EduConnect",
    address: "htttps:/www.educonnect.com",
    text: "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.",
  },
  {
    title: "Mobile App for Travel Planning",
    img: "/works/site5.png",
    name: "WanderWise",
    address: "htttps:/www.wanderwise.com",
    text: "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.",
  },
  {
    title: "Web Application for Customer Relationship Management",
    img: "/works/site6.png",
    name: "ConnectCRM",
    address: "htttps:/www.connectcrm.com",
    text: "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.",
  },
];
export default function page() {
  return (
    <div>
      <ContainerHead
        height={300}
        name="Our Works"
        text="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
      />
      <SectionHead
        btnText="Here are ten examples of our notable works:"
        name="At SquareUp"
        text="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
      />
      <div className="grid grid-cols-2">
        {dataWorks.map((i, index) => (
          <div key={index} className="h-full  border-custom">
            <span className="text-p text-xl block w-full py-8 border-b border-dark-c pl-12">
              {i.title}
            </span>
            <section className=" pt-8 h-full px-12 pb-20">
              <ImageCustom
                src={i.img}
                alt={i.title}
                width={700}
                height={680}
                className="rounded-xl"
              />
              <div className="flex items-center justify-between my-5 w-full">
                <div className="flex flex-col gap-2">
                  <span className="text-white text-lg font-semibold">
                    {i.name}
                  </span>
                  <span className="bg-dark-c text-sm text-white rounded-md p-3 inline-block">
                    {i.address}
                  </span>
                </div>
                <Button isIconOnly className=" bg-icon">
                  <MdArrowOutward
                    size={40}
                    className="text-green-50 rounded-md p-2"
                  />
                </Button>
              </div>
              <p className="text-p text-sm">{i.text}</p>
            </section>
          </div>
        ))}
      </div>
      <ContainerHead 
      height={500}
      isButton
      isLogo
      name="Let us Bring your Ideas to Life in the Digital World."
      text="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
      />
    </div>
  );
}
