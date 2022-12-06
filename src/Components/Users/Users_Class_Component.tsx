import React from "react";
import {initialUsersStateType, userTypeForUserReducer} from "../State/users-reducer";
import UserPhoto from "../../assets/images/istockphoto.jpg";
import axios from "axios";

type UsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<userTypeForUserReducer>) => void
    users: initialUsersStateType
}

export class Users_Class_Component extends React.Component<UsersType, any> {

    constructor(props: UsersType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUser(response.data.items)
        })

    }

    render() {
        return (
            <div>
                {
                    this.props.users.users.map(u => <div key={u.id} style={{margin: '5px'}}>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : UserPhoto} style={{width: '10%'}}
                                 alt={'avatar'}/>
                        </div>
                        <div>
                            {u.followed
                                ?
                                <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                :
                                <button onClick={() => {
                                    this.props.follow(u.id)
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
}
