"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

interface AccordionItemState {
  [key: number]: boolean;
}
const dataAccordion = [
  {
    num: 1,
    name: "What services does SquareUp provide?",
    text: "SquareUp offers a range of services including design, engineering,and project management. We specialize in user experience design,web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    num: 2,
    name: "How can SquareUp help my business?",
    text: "SquareUp offers a range of services including design, engineering,and project management. We specialize in user",
  },
  {
    num: 3,
    name: "What industries does SquareUp work with?",
    text: " ex? Suscipit culpa repellat totam doloribus est natus possimus reiciendis temporibus ipsum ratione.",
  },
  {
    num: 4,
    name: "How long does it take to complete a project with SquareUp?",
    text: " ex? Suscipit culpa repellat totam doloribus est natus possimus reiciendis temporibus ipsum ratione.",
  },
];
const data2 = [
  {
    num: 5,
    name: "Do you offer ongoing support and completed?",
    text: "r adipisicing elit. Debitis ad dolor aut, cumque cum quaerat enim! Perferendis, ex? ",
  },
  {
    num: 6,
    name: "Can you work with existing design or development frameworks?",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad dolor aut, cumque cum quaerat enim!",
  },
  {
    num: 7,
    name: "How involved will I be in the project development process?",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad dolor aut, cumque cum quaerat enim! Perferendis, ex? Suscipit culpa repellat totam doloribus est natus possimus",
  },
  {
    num: 8,
    name: "Can you help with website or app maintenance and updates?",
    text: " adipisicing elit. Debitis ad dolor aut, cumque cum quaerat enim! Perferendis, ex? Suscipit culpa repellat totam doloribus",
  },
];
const AccordionBox: React.FC = () => {
  const [openItems, setOpenItems] = useState<AccordionItemState>({});

  const handleToggle = (key: number) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [key]: !prevOpenItems[key],
    }));
  };

  const getContentStyle = (key: number) =>
    openItems[key] ? "text-green-50" : "text-white";

  return (
    <div className="flex items-start">
      <Accordion className="flex flex-wrap p-0">
        {data2.map((item, index) => {
          const key = index + 1;
          return (
            <AccordionItem
              className="p-6 border-custom w-full"
              key={item.num}
              aria-label={item.name}
              textValue={item.name}
              startContent={
                <>
                  <span
                    className={`p-3 text-xl  rounded-md mr-2 bg-icon ${getContentStyle(
                      item.num
                    )}`}
                  >
                    {item.num}
                  </span>
                  <span className={getContentStyle(item.num)}>{item.name}</span>
                </>
              }
              indicator={() =>
                openItems[item.num] ? (
                  <MdClose color="#C5FF66" size={25} />
                ) : (
                  <FaPlus className="text-white" size={25} />
                )
              }
              onClick={() => handleToggle(item.num)}
            >
              <p className="text-gray-400">{item.text}</p>
            </AccordionItem>
          );
        })}
      </Accordion>
      <Accordion className="flex flex-wrap p-0">
        {dataAccordion.map((item, index) => {
          const key = index + 1;
          return (
            <AccordionItem
              className="p-6 border-custom w-full"
              key={item.num}
              aria-label={item.name}
              textValue={item.name}
              startContent={
                <>
                  <span
                    className={`p-3 text-xl  rounded-md mr-2 bg-icon ${getContentStyle(
                      item.num
                    )}`}
                  >
                    0{item.num}
                  </span>
                  <span className={getContentStyle(item.num)}>{item.name}</span>
                </>
              }
              indicator={() =>
                openItems[item.num] ? (
                  <MdClose color="#C5FF66" size={25} />
                ) : (
                  <FaPlus className="text-white" size={25} />
                )
              }
              onClick={() => handleToggle(item.num)}
            >
              <p className="text-gray-400">{item.text}</p>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionBox;
