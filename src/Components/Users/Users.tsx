import React from "react";
import UserPhoto from "../../assets/images/istockphoto.jpg";
import {initialUsersStateType, userTypeForUserReducer} from "../State/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "./Paginator";
import {User} from "./User";


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
            <div>
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