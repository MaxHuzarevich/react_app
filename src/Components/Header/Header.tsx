import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Header.module.css'
import {headerContainerPropsType} from "./HeaderContainer";

export const Header = ({isAuth, login, logout}: headerContainerPropsType) => {
    return (
        <header className={classes.headerContainer}>
                <h1>
                    Social Network
                </h1>
            <div>
                {
                    isAuth
                        ? <div>{login}  <button onClick={logout}>Log out</button></div> :
                        <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}