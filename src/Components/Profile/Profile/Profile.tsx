import React from "react";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {SuperMyPostContainer} from "../MyPosts/MyPosts/MyPostsContainer";
import {ProfType} from "./ProfileContainer";

export const Profile = ({profile, setUserProfile}:ProfType) => {

    return (
        <div>
            <ProfileInfo profile={profile} setUserProfile={setUserProfile}/>
            <SuperMyPostContainer/>
        </div>
    )
}