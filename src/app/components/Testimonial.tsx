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
}) => (
  <div className="bg-white p-10 rounded-3xl xs:w-[320px] w-full items-center">
    <p className="text-black font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-black tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-black font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
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
const Feedbacks = () => {
  return (
    <div
      className={`mt-12 bg-[#363538] rounded-[20px] items-center lg:m-20 sm:m-2 sx:m-1`}
    >
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex flex-col items-center`}
      >
        <div className="text-center">
          <p className={`${styles.sectionSubText} text-center`}>
            some Colleague{" "}
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Endorsements...
          </h2>
        </div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-start`}
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
  );
};

export default Feedbacks;
