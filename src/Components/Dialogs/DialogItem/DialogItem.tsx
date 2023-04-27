import React from "react";
import classes from "../Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
}

export const DialogItem = ({name}: DialogItemType) => {

        return <div className={classes.item}>
            <>{name}</>
        </div>
    }
