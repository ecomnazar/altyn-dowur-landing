import { Header } from "@/page/main";
import { CargoTranportation } from "@/page/main/ui/CargoTranportation";
import { Footer } from "@/page/main/ui/Footer";
import { OurAddress } from "@/page/main/ui/OurAddress";
import { OurAdvantage } from "@/page/main/ui/OurAdvantage";
import { OurServices } from "@/page/main/ui/OurServices";
import { OurTarget } from "@/page/main/ui/OurTarget";

export default function Home() {
  return (
    <>
      <Header />
      <CargoTranportation />
      <OurTarget />
      <OurAdvantage />
      <OurServices />
      {/* <OurAddress /> */}
      <Footer />
    </>
  );
}
