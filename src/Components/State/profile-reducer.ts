import {actionTypes} from "./redux-store";
import {usersAPI} from "../../api/api";

export type postType = {
    id: number
    message: string
    like: number
    dislike: number
}

export type initialStateProfileType = {
    posts: Array<postType>
    newPostText: string
    profile: ProfileType
}

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'

export const addPostAC = (newPost: string) => {
    return {
        type: ADD_POST,
        newPost
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const                        //воспринимай как константу
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const getUserProfile = (userId:string) => {
    return (dispatch: any) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export type addPostActionType = ReturnType<typeof addPostAC>     //возвращаемый тип
export type updateNewPostTextType = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>

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
        {id: 4, message: 'I love deep !!!', like: 7, dislike: 1},
        {id: 5, message: 'What is your name?', like: 2, dislike: 0},
    ],
    newPostText: 'Enter your text...',
    profile: {} as ProfileType
}

export const profileReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let NewMessage: postType = {
                id: 5,
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
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
    }
    return state
}