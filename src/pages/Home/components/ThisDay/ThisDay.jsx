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

    function weatherLogo(){
        let weatherLogo = weather.weather[0].main
        if(weatherLogo === "Drizzle" || weatherLogo === "Clouds"){
            return variables.weather_logo.cloudy
        } else if(weatherLogo === "Clear"){
            return variables.weather_logo.sun
        } else {
            return null
        }
    }

    return (
        <div className={s.conteiner}>
            <div className={s.top}>
                <div className={s.topWrapper}>
                    <div className={s.thisTemp}>{Math.round(weather.main.temp)}°</div>
                    <div className={s.thisDay}>Сегодня</div>
                </div>
                <GlobalSVGSelector id={weatherLogo()}/>
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
