'use client'
import { Button } from '@/shared/ui/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const AdvantagesCallButton = () => {
    const { t } = useTranslation()

    const onClickButton = () => {
        if (window.innerWidth < 768) {
            window.location.href = 'tel:+99365808777'
        } else {
            window.location.href = 'https://t.me/Altyn_Dowur'
        }
    }

    return <Button onClick={onClickButton} className="block mx-auto md:-translate-y-16 mt-8 md:mt-0 hover:bg-white hover:text-primary transition-all border border-primary absolute sm:relative bottom-[-20px] right-10 sm:right-auto">{t('bookCall')}</Button>
}
