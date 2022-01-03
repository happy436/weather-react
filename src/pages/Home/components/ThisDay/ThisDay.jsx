import React from 'react'
import { GlobalSVGSelector, variables } from '../../../../assets/img/icons/global/GlobalSVGSelector'
import s from "./ThisDay.module.scss"

export const ThisDay = (props) => {
    const {weather} = props

    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    return (
        <div className={s.conteiner}>
            <div className={s.top}>
                <div className={s.topWrapper}>
                    <div className={s.thisTemp}>{Math.floor(weather.main.temp)}°</div>
                    <div className={s.thisDay}>Сегодня</div>
                </div>
                <GlobalSVGSelector id={variables.weather_logo.sun}/>
            </div>
            <div className={s.bottom}>
                <div className={s.thisTime}>
                    Время: <span>{`${hours}:${minutes}`}</span>
                </div>
                <div className={s.thisCity}>
                    Город: <span>Днепр</span>
                </div>
            </div>
        </div>
    )
}
