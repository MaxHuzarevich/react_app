import React from "react";
import {
    follow,
    initialUsersStateType,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    userTypeForUserReducer
} from "../State/users-reducer";
import {connect} from "react-redux";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";

type UsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userTypeForUserReducer>) => void
    users: initialUsersStateType
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCountUser: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

export class UsersContainer extends React.Component<UsersType, any> {

    constructor(props: UsersType) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.currentPage}&count=${this.props.users.pageSize}`,
            {withCredentials: true}
        )
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.users.pageSize}`,
            {withCredentials: true}
        )
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}


type StateUsersType = {
    usersPage: initialUsersStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

type MapStateToPropsType = {
    users: initialUsersStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

let MapStateToProps = (state: StateUsersType): MapStateToPropsType => {
    return {
        users: state.usersPage,
        pageSize: state.pageSize,
        totalUsersCount: state.totalUsersCount,
        currentPage: state.currentPage,
        isFetching: state.isFetching
    }
}

export const SuperUsersContainer = connect(MapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching
})(UsersContainer)
