import React from 'react'
import s from "./ThisDayInfo.module.scss"
import cloud from "../../../../assets/img/cloud.png"
import { ThisDayItem } from './Item/ThisDayItem';
import { variables } from '../../../../assets/img/icons/indicators/IndicatorSVGSelector';

export const ThisDayInfo = (props) => {
    const {weather} = props

    function valueTemp(){
        let currentTemp = Math.floor(weather.main.temp)
        let feels_like = Math.floor(weather.main.feels_like)
        if(currentTemp === feels_like){
            return `${currentTemp}°`
        } else {
            return `${currentTemp}° - ощущается как ${feels_like}°`
        }
    }

    function pressure(){
        return (Math.floor(weather.main.pressure * 0.750062))
    }

    const items = [
        {
            icon_id: variables.temp,
            name: 'Температура',
            value: valueTemp(),
        },
        {
            icon_id: variables.pressure,
            name: 'Влажность',
            value: `${weather.main.humidity}%`,
        },
        {
            icon_id: variables.precipitation,
            name: 'Давление',
            value: `${pressure()} мм ртутного столба`,/* 0,750062 */
        },
        {
            icon_id: variables.wind,
            name: 'Ветер',
            value: `${weather.wind.speed} м/c`/* '3 м/с юго-запад - легкий ветер' */,
        },
    ];

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
