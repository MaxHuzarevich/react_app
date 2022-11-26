import React, {ChangeEvent} from "react";
import {addPostAC, initialStateProfileType, postType, updateNewPostTextAC} from "../../../State/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export type StateType = {
    profilePage: initialStateProfileType,
}

export type mapDispatchToPropsType = {
    addPost: (newPostText:string) => void
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export type mapStateToPropsType = {
    posts: postType[]
    newPostText: string
}

export type MyPostsType = mapStateToPropsType & mapDispatchToPropsType

export const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

export const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

    return {
        addPost: (newPostText) => {
            dispatch(addPostAC(newPostText))
        },
        updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewPostTextAC(e.currentTarget.value))
        }
    }
}

export const SuperMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)