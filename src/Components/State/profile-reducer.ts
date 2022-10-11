import {actionType, postType, ProfilePageType} from "./State";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state: ProfilePageType, action: actionType) => {
    if (action.type === ADD_POST) {
        let NewMessage: postType = {
            id: 5,
            message: action.newPost,
            like: 0,
            dislike: 0
        };
        state.posts.push(NewMessage);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }
    return state
}