import {actionTypes} from "./redux-store";

export type namesType = {
    id: number
    name: string
}

export type messageType = {
    id: number
    message: string
}

export type InitialDialogsStateType = {
    names: namesType[],
    messages: messageType[],
}

export const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'

export const addNewMessageTextAC = (newMessage: string) => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        newMessage
    } as const
}

export type addNewMessageText = ReturnType<typeof addNewMessageTextAC>

let initialState: InitialDialogsStateType = {
    names: [
        {id: 1, name: 'Josh'},
        {id: 2, name: 'Matt'},
        {id: 3, name: 'Fill'},
        {id: 4, name: 'Bob'},
        {id: 5, name: 'Cris'},
        {id: 6, name: 'Fillip'},
        {id: 7, name: 'Joe'},
        {id: 8, name: 'Andy'},
        {id: 9, name: 'Bill'},
        {id: 10, name: 'Bobby'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'Go!'},
        {id: 4, message: 'What!'},
        {id: 5, message: '...!'},
        {id: 6, message: 'eee!'},
        {id: 7, message: 'oh!'},
        {id: 8, message: 'hey!'},
        {id: 9, message: 'Thanks!'},
        {id: 10, message: 'Ooo!'},
    ]
}

export const dialogsReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:
            return {
                ...state,
                messages: [...state.messages, {id: Math.random(), message: action.newMessage}]
            }
        default:
            return state
    }
}