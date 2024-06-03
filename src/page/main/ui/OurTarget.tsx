import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { Title } from '@/shared/ui/Title'
import Image from 'next/image'
import React from 'react'

export const OurTarget = () => {
    return (
        <Section id='target' className="bg-[#95B295]/50">
            <Container>
                <Title>НАША ЦЕЛЬ-СТРЕМЛЕНИЕ К ЛУЧШИМ РЕЗУЛЬТАТАМ</Title>
                <div className="items-center grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-8">
                    <div className='h-[300px] sm:h-[400px] md:h-[500px] w-full relative '>
                        <Image src={'/images/image-1.png'} objectFit='fill' objectPosition='bottom' alt="Image 1" fill />
                    </div>
                    <div>
                        <h4 className="text-[14px] md:text-[18px] mt-4 md:mt-0 font-normal">
                            Транспортно-логистическая компания
                            «Алтын Довур» осуществляет свою
                            деятельность на рынке с июня 2020 года.
                            <br />
                            <br />
                            За годы работы компания успела нарастить
                            существенный опыт в сфере
                            железнодорожных грузоперевозок как
                            внутри страны, так и за её пределами.
                            <br />
                            <br />
                            Мы осуществляем железнодорожные
                            грузоперевозки по странам СНГ и третьим
                            странам (транзит, экспорт, импорт) и
                            экспедирование грузов.
                            <br />
                            <br />
                            На сегодняшний день наша компания
                            располагает порядка 220 крытых,
                            290 полувагонов, 10 фитингов, 200 цистерн
                            под сжиженный газ, 110 цистерн для
                            перевозки светлых нефтепродуктов.
                        </h4>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
