import {actionTypes} from "./redux-store";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'

export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}

export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const                        //воспринимай как константу
}

export const setUsersAC = (users: Array<userTypeForUserReducer>) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export type followActionType = ReturnType<typeof followAC>     //возвращаемый тип
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>

export type initialUsersStateType = {
    users: Array<userTypeForUserReducer>
}
export type userTypeForUserReducer = {
    userID: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

let initialState: initialUsersStateType = {
    users: []
}

export const usersReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.userID === action.userID ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.userID === action.userID ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}