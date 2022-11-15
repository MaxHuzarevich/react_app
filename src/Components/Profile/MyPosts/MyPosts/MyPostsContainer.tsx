import React, {ChangeEvent} from "react";
import {addPostAC, updateNewPostTextAC} from "../../../State/profile-reducer";
import {MyPosts} from "./MyPosts";
import {store} from "../../../State/redux-store";

export const MyPostsContainer = () => {

    let state = store.getState().profilePage

    const addPost = () => {
        store.dispatch(addPostAC(state.profilePage.newPostText))
    }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        store.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}