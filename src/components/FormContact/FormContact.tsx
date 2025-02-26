"use client";
import React, { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import RangeForm from "../RangeForm/RangeForm";
import { Button } from "@nextui-org/react";
const dataCheckBox = [
  "Web Design",
  "Collaboration",
  "Mobile App Design",
  "Others",
];
export default function FormContact() {
  const [leftValue, setLeftValue] = useState<number>(2500);
  const [rightValue, setRightValue] = useState<number>(7500);
  
  const submitHandler = (form: FormData) => {};
  return (
    <form
      action={submitHandler}
      className="border-custom w-full md:w-3/4 mx-auto flex flex-col gap-8 p-4 md:p-12"
    >
      <div className="flex md:flex-row flex-col gap-8">
        <div className="p-4 md:p-8 w-full md:w-1/2 border-custom bg-[#24242480] rounded-md">
          <span className="block text-white font-semibold mb-5">Full Name</span>
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="border-b text-white focus-visible:outline-none  w-full bg-transparent border-gray-600/80 pb-1"
          />
        </div>
        <div className="p-4 md:p-8 w-full md:w-1/2 border-custom bg-[#24242480] rounded-md">
          <span className="block text-white font-semibold mb-5">Email</span>
          <input
            name="email"
            type="text"
            placeholder="Type here"
            className="border-b text-white focus-visible:outline-none w-full bg-transparent border-gray-600/80 pb-1"
          />
        </div>
      </div>
      <div className="p-4 md:p-8 border-custom bg-[#24242480] rounded-md">
        <span className="block text-white font-semibold mb-8">
          Why are you contacting us?
        </span>
        <section className="grid grid-cols-2 gap-5">
          {dataCheckBox.map((i, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckBox />
              <span className="text-gray-400 text-sm">{i}</span>
            </div>
          ))}
        </section>
      </div>
      <div className="p-4 md:p-8 border-custom bg-[#24242480] rounded-md">
        <span className="block text-white font-semibold mb-5">Your Budget</span>
        <p className=" text-sm text-white mb-8">
          Slide to indicate your budget range
        </p>
        <RangeForm leftValue={leftValue} rightValue={rightValue} setLeftValue={setLeftValue} setRightValue={setRightValue} />
      </div>
      <div className="p-4 md:p-8 border-custom bg-[#24242480] rounded-md">
        <span className="block text-white font-semibold mb-5">
          Your Message
        </span>
        <input
          name="message"
          type="text"
          placeholder="Type here"
          className="border-b text-white focus-visible:outline-none w-full bg-transparent border-gray-600/80 pb-1"
        />
      </div>
      <div className="text-center">
        <Button className="p-4 md:p-8 px-7 rounded-md bg-green-50">Submit</Button>
      </div>
    </form>
  );
}
