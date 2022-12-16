import React from "react";
import {Dispatch} from "redux";
import {
    followAC,
    initialUsersStateType,
    setCurrentPageAC, setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    userTypeForUserReducer
} from "../State/users-reducer";
import {connect} from "react-redux";
import {Users_Class_Component} from "./Users_Class_Component";

type StateType = {
    usersPage: initialUsersStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

type MapStateToPropsType = {
    users: initialUsersStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<userTypeForUserReducer>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalUserCount: number) => void
}

let MapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage,
        pageSize: state.pageSize,
        totalUsersCount: state.totalUsersCount,
        currentPage: state.currentPage
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
        }
    }
}

export const SuperUsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users_Class_Component)
