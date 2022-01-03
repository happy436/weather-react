import React from 'react'
import { GlobalSVGSelector, variables } from '../../../../assets/img/icons/global/GlobalSVGSelector'
import { storage } from '../../../../model/Storage'
import s from "./ThisDay.module.scss"

export const ThisDay = (props) => {
    const {weather} = props

    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    function ten(time){
        if(time < 10){
            return(0+time)
        } else {
            return time
        }
    }

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
                    Время: <span>{`${ten(hours)}:${ten(minutes)}`}</span>
                </div>
                <div className={s.thisCity}>
                    Город: <span>{storage.getItem('city') || "Не выбран"}</span>
                </div>
            </div>
        </div>
    )
}
