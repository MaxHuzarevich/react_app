import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Header.module.css'
import {headerContainerPropsType} from "./HeaderContainer";

export const Header = ({isAuth, login, logout}: headerContainerPropsType) => {
    return (
        <div className={classes.header}>
            <header>
                <img
                    src='https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Website-Outline-256.png'
                    alt='logo'
                />
            </header>
            <div className={classes.loginBlock}>
                {
                    isAuth
                        ? <div>{login} - <button onClick={logout}>log out</button></div> :
                        <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    )
}