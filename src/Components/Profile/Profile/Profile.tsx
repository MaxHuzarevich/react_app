import React from "react";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {SuperMyPostContainer} from "../MyPosts/MyPosts/MyPostsContainer";


export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <SuperMyPostContainer/>
        </div>
    )
}