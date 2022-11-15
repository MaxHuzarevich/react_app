import React, {ChangeEvent} from "react";
import {addNewMessageTextAC, updateNewMessageTextAC} from "../../State/dialogs-reducer";
import {store} from "../../State/redux-store";
import {Dialogs} from "./Dialogs";

export const DialogsContainer = () => {

    let state = store.getState().dialogsPage

    const onSendMessageClick = () => {
        store.dispatch(addNewMessageTextAC(state.dialogsPage.newMessageBody))
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        store.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    return (
        <Dialogs
            onSendMessageClick={onSendMessageClick}
            onNewMessageChange={onNewMessageChange}
            dialogs={state.dialogsPage}
            newMessageBody={state.dialogsPage.newMessageBody}
        />
    )
}