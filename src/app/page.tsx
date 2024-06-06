import { Header } from "@/page/main";
import { CargoTranportation } from "@/page/main/ui/CargoTranportation";
import { Clients } from "@/page/main/ui/Clients";
import { Footer } from "@/page/main/ui/Footer";
import { OurAddress } from "@/page/main/ui/OurAddress";
import { OurAdvantage } from "@/page/main/ui/OurAdvantage";
import { OurServices } from "@/page/main/ui/OurServices";
import { OurTarget } from "@/page/main/ui/OurTarget";
import { CargoTrackConfirmationModal } from "@/page/main/ui/modals/CargoTrackConfirmationModal";
import { ServiceEnabledModal } from "@/page/main/ui/modals/ServiceEnabledModal";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <CargoTranportation />
      <OurTarget />
      <OurAdvantage />
      <OurServices />
      <Clients />
      <OurAddress />
      <Footer />

      {/* MODALS */}

      <CargoTrackConfirmationModal />
      <ServiceEnabledModal />

    </div>
  );
}
