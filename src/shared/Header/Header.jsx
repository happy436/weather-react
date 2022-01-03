import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { GlobalSVGSelector, variables } from '../../assets/img/icons/global/GlobalSVGSelector';
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../hooks/useTheme';
import s from './Header.module.scss';

export const Header = (props) => {
    const theme = useTheme();
    const options = [
        { value: 'city-1', label: 'Санкт-Петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Новгород' },
    ];

    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor:
                theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#fff' : '#000',
        }),
    };

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

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
                    defaultValue={options[0]}
                    styles={colourStyles}
                    options={options}
                />
            </div>
        </header>
    );
};