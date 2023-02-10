import React from "react";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {SuperMyPostContainer} from "../MyPosts/MyPosts/MyPostsContainer";
import {ProfType} from "./ProfileContainer";

export const Profile = ({profile, getUserProfile}:ProfType) => {

    return (
        <div>
            <ProfileInfo profile={profile} getUserProfile={getUserProfile}/>
            <SuperMyPostContainer/>
        </div>
    )
}