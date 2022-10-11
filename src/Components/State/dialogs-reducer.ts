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

let initialState = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Josh'},
            {id: 2, name: 'Matt'},
            {id: 3, name: 'Fill'},
            {id: 4, name: 'Bob'},
            {id: 5, name: 'Cris'},
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'Hello!'},
            {id: 3, message: 'Go!'},
            {id: 4, message: 'What!'},
            {id: 5, message: 'Ooo!'},
        ],
        newMessageBody: 'Enter your message'
    }
}

export const dialogsReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.dialogsPage.newMessageBody = action.messageText
            break;
        case ADD_NEW_MESSAGE_TEXT:
            let message = state.dialogsPage.newMessageBody;
            state.dialogsPage.newMessageBody = ''
            state.dialogsPage.messages.push({id: 8, message})
            break;
    }
    return state
}