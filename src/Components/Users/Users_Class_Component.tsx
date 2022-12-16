import React from "react";
import {initialUsersStateType, userTypeForUserReducer} from "../State/users-reducer";
import UserPhoto from "../../assets/images/istockphoto.jpg";
import axios from "axios";
import styles from './Users_Class_Component.module.css'

type UsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<userTypeForUserReducer>) => void
    users: initialUsersStateType
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCountUser: number) => void
}

export class Users_Class_Component extends React.Component<UsersType, any> {

    constructor(props: UsersType) {
        super(props);
    }

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.currentPage}&count=${this.props.users.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.users.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.users.totalUsersCount / this.props.users.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map((p,index) => {
                        return <span
                            key={index}
                            onClick={() => {
                                this.onPageChanged(p)
                            }}
                            className={this.props.users.currentPage === p ? styles.selectedPage : ''}>
                            {p}
                        </span>
                    })}
                </div>
                {
                    this.props.users.users.map(u => <div key={u.id} style={{margin: '5px'}}>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : UserPhoto} style={{width: '50px'}}
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
