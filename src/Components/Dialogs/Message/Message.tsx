import classes from "../Dialogs/Dialogs.module.css";
import React from "react";


type MessageType = {
    message: string
}

export const Message = ({message}: MessageType) => {
    return <div className={classes.message}>{message}</div>
}