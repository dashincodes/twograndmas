import { Star } from "@mui/icons-material";
import React from "react";

const stars = [1, 2, 3, 4, 5];

function TestimonialComponent({ review, name }) {
  return (
    <div className="flex flex-col items-center px-2	w-96 justify-center	">
      <div className="flex">
        {stars.map((star, index) => (
          <div key={star[index]}>
            <h4 className="text-3xl px-2">⭐️</h4>
          </div>
        ))}
      </div>
      <div className="py-2">
        <h3 className=" text-2xl md:text-3xl capitalize leading-10 text-center 	">
          {review}
        </h3>
      </div>
      <div className="py-2">
        <h2 className=" text-3xl font-extrabold text-center">- {name}</h2>
      </div>
    </div>
  );
}

export default TestimonialComponent;
