import React from "react";
import "./Service.css";
import Image from "next/image";
import { HiOutlineBell } from "react-icons/hi";

const PricingPageService = () => {
  return (
    <section className="service-section py-40">
      <div className="container mx-auto px-10">
        <h2 className="text-center text-white text-3xl font-bold">
          Brandfolder is the No. 1 digital asset management software.
          <br /> Here are just a few more reasons why.
        </h2>
        <div className="mt-20 flex items-center justify-between text-white">
          <div className="text-center flex items-center flex-col justify-center basis-[30%]">
            <HiOutlineBell className="text-4xl mb-10" />
            <h2 className="font-bold text-4xl border-b border-b-white pb-5 mb-5 w-full">
              1.6 months
            </h2>
            <h3>Average go-live time</h3>
          </div>
          <div className="text-center flex items-center flex-col justify-center basis-[30%]">
            <HiOutlineBell className=" text-4xl mb-10" />
            <h2 className="font-bold text-4xl border-b border-b-white pb-5 mb-5 w-full">
              1.6 months
            </h2>
            <h3 className="font-bold text-xl">Average go-live time</h3>
          </div>
          <div className="text-center flex items-center flex-col justify-center basis-[30%]">
            <HiOutlineBell className=" text-4xl mb-10" />
            <h2 className="font-bold text-4xl border-b border-b-white pb-5 mb-5 w-full">
              1.6 months
            </h2>
            <h3>Average go-live time</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPageService;
