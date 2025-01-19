import ContainerFooter from "@/components/ContainerFooter/ContainerFooter";
import ContainerHead from "@/components/ContainerHead/ContainerHead";
import ImageCustom from "@/components/ImageCustom/ImageCustom";
import SectionHead from "@/components/SectionHead/SectionHead";
import { Button } from "@nextui-org/react";
import { div } from "framer-motion/client";
import React from "react";
const dataBox = [
  {
    title: "Innovative and Impactful Projects",
    text: "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
  },
  {
    title: "Supportive Environment",
    text: "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
  },
  {
    title: "Continuous Learning and Growth",
    text: "We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies.",
  },
  {
    title: "Challenging and Rewarding Work",
    text: "Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life.",
  },
];
const dataCards = [
  {
    name: "Design Job Openings",
    cards: [
      {
        icon: "/icon/interfaceDesign.png",
        title: "UI Designer",
        text: "Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.",
      },
      {
        icon: "/icon/information.png",
        title: "UX Designer",
        text: "Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.",
      },
      {
        icon: "/icon/paint.png",
        title: "Design Head",
        text: "Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.",
      },
    ],
  },
  {
    name: "Development Job Openings",
    cards: [
      {
        icon: "/icon/front.png",
        title: "Front - End Developer",
        text: "Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.",
      },
      {
        icon: "/icon/back.png",
        title: "Back - End  Developer",
        text: "Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.",
      },
      {
        icon: "/icon/gear.png",
        title: "Full Stack Developer",
        text: "Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions.",
      },
    ],
  },
  {
    name: "Management Job Openings",
    cards: [
      {
        icon: "/icon/bag.png",
        title: "BA Manager",
        text: "Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.",
      },
      {
        icon: "/icon/database.png",
        title: "Project Manager",
        text: "Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.",
      },
      {
        icon: "/icon/users.png",
        title: "HR Manager",
        text: "Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.",
      },
    ],
  },
  {
    name: "QA Job Openings",
    cards: [
      {
        icon: "/icon/track.png",
        title: "QA Tester",
        text: "Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.",
      },
      {
        icon: "/icon/chartbar.png",
        title: "SQL Tester",
        text: "Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.",
      },
      {
        icon: "/icon/shield.png",
        title: "Manual Tester",
        text: "Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance.",
      },
    ],
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
      <SectionHead
        btnText="Why Work at SquareUp?"
        name="Welcome to SquareUp, where talent meets opportunity!"
        text="At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us."
      />
      <div className="grid grid-cols-2">
        {dataBox.map((i, index) => (
          <section key={index} className="border-custom px-12 py-16">
            <span className="text-[#D8FF99] text-2xl font-semibold">
              {i.title}
            </span>
            <span className="my-10 h-[1px] bg-dark-c w-full block"></span>
            <p className="text-p text-sm text-justify">{i.text}</p>
          </section>
        ))}
      </div>
      <SectionHead
        name="Current Openings"
        text="We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions."
      />
      {dataCards.map((row) => (
        <div key={row.name}>
          <span className="text-p text-2xl py-12 border-custom pl-12  w-full block">
            {row.name}
          </span>
          <div className="grid grid-cols-3">
            {row.cards.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 p-8 border-custom h-full justify-between"
              >
                <ImageCustom
                  icon
                  alt={item.text}
                  src={item.icon}
                  width={50}
                  height={50}
                />
                <span className="text-white font-semibold text-xl">
                  {item.title}
                </span>
                <p className="text-p text-justify">{item.text}</p>
                <Button className="bg-dark-c text-white w-full rounded-md p-3 inline-block mt-8">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <ContainerFooter />
    </div>
  );
}
