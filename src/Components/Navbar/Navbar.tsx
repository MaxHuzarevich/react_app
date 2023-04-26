import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <NavLink to='/profile' activeClassName={classes.active}><h3>Profile</h3></NavLink>
            <NavLink to='/dialogs' activeClassName={classes.active}><h3>Dialogs</h3></NavLink>
            <NavLink to='/users' activeClassName={classes.active}><h3>Users</h3></NavLink>
            <NavLink to='/news' activeClassName={classes.active}><h3>News</h3></NavLink>
            <NavLink to='/music' activeClassName={classes.active}><h3>Music</h3></NavLink>
            <NavLink to='/settings' activeClassName={classes.active}><h3>Settings</h3></NavLink>
        </nav>
    )
}