import React from "react";
import {
    follow,
    initialUsersStateType,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../State/users-reducer";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {AppStateType} from "../State/redux-store";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../State/users-selectors";

type UsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    users: initialUsersStateType
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    followingInProgress: []
    getUsers: (currentPage: number, pageSize: number) => void
    currentPage: number
    pageSize: number
}

export class UsersContainer extends React.Component<UsersType, any> {

    constructor(props: UsersType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    followingInProgress={this.props.followingInProgress}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}

type MapStateToPropsType = {
    users: initialUsersStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: []
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export const SuperUsersContainer = compose<React.ComponentType>(connect(MapStateToProps, {
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsers: requestUsers
}))(UsersContainer)
