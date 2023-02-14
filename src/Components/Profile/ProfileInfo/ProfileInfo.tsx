import React from "react";
import {ProfType} from "../Profile/Profile_Container";
import photo from '../../../assets/images/istockphoto.jpg'
import {ProfileStatus} from "./Status";

export const ProfileInfo = ({profile, status, updateStatusProfile}: ProfType) => {

    return (
        <div style={{margin: '25px'}}>
            <div style={{
                boxShadow: '5px 5px 5px rgb(65 105 225)',
                width: '350px',
                borderRadius: '5px',
                border: '2px solid white'
            }}>
                {/*<img style={{borderRadius:'10px',marginLeft:'25px'}} src={profile.photos.large} alt={'photo large'}/>*/}
                <img style={{width: '300px', margin: '25px', borderRadius: '45px'}} src={photo} alt={'photo'}/>
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