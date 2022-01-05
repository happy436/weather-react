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
    const capitalsUS = ['46.7533,36.7977', '49.2318,28.4680', '48.4586,35.0413', '48.0124,37.8067', '50.2562,28.6628', '47.8349,35.1475', '48.9218,24.7156', '50.4400,30.5250', '49.0680,33.4159', '47.9006,33.3991', '48.5686,39.3136', '50.7469,25.3411','49.8367,24.0297','46.8510,35.3737','47.5669,34.3982','46.4717,30.7251','49.604579,34.543503','50.618007,26.252154','44.568085,33.633546','48.946258,38.485063','50.913757,34.814107','49.550793,25.600589','49.983431,36.243225','49.419447, 26.991837', '49.435325,32.061941', '48.293218,25.944175']
    const options =
    capitals.map((item, index) => ({value:capitalsUS[index], label:item }));

    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor:
                theme.activeTheme === 0 ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '170px',
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
        let city = el.value === "" ? "Днепр" : el.value
        localStorage.setItem('city', el.label)
        dispatch(fetching(city))
    }

    function defValSelect() {
        if(storage.getItem('city')) {
            return { value: `city-1`, label: localStorage.getItem('city') }
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