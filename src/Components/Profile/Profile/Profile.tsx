import React from "react";
import {MyPosts} from "../MyPosts/MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {AddNewPost, ProfilePageType, updateNewPostText} from "../../State/State";


export const Profile = ({posts,newPostText}: ProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostText={updateNewPostText} posts={posts} AddNewPost={AddNewPost} newPostText={newPostText}/>
        </div>
    )
}