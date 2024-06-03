import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { Title } from '@/shared/ui/Title'
import Image from 'next/image'
import React from 'react'

export const OurAdvantage = () => {
    return (
        <Section id='advantages' className="!pb-0 relative">
            <Container>
                <Title>ПРЕМУШЕСТВА НАШИХ УСЛУГ</Title>
                <div className="grid grid-cols-1 -space-y-8 md:space-y-0 md:grid-cols-6 mt-12 md:mt-48 relative z-[99]">
                    <div className="flex flex-col justify-end first md:-translate-y-[20px] lg:translate-y-0 items-center w-fit md:w-auto mr-auto md:mr-0 group">
                        <Image width={50} height={50} src="/icons/services-icon-1.svg" alt="Service 1" className="md:mx-auto mb-4 group-hover:-translate-y-2 transition-all" />
                        <div className="text-center font-medium max-w-[150px]">УПАКОВКА<br />ГРУЗА</div>
                        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">1</div>
                    </div>
                    <div className="flex flex-col justify-end md:-translate-y-[65px] lg:-translate-y-[60px] items-center second w-fit md:w-auto ml-auto md:ml-0 group">
                        <Image width={50} height={50} src="/icons/services-icon-2.svg" alt="Service 2" className="md:mx-auto mb-4 group-hover:-translate-y-2 transition-all" />
                        <div className="text-center font-medium max-w-[150px] md:mx-auto">ПОГРУЗОЧНО - РАЗГРУЗОЧНЫЕ РАБОТЫ</div>
                        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">2</div>
                    </div>
                    <div className="flex flex-col justify-end md:-translate-y-[88px]  items-center w-fit md:w-auto mr-auto md:mr-0 group">
                        <Image width={60} height={60} src="/icons/services-icon-3.svg" alt="Service 3" className="md:mx-auto mb-4 group-hover:-translate-y-2 transition-all" />
                        <div className="text-center font-medium max-w-[150px]">ОТВЕТСТВЕННОЕ ХРАНЕНИЕ</div>
                        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">3</div>
                    </div>
                    <div className="flex flex-col justify-end md:-translate-y-[88px] items-center w-fit md:w-auto ml-auto md:ml-0 group">
                        <Image width={50} height={50} src="/icons/services-icon-4.svg" alt="Service 4" className="md:mx-auto mb-4 group-hover:-translate-y-2 transition-all" />
                        <div className="text-center font-medium max-w-[150px]">СТРАХОВАНИЕ<br />ГРУЗА</div>
                        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">4</div>
                    </div>
                    <div className="flex flex-col justify-end md:-translate-y-[65px] -lg:translate-y-[60px] items-center second w-fit md:w-auto mr-auto md:mr-0 group">
                        <Image width={50} height={50} src="/icons/services-icon-5.svg" alt="Service 5" className="md:mx-auto mb-4 group-hover:-translate-y-2 transition-all" />
                        <div className="text-center font-medium max-w-[150px]">УЧЕТ И КОНТРОЛЬ ДВИЖЕНИЯ ГРУЗА</div>
                        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">5</div>
                    </div>
                    <div className="hidden md:flex flex-col justify-end first md:-translate-y-[20px] lg:translate-y-0 items-center w-fit md:w-auto ml-auto md:ml-0 group">
                        <Image width={60} height={60} src="/icons/services-icon-6.svg" alt="Service 6" className="md:mx-auto mb-4 group-hover:-translate-y-2 transition-all" />
                        <div className="text-center font-medium max-w-[150px]">ДОСТАВКА<br />“ДО ДВЕРЕЙ”</div>
                        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">6</div>
                    </div>
                </div>

                {/* <img src='/icons/vertical-line.svg' className='absolute top-1/3 translate-y-[50px] left-1/2 -translate-x-1/2' /> */}
                <img src="/icons/curved-line.svg" className="hidden md:block -translate-y-[110px] w-[82%] mx-auto relative-[1]" />
                <Button className="block mx-auto md:-translate-y-16 mt-8 md:mt-0 hover:bg-white hover:text-primary transition-all border border-primary">ЗАКАЗАТЬ ЗВОНОК</Button>
            </Container>
        </Section>
    )
}
{/* <div className="grid grid-cols-1 -space-y-20 md:space-y-0 md:grid-cols-6 mt-48 relative z-[99]">
                    <div className="flex flex-col justify-end first -translate-y-10 md:-translate-y-[20px] lg:translate-y-0 w-fit items-center">
                        <Image width={50} height={50} src="/icons/services-icon-1.svg" alt="Service 1" className="md:mx-auto mb-4" />
                        <div className="text-center font-medium max-w-[150px]">УПАКОВКА<br />ГРУЗА</div>
                        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">1</div>
                    </div>
                    <div className="flex flex-col justify-end -translate-y-28 md:-translate-y-[65px] lg:-translate-y-[60px] w-fit items-center second ml-auto">
                        <Image width={50} height={50} src="/icons/services-icon-2.svg" alt="Service 2" className="md:mx-auto mb-4" />
                        <div className="text-center font-medium max-w-[150px] md:mx-auto">ПОГРУЗОЧНО - РАЗГРУЗОЧНЫЕ РАБОТЫ</div>
                        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">2</div>
                    </div>
                    <div className="flex flex-col justify-end md:-translate-y-[88px] w-fit items-center">
                        <Image width={60} height={60} src="/icons/services-icon-3.svg" alt="Service 3" className="md:mx-auto mb-4" />
                        <div className="text-center font-medium max-w-[150px]">ОТВЕТСТВЕННОЕ ХРАНЕНИЕ</div>
                        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">3</div>
                    </div>
                    <div className="flex flex-col justify-end translate-y-6 md:-translate-y-[88px] w-fit items-center ml-auto">
                        <Image width={50} height={50} src="/icons/services-icon-4.svg" alt="Service 4" className="md:mx-auto mb-4" />
                        <div className="text-center font-medium max-w-[150px]">СТРАХОВАНИЕ<br />ГРУЗА</div>
                        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">4</div>
                    </div>
                    <div className="flex flex-col justify-end translate-y-4 md:-translate-y-[65px] -lg:translate-y-[60px] w-fit items-center second">
                        <Image width={50} height={50} src="/icons/services-icon-5.svg" alt="Service 5" className="md:mx-auto mb-4" />
                        <div className="text-center font-medium max-w-[150px]">УЧЕТ И КОНТРОЛЬ ДВИЖЕНИЯ ГРУЗА</div>
                        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">5</div>
                    </div>
                    <div className="hidden md:flex flex-col justify-end first md:-translate-y-[20px] lg:translate-y-0 w-fit items-center ml-auto">
                        <Image width={60} height={60} src="/icons/services-icon-6.svg" alt="Service 6" className="md:mx-auto mb-4" />
                        <div className="text-center font-medium max-w-[150px]">ДОСТАВКА<br />“ДО ДВЕРЕЙ”</div>
                        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">6</div>
                    </div>
                </div> */}

