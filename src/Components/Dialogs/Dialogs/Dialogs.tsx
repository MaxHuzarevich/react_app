import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "../DialogItem/DialogItem";
import {Message} from "../Message/Message";
import {DialogsPageType} from "../../State/State";

type DialogsType = {
    onSendMessageClick: () => void
    onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    dialogs: DialogsPageType
    newMessageBody: string
}

export const Dialogs = ({
                            onNewMessageChange,
                            onSendMessageClick,
                            dialogs,
                            newMessageBody
                        }: DialogsType) => {

    const dialogsData = dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messagesData = dialogs.messages.map(m => <Message message={m.message} key={m.id}/>)

    const onSendMessage = () => {
        onSendMessageClick()
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
                    <button onClick={onSendMessage}>add</button>
                </div>
            </div>
        </div>
    )
}