import React from 'react'
import { GlobalSVGSelector, variables } from '../../../../assets/img/icons/global/GlobalSVGSelector'
import s from "./ThisDay.module.scss"

export const ThisDay = (props) => {
    const weather = props.state
    window.weatherDay = weather

    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    function ten(time) {
        if (time < 10) {
            return (0 + time)
        } else {
            return time
        }
    }

    const weatherStatus = {
        Drizzle: "Drizzle",
        Clouds: "Clouds",
        Clear: "Clear",
        Rain: "Rain",
        Snow: "Snow",
        Mist: "Mist",
        Fog: "Fog"
    }

    let time = new Date

    function weatherLogo() {
        let weatherLogo = weather.current.condition.text
        switch (weatherLogo) {
            case weatherStatus.Drizzle:
                return variables.weather_logo.cloudy
            case weatherStatus.Clouds:
                return variables.weather_logo.cloudy
            case weatherStatus.Clear:
                
                    return variables.weather_logo.sun
                
            case weatherStatus.Rain:
                return variables.weather_logo.rain
            case weatherStatus.Mist:
                return variables.weather_logo.fog
            case weatherStatus.Fog:
                return variables.weather_logo.fog
            default:
                return null
        }
    }

    function getCity() {
        if (localStorage.getItem('city')) {
            if (localStorage.getItem('city') !== "") {
                return localStorage.getItem('city')
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
                    <div className={s.thisTemp}>{Math.round(weather.current.temp_c)}°</div>
                    <div className={s.thisDay}>Сегодня</div>
                </div>
                <GlobalSVGSelector id={weatherLogo()} />
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
