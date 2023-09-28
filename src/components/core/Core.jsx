import "./Core.css";
import React from "react";
import { RiHome8Line } from "react-icons/ri";

import Image from "next/image";
import { coreItems } from "@/constants";

const Core = () => {
  return (
    <section className="py-10 core-section relative">
      <div className="core-section-overlay" />
      <div className="z-10 relative text-white">
        <div className="text-center w-full md:w-[40%] lg:w-[55%] mx-auto">
          <div className="flex items-center justify-center mb-4">
            <RiHome8Line size={40} />
          </div>
          <h1 className="text-2xl mb-4">The Core</h1>
          <p className="text-white">
            All packages include an intuitive, powerful and beautiful DAM
            designed to maximize productivity, eliminate content silos and boost
            asset discoverability.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 container mx-auto mt-20">
          {coreItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg flex-col flex items-baseline gap-y-4"
            >
              <Image alt="cloud icon" src={item.icon} width={40} height={40} />
              <h3 className="text-xl text-[#000e4b] font-medium">
                {item.title}{" "}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Core;
