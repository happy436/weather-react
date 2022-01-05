import React from 'react'
import { GlobalSVGSelector, variables } from '../../../../assets/img/icons/global/GlobalSVGSelector'
import s from "./ThisDay.module.scss"

export const ThisDay = (props) => {
    const weather = props.state.weather

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

    const weatherStatus = {
        Drizzle:"Drizzle",
        Clouds:"Clouds",
        Clear:"Clear",
        Rain:"Rain",
        Snow:"Snow"
    }

    function weatherLogo(){
        let weatherLogo = weather.weather[0].main
        switch(weatherLogo){
            case weatherStatus.Drizzle:
                return variables.weather_logo.cloudy
            case weatherStatus.Clouds:
                return variables.weather_logo.cloudy
            case weatherStatus.Clear:
                return variables.weather_logo.sun
            case weatherStatus.Rain:
                return variables.weather_logo.rain
            default:
                return null
        }
        
    }

    function getCity(){
        if(localStorage.getItem('reduxState')){
            if(JSON.parse(localStorage.getItem('reduxState')).weatherReducer.city !== ""){
                return JSON.parse(localStorage.getItem('reduxState')).weatherReducer.city
            } else {
                return "Не выбран"
            }
        } else {
            return "Не выбран"
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
                    Город: <span>{getCity()}</span>
                </div>
            </div>
        </div>
    )
}
