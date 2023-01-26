import React from "react";

function CardInfo({ number, icon, text_upper, text_lower, className }) {
  return (
    <div
      className={`${className} bg-white inline-flex justify-evenly items-center space-x-2 py-2 px-4 border-black border-[1.5px] rounded-full`}
    >
      <h2 className="text-lg font-bold">{number}</h2>
      {icon.length !== 0 && (
        <span className="text-xl font-bold text-[#29a587] -translate-y-0.5">
          {icon}
        </span>
      )}
      <div className="flex flex-col">
        <span className="text-[10px] font-semibold">{text_upper}</span>
        <span className="text-[10px] font-semibold text-[#29a587]">
          {text_lower}
        </span>
      </div>
    </div>
  );
}

export default CardInfo;
