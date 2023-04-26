import React from "react";
import {ProfileStatus} from "./Status";
import photo from './../../../assets/images/istockphoto.jpg'
import {PrType} from "../Profile/Profile";

export const ProfileInfo = ({profile, status, updateStatusProfile, isOwner, savePhoto}: PrType) => {

    const onMainPhotoSelected = (e: any) =>{
        if(e.target.files){
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div style={{margin: '25px'}}>
            <div style={{
                boxShadow: '5px 5px 5px rgb(65 105 225)',
                width: '350px',
                borderRadius: '5px',
                border: '2px solid white'
            }}>
                <img
                    style={{width: '300px', margin: '25px', borderRadius: '45px'}}
                    src={
                        // profile.photos.large ||
                        photo}
                    alt={'photo'}
                />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div style={{margin: '10px', backgroundColor: 'rgb(65 105 225)', borderRadius: '3px'}}>
                    <div style={{
                        margin: '10px', boxShadow: '5px 5px 5px rgb(65 105 225)',
                    }}>
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
    )
}