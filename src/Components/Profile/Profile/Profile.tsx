import React from "react";
import {MyPosts} from "../MyPosts/MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../State/State";


export const Profile = ({posts}: ProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}