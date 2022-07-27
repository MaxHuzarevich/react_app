import React from "react";
import classes from "../Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = ({name, id}: DialogItemType) => {

        return <div className={classes.item}>
            <NavLink to={'dialogs/' + id}>{name}</NavLink>
        </div>
    }
