import React from 'react'
import { variables } from '../../../../assets/img/icons/global/GlobalSVGSelector';
import { Card } from './Card/Card';
import s from "./Days.module.scss"
import { Tabs } from './Tabs/Tabs';


export const Days = () => {
    const days = [
        {
            day: 'Сегодня',
            dayInfo: '28 авг',
            iconId: variables.weather_logo.sun,
            tempDay: '+18',
            tempNight: '+15',
            info: 'Облачно',
        },
        {
            day: 'Завтра',
            dayInfo: '29 авг',
            iconId: variables.weather_logo.small_rain_sun,
            tempDay: '+18',
            tempNight: '+15',
            info: 'небольшой дождь и солнце',
        },
        {
            day: 'Ср',
            dayInfo: '30 авг',
            iconId: variables.weather_logo.small_rain,
            tempDay: '+18',
            tempNight: '+15',
            info: 'небольшой дождь',
        },
        {
            day: 'Чт',
            dayInfo: '28 авг',
            iconId: variables.weather_logo.cloudy,
            tempDay: '+18',
            tempNight: '+15',
            info: 'Облачно',
        },
        {
            day: 'Пт',
            dayInfo: '28 авг',
            iconId: variables.weather_logo.rain,
            tempDay: '+18',
            tempNight: '+15',
            info: 'Облачно',
        },
        {
            day: 'Сб',
            dayInfo: '28 авг',
            iconId: variables.weather_logo.sun,
            tempDay: '+18',
            tempNight: '+15',
            info: 'Облачно',
        },
        {
            day: 'Вс',
            dayInfo: '28 авг',
            iconId: variables.weather_logo.sun,
            tempDay: '+18',
            tempNight: '+15',
            info: 'Облачно',
        },
    ];
    return (
        <>
            <Tabs/>
            <div className={s.days}>
                {days.map((day) => {
                    return <Card key={day.day} day={day}/>
                })}
            </div>
        </>
    )
}
