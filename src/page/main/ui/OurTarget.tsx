import { useTranslation } from '@/app/i18n'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { Title } from '@/shared/ui/Title'
import Image from 'next/image'
import React from 'react'

interface Props {
    lng: string
}

export const OurTarget: React.FC<Props> = async ({ lng }) => {

    const { t } = await useTranslation(lng)


    return (
        <Section id='target' className="bg-[#95B295]/50">
            <Container>
                <div className='flex flex-col'>
                    {/* <Title>НАША ЦЕЛЬ-СТРЕМЛЕНИЕ К <span className='hidden lg:inline-block'>ЛУЧШИМ</span></Title> */}
                    <Title>НАША ЦЕЛЬ-СТРЕМЛЕНИЕ К <span className='hidden lg:inline-block'>ЛУЧШИМ</span></Title>
                    <div className='w-full'>
                        <div className='inline-flex w-full items-center  gap-x-4'>
                            <Title className='text-primary whitespace-nowrap'><span className='lg:hidden'>ЛУЧШИМ</span> РЕЗУЛЬТАТАМ</Title>
                            <div className='h-[2px] w-[90%] bg-gradient-to-r from-primary via-primary/50 to-primary/0' />
                        </div>
                    </div>
                </div>
                <div className="items-center grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-8">
                    <div className='h-[300px] sm:h-[400px] md:h-[500px] w-full relative '>
                        <Image src={'/images/image-1.png'} objectFit='fill' objectPosition='bottom' alt="Image 1" fill />
                    </div>
                    <div>
                        <h4 className="text-[14px] md:text-[18px] mt-4 md:mt-0 font-normal">
                            {t('ourGoal1')}
                            <br />
                            <br />
                            {t('ourGoal2')}
                            <br />
                            <br />
                            {t('ourGoal3')}
                            <br />
                            <br />
                            {t('ourGoal4')}
                        </h4>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
