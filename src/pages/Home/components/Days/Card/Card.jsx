import React from 'react'
import { GlobalSVGSelector } from '../../../../../assets/img/icons/global/GlobalSVGSelector'
import s from "./Card.module.scss"

export const Card = (props) => {
    const {
        day, 
        dayInfo, 
        iconId, 
        tempDay, 
        tempNight, 
        info
    } = props.day

    return (
        <div className={s.card}>
            <div className={s.day}>{day}</div>
            <div className={s.dayInfo}>{dayInfo}</div>
            <div className={s.img}>
                {<GlobalSVGSelector id={iconId}/>}
            </div>
            <div className={s.tempDay}>{tempDay}</div>
            <div className={s.tempNight}>{tempNight}</div>
            <div className={s.info}>{info}</div>
        </div>
    )
}
