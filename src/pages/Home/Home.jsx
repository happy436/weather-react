import React from 'react'
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo'
import s from "./Home.module.scss"

export const Home = (props) => {

    function getCity() {
        if (localStorage.getItem('reduxState')) {
            if (JSON.parse(localStorage.getItem('reduxState')).weatherReducer.city !== "") {
                return (
                    <div className={s.wrapper}>
                        <ThisDay state={props.state} />
                        {/* <ThisDayInfo state={props.state} /> */}
                    </div>
                )
            } else {
                return (
                    <div className={s.wrapper_city_dont_choose}>
                        Не выбран город
                    </div>
                )
            }
        } else {
            return (
                <div className={s.wrapper_city_dont_choose}>
                    Не выбран город
                </div>
            )
        }
    }

    return (
        <div className={s.home}>
            {getCity()}
            {/* <div>
                <Days/>
            </div> */}
        </div>
    )
}
