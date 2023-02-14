import {applyMiddleware, combineReducers, createStore} from "redux";
import {
    addPostActionType,
    profileReducer, setStatusType,
    setUserProfileType,
    updateNewPostTextType
} from "./profile-reducer";
import {addNewMessageText, dialogsReducer, updateNewMessageText} from "./dialogs-reducer";
import {
    followActionType,
    setCurrentPageActionType, setTotalUserCountActionType,
    setUsersActionType, toggleFollowingProgressType, toggleIsFetchingActionType,
    unfollowActionType,
    usersReducer
} from "./users-reducer";
import {AuthReducer, setAuthUSerDataType} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

export type actionTypes =
    addPostActionType | updateNewPostTextType |
    updateNewMessageText | addNewMessageText |
    followActionType | unfollowActionType |
    setUsersActionType | setCurrentPageActionType |
    setTotalUserCountActionType | toggleIsFetchingActionType
    | setUserProfileType | setAuthUSerDataType
    | toggleFollowingProgressType | setStatusType


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: AuthReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))