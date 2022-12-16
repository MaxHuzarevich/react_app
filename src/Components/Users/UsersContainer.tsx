import React from "react";
import {Dispatch} from "redux";
import {
    followAC,
    initialUsersStateType,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    userTypeForUserReducer
} from "../State/users-reducer";
import {connect} from "react-redux";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";

type UsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<userTypeForUserReducer>) => void
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
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.currentPage}&count=${this.props.users.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUser(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.users.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUser(response.data.items)
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


type StateType = {
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

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<userTypeForUserReducer>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

let MapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage,
        pageSize: state.pageSize,
        totalUsersCount: state.totalUsersCount,
        currentPage: state.currentPage,
        isFetching: state.isFetching
    }
}

let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUser: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalUserCount) => {
            dispatch(setTotalUserCountAC(totalUserCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export const SuperUsersContainer = connect(MapStateToProps, MapDispatchToProps)(UsersContainer)
