import React from "react";
import {MyPosts} from "../MyPosts/MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {PostsType} from "../../../index";


export const Profile = ({posts}: PostsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}