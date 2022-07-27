import React from "react";
import classes from './Header.module.css'

export const Header = () => {
    return (
        <div className={classes.header}>
            <header>
                <img
                    src='https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Website-Outline-256.png'
                    alt='logo'
                />
            </header>
        </div>
    )
}