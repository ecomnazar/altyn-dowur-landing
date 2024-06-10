import { Accordion } from '@/shared/ui/Accordion'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { Title } from '@/shared/ui/Title'
import Image from 'next/image'
import React from 'react'

export const OurServices = () => {
    return (
        <Section id='services' className="!py-0">
            <Container>
                <div className='flex items-center justify-between mt-16 gap-x-4'>
                    <div className=''>
                        <Title className="whitespace-nowrap">НАШИ УСЛУГИ</Title>
                    </div>
                    <div className='h-[2px] w-full bg-gradient-to-r from-primary via-primary/50 to-primary/0' />
                    {/* <div className='h-[2px] basis-[48%] lg:basis-[58%] bg-primary' /> */}
                    {/* <Image src={'/icons/green-line.svg'} width={700} height={1} alt='Green line' className='hidden lg:block' /> */}
                </div>
                <div className="space-y-4 mt-8">
                    <Accordion
                        title="Перевозка грузов на дальние расстояния."
                        description="Это основная услуга, оказываемая грузовыми поездами. Грузы могут быть различных типов, в том числе контейнеры, сыпучие грузы, жидкости, тяжелые и негабаритных грузов и т. д."
                    />
                    <Accordion
                        title="Перевозка грузов на дальние расстояния."
                        description="Это основная услуга, оказываемая грузовыми поездами. Грузы могут быть различных типов, в том числе контейнеры, сыпучие грузы, жидкости, тяжелые и негабаритных грузов и т. д."
                    />
                </div>
            </Container>
        </Section>
    )
}
