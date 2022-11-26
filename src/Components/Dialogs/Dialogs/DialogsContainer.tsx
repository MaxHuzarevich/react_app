import React, {ChangeEvent} from "react";
import {addNewMessageTextAC, InitialDialogsStateType, updateNewMessageTextAC} from "../../State/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export type StateType = {
    dialogsPage: InitialDialogsStateType,
}

type mapStateToPropsType = {
    dialogs: InitialDialogsStateType
    newMessageBody: string
}

type mapDispatchToPropsType = {
    onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onSendMessageClick: (newMessageBody: string) => void
}

let mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(addNewMessageTextAC(newMessageBody))
        },
        onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewMessageTextAC(e.currentTarget.value))
        }
    }
}
export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)