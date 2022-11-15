import React from "react";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPosts/MyPostsContainer";


export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}