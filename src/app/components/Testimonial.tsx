import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { testimonials } from "../constants";
import { styles } from "../style";

interface TestimonialCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <div className="bg-white p-10 rounded-lg xs:w-[320px] w-full items-center mb-8 card-hover">
      <p className="text-black font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-black tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-black font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-black text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Testimonial: React.FC = () => {
  return (
    <div
      className={`lg:m-[10rem] sm:m-12 bg-black-100 rounded-[20px] items-center flex`}
    >
      <div
        className={`bg-[#031c64] bg-swift-img rounded-2xl ${styles.padding} min-h-[300px] flex flex-col items-center`}
      >
        <div className="text-center">
          <p className={`${styles.sectionSubText} text-center`}>
            some Colleague{" "}
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Endorsements...
          </h2>
        </div>
        <div
          className={`mt-20 pb-14 ${styles.paddingX} flex gap-7 lg:flex-row md:flex-col sm:flex-col w-full`}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
