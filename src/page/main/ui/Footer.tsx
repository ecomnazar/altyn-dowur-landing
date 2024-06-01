import { Container } from '@/shared/ui/Container'
import { MiniButton } from '@/shared/ui/MiniButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-[#CAD9CA] py-12 md:py-24">
            <Container>
                <div className="flex items-start justify-between flex-wrap">
                    <div className="basis-[100%] flex flex-col items-center md:items-start text-center mb-8 md:mb-0 md:text-left md:basis-[25%]">
                        <Image src={'/images/logo.png'} width={130} height={130} alt="Altyn Döwür HJ Logo" />
                        <p className="text-[#333333] mt-4 max-w-[250px] md:max-w-none">744007, Туркменистан, Ашхабад, Проспект Великого Сапармырат Туркменбаши, 7</p>
                    </div>
                    <div className="basis-[100%] text-center md:text-left md:basis-[25%]">
                        <h4 className="text-primary font-bold text-[24px] uppercase mb-4">О нас</h4>
                        <ul className="space-y-3">
                            <li><Link className="text-[#333333]" href={''}>О компании</Link></li>
                            <li><Link className="text-[#333333]" href={''}>Преимущества</Link></li>
                            <li><Link className="text-[#333333]" href={''}>Наши услуги</Link></li>
                            <li><Link className="text-[#333333]" href={''}>Отзывы</Link></li>
                        </ul>
                    </div>
                    <div className="basis-[100%] flex flex-col items-center md:items-start md:basis-[45%]">
                        <h4 className="text-primary font-bold text-[24px] uppercase mb-4 mt-4 md:mt-0">Контакты</h4>
                        <div className="flex flex-col lg:flex-row items-start gap-x-2">
                            <div className="space-y-2 mx-auto md:ml-0 text-center flex flex-col items-center md:items-start">
                                <MiniButton
                                    title="+993 63 87-78-77"
                                    icon={<Image src={'/icons/call-icon.svg'} width={22} height={22} alt="Call icon" />}
                                />
                                <MiniButton
                                    title="941122 #113"
                                    icon={<Image src={'/icons/fax-phone-icon.svg'} width={22} height={22} alt="Fax phone icon" />}
                                />
                            </div>
                            <div className="space-y-2 mt-2 lg:mt-0">
                                <MiniButton
                                    title="altyndowur@gmail.com"
                                    icon={<Image src={'/icons/mail-icon.svg'} width={21} height={21} alt="Mail icon" />}
                                />
                                <div className="flex items-center justify-center md:justify-start gap-x-2">
                                    <MiniButton
                                        title=""
                                        icon={<Image src={'/icons/instagram.svg'} width={21} height={21} alt="Instagram" />}
                                    />
                                    <MiniButton
                                        title=""
                                        icon={<Image src={'/icons/whatsapp.svg'} width={21} height={21} alt="Whatsapp" />}
                                    />
                                    <MiniButton
                                        title=""
                                        icon={<Image src={'/icons/telegram.svg'} width={21} height={21} alt="Telegram" />}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </footer>
    )
}
