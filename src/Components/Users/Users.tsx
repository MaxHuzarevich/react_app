import React from "react";
import {initialUsersStateType} from "../State/users-reducer";
import {Paginator} from "./Paginator";
import {User} from "./User";
import classes from "./Users.module.css";


type UsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    users: initialUsersStateType
    onPageChanged: (p: number) => void
    followingInProgress: []
    portionSize: number
}

export const Users: React.FC<UsersType> = props => {

    const {users, onPageChanged, follow, unfollow, followingInProgress, portionSize} = props

    return (
        <div>
            <Paginator portionSize={portionSize} users={users} onPageChanged={onPageChanged}/>
            <div className={classes.users}>
                {users.users.map(u => <User
                    followingInProgress={followingInProgress}
                    follow={follow}
                    unfollow={unfollow}
                    user={u}
                    key={u.id}
                />)}
            </div>
        </div>
    )
}