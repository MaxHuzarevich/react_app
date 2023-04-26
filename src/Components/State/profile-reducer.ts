import {actionTypes} from "./redux-store";
import {profileAPI} from "../../api/api";
import {Dispatch} from "redux";

export type postType = {
    id: number
    message: string
    like: number
    dislike: number
}

export type initialStateProfileType = {
    posts: Array<postType>
    profile: ProfileType
    status: string
}

export const ADD_POST = 'ADD-POST'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'
export const SET_STATUS = 'SET-STATUS'
export const DELETE_POST = 'DELETE-POST'
export const SAVE_PHOTO = 'SAVE-PHOTO'

export const addPostAC = (newPost: string) => {
    return {
        type: ADD_POST,
        newPost
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

export const deletePostAC = (id: number) => {
    return {
        type: DELETE_POST,
        id
    } as const
}

export const savePhotoSuccess = (photos: any) => {
    return {
        type: SAVE_PHOTO,
        photos
    } as const
}

export const getUserProfile = (userId: string) => async (dispatch: Dispatch<setUserProfileType>) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userID: string) => async (dispatch: Dispatch<setStatusType>) => {
    const response = await profileAPI.getStatus(userID)
    dispatch(setStatus(response.data))
}

export const updateStatusProfile = (status: string) => async (dispatch: Dispatch<setStatusType>) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: Dispatch<savePhotoType>) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export type addPostActionType = ReturnType<typeof addPostAC>     //возвращаемый тип
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setStatusType = ReturnType<typeof setStatus>
export type deletePostType = ReturnType<typeof deletePostAC>
export type savePhotoType = ReturnType<typeof savePhotoSuccess>

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

let initialState: initialStateProfileType = {
    posts: [
        {id: 1, message: 'Hi!', like: 1, dislike: 3},
        {id: 2, message: 'Hello!', like: 2, dislike: 1},
        {id: 3, message: 'What?!', like: 5, dislike: 6},
        {id: 4, message: 'Cool !!!', like: 7, dislike: 1},
        {id: 5, message: 'What is your name?', like: 2, dislike: 0},
    ],
    profile: {} as ProfileType,
    status: ''
}

export const profileReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let NewMessage: postType = {
                id: Math.random(),
                message: action.newPost,
                like: 0,
                dislike: 0
            };
            return {
                ...state,
                posts: [...state.posts, NewMessage],
                newPostText: ''
            }
        }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
    }
    return state
}