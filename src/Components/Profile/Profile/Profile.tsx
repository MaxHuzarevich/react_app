import React from "react";
import {SuperMyPostContainer} from "../MyPosts/MyPosts/MyPostsContainer";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {ProfType} from "./Profile_Container";

type IsOwnerType = {
    isOwner: boolean
}

export type PrType = IsOwnerType & ProfType


export const Profile = ({
                            profile,
                            getUserProfile,
                            getStatus,
                            status,
                            updateStatusProfile,
                            isAuth,
                            authorizedUserId,
                            isOwner,
                            savePhoto
                        }: PrType) => {

    return (
        <div>
            <ProfileInfo
                savePhoto={savePhoto}
                isOwner={isOwner}
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