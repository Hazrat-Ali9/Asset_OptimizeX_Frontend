import Award from "@/components/award/Award";
import PricingPageBanner from "@/components/banner/PricingPageBanner";
import Core from "@/components/core/Core";
import PricingPageCTA from "@/components/cta/PricingPageCTA";
import Enhance from "@/components/enhance/Enhance";
import PricingPageService from "@/components/service/Service";

export default function Home() {
  return (
    <>
      <PricingPageBanner />
      <Core />
      <Enhance />
      <Award />
      <PricingPageCTA />
      <PricingPageService />
    </>
  );
}
