import React from "react";
import classes from "./Post.module.css";
import ava from './../../../../assets/images/ava.png'

type postType = {
    message: string
    like: number
    dislike: number
}

export const Post = ({message, like, dislike}:postType) => {
    return (
        <div>
                <div className={classes.item}>
                    <img src={ava} alt={'avatar'}/>
                    <span>like: {like}</span><br/>
                    <span>dislike: {dislike}</span>
                    <h3>{message}</h3>
                </div>

        </div>
    )
}