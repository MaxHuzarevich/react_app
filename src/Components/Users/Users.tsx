import React from "react";
import styles from "./Users_Class_Component.module.css";
import UserPhoto from "../../assets/images/istockphoto.jpg";
import {initialUsersStateType} from "../State/users-reducer";
import {NavLink} from "react-router-dom";


type UsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    users: initialUsersStateType
    onPageChanged: (p: number) => void
}

export const Users: React.FC<UsersType> = props => {

    const {users, onPageChanged, follow, unfollow} = props

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
                        {u.followed
                            ?
                            <button onClick={() => {
                                unfollow(u.id)
                            }}>Unfollow</button>
                            :
                            <button onClick={() => {
                                follow(u.id)
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