import React from "react";
import {ProfType} from "../Profile/ProfileContainer";

export const ProfileInfo = ({profile}: ProfType) => {
    return (
        <div>
            <img src={profile.photos.large} alt={'photo large'}/>
            <div>
                <ul>
                    <li>{profile.fullName}</li>
                    <li>{profile.lookingForAJobDescription}</li>
                </ul>
            </div>
        </div>
)
}