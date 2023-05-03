import React, {useState} from "react";
import classes from "./Users.module.css";
import {initialUsersStateType} from "../State/users-reducer";

type PaginatorType = {
    users: initialUsersStateType
    onPageChanged: (p: number) => void
    portionSize: number
}

export const Paginator = ({users, onPageChanged, portionSize = 10}: PaginatorType) => {

    let pagesCount = Math.ceil(users.totalUsersCount / users.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={classes.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>left</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, index) => {
                    return <span
                        key={index}
                        onClick={() => {
                            onPageChanged(p)
                        }}
                        className={users.currentPage === p ? classes.selectedPage : ''}>
                            {p}
                        </span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>right</button>}
        </div>
    )
}