import React, { useEffect } from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { selectCurrentWeatherData } from '../../store/selectors'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import { Days } from './components/Days/Days'
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo'
import s from "./Home.module.scss"

export const Home = (props) => {

    const {weather} = useCustomSelector( 
        selectCurrentWeatherData
    )

    window.weather = weather

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo weather={weather}/>
            </div>
            {/* <div>
                <Days/>
            </div> */}
        </div>
    )
}
