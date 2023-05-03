import React from "react";
import {NavLink} from "react-router-dom";
import UserPhoto from "../../assets/images/istockphoto.jpg";
import {userTypeForUserReducer} from "../State/users-reducer";
import classes from "./Users.module.css";

type UserType = {
    user: userTypeForUserReducer
    followingInProgress: []
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export const User = ({user, followingInProgress, follow, unfollow}: UserType) => {
    return (
        <div className={classes.user}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : UserPhoto} style={{width: '50px'}}
                         alt={'avatar'}/>
                </NavLink>
            </div>
            <div>
                {
                    user.followed
                        ?
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</button>
                        :
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>
                }
            </div>
            <div>
                <h3>name: {user.name}</h3>
                <span>{user.status}</span>
                <ul>
                    <li>id: {user.id}</li>
                </ul>
            </div>
        </div>
    )
}