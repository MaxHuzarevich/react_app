import {actionTypes} from "./redux-store";
import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
export const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE-IS-FOLLOWING-PROCESS'

export const followSuccess = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}

export const unfollowSuccess = (userID: number) => {
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

export const toggleFollowingProgress = (isFetching: boolean, userID: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROCESS,
        isFetching,
        userID
    } as const
}

export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {

    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUserCount(data.totalCount))
}

export const follow = (userID: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userID))
    const response = await usersAPI.follow(userID)
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userID))
    }
    dispatch(toggleFollowingProgress(false, userID))
}

export const unfollow = (userID: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userID))
    const response = await usersAPI.unfollow(userID)
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userID))
    }
    dispatch(toggleFollowingProgress(false, userID))
}


export type followActionType = ReturnType<typeof followSuccess>     //возвращаемый тип
export type unfollowActionType = ReturnType<typeof unfollowSuccess>
export type setUsersActionType = ReturnType<typeof setUsers>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUserCountActionType = ReturnType<typeof setTotalUserCount>
export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>

export type initialUsersStateType = {
    users: Array<userTypeForUserReducer>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: any
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
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case TOGGLE_IS_FOLLOWING_PROCESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter((id: number) => id !== action.userID)
            }
        default:
            return state
    }
}