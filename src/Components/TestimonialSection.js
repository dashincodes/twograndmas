import { Star } from "@mui/icons-material";
import { dividerClasses } from "@mui/material";
import React from "react";
import TestimonialComponent from "./TestimonialComponent";

const testimonials = [
  {
    id: 1,
    review:
      "The baked chicken was phenomenal and he Mac and Cheese was to die for. If I could give 10 ⭐️ I would",
    name: "Virginia",
  },
  {
    id: 1,
    review:
      "The fried chicken was easily the best I've had in recent memory!!! The greens were AMAZING!",
    name: "Jason",
  },
  {
    id: 1,
    review:
      "Flavorful delicious, traditional soul food is hard to find. This was superb. I will definitely be a returning customer!!!",
    name: "Miranda",
  },
];

function TestimonialSection() {
  return (
    <div className="py-32 w-full">
      <div className="py-8 text-6xl uppercase font-extrabold">
        <h1 className="text-center">
          Our Customer <br />
          Love Our Food!
        </h1>
      </div>
      <div className="flex flex-wrap justify-center ">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex  justify-center py-6 ">
            <TestimonialComponent
              review={testimonial.review}
              name={testimonial.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;
