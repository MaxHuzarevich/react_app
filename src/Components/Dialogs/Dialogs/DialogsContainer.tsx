import React from "react";
import {addNewMessageTextAC, InitialDialogsStateType} from "../../State/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../State/redux-store";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

type mapStateToPropsType = {
    dialogs: InitialDialogsStateType
    // newMessageBody: string
    isAuth: boolean
}
type mapDispatchToPropsType = {
    // onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onSendMessageClick: (value: string) => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage,
        // newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onSendMessageClick: (value) => {
            dispatch(addNewMessageTextAC(value))
        }
        // onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
        //     dispatch(updateNewMessageTextAC(e.currentTarget.value))
        // }
    }
}
const SuperDialogsContainer =
    compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
export default SuperDialogsContainer;
