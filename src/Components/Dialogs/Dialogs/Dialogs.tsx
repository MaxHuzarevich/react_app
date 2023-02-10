import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "../DialogItem/DialogItem";
import {Message} from "../Message/Message";
import {store} from "../../State/redux-store";

 type DialogsType = {
    onSendMessageClick: (newMessageBody: string) => void
    onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    newMessageBody: string
    isAuth: boolean
}

export const Dialogs = ({
                            onNewMessageChange,
                            onSendMessageClick,
                            newMessageBody,
                        }: DialogsType) => {

    const dialogsData = store.getState().dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messagesData = store.getState().dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    const onSendMessage = () => {
        onSendMessageClick(newMessageBody)
    }
    const newMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onNewMessageChange(e)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsData}
            </div>
            <div className={classes.messages}>
                {messagesData}
                <div>
                    <textarea
                        value={newMessageBody}
                        onChange={newMessageChange}
                    />
                </div>
                <div>
                    <button onClick={onSendMessage}>ADD</button>
                </div>
            </div>
        </div>
    )
}