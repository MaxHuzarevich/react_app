import React from "react";
import styles from "./Users_Class_Component.module.css";
import UserPhoto from "../../assets/images/istockphoto.jpg";
import {initialUsersStateType} from "../State/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    users: initialUsersStateType
    onPageChanged: (p: number) => void
    toggleFollowingProgress: (isFetching: boolean, userID:number) => void
    followingInProgress: []
}

export const Users: React.FC<UsersType> = props => {

    const {users, onPageChanged, follow, unfollow, followingInProgress, toggleFollowingProgress} = props

    let pagesCount = Math.ceil(users.totalUsersCount / users.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span
                        key={index}
                        onClick={() => {
                            onPageChanged(p)
                        }}
                        className={users.currentPage === p ? styles.selectedPage : ''}>
                            {p}
                        </span>
                })}
            </div>
            {
                users.users.map(u => <div key={u.id} style={{margin: '5px'}}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : UserPhoto} style={{width: '50px'}}
                                 alt={'avatar'}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                            ?
                            <button
                                disabled={followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                toggleFollowingProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '57a6b8c8-97c1-40c0-bb62-c0e1174be241'
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            unfollow(u.id)
                                        }
                                        toggleFollowingProgress(false, u.id)
                                    })
                            }}>Unfollow</button>
                            :
                            <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                toggleFollowingProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '57a6b8c8-97c1-40c0-bb62-c0e1174be241'
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            follow(u.id)
                                        }
                                        toggleFollowingProgress(false, u.id)
                                    })
                            }}>Follow</button>
                        }
                    </div>
                    <div>
                        <h3>name: {u.name}</h3>
                        <span>{u.status}</span>
                        <ul>
                            <li>{'u.location.city'}</li>
                            <li>{'u.location.country'}</li>
                        </ul>
                    </div>
                </div>)
            }
        </div>
    )
}