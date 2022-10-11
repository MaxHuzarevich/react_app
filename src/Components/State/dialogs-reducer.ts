import {actionType, DialogsPageType} from "./State";

export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'

export const dialogsReducer = (state: DialogsPageType, action: actionType) => {
     if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageBody = action.messageText
    } else if (action.type === ADD_NEW_MESSAGE_TEXT) {
        let message = state.newMessageBody;
         state.newMessageBody = ''
         state.messages.push({id:8, message})
    }
     return state
}