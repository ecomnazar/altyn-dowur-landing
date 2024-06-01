import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { Title } from '@/shared/ui/Title'
import dynamic from 'next/dynamic'
import React from 'react'

const Map = dynamic(() => import('@/shared/ui/Map'), { ssr: false })

export const OurAddress = () => {
    return (
        <Section className="!py-0">
            <Container>
                <Title className="text-center mt-4">Наш адрес</Title>
                <p className="text-[#333333] max-w-[500px] text-center mx-auto mt-8">744007, Туркменистан, Ашхабад, Проспект Великого Сапармырат Туркменбаши, 7</p>
            </Container>
            <div className="h-[300px] md:h-[500px] mt-16">
                <Map />
            </div>
        </Section>
    )
}
