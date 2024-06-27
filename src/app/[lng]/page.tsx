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
import { useTranslation } from "../i18n";

export default async function Home({ params: { lng } }: { params: { lng: string } }) {

  return (
    <div className="overflow-x-hidden">
      <Header lng={lng} />
      <CargoTranportation lng={lng} />
      <OurTarget lng={lng} />
      <OurAdvantage lng={lng} />
      <OurServices lng={lng} />
      <Clients lng={lng} />
      <OurAddress lng={lng} />
      <Footer lng={lng} />

      {/* MODALS */}

      <CargoTrackConfirmationModal lng={lng} />
      <ServiceEnabledModal lng={lng} />

    </div>
  );
}
