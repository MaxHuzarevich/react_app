import React, {ChangeEvent} from "react";
import {addPostAC, updateNewPostTextAC} from "../../../State/profile-reducer";
import {MyPosts} from "./MyPosts";
import {store} from "../../../State/redux-store";
import {connect} from "react-redux";
import {postType, StateType} from "../../../State/State";
import {Dispatch} from "redux";

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