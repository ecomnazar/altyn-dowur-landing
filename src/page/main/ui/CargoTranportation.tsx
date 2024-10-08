"use client";

import { useTranslation } from "@/app/i18n/client";
import { useStore } from "@/entities/useStore";
import { sendToEmail } from "@/shared/sendToEmail";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

interface Props {
  lng: string;
}

export const CargoTranportation: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng);

  const [isOpen, setIsOpen] = React.useState(false);
  const [enableInfo, setEnableInfo] = React.useState(false);

  const enableTrack = useStore((state) => state.trackEnabled);
  const changeEnableTrack = useStore((state) => state.changeTrackEnabled);

  const openModal = useStore((state) => state.changeTrackModal);

  const handleEnableTrack = () => {
    if (enableTrack) {
      changeEnableTrack(false);
    } else {
      openModal(true);
    }
  };

  const handleOpen = () => setIsOpen((prev) => !prev);

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [dateOfShipment, setDateOfShipment] = React.useState("");
  const [cargoWeight, setCargoWeight] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSubmit = () => {
    // const target = e.target as typeof e.target & FormProps<{ value: string }>
    // const fullname = target.fullname.value
    // const mail = target.mail.value

    let message = ``;
    message += `<b>Ugradyş stansiýasy: </b>${from}\n`;
    message += `<b>Barmaly stansiýasy: </b>${to}\n`;
    message += `<b>Ugradylmaly senesi: </b>${dateOfShipment}\n`;
    message += `<b>Ady: </b>${name}\n`;
    message += `<b>Telefon belgisi: </b>${phone}\n`;
    message += `<b>Ýüküň agramy: </b>${cargoWeight}\n`;
    message += `<b>Ýüki yzarlamak hyzmaty: </b>${
      enableTrack ? "Açyk" : "Ýapyk"
    }\n`;

    const emailDetails = {
      subject: "Mail from nazarly.digital",
      message,
      to_email: process.env.NEXT_PUBLIC_TO_EMAIL!,
    };

    // toast.promise(Promise.all([sendToTelegram(message), sendToEmail(emailDetails)]), {
    toast
      .promise(Promise.all([sendToEmail(emailDetails)]), {
        loading: "Loading",
        success: "Success",
        error: "Error",
      })
      .then(() => {
        setFrom("");
        setTo("");
        setDateOfShipment("");
        setCargoWeight("");
        setName("");
        setPhone("");
        changeEnableTrack(false);
        setIsOpen(false);
        setEnableInfo(false);
      });
  };

  return (
    <Section className="pt-[270px] md:pt-48">
      <Container>
        <div className="flex flex-col md:flex-row items-start space-y-2 mb-8 md:mb-0 md:items-center justify-between">
          <div className="flex items-center w-full">
            <Title>{t("transportation")}</Title>
            <div className="h-[2px] w-[90%] bg-gradient-to-r from-primary ml-4 via-primary/50 to-primary/0" />
          </div>

          {/* <Image src={'/icons/green-line.svg'} width={300} height={1} alt='Green line' className='hidden lg:block' /> */}
          <div className="relative w-full md:w-fit">
            <Button
              onClick={handleOpen}
              className="whitespace-nowrap border border-primary hover:bg-white hover:text-primary transition-all"
            >
              {t("calculateHost")}
            </Button>
            <form
              onSubmit={sendForm}
              className={clsx(
                "z-[99] absolute rounded-[16px] sm:w-[400px] md:w-[600px] bottom-0 left-0 md:left-auto md:right-0 p-6 safari-backdrop-blur-fallback transition-all duration-500",
                {
                  "translate-y-[110%] opacity-1": isOpen,
                  "translate-y-[105%] opacity-0": !isOpen,
                }
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-semibold text-primary">
                  {t("calculateCost")}
                </h3>
                <button onClick={() => setIsOpen(false)}>
                  <Image
                    src={"/icons/green-close.svg"}
                    width={18}
                    height={18}
                    alt="Close icon"
                  />
                </button>
              </div>
              <div className="mt-6 space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t("dispatchStation")}
                    onChange={(e) => setFrom(e.target.value)}
                    value={from}
                    className="rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]"
                  />
                  <Image
                    src={"/icons/green-point.svg"}
                    width={22}
                    height={22}
                    alt="Point icon"
                    className="absolute top-1/2 -translate-y-1/2 right-5"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t("destinationStation")}
                      onChange={(e) => setTo(e.target.value)}
                      value={to}
                      className="rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]"
                    />
                    <Image
                      src={"/icons/red-point.svg"}
                      width={22}
                      height={22}
                      alt="Point icon"
                      className="absolute top-1/2 -translate-y-1/2 right-5"
                    />
                  </div>
                  <div className="relative hidden sm:block">
                    <input
                      type="text"
                      placeholder={t("dateOfShipment")}
                      onChange={(e) => setDateOfShipment(e.target.value)}
                      value={dateOfShipment}
                      className="rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]"
                    />
                    <Image
                      src={"/icons/calendar.svg"}
                      width={22}
                      height={22}
                      alt="Point icon"
                      className="absolute top-1/2 -translate-y-1/2 right-5"
                    />
                    {/* <Image src={'/icons/date.svg'} width={22} height={22} alt='Point icon' className='absolute top-1/2 -translate-y-1/2 right-5' /> */}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:hidden gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t("dateOfShipment")}
                      onChange={(e) => setDateOfShipment(e.target.value)}
                      value={dateOfShipment}
                      className="rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]"
                    />
                    {/* <Image src={'/icons/calendar.svg'} width={22} height={22} alt='Point icon' className='absolute top-1/2 -translate-y-1/2 right-5' /> */}
                    {/* <Image src={'/icons/date.svg'} width={22} height={22} alt='Point icon' className='absolute top-1/2 -translate-y-1/2 right-5' /> */}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t("cargoWeight")}
                      onChange={(e) => setCargoWeight(e.target.value)}
                      value={cargoWeight}
                      className="rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t("yourName")}
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={t("yourMail")}
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      className="rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t("cargoWeight")}
                      onChange={(e) => setCargoWeight(e.target.value)}
                      value={cargoWeight}
                      className="hidden sm:block rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]"
                    />
                  </div>
                  <div className="">
                    <button
                      onClick={handleEnableTrack}
                      className="flex items-center justify-center gap-x-2 rounded-full h-12 w-full bg-primary text-white"
                    >
                      <div className="relative w-3.5 h-3.5 border-2 border-white flex items-center justify-center">
                        {enableTrack && (
                          <Image
                            src="/icons/white-tick.svg"
                            fill
                            alt="Tick icon"
                          />
                        )}
                      </div>
                      {t("shipmentTracking")}
                      <Image
                        src={"/icons/location.svg"}
                        width={13}
                        height={13}
                        alt="Location icon"
                      />
                    </button>
                  </div>
                </div>
                <div className="ml-4 flex items-center gap-x-2">
                  <div>
                    <button
                      onClick={() => setEnableInfo((prev) => !prev)}
                      className="relative w-[14px] h-[14px] border-2 border-[#333333] flex items-center justify-center"
                    >
                      {enableInfo && (
                        <Image
                          src="/icons/green-tick.svg"
                          fill
                          alt="Tick icon"
                        />
                      )}
                    </button>
                  </div>
                  <p
                    className="text-[15px]"
                    dangerouslySetInnerHTML={{ __html: t("iGiveConsent") }}
                  ></p>
                </div>
                <button
                  onClick={handleSubmit}
                  className="rounded-full h-12 w-full bg-primary text-white"
                >
                  {t("submit")}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mx-auto">
          <Image src={"/images/map.png"} alt="Map" width={1200} height={1200} />
        </div>
      </Container>
      <div className="flex items-center justify-end">
        <Image
          src={"/images/trains.png"}
          alt="Trains"
          width={700}
          height={600}
        />
        <Image
          src={"/images/trains.png"}
          alt="Trains"
          width={700}
          height={600}
        />
      </div>
    </Section>
  );
};
