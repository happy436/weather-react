import React from 'react'
import s from "./ThisDayInfo.module.scss"
import cloud from "../../../../assets/img/cloud.png"
import { ThisDayItem } from './Item/ThisDayItem';
import { variables } from '../../../../assets/img/icons/indicators/IndicatorSVGSelector';

export const items = [
    {
        icon_id: variables.temp,
        name: 'Температура',
        value: '20° - ощущается как 17°',
    },
    {
        icon_id: variables.pressure,
        name: 'Давление',
        value: '765 мм ртутного столба - нормальное',
    },
    {
        icon_id: variables.precipitation,
        name: 'Осадки',
        value: 'Без осадков',
    },
    {
        icon_id: variables.wind,
        name: 'Ветер',
        value: '3 м/с юго-запад - легкий ветер',
    },
];

export const ThisDayInfo = () => {

    return (
        <div className={s.container}>
            <div className={s.items}>
                {items.map((item) => {
                    return <ThisDayItem key={item.icon_id} item={item}/>
                })}
            </div>
            <img className={s.cloudImg} src={cloud} alt="img weather" />
        </div>
    )
}
