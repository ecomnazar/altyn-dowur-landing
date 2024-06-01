import { Accordion } from '@/shared/ui/Accordion'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { Title } from '@/shared/ui/Title'
import React from 'react'

export const OurServices = () => {
    return (
        <Section className="!py-0">
            <Container>
                <Title className="mt-16">НАШИ УСЛУГИ</Title>
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
