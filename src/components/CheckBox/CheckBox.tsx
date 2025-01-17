"use client";
import Image from "next/image";
import React, { useState } from "react";
export default function CheckBox() {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <button type="button" onClick={() => setCheck((prev) => !prev)}>
      <Image
        alt="check"
        className="w-6"
        src={check ? "/CheckBox.png" : "/CheckBoxEmpty.png"}
        width={20}
        height={20}
      />
    </button>
  );
}
