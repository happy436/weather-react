import React, { useEffect } from 'react';
import Select from 'react-select';
import { GlobalSVGSelector, variables } from '../../assets/img/icons/global/GlobalSVGSelector';
import { changeCssRootVariables } from '../../model/ChangeCssRootVariables';
import { themeChangeActionCreator } from '../../redux/themeReducer';
import { fetching } from '../../redux/weatherReducer';
import s from './Header.module.scss';

export const Header = (props) => {

    const theme = props.state
    const dispatch = props.dispatch
    const storage = localStorage
    const capitals = ['Бердянск', 'Винница', 'Днепр', 'Донецк', 'Житомир', 'Запорожье', 'Ивано-Франковск', 'Киев', 'Кременчуг', 'Кривой Рог', 'Луганск', 'Луцк', 'Львов', 'Мелитополь', 'Николаев', 'Одесса', 'Полтава', 'Ровно', 'Севастополь', 'Северодонецк', 'Сумы', 'Тернополь', 'Харьков', 'Хмельницкий', 'Черкассы', 'Черновцы']
    const options =
        capitals.map(
            (capital, index) => {
                return { value: `city-${index + 1}`, label: capital }
            }
        )
        ;

    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor:
                theme.activeTheme === 0 ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme.activeTheme === 0 ? '#fff' : '#000',
        }),
    };

    function changeTheme() {
        dispatch(themeChangeActionCreator())
        changeCssRootVariables(theme.themes[theme.activeTheme])
    }

    function changeCity(el) {
        let city = el.label === "" ? "Днепр" : el.label
        dispatch(fetching(city))
    }

    function defValSelect() {
        if(storage.getItem('reduxState')) {
            return { value: `city-1`, label: JSON.parse(localStorage.getItem('reduxState')).weatherReducer.city }
        } else {
            return null
        }
    }

    useEffect(() => {
        if(storage.getItem('reduxState')){
            changeCssRootVariables(theme.themes[theme.activeTheme])
        } else {
            return null
        }
    })

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSVGSelector id={variables.logo.header_logo} />
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.changeTheme} onClick={changeTheme}>
                    <GlobalSVGSelector id={variables.logo.change_theme} />
                </div>
                <Select
                    placeholder="Выбери"
                    defaultValue={defValSelect}
                    styles={colourStyles}
                    options={options}
                    onChange={changeCity}
                />
            </div>
        </header>
    );
};