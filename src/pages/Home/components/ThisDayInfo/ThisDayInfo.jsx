import React from 'react'
import s from "./ThisDayInfo.module.scss"
import cloud from "../../../../assets/img/cloud.png"
import { ThisDayItem } from './Item/ThisDayItem';
import { variables } from '../../../../assets/img/icons/indicators/IndicatorSVGSelector';

export const ThisDayInfo = (props) => {
    const weather = props.state

    function valueTemp(){
        let currentTemp = Math.round(weather.current.temp_c)
        let feels_like = Math.round(weather.current.feelslike_c)
        if(currentTemp === feels_like){
            return `${currentTemp}°`
        } else {
            return `${currentTemp}° - ощущается как ${feels_like}°`
        }
    }

    function pressure(){
        return (Math.floor(weather.current.pressure_mb * 0.750062))
    }

    function weatherDirection(){
        let weatherDirection = weather.current.wind_dir
        if(weatherDirection === "N" || weatherDirection === "NNW" || weatherDirection === "NNE"){
            return "северный"
        } else if(weatherDirection === "NE"){
            return "северо-восточный"
        } else if(weatherDirection === "E" || weatherDirection === "ENE" || weatherDirection === "ESE"){
            return "восточный"
        } else if(weatherDirection === "SE"){
            return "юго-восточный"
        } else if(weatherDirection === "S" || weatherDirection === "SSW" || weatherDirection === "SSE"){
            return "южный"
        } else if(weatherDirection === "SW"){
            return "юго-западный"
        } else if(weatherDirection === "W" || weatherDirection === "WSW" || weatherDirection === "WNW"){
            return "западный"
        } else if(weatherDirection === "NW"){
            return "северо-западный"
        } else {
            return "Ошибка"
        }
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
            value: `${weather.current.humidity}%`,
        },
        {
            icon_id: variables.precipitation,
            name: 'Давление',
            value: `${pressure()} мм ртутного столба`,/* 0,750062 */
        },
        {
            icon_id: variables.wind,
            name: 'Ветер',
            value: `${Number(weather.current.wind_mph * 0.3).toFixed(2)} м/с ${weatherDirection()}`/* '3 м/с юго-запад - легкий ветер' */,
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
