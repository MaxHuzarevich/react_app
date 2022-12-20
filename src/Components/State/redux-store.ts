import {combineReducers, createStore} from "redux";
import {addPostActionType, profileReducer, setUserProfileType, updateNewPostTextType} from "./profile-reducer";
import {addNewMessageText, dialogsReducer, updateNewMessageText} from "./dialogs-reducer";
import {
    followActionType,
    setCurrentPageActionType, setTotalUserCountActionType,
    setUsersActionType, toggleIsFetchingActionType,
    unfollowActionType,
    usersReducer
} from "./users-reducer";

export type actionTypes =
    addPostActionType | updateNewPostTextType |
    updateNewMessageText | addNewMessageText |
    followActionType | unfollowActionType |
    setUsersActionType | setCurrentPageActionType |
    setTotalUserCountActionType | toggleIsFetchingActionType | setUserProfileType


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export let store = createStore(reducers)