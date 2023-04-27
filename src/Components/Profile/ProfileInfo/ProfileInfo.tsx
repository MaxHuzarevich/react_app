import React from "react";
import {ProfileStatus} from "./Status";
import photo from './../../../assets/images/istockphoto.jpg'
import {PrType} from "../Profile/Profile";
import classes from './ProfileInfo.module.css'

export const ProfileInfo = ({profile, status, updateStatusProfile, isOwner, savePhoto}: PrType) => {

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={classes.profile}>
            <div className={classes.profileImg}>
                <img src={
                    // profile.photos.large ||
                    photo}
                     alt={'photo'}
                />
                <div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h3>Full name:</h3>
                        {profile.fullName}
                    </div>
                    <div>
                        <h3>Looking for job:</h3>
                        {profile.lookingForAJobDescription}
                    </div>
                    <div>
                        <h3>Status:</h3>
                        <ProfileStatus
                            updateStatusProfile={updateStatusProfile}
                            status={status}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}