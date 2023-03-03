import React from "react";
import {addPostAC, initialStateProfileType, postType} from "../../../State/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export type StateType = {
    profilePage: initialStateProfileType,
}

export type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

type mapStateToPropsType = {
    posts: postType[]
}

export type MyPostsType = mapStateToPropsType & mapDispatchToPropsType

export const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

export const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

    return {
        addPost: (newPostText) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const SuperMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)