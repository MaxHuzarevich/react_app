import {combineReducers, createStore} from "redux";
import {addPostActionType, profileReducer, updateNewPostText} from "./profile-reducer";
import {addNewMessageText, dialogsReducer, updateNewMessageText} from "./dialogs-reducer";
import {
    followActionType,
    setCurrentPageActionType, setTotalUserCountActionType,
    setUsersActionType,
    unfollowActionType,
    usersReducer
} from "./users-reducer";

export type actionTypes =
    addPostActionType | updateNewPostText |
    updateNewMessageText | addNewMessageText |
    followActionType | unfollowActionType |
    setUsersActionType | setCurrentPageActionType | setTotalUserCountActionType


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export let store = createStore(reducers)