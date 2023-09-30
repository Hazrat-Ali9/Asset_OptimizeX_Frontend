import { enhanceItems } from "@/constants";
import Image from "next/image";
import "./Enhance.css";

const Enhance = () => {
  return (
    <section className="py-16 relative enhance-section">
      <div className="z-10 relative">
        <h1 className="text-3xl mb-4 text-center font-semibold text-white">
          Further enhance your Brandfolder with:
        </h1>
        <div className="grid grid-cols-3 gap-10 container mx-auto mt-20">
          {enhanceItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg flex-col flex items-baseline gap-y-4 shadow-2xl"
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

export default Enhance;
