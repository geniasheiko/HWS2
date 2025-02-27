import React, {FC, useState} from 'react'
import burgerIcon from './burger.svg'
import s from './Header.module.css'
import {useLocation} from 'react-router-dom'
import {PATH} from '../Pages'

type PropsType = {
    handleOpen: () => void
}

export const Header: FC<PropsType> = ({handleOpen}) => {
    // hw5-menu изначально отсутствует, при нажатии на бургер - появляется, при повторном нажатии исчезает
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation()
    const currentPath = location.pathname

    const pageName =
        currentPath === PATH.PRE_JUNIOR
            ? 'Pre-junior'
            : currentPath === PATH.JUNIOR
                ? 'Junior'
                : currentPath === PATH.JUNIOR_PLUS
                    ? 'Junior Plus'
                    : 'Error';
                    const handleToggleMenu = () => {
                        setIsMenuOpen((prev) => !prev);
                    };
    return (
        <>
            <div id={'hw5-header'} className={s.header}>
                <img
                    src={burgerIcon}
                    id={'hw5-burger-menu'}
                    className={s.burgerMenuIcon}
                    onClick={handleToggleMenu}
                    alt={'open menu'}
                />
                <h1>{pageName}</h1>
            </div>
            <div id={"hw5-menu"} className={`${s.menu} ${isMenuOpen ? s.open : ""}`}>
                <p>Пункт 1</p>
                <p>Пункт 2</p>
                <p>Пункт 3</p>
            </div>
        </>
    )
}
