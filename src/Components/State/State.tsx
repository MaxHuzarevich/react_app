import {addPostActionType, profileReducer, updateNewPostText} from "./profile-reducer";
import {addNewMessageText, dialogsReducer, updateNewMessageText} from "./dialogs-reducer";

export type dialogType = {
    id: number
    name: string
}

export type messageType = {
    id: number
    message: string
}

export type postType = {
    id: number
    message: string
    like: number
    dislike: number
}

export type ProfilePageType = {
    posts: postType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: dialogType[],
    messages: messageType[],
    newMessageBody: string,
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}

export type storeType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: actionType) => void
}

export type actionType = addPostActionType | updateNewPostText | updateNewMessageText | addNewMessageText

export let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi!', like: 1, dislike: 3},
                {id: 2, message: 'Hello!', like: 2, dislike: 1},
                {id: 3, message: 'What?!', like: 5, dislike: 6},
                {id: 4, message: 'I love deep !!!', like: 7, dislike: 1},
                {id: 5, message: 'What is your name?', like: 2, dislike: 0},
            ],
            newPostText: 'Enter your text'
        },
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed!')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: actionType) {
        debugger
            this._state.profilePage = profileReducer(this._state.profilePage, action)
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
            this._callSubscriber();

    },
}

