import React from "react";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {SuperMyPostContainer} from "../MyPosts/MyPosts/MyPostsContainer";
import {ProfType} from "./Profile_Container";

export const Profile = ({profile, getUserProfile, getStatus,status, updateStatusProfile}: ProfType) => {

    return (
        <div>
            <ProfileInfo
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