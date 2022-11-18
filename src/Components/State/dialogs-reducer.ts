import {actionType} from "./State";
import {Simulate} from "react-dom/test-utils";


export type dialogType = {
    id: number
    name: string
}

export type messageType = {
    id: number
    message: string
}

export type InitialDialogsStateType = {
    dialogs: dialogType[],
    messages: messageType[],
    newMessageBody: string,
}

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

let initialState: InitialDialogsStateType = {
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

export const dialogsReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageBody: action.messageText
            }
        case ADD_NEW_MESSAGE_TEXT:
            let message = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 8, message}]
            }
    }
    return state
}