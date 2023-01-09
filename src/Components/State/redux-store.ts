import {combineReducers, createStore} from "redux";
import {addPostActionType, profileReducer, setUserProfileType, updateNewPostTextType} from "./profile-reducer";
import {addNewMessageText, dialogsReducer, updateNewMessageText} from "./dialogs-reducer";
import {
    followActionType,
    setCurrentPageActionType, setTotalUserCountActionType,
    setUsersActionType, toggleFollowingProgressType, toggleIsFetchingActionType,
    unfollowActionType,
    usersReducer
} from "./users-reducer";
import {AuthReducer, setAuthUSerDataType} from "./auth-reducer";

export type actionTypes =
    addPostActionType | updateNewPostTextType |
    updateNewMessageText | addNewMessageText |
    followActionType | unfollowActionType |
    setUsersActionType | setCurrentPageActionType |
    setTotalUserCountActionType | toggleIsFetchingActionType
    | setUserProfileType | setAuthUSerDataType
    | toggleFollowingProgressType


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: AuthReducer
})

export type AppStateType = ReturnType<typeof reducers>

export let store = createStore(reducers)