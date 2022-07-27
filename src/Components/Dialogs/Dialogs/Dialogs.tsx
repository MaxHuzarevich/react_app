import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "../DialogItem/DialogItem";
import {Message} from "../Message/Message";
import {DialogsPageType} from "../../State/State";

export const Dialogs = ({dialogs,messages}:DialogsPageType) => {

    const dialogsData = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messagesData = messages.map(m => <Message message={m.message} key={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsData}
            </div>
            <div className={classes.messages}>
                {messagesData}
            </div>
        </div>
    )
}