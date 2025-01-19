import React from "react";
type SectionHeadType = {
  name: string;
  text: string;
  btnText?: string;
  h2:boolean
};
export default function SectionHead({
  h2,
  name,
  text,
  btnText,
}: SectionHeadType) {
  return (
    <section className="p-6 lg:p-8 pt-14 lg:pt-20 border-custom">
      {h2 ? (
        <h2 className="text-white text-2xl lg:text-4xl font-semibold">{name}</h2>
      ) : (
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">{name}</h1>
      )}
      <p className="text-sm text-p mt-6">{text}</p>
      {btnText && (
        <span className="bg-dark-c text-sm lg:text-base text-white rounded-md p-3 inline-block mt-8 lg:mt-12">
          {btnText}
        </span>
      )}
    </section>
  );
}