{/* <div className="grid grid-cols-1 space-y-8 md:space-y-0 md:grid-cols-6 mt-12 md:mt-48 relative z-[99]">
    <div className="flex flex-col justify-end first md:-translate-y-[20px] lg:translate-y-0 items-center">
        <Image width={50} height={50} src="/icons/services-icon-1.svg" alt="Service 1" className="md:mx-auto mb-4" />
        <div className="text-center font-medium max-w-[150px]">УПАКОВКА<br />ГРУЗА</div>
        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">1</div>
    </div>
    <div className="flex flex-col justify-end md:-translate-y-[65px] lg:-translate-y-[60px] items-center second">
        <Image width={50} height={50} src="/icons/services-icon-2.svg" alt="Service 2" className="md:mx-auto mb-4" />
        <div className="text-center font-medium max-w-[150px] md:mx-auto">ПОГРУЗОЧНО - РАЗГРУЗОЧНЫЕ РАБОТЫ</div>
        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">2</div>
    </div>
    <div className="flex flex-col justify-end md:-translate-y-[88px]  items-center">
        <Image width={60} height={60} src="/icons/services-icon-3.svg" alt="Service 3" className="md:mx-auto mb-4" />
        <div className="text-center font-medium max-w-[150px]">ОТВЕТСТВЕННОЕ ХРАНЕНИЕ</div>
        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">3</div>
    </div>
    <div className="flex flex-col justify-end md:-translate-y-[88px] items-center">
        <Image width={50} height={50} src="/icons/services-icon-4.svg" alt="Service 4" className="md:mx-auto mb-4" />
        <div className="text-center font-medium max-w-[150px]">СТРАХОВАНИЕ<br />ГРУЗА</div>
        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">4</div>
    </div>
    <div className="flex flex-col justify-end md:-translate-y-[65px] -lg:translate-y-[60px] items-center second">
        <Image width={50} height={50} src="/icons/services-icon-5.svg" alt="Service 5" className="md:mx-auto mb-4" />
        <div className="text-center font-medium max-w-[150px]">УЧЕТ И КОНТРОЛЬ ДВИЖЕНИЯ ГРУЗА</div>
        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">5</div>
    </div>
    <div className="hidden md:flex flex-col justify-end first md:-translate-y-[20px] lg:translate-y-0 items-center">
        <Image width={60} height={60} src="/icons/services-icon-6.svg" alt="Service 6" className="md:mx-auto mb-4" />
        <div className="text-center font-medium max-w-[150px]">ДОСТАВКА<br />“ДО ДВЕРЕЙ”</div>
        <div className="md:mx-auto w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-4 font-semibold text-[18px]">6</div>
    </div>
</div> */}