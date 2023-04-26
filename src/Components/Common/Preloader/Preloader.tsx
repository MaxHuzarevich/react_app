import React from "react";
import preloader from "../../../assets/images/Preloader.svg";
import classes from "./Preloader.module.css"

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={'preloader'} className={classes.preloader}/>
        </div>
    )
}