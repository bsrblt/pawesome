import Image from "next/image";
import React from "react";
import down1 from "../../../public/down1.svg";

interface FaqItemProps {
  question: string;
  answer: string;
  key?: number;
}
const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <div className="py-5 ">
      <details className="group ">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none lg:text-xl sm:text-lg text-md ">
          <span className="sm:w-[95%] w-[90%] fontpop-3 antialiased">
            {question}
          </span>
          <span className="transition group-open:rotate-180 duration-300 sm:w-[5%] w-[10%]">
            <Image src={down1} alt="down" />
          </span>
        </summary>
        <span className="transition group-open:rotate-180 duration-300 sm:w-[5%] w-[10%]"></span>
        <p className="lg:text-lg sm:text-md text-sm mt-3 max-w-[90rem] fontpop-3 antialiased">
          {answer}
        </p>
      </details>
    </div>
  );
};

export default FaqItem;
