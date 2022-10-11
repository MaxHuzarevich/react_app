import {actionType, DialogsPageType} from "./State";

export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'

export const updateNewMessageTextAC = (messageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        messageText
    } as const
}

export const addNewMessageTextAC = (newMessage: string) => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        newMessage
    } as const
}

export type updateNewMessageText = ReturnType<typeof updateNewMessageTextAC>
export type addNewMessageText = ReturnType<typeof addNewMessageTextAC>

export const dialogsReducer = (state: DialogsPageType, action: actionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.messageText
            break;
        case ADD_NEW_MESSAGE_TEXT:
            let message = state.newMessageBody;
            state.newMessageBody = ''
            state.messages.push({id: 8, message})
            break;
    }
    return state
}