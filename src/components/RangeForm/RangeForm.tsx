"use client";
import React, { useState } from "react";
import "./style.css";

export default function RangeForm() {
  const [leftValue, setLeftValue] = useState<number>(2500);
  const [rightValue, setRightValue] = useState<number>(7500);

  const handleLeftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), rightValue - 1);
    setLeftValue(value);
  };

  const handleRightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), leftValue + 1);
    setRightValue(value);
  };

  return (
    <div className="range-container pb-6">
      <input
        type="range"
        min="0"
        max="10000"
        value={leftValue}
        onChange={handleLeftChange}
        className="custom-range"
      />
      <input
        type="range"
        min="0"
        max="10000"
        value={rightValue}
        onChange={handleRightChange}
        className="custom-range"
      />
      <div
        className="range-highlight"
        style={{
          left: `${(leftValue / 10000) * 100}%`,
          width: `${((rightValue - leftValue) / 10000) * 100}%`,
        }}
      />
      <div
        className="range-label left-label"
        style={{ left: `calc(${(leftValue / 10000) * 100}% - 10px)` }}
      >
        ${leftValue}
      </div>
      <div
        className="range-label right-label"
        style={{ left: `calc(${(rightValue / 10000) * 100}% - 25px)` }}
      >
        ${rightValue}
      </div>
    </div>
  );
}
