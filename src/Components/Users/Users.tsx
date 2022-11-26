import React from "react";
import {initialUsersStateType, userTypeForUserReducer} from "../State/users-reducer";

type UsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<userTypeForUserReducer>) => void
    users: initialUsersStateType
}

export const Users = ({users, setUser, follow, unfollow}: UsersType) => {
    if (users.users.length === 0) {
        setUser([
            {
                userID: 1,
                photoURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
                followed: true,
                fullName: 'Pitt',
                status: 'I like you',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                userID: 2,
                photoURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
                followed: false,
                fullName: 'Bob',
                status: 'I am senior mechanic',
                location: {city: 'London', country: 'England'}
            },
            {
                userID: 3,
                photoURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
                followed: true,
                fullName: 'Cris',
                status: 'I love bowling',
                location: {city: 'Mexico', country: 'Mexico'}
            },
            {
                userID: 4,
                photoURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
                followed: false,
                fullName: 'John',
                status: 'Just do it',
                location: {city: 'Brasilia', country: 'Brazil'}
            },
        ])
    }
    return (
        <div>
            {
                users.users.map(u => <div key={u.userID} style={{margin:'5px'}}>
                    <div>
                        <img src={u.photoURL} style={{width: '10%'}} alt={'avatar'}/>
                    </div>
                    <div>
                        {u.followed
                            ?
                            <button onClick={() => {
                                unfollow(u.userID)
                            }}>Unfollow</button>
                            :
                            <button onClick={() => {
                                follow(u.userID)
                            }}>Follow</button>
                        }
                    </div>
                    <div>
                        <h3>fullName: {u.fullName}</h3>
                        <span>{u.status}</span>
                        <ul>
                            <li>{u.location.city}</li>
                            <li>{u.location.country}</li>
                        </ul>
                    </div>
                </div>)
            }
        </div>
    )
}