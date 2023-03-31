import React from "react";
import {SuperMyPostContainer} from "../MyPosts/MyPosts/MyPostsContainer";
import { ProfileInfo } from "../ProfileInfo/ProfileInfo";
import {ProfType} from "./Profile_Container";

export const Profile = ({profile, getUserProfile, getStatus,status, updateStatusProfile, isAuth, authorizedUserId}: ProfType) => {

    return (
        <div>
            <ProfileInfo
                isAuth={isAuth}
                authorizedUserId={authorizedUserId}
                updateStatusProfile={updateStatusProfile}
                status={status}
                getStatus={getStatus}
                profile={profile}
                getUserProfile={getUserProfile}
            />
            <SuperMyPostContainer/>
        </div>
    )
}