import React from "react";
import {MyPosts} from "../MyPosts/MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {AddNewPost, ProfilePageType} from "../../State/State";


export const Profile = ({posts}: ProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} AddNewPost={AddNewPost}/>
        </div>
    )
}