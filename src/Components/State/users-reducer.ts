import {actionTypes} from "./redux-store";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

export const follow = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}

export const unfollow = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const                        //воспринимай как константу
}

export const setUsers = (users: Array<userTypeForUserReducer>) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

export const setTotalUserCount = (totalCountUser: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        count: totalCountUser
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export type followActionType = ReturnType<typeof follow>     //возвращаемый тип
export type unfollowActionType = ReturnType<typeof unfollow>
export type setUsersActionType = ReturnType<typeof setUsers>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUserCountActionType = ReturnType<typeof setTotalUserCount>
export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>

export type initialUsersStateType = {
    users: Array<userTypeForUserReducer>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
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
    currentPage: 1,
    isFetching: false
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}