import React from "react";

function TestimonialCard({ item }) {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md p-10">
        <img
          src={item.testimonialImage}
          className="rounded-t-lg h-40 w-full object-cover"
          alt="testimonialImage"
        />
        <div className="mt-10 mb-12">{item.description}</div>

        <h1 className="text-2xl font-bold mb-1">{item.name}</h1>
        <h1 className="">{item.position}</h1>
      </div>
    </div>
  );
}

export default TestimonialCard;
