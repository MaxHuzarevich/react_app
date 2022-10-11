import {actionType, postType, ProfilePageType} from "./State";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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

export type addPostActionType = ReturnType<typeof addPostAC>     //возвращаемый тип
export type updateNewPostText = ReturnType<typeof updateNewPostTextAC>

export const profileReducer = (state: ProfilePageType, action: actionType) => {
    debugger
    switch (action.type) {
        case ADD_POST:
            let NewMessage: postType = {
                id: 5,
                message: action.newPost,
                like: 0,
                dislike: 0
            };
            state.posts.push(NewMessage);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
    }
    return state
}