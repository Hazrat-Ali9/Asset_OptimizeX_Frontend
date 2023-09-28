import Image from "next/image";
import React from "react";
import PricingPageBannerImage from "@/assets/images/hero-with-four-stacked-balls.webp";
import "./PricingPageBanner.css";

const PricingPageBanner = () => {
  return (
    <section className="relative">
      <Image
        src={PricingPageBannerImage}
        alt="pricing-banner"
        width={1000}
        height={1000}
        layout="responsive"
      />
      <div className="container mx-auto">
        <div className="absolute inset-y-20 flex items-baseline flex-col gap-y-6 w-[50%] pricing-head">
          <h1 className="font-bold text-xl md:text-3xl lg:text-6xl lg:leading-tight">
            A platform that{" "}
            <span className="pricing-banner-heading">scales with you</span>
          </h1>
          <p className="text-black">
            Companies of all sizes are able to unlock more value from their
            assets with Brandfolder. Get the right plan and pricing for your
            business. We would love to partner with you to build the digital
            asset management solution best suited to your needs.
          </p>
          <button className="btn btn-primary" type="button">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPageBanner;
