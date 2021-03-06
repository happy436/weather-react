import React from 'react'
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/Item/ThisDayItem'
import s from "./Popup.module.scss"
import { GlobalSVGSelector, variables } from '../../assets/img/icons/global/GlobalSVGSelector'

export const Popup = () => {

    const items = [
        {
            icon_id: variables.temp,
            name: 'Температура',
            value: '20° - ощущается как 17°',
        },
        {
            icon_id: variables.pressure,
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            icon_id: variables.precipitation,
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            icon_id: variables.wind,
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер',
        },
    ];
    return (
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.dayTemp}>20°</div>
                    <div className={s.dayName}>Среда</div>
                    <div className={s.img}>
                        <GlobalSVGSelector id={variables.weather_logo.small_rain_sun} />
                    </div>
                    <div className={s.thisTime}>
                        Время: <span>21:54</span>
                    </div>
                    <div className={s.thisCity}>
                        Город: <span>Днепр</span>
                    </div>
                </div>
                <div className={s.container}>
                    <div className={s.items}>
                        {items.map((item) => {
                            return <ThisDayItem key={item.icon_id} item={item} />
                        })}
                    </div>
                </div>
                <div className={s.close}>
                    <GlobalSVGSelector id={variables.logo.close} />
                </div>
            </div>
        </>
    )
}
