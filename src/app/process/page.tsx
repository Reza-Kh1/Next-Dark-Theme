import ContainerHead from "@/components/ContainerHead/ContainerHead";
import FormContact from "@/components/FormContact/FormContact";
import SectionHead from "@/components/SectionHead/SectionHead";
import React from "react";
const dataProcess = [
  {
    num: "01",
    name: "Discovery",
    text: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
  },
  {
    num: "02",
    name: "Planning and Strategy",
    text: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.",
  },
  {
    num: "03",
    name: "Design",
    text: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.",
  },
  {
    num: "04",
    name: "Development",
    text: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.",
  },
  {
    num: "05",
    name: "Testing and Quality Assurance",
    text: "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.",
  },
  {
    num: "06",
    name: "Deployment and Launch",
    text: "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.",
  },
  {
    num: "07",
    name: "Post-Launch Support",
    text: "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.",
  },
  {
    num: "08",
    name: "Continuous Improvement",
    text: "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.",
  },
];
export default function page() {
  return (
    <>
      <ContainerHead
        image="/process.webp"
        name="Process of Starting the Project"
        height={300}
        text="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
      />
      <SectionHead
      h2
        btnText="Here's an overview of our typical process:"
        name="At SquareUp"
        text="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
      />
      <div className="grid grid-cols-2">
        {dataProcess.map((i, index) => (
          <div key={index} className="px-10 pt-8 pb-16 h-full border-custom">
            <div className="flex items-end gap-2">
              <div className="text-[#D8FF99] text-[100px] font-semibold h-28">
                {i.num}
              </div>
              <span className="text-xl block w-full text-white border-b border-dark-c pb-4 font-semibold">
                {i.name}
              </span>
            </div>
            <p className="text-p mt-8 text-justify">{i.text}</p>
          </div>
        ))}
      </div>
      <div className=" border-custom">
        <ContainerHead
          name="Thank you for your Interest in SquareUp."
          isLogo
          isButton
          text="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        />
        <FormContact />
      </div>
    </>
  );
}
