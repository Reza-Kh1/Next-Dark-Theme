import ContainerHead from "@/components/ContainerHead/ContainerHead";
import ImageCustom from "@/components/ImageCustom/ImageCustom";
import SectionHead from "@/components/SectionHead/SectionHead";
import React from "react";
const dataServices = [
  {
    name: "Design",
    desc: "At Squareup, our cign team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    btn: "Our design services include:",
    banner: [
      {
        name: "User Experience (UX) Design",
        icons: [
          {
            text: "User Research and Persona Development",
            icon: "/icon/research.png",
          },
          {
            text: "Information Architecture and Wireframing",
            icon: "/icon/information.png",
          },
          {
            text: "Interactive Prototyping and User Testing",
            icon: "/icon/testing.png",
          },
          { text: "UI Design and Visual Branding", icon: "/icon/design.png" },
        ],
      },
      {
        name: "User Interface (UI) Design",
        icons: [
          {
            text: "Intuitive and Visually Appealing Interface Design",
            icon: "/icon/interfaceDesign.png",
          },
          {
            text: "Custom Iconography and Illustration",
            icon: "/icon/sunTimer.png",
          },
          {
            text: "Typography and Color Palette Selection",
            icon: "/icon/palette.png",
          },
          {
            text: "Responsive Design for Various Devices",
            icon: "/icon/responsive.png",
          },
        ],
      },
      {
        name: "Branding and Identity",
        icons: [
          {
            text: "Logo Design and Visual Identity Development",
            icon: "/icon/visual.png",
          },
          { text: "Brand Strategy and Positioning", icon: "/icon/brand.png" },
          {
            text: "Brand Guidelines and Style Guides",
            icon: "/icon/styleGuides.png",
          },
          {
            text: "Marketing Collateral Design (Brochures, Business Cards, etc.)",
            icon: "/icon/marketing.png",
          },
        ],
      },
    ],
  },
  {
    name: "Engineering",
    desc: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    btn: "Our engineering services include:",
    banner: [
      {
        name: "Web Development",
        icons: [
          {
            text: "Front-End Development (HTML, CSS, JavaScript)",
            icon: "/icon/front.png",
          },
          {
            text: "Back-End Development (PHP, Python, Ruby)",
            icon: "/icon/back.png",
          },
          {
            text: "Content Management System (CMS) Development (WordPress, Drupal)",
            icon: "/icon/gear.png",
          },
          {
            text: "E-Commerce Platform Development (Magento, Shopify)",
            icon: "/icon/e-commers.png",
          },
        ],
      },
      {
        name: "Mobile App Development",
        icons: [
          {
            text: "Native iOS and Android App Development",
            icon: "/icon/native-ios.png",
          },
          {
            text: "Cross-Platform App Development (React Native, Flutter)",
            icon: "/icon/platform.png",
          },
          {
            text: "App Prototyping and UI/UX Design Integration",
            icon: "/icon/app-design.png",
          },
          {
            text: "App Testing, Deployment, and Maintenance",
            icon: "/icon/app-testing.png",
          },
        ],
      },
      {
        name: "Custom Software Development",
        icons: [
          {
            text: "Enterprise Software Development",
            icon: "/icon/software.png",
          },
          {
            text: "Custom Web Application Development",
            icon: "/icon/custom-web.png",
          },
          {
            text: "Integration with Third-Party APIs and Systems",
            icon: "/icon/dashboard.png",
          },
          {
            text: "Legacy System Modernization and Migration",
            icon: "/icon/legacy-system.png",
          },
        ],
      },
    ],
  },
  {
    name: "Project Management",
    desc: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    btn: "Our project management services include:",
    banner: [
      {
        name: "Project Planning and Scoping",
        icons: [
          {
            text: "Requirements Gathering and Analysis",
            icon: "/icon/download.png",
          },
          {
            text: "Project Roadmap and Timeline Development",
            icon: "/icon/chart.png",
          },
          {
            text: "Resource Allocation and Task Assignment",
            icon: "/icon/resource.png",
          },
          {
            text: "Risk Assessment and Mitigation Strategies",
            icon: "/icon/risk.png",
          },
        ],
      },
      {
        name: "Mobile App Development",
        icons: [
          {
            text: "Iterative Development and Sprints",
            icon: "/icon/driver.png",
          },
          {
            text: "Scrum or Kanban Methodology Implementation",
            icon: "/icon/database.png",
          },
          {
            text: "Regular Progress Updates and Demos",
            icon: "/icon/bag.png",
          },
          {
            text: "Continuous Improvement and Feedback Incorporation",
            icon: "/icon/magic.png",
          },
        ],
      },
      {
        name: "Custom Software Development",
        icons: [
          {
            text: "Test Planning and Execution",
            icon: "/icon/puzzle.png",
          },
          {
            text: "Functional and Usability Testing",
            icon: "/icon/shield.png",
          },
          {
            text: "Performance and Security Testing",
            icon: "/icon/chartbar.png",
          },
          {
            text: "Bug Tracking and Issue Resolution",
            icon: "/icon/track.png",
          },
        ],
      },
    ],
  },
];
export default function page() {
  return (
    <div>
      <ContainerHead
        image="/ourServices.webp"
        name="Our Services"
        height={300}
        text="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      />
      {dataServices.map((row) => (
        <div key={row.name}>
          <SectionHead h2 name={row.name} text={row.desc} btnText={row.btn}/>
          {row.banner.map((i) => (
            <div key={i.name}>
              <span className="text-p md:text-xl lg:text-2xl py-3 md:py-6 lg:py-12 border-custom pl-3 my-5 md:my-0 md:pl-6 lg:pl-12 w-full block">
                {i.name}
              </span>
              <section className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-4 ">
                {i.icons.map((item, index) => (
                  <div key={index} className="p-4 md:p-6 lg:p-9 border-custom">
                    <ImageCustom
                      icon
                      alt={"icon reasearch"}
                      src={item.icon}
                      width={50}
                      height={50}
                    />
                    <p className="text-white mt-8 md:text-sm lg:text-base">{item.text}</p>
                  </div>
                ))}
              </section>
            </div>
          ))}
        </div>
      ))}
      <ContainerHead
        isButton
        isLogo
        name="Let us Bring your Ideas to Life in the Digital World."
        text="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
      />
    </div>
  );
}
