import {actionTypes} from "./redux-store";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'

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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

export const setTotalUserCountAC = (totalCountUser: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        count: totalCountUser
    } as const
}

export type followActionType = ReturnType<typeof followAC>     //возвращаемый тип
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUserCountActionType = ReturnType<typeof setTotalUserCountAC>

export type initialUsersStateType = {
    users: Array<userTypeForUserReducer>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}
export type userTypeForUserReducer = {
    id: number
    photos: {
        small: ''
        large: ''
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

let initialState: initialUsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        default:
            return state
    }
}