import React, {ChangeEvent} from "react";
import {addNewMessageTextAC, InitialDialogsStateType, updateNewMessageTextAC} from "../../State/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../State/redux-store";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

type mapStateToPropsType = {
    dialogs: InitialDialogsStateType
    newMessageBody: string
    isAuth: boolean
}

type mapDispatchToPropsType = {
    onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onSendMessageClick: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)