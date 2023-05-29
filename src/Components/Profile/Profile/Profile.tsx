import React from "react";
import {SuperMyPostContainer} from "../MyPosts/MyPosts/MyPostsContainer";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {ProfileType} from "../../State/profile-reducer";

export type ProfilePropsType = {
    isOwner: boolean,
    updateStatusProfile: (status: string) => void,
    status: string,
    getStatus: (userId: string) => void,
    getUserProfile: (userId: string) => void,
    profile: ProfileType,
    isAuth: boolean,
    authorizedUserId: number | null,
    savePhoto: (photo: any) => void,
}

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
                        }: ProfilePropsType) => {

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