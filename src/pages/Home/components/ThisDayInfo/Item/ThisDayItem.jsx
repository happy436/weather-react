import React from 'react'
import { IndicatorSvgSelector } from '../../../../../assets/img/icons/indicators/IndicatorSVGSelector'
import s from "./ThisDayItem.module.scss"

export const ThisDayItem = (props) => {
    const {icon_id, name, value} = props.item
    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id} />
            </div>
            <div className={s.indicatorName}>{name}</div>
            <div className={s.indicatorValue}>{value}</div>
        </div>
    )
}
