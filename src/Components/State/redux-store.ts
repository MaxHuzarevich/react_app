import {applyMiddleware, combineReducers, createStore} from "redux";
import {addPostActionType, deletePostType, profileReducer, setStatusType, setUserProfileType} from "./profile-reducer";
import {addNewMessageText, dialogsReducer} from "./dialogs-reducer";
import {
    followActionType,
    setCurrentPageActionType,
    setTotalUserCountActionType,
    setUsersActionType,
    toggleFollowingProgressType,
    toggleIsFetchingActionType,
    unfollowActionType,
    usersReducer
} from "./users-reducer";
import {AuthReducer, setAuthUSerDataType} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {AppReducer, InitializedACType} from "./app-reducer";

export type actionTypes =
    addPostActionType | addNewMessageText | followActionType | unfollowActionType
    | setUsersActionType | setCurrentPageActionType | setTotalUserCountActionType
    | toggleIsFetchingActionType | setUserProfileType | setAuthUSerDataType | toggleFollowingProgressType
    | setStatusType | InitializedACType | deletePostType

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))