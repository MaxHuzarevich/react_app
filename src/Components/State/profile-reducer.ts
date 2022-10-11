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

let initialState = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi!', like: 1, dislike: 3},
            {id: 2, message: 'Hello!', like: 2, dislike: 1},
            {id: 3, message: 'What?!', like: 5, dislike: 6},
            {id: 4, message: 'I love deep !!!', like: 7, dislike: 1},
            {id: 5, message: 'What is your name?', like: 2, dislike: 0},
        ],
        newPostText: 'Enter your text'
    }
}

export const profileReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case ADD_POST:
            let NewMessage: postType = {
                id: 5,
                message: action.newPost,
                like: 0,
                dislike: 0
            };
            state.profilePage.posts.push(NewMessage);
            state.profilePage.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.newText
            break;
    }
    return state
}