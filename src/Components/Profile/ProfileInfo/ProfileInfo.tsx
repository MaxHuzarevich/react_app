import React, {ChangeEvent} from "react";
import {ProfileStatus} from "./Status";
import photo from './../../../assets/images/istockphoto.jpg'
import classes from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile/Profile";

export const ProfileInfo = ({profile, status, updateStatusProfile, isOwner, savePhoto}: ProfilePropsType) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <section>
            <div className={classes.container}>
                <div className={classes.profileWrap}>
                    <img src={
                        // profile.photos.large||
                        photo} alt={'photo'}/>
                    <div>
                        {isOwner && <input type={"file"} onChange={()=>onMainPhotoSelected}/>}
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
            </div>
        </section>
    )
}