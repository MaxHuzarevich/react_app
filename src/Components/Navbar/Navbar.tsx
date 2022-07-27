import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={classes.nav}>
            <nav>
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs'>Dialogs</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news'>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music'>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings'>Settings</NavLink>
                </div>
            </nav>
        </div>
    )
}