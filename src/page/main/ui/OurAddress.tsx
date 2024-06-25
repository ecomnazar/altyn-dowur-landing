import { useTranslation } from '@/app/i18n'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { Title } from '@/shared/ui/Title'
import dynamic from 'next/dynamic'
import React from 'react'

const Map = dynamic(() => import('@/shared/ui/Map'), { ssr: false })

interface Props {
    lng: string
}

export const OurAddress: React.FC<Props> = async ({ lng }) => {
    const { t } = await useTranslation(lng)

    return (
        <Section className="!py-0">
            <Container>
                <Title className="text-center mt-4">{t('ourAddress')}</Title>
                <p className="text-[#333333] max-w-[500px] text-center mx-auto mt-8">{t('adress')}</p>
            </Container>
            <div className="h-[300px] md:h-[500px] mt-16">
                <Map />
            </div>
        </Section>
    )
}
