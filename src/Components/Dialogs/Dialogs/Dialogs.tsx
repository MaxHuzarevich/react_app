import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "../DialogItem/DialogItem";
import {Message} from "../Message/Message";
import {DialogsPageType} from "../../State/State";
import {addNewMessageTextAC, updateNewMessageTextAC} from "../../State/dialogs-reducer";
import {store} from "../../State/redux-store";

export const Dialogs = ({dialogs, messages}: DialogsPageType) => {

    let state = store.getState().dialogsPage

    const dialogsData = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messagesData = state.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    const onSendMessageClick = () => {
         store.dispatch(addNewMessageTextAC(newMessageText))
        store.dispatch(updateNewMessageTextAC(''))
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        store.dispatch(updateNewMessageTextAC(body))
    }
    let newMessageText = store.getState().dialogsPage.dialogsPage.newMessageBody

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsData}
            </div>
            <div className={classes.messages}>
                {messagesData}
                <div>
                    <textarea
                        value={newMessageText}
                        onChange={onNewMessageChange}
                    />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>add</button>
                </div>
            </div>
        </div>
    )
}